/**
 * In-memory rate limiter — no external dependencies.
 *
 * Sliding window: tracks request counts per key (IP address) within a
 * fixed time window. Entries are pruned lazily to keep memory bounded.
 *
 * This is suitable for a single-process Node.js deployment (Vercel
 * serverless functions share nothing between instances, so this provides
 * per-instance rate limiting — good enough to blunt abuse and runaway costs).
 */

interface Entry {
  count: number;
  windowStart: number;
}

const store = new Map<string, Entry>();

/**
 * Check whether a key has exceeded the allowed request rate.
 *
 * @param key      - Rate limit key, typically the client IP address.
 * @param limit    - Maximum requests allowed within the window.
 * @param windowMs - Window duration in milliseconds.
 * @returns `{ allowed: boolean; remaining: number }`
 */
export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number,
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now - entry.windowStart > windowMs) {
    // New window
    store.set(key, { count: 1, windowStart: now });
    pruneStore(now, windowMs);
    return { allowed: true, remaining: limit - 1 };
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  return { allowed: true, remaining: limit - entry.count };
}

/** Remove entries whose window has expired to prevent unbounded growth. */
function pruneStore(now: number, windowMs: number): void {
  // Only prune occasionally to avoid O(n) on every request
  if (store.size < 500) return;
  for (const [key, entry] of store) {
    if (now - entry.windowStart > windowMs) {
      store.delete(key);
    }
  }
}

/** Extract the best available client IP from a Next.js Request. */
export function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}
