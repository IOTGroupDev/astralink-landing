import assert from "node:assert/strict";
import test from "node:test";
import {
  validateBirthDate,
  validateEmail,
  validateWaitlist,
} from "../src/lib/waitlist.ts";

const now = new Date("2026-10-22T12:00:00Z");
const entry = {
  email: "test@example.com",
  birth_date: "2000-02-29",
  consent: "on",
};

test("step validation accepts core details before the final consent screen", () => {
  assert.equal(validateEmail("  test@example.com  "), null);
  assert.equal(validateBirthDate("2000-02-29", now), null);
  const final = validateWaitlist(
    { email: "test@example.com", birth_date: "2000-02-29" },
    now,
  );
  assert.ok("error" in final);
  assert.match(final.error, /privacy policy/);
});

test("step validation rejects email without a domain suffix and underage dates", () => {
  assert.ok(validateEmail("test@invalid"));
  assert.ok(validateBirthDate("2013-10-23", now));
  assert.equal(validateBirthDate("2013-10-22", now), null);
  assert.ok(validateBirthDate("2001-02-29", now));
});

test("valid input is normalized and only expected fields reach the backend", () => {
  const result = validateWaitlist(
    { ...entry, email: "  TEST@example.com  ", admin: true },
    now,
  );
  assert.ok("data" in result);
  assert.equal(result.data.email, "test@example.com");
  assert.equal(result.data.consent, true);
  assert.equal("admin" in result.data, false);
});

test("the thirteenth birthday is accepted, the day before it is rejected", () => {
  assert.ok(
    "data" in validateWaitlist({ ...entry, birth_date: "2013-10-22" }, now),
  );
  assert.ok(
    "error" in validateWaitlist({ ...entry, birth_date: "2013-10-23" }, now),
  );
});

test("invalid calendar dates, future dates, and dates outside the form range are rejected", () => {
  for (const date of [
    "2001-02-29",
    "2000-02-30",
    "2027-01-01",
    "1919-12-31",
    "2026-13-01",
    "garbage",
  ]) {
    assert.ok(
      "error" in validateWaitlist({ ...entry, birth_date: date }, now),
      date,
    );
  }
});

test("missing consent, malformed email, bot fields and invalid selections are rejected", () => {
  for (const change of [
    { consent: "" },
    { consent: false },
    { email: "test@" },
    { website: "bot.invalid" },
    { gender: "invalid" },
    { seeking: "invalid" },
    { first_name: "x".repeat(81) },
  ]) {
    assert.ok("error" in validateWaitlist({ ...entry, ...change }, now));
  }
  assert.ok("error" in validateWaitlist(null, now));
  assert.ok("error" in validateWaitlist([], now));
});
