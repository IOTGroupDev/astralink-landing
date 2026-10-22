import { NextRequest, NextResponse } from "next/server";
import { validateWaitlist } from "@/lib/waitlist";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  // Next.js may expose the bind address (0.0.0.0) in nextUrl during local development.
  const host = request.headers.get("host");
  const allowedOrigins = [
    request.nextUrl.origin,
    host ? `${request.nextUrl.protocol}//${host}` : null,
    process.env.NEXT_PUBLIC_SITE_URL,
  ].filter(Boolean);
  if (origin && !allowedOrigins.includes(origin))
    return NextResponse.json(
      { ok: false, error: "This request is not allowed." },
      { status: 403 },
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json(
      { ok: false, error: "Expected a JSON request." },
      { status: 415 },
    );
  if (Number(request.headers.get("content-length")) > 8192)
    return NextResponse.json(
      { ok: false, error: "Please check your details." },
      { status: 413 },
    );
  let input: unknown;
  try {
    const body = await request.text();
    if (body.length > 8192)
      return NextResponse.json(
        { ok: false, error: "Please check your details." },
        { status: 413 },
      );
    input = JSON.parse(body);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Please check your details." },
      { status: 400 },
    );
  }
  const validated = validateWaitlist(input);
  if ("error" in validated)
    return NextResponse.json(
      { ok: false, error: validated.error },
      { status: 400 },
    );

  const endpoint = process.env.WAITLIST_ENDPOINT;
  if (!endpoint)
    return NextResponse.json(
      {
        ok: false,
        error: "Early access registration is available on our main site.",
      },
      { status: 503 },
    );
  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.WAITLIST_API_TOKEN
          ? { Authorization: `Bearer ${process.env.WAITLIST_API_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(validated.data),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
      redirect: "error",
    });
    const result = await upstream.json().catch(() => null);
    if (!upstream.ok || result?.ok !== true)
      throw new Error("Registration was not confirmed");
    return NextResponse.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong. Please try again in a minute.",
      },
      { status: 502 },
    );
  }
}
