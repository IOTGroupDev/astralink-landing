import type { WaitlistValues } from "../components/waitlist-context";

const fallback = "Something went wrong. Please try again in a minute.";

export async function submitWaitlist(
  values: WaitlistValues,
  request: typeof fetch = fetch,
): Promise<void> {
  const response = await request("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || result?.ok !== true) {
    throw new Error(
      typeof result?.error === "string" ? result.error : fallback,
    );
  }
}
