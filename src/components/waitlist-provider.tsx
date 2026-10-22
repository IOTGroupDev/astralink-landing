"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { validateWaitlist } from "@/lib/waitlist";
import { submitWaitlist } from "@/lib/waitlist-client";
import { BrandLogo } from "./brand-logo";
import { WaitlistForm } from "./waitlist-form";
import {
  WaitlistContext,
  type WaitlistValues,
  type WaitlistStep,
  type WaitlistStatus,
} from "./waitlist-context";

const emptyValues: WaitlistValues = {
  email: "",
  birth_date: "",
  first_name: "",
  gender: "",
  seeking: "",
  website: "",
  consent: false,
};

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState<WaitlistValues>(emptyValues);
  const [step, setStep] = useState<WaitlistStep>(0);
  const [status, setStatus] = useState<WaitlistStatus>("idle");
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const sending = useRef(false);

  // Keep links server-rendered and usable without JS; enhance only signup CTAs.
  useEffect(() => {
    const onSignupClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>(
        'a[href="#early-access"]',
      );
      if (!link || link.target === "_blank") return;
      event.preventDefault();
      opener.current = link;
      setModalOpen(true);
    };
    document.addEventListener("click", onSignupClick);
    return () => document.removeEventListener("click", onSignupClick);
  }, []);

  useEffect(() => {
    if (!modalOpen || !dialog.current) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!element.open) element.showModal();
    element
      .querySelector<HTMLElement>("[data-step-input], [data-step-heading]")
      ?.focus({ preventScroll: true });
    return () => {
      if (element.open) element.close();
      document.body.style.overflow = previousOverflow;
      opener.current?.focus({ preventScroll: true });
    };
  }, [modalOpen]);

  function update(patch: Partial<WaitlistValues>) {
    setValues((current) => ({ ...current, ...patch }));
    setError("");
    if (status === "error") setStatus("idle");
  }

  function goTo(next: WaitlistStep) {
    setStep(next);
    setError("");
    if (status === "error") setStatus("idle");
  }

  async function send() {
    if (sending.current) return;
    const validated = validateWaitlist(values);
    if ("error" in validated) {
      setError(validated.error);
      return;
    }
    sending.current = true;
    setStatus("sending");
    setError("");
    try {
      await submitWaitlist(values);
      setStatus("success");
      setValues(emptyValues);
    } catch (reason) {
      setStatus("error");
      setError(
        reason instanceof Error
          ? reason.message
          : "Something went wrong. Please try again in a minute.",
      );
    } finally {
      sending.current = false;
    }
  }

  return (
    <WaitlistContext.Provider
      value={{
        values,
        update,
        step,
        goTo,
        status,
        error,
        setError,
        send,
        modalOpen,
      }}
    >
      {children}
      <dialog
        ref={dialog}
        className="waitlist-dialog"
        aria-labelledby="waitlist-dialog-title"
        onCancel={() => setModalOpen(false)}
        onClose={() => setModalOpen(false)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            setModalOpen(false);
        }}
      >
        <div className="waitlist-dialog-header">
          <span className="waitlist-dialog-brand">
            <BrandLogo />
          </span>
          <button
            className="waitlist-dialog-close"
            type="button"
            aria-label="Close registration"
            onClick={() => setModalOpen(false)}
          >
            ×
          </button>
        </div>
        <h2 className="sr-only" id="waitlist-dialog-title">
          Join AstraLink early access
        </h2>
        {modalOpen && <WaitlistForm modal />}
      </dialog>
    </WaitlistContext.Provider>
  );
}
