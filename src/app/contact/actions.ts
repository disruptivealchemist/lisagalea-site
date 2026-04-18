"use server";

import { Resend } from "resend";
import { env } from "@/lib/env";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";
  const interest = (formData.get("interest") as string | null)?.trim() ?? "";

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const resend = new Resend(env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Lisa Galea Website <noreply@lisagalea.com>",
    to: "curious@lisagalea.com",
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      interest ? `Interest: ${interest}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email curious@lisagalea.com directly.",
    };
  }

  // Also attempt to save to Firebase for backup/CRM access (non-blocking)
  // This is supplementary — if it fails, the email was still sent successfully
  try {
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://lisagalea.com";
    await fetch(`${siteUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, interest }),
    });
  } catch (err) {
    // Log but don't fail the form submission if Firebase isn't configured
    console.warn("Firebase save failed (non-critical):", err);
  }

  return { status: "success" };
}
