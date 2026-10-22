"use client";

import { useState, type FormEvent } from "react";
import { Arrow, Check } from "./icons";

export function WaitlistForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setState("sending");
    setMessage("");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      const result = await response.json();
      if (!response.ok || !result.ok)
        throw new Error(
          result.error || "Something went wrong. Please try again in a minute.",
        );
      setState("success");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again in a minute.",
      );
    }
  }

  if (state === "success")
    return (
      <div className="form-success" role="status">
        <span className="success-icon">
          <Check width="32" height="32" />
        </span>
        <h3>You’re on the list.</h3>
        <p>You will receive one email when your invitation is ready.</p>
        <p>Your preview · App invite</p>
      </div>
    );

  return (
    <form
      className="waitlist-form"
      action="/api/waitlist"
      method="post"
      onSubmit={submit}
      aria-label="Join AstraLink early access"
    >
      <ol className="form-steps" aria-label="Steps">
        <li className="active">
          <span>1</span>Join
        </li>
        <li>
          <span>2</span>Your preview
        </li>
        <li>
          <span>3</span>App invite
        </li>
      </ol>
      <div className="form-field">
        <label htmlFor="email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          maxLength={254}
          placeholder="you@example.com"
        />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="birth-date">
            Birth date <span aria-hidden="true">*</span>
          </label>
          <input
            id="birth-date"
            type="date"
            name="birth_date"
            required
            min="1920-01-01"
          />
        </div>
        <div className="form-field">
          <label htmlFor="first-name">First name</label>
          <input
            id="first-name"
            type="text"
            name="first_name"
            maxLength={80}
            autoComplete="given-name"
            placeholder="Your name"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="gender">I am</label>
          <select id="gender" name="gender" defaultValue="">
            <option value="">Prefer not to say</option>
            <option value="woman">Woman</option>
            <option value="man">Man</option>
            <option value="nonbinary">Non-binary</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="seeking">Looking for</label>
          <select id="seeking" name="seeking" defaultValue="">
            <option value="">Not sure yet</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="everyone">Everyone</option>
          </select>
        </div>
      </div>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>
          I agree to receive early-access emails from AstraLink and accept the{" "}
          <a href="https://www.astra-link.app/privacy/">Privacy Policy</a>.
          Unsubscribe anytime.
        </span>
      </label>
      <button
        className="button button-primary form-submit"
        type="submit"
        disabled={state === "sending"}
      >
        {state === "sending" ? "Sending…" : "Join early access"}
        <Arrow diagonal />
      </button>
      <p className="form-note">
        You must be 13 or older to join the waitlist. Chart-based dating and
        matching are for adults 18 and over.
      </p>
      <div aria-live="polite" aria-atomic="true">
        {state === "error" && (
          <p className="form-error" role="alert">
            {message}{" "}
            <a href="https://www.astra-link.app/early-access/">
              Join on astra-link.app <span aria-hidden="true">↗</span>
            </a>
          </p>
        )}
      </div>
      <noscript>
        <p className="form-error">
          Please{" "}
          <a href="https://www.astra-link.app/early-access/">
            join early access on astra-link.app
          </a>
          .
        </p>
      </noscript>
    </form>
  );
}
