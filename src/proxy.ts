import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Protects the agent builder API (/api/agents/run) with a server-side API key.
 * Set AGENTS_API_KEY in your environment. Requests must send the key in the
 * X-API-Key header.
 *
 * The public concierge endpoint (/api/chat, to be added) is intentionally
 * excluded — it is meant for site visitors.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/agents/")) {
    const apiKey = process.env.AGENTS_API_KEY;

    // If no key is configured, block all requests in production
    if (!apiKey) {
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json(
          { error: "API key not configured." },
          { status: 503 },
        );
      }
      // Allow through in development so the local agents UI still works
      return NextResponse.next();
    }

    const incoming = request.headers.get("x-api-key");
    if (incoming !== apiKey) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/agents/:path*"],
};
