"use client";

import { useEffect, useId, useRef, type FormEvent } from "react";
import { validateBirthDate, validateEmail } from "@/lib/waitlist";
import { useWaitlist, type WaitlistStep } from "./waitlist-context";
import { Arrow, Check } from "./icons";

const steps = ["Email", "Birth date", "Personalise", "Confirm"];
const titles = [
  "Your invitation starts here.",
  "When were you born?",
  "Personalise your preview.",
  "Ready to join?",
];
const descriptions = [
  "One email when your wave opens. No newsletter.",
  "Your birth date is the first piece of your chart.",
  "A little more about you. This step is optional.",
  "Check your details. We’ll email you when your wave opens.",
];

export function WaitlistForm({ modal = false }: { modal?: boolean }) {
  const {
    values,
    update,
    step,
    goTo,
    status,
    error,
    setError,
    send,
    modalOpen,
  } = useWaitlist();
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const previousStep = useRef(step);
  const busy = status === "sending";
  const errorId = `${id}-error`;

  useEffect(() => {
    const changed = previousStep.current !== step;
    previousStep.current = step;
    if (changed && modal === modalOpen) {
      formRef.current
        ?.querySelector<HTMLElement>("[data-step-input], [data-step-heading]")
        ?.focus({ preventScroll: true });
    }
  }, [step, modal, modalOpen]);

  function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const fields = new FormData(event.currentTarget);
    if (step === 0) {
      const email = String(fields.get("email") || "");
      const issue = validateEmail(email);
      if (issue) {
        setError(issue);
        return;
      }
      update({ email: email.trim() });
      goTo(1);
    } else if (step === 1) {
      const birthDate = String(fields.get("birth_date") || "");
      const issue = validateBirthDate(birthDate);
      if (issue) {
        setError(issue);
        return;
      }
      update({ birth_date: birthDate });
      goTo(2);
    } else if (step === 2) {
      goTo(3);
    } else {
      void send();
    }
  }

  if (status === "success")
    return (
      <div className="form-success" role="status">
        <span className="success-icon">
          <Check width="32" height="32" />
        </span>
        <h3>You’re on the list.</h3>
        <p>You will receive one email when your invitation is ready.</p>
      </div>
    );

  return (
    <form
      ref={formRef}
      className="waitlist-form"
      action="/api/waitlist"
      method="post"
      onSubmit={next}
      aria-label="Join AstraLink early access"
    >
      <div className="form-progress-label">
        <span>Early access</span>
        <span>Step {step + 1} of {steps.length}</span>
      </div>
      <ol className="form-steps" aria-label="Registration steps">
        {steps.map((label, index) => (
          <li
            key={label}
            className={index <= step ? "active" : ""}
            aria-current={index === step ? "step" : undefined}
          >
            <span className="sr-only">{label}</span>
          </li>
        ))}
      </ol>
      <div className="form-heading">
        <h3 data-step-heading tabIndex={-1}>
          {titles[step]}
        </h3>
        <p>{descriptions[step]}</p>
      </div>
      <fieldset className="form-fields" disabled={busy}>
        {step === 0 && (
          <div className="form-field">
            <label htmlFor={`${id}-email`}>
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id={`${id}-email`}
              data-step-input
              type="email"
              name="email"
              value={values.email}
              onChange={(event) => update({ email: event.target.value })}
              required
              autoComplete="email"
              maxLength={254}
              placeholder="you@example.com"
              aria-describedby={error ? errorId : undefined}
              aria-invalid={error ? true : undefined}
            />
          </div>
        )}
        {step === 1 && (
          <div className="form-field">
            <label htmlFor={`${id}-birth-date`}>
              Birth date <span aria-hidden="true">*</span>
            </label>
            <input
              id={`${id}-birth-date`}
              data-step-input
              type="date"
              name="birth_date"
              value={values.birth_date}
              onInput={(event) =>
                update({ birth_date: event.currentTarget.value })
              }
              onChange={(event) => update({ birth_date: event.target.value })}
              required
              min="1920-01-01"
              autoComplete="bday"
              aria-describedby={error ? errorId : undefined}
              aria-invalid={error ? true : undefined}
            />
          </div>
        )}
        {step === 2 && (
          <div className="form-optional-fields">
            <div className="form-field">
              <label htmlFor={`${id}-first-name`}>First name</label>
              <input
                id={`${id}-first-name`}
                type="text"
                name="first_name"
                value={values.first_name}
                onChange={(event) =>
                  update({ first_name: event.target.value })
                }
                maxLength={80}
                autoComplete="given-name"
                placeholder="Your name"
              />
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor={`${id}-gender`}>I am</label>
                <select
                  id={`${id}-gender`}
                  name="gender"
                  value={values.gender}
                  onChange={(event) =>
                    update({ gender: event.target.value })
                  }
                >
                  <option value="">Prefer not to say</option>
                  <option value="woman">Woman</option>
                  <option value="man">Man</option>
                  <option value="nonbinary">Non-binary</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor={`${id}-seeking`}>Looking for</label>
                <select
                  id={`${id}-seeking`}
                  name="seeking"
                  value={values.seeking}
                  onChange={(event) =>
                    update({ seeking: event.target.value })
                  }
                >
                  <option value="">Not sure yet</option>
                  <option value="women">Women</option>
                  <option value="men">Men</option>
                  <option value="everyone">Everyone</option>
                </select>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <>
            <dl className="form-review">
              <div>
                <div>
                  <dt>Email</dt>
                  <dd>{values.email}</dd>
                </div>
                <button
                  type="button"
                  onClick={() => goTo(0)}
                  aria-label="Edit email"
                >
                  Edit
                </button>
              </div>
              <div>
                <div>
                  <dt>Birth date</dt>
                  <dd>
                    {new Intl.DateTimeFormat("en-US", {
                      dateStyle: "medium",
                      timeZone: "UTC",
                    }).format(new Date(`${values.birth_date}T00:00:00Z`))}
                  </dd>
                </div>
                <button
                  type="button"
                  onClick={() => goTo(1)}
                  aria-label="Edit birth date"
                >
                  Edit
                </button>
              </div>
            </dl>
            <label className="consent">
              <input
                type="checkbox"
                name="consent"
                checked={values.consent}
                onChange={(event) => update({ consent: event.target.checked })}
                required
              />
              <span>
                I agree to receive early-access emails from AstraLink and accept
                the{" "}
                <a
                  href="https://www.astra-link.app/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                . Unsubscribe anytime.
              </span>
            </label>
          </>
        )}
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor={`${id}-website`}>Website</label>
          <input
            id={`${id}-website`}
            type="text"
            name="website"
            value={values.website}
            onChange={(event) => update({ website: event.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </fieldset>
      <div id={errorId} aria-live="polite" aria-atomic="true">
        {error && (
          <p className="form-error" role="alert">
            {error}
            {status === "error" && (
              <>
                {" "}
                <a href="https://www.astra-link.app/early-access/">
                  Join on astra-link.app <span aria-hidden="true">↗</span>
                </a>
              </>
            )}
          </p>
        )}
      </div>
      <div className="form-actions">
        {step > 0 && (
          <button
            className="form-back"
            type="button"
            disabled={busy}
            onClick={() => goTo((step - 1) as WaitlistStep)}
          >
            Back
          </button>
        )}
        <button
          className="button button-primary form-submit"
          type="submit"
          disabled={busy}
        >
          {busy ? "Sending…" : step === 3 ? "Join early access" : "Continue"}
          <Arrow />
        </button>
      </div>
      {step === 2 && (
        <button
          className="form-skip"
          type="button"
          disabled={busy}
          onClick={() => goTo(3)}
        >
          Skip for now
        </button>
      )}
      <p className="form-note">
        You must be 13 or older to join the waitlist. Chart-based dating and
        matching are for adults 18 and over.
      </p>
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
