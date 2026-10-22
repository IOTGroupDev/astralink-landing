"use client";

import { createContext, useContext } from "react";

export type WaitlistValues = {
  email: string;
  birth_date: string;
  first_name: string;
  gender: string;
  seeking: string;
  website: string;
  consent: boolean;
};
export type WaitlistStep = 0 | 1 | 2 | 3;
export type WaitlistStatus = "idle" | "sending" | "success" | "error";

export const WaitlistContext = createContext<{
  values: WaitlistValues;
  update: (patch: Partial<WaitlistValues>) => void;
  step: WaitlistStep;
  goTo: (step: WaitlistStep) => void;
  status: WaitlistStatus;
  error: string;
  setError: (message: string) => void;
  send: () => Promise<void>;
  modalOpen: boolean;
} | null>(null);

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (!context) throw new Error("WaitlistForm requires WaitlistProvider");
  return context;
}
