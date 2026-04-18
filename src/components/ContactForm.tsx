"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "@/app/contact/actions";

const interests = [
  { value: "corporate", label: "Corporate" },
  { value: "one-to-one", label: "One to One" },
  { value: "workshops", label: "Workshops & Events" },
];

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="bauhaus-panel bg-gold p-10 text-center">
        <p className="font-heading text-2xl text-ink mb-3">Message received.</p>
        <p className="font-body text-sm text-ink/70">
          Lisa will be in touch soon. In the meantime, feel free to connect on{" "}
          <a
            href="https://www.linkedin.com/in/lisagalea/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-6">
      {/* Name */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block font-ui text-xs tracking-ui uppercase text-ink/60 mb-2">
            First Name <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="given-name"
            className="field"
            placeholder="Lisa"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block font-ui text-xs tracking-ui uppercase text-ink/60 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            autoComplete="family-name"
            className="field"
            placeholder="Galea"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-ui text-xs tracking-ui uppercase text-ink/60 mb-2">
          Email <span className="text-gold" aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="field"
          placeholder="curious@example.com"
        />
      </div>

      {/* Country / Timezone + Company */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="timezone" className="block font-ui text-xs tracking-ui uppercase text-ink/60 mb-2">
            Country / Timezone
          </label>
          <input
            type="text"
            id="timezone"
            name="timezone"
            className="field"
            placeholder="Australia / AEST"
          />
        </div>
        <div>
          <label htmlFor="company" className="block font-ui text-xs tracking-ui uppercase text-ink/60 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="organization"
            className="field"
            placeholder="Acme Inc."
          />
        </div>
      </div>

      {/* Interest */}
      <fieldset>
        <legend className="font-ui text-xs tracking-ui uppercase text-ink/60 mb-3">
          What are you interested in?
        </legend>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest) => (
            <label
              key={interest.value}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="interest"
                value={interest.value}
                className="sr-only"
              />
              <span className="px-4 py-2 rounded-pill border-2 border-ink/20 font-ui text-xs tracking-ui uppercase text-ink/60 group-has-[:checked]:border-gold group-has-[:checked]:text-ink group-has-[:checked]:bg-gold transition-colors duration-200 cursor-pointer">
                {interest.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-ui text-xs tracking-ui uppercase text-ink/60 mb-2">
          Message <span className="text-gold" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="field"
          placeholder="Tell me what you're working on or what you need..."
        />
      </div>

      {/* Error */}
      {state.status === "error" && (
        <p role="alert" className="font-body text-sm text-red-600">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn btn-filled disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
