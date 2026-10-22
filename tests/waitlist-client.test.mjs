import assert from "node:assert/strict";
import test from "node:test";
import { submitWaitlist } from "../src/lib/waitlist-client.ts";

const values = {
  email: "qa@example.com",
  birth_date: "2000-02-29",
  first_name: "",
  gender: "",
  seeking: "",
  website: "",
  consent: true,
};

test("signup sends JSON to the local API and accepts an explicit confirmation", async () => {
  let calls = 0;
  await submitWaitlist(values, async (url, options) => {
    calls++;
    assert.equal(url, "/api/waitlist");
    assert.equal(options.method, "POST");
    assert.equal(options.headers["Content-Type"], "application/json");
    assert.deepEqual(JSON.parse(options.body), values);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  });
  assert.equal(calls, 1);
});

test("signup never reports success without both HTTP success and ok:true", async () => {
  for (const [status, body] of [
    [200, { ok: false }],
    [200, {}],
    [500, { ok: true }],
    [200, null],
  ]) {
    await assert.rejects(() =>
      submitWaitlist(
        values,
        async () => new Response(JSON.stringify(body), { status }),
      ),
    );
  }
  await assert.rejects(() =>
    submitWaitlist(
      values,
      async () => new Response("Invalid JSON", { status: 200 }),
    ),
  );
});

test("signup preserves the API error when the registration backend is unavailable", async () => {
  await assert.rejects(
    () =>
      submitWaitlist(
        values,
        async () =>
          new Response(
            JSON.stringify({
              ok: false,
              error: "Early access registration is available on our main site.",
            }),
            { status: 503 },
          ),
      ),
    /Early access registration is available on our main site/,
  );
});
