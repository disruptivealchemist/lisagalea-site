/**
 * Environment variable validation.
 *
 * Imported at the top of route handlers and server actions that need
 * these values. Throws at module load time so a misconfigured deployment
 * fails immediately rather than at the moment a user hits an affected feature.
 *
 * Only import this in server-side code (route handlers, server actions, lib).
 * Never import in client components — it would expose values to the browser bundle.
 */

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}\n` +
      `Add it to .env.local (development) or your deployment environment (production).`,
    );
  }
  return value;
}

/**
 * Lazy getters — validation runs on first access (at request time),
 * not at module evaluation time. This allows Next.js to build without
 * env vars present while still throwing loudly if they're missing in production.
 */
export const env = {
  get OPENROUTER_API_KEY() { return requireEnv("OPENROUTER_API_KEY"); },
  get RESEND_API_KEY() { return requireEnv("RESEND_API_KEY"); },
};
