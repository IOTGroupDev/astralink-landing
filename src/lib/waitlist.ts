export type WaitlistEntry = {
  email: string;
  birth_date: string;
  first_name: string;
  gender: string;
  seeking: string;
  consent: true;
  lang: "en";
  source_url: string;
};

export function validateWaitlist(
  input: unknown,
  now = new Date(),
): { data: WaitlistEntry } | { error: string } {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return { error: "Please check your details and try again." };
  const values = input as Record<string, unknown>;
  const read = (key: string) =>
    typeof values[key] === "string" ? (values[key] as string).trim() : "";
  if (read("website"))
    return { error: "Please check your details and try again." };
  const email = read("email").toLowerCase();
  if (email.length > 254 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    return { error: "Please enter a valid e-mail." };
  const birth_date = read("birth_date");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(birth_date))
    return { error: "Please add your birth date." };
  const birth = new Date(`${birth_date}T00:00:00.000Z`);
  if (
    Number.isNaN(birth.valueOf()) ||
    birth.toISOString().slice(0, 10) !== birth_date ||
    birth_date < "1920-01-01" ||
    birth > now
  )
    return { error: "Please enter a valid birth date." };
  let age = now.getUTCFullYear() - birth.getUTCFullYear();
  if (
    now.getUTCMonth() < birth.getUTCMonth() ||
    (now.getUTCMonth() === birth.getUTCMonth() &&
      now.getUTCDate() < birth.getUTCDate())
  )
    age--;
  if (age < 13)
    return {
      error:
        "You must be 13 or older to join. If you are under 13, please ask a parent or guardian to sign up for you.",
    };
  if (values.consent !== "on" && values.consent !== true)
    return { error: "Please accept the privacy policy." };
  const first_name = read("first_name");
  if (first_name.length > 80)
    return { error: "Please keep your first name under 80 characters." };
  const gender = read("gender");
  const seeking = read("seeking");
  if (
    !["", "woman", "man", "nonbinary", "other"].includes(gender) ||
    !["", "women", "men", "everyone"].includes(seeking)
  )
    return { error: "Please check your selections." };
  return {
    data: {
      email,
      birth_date,
      first_name,
      gender,
      seeking,
      consent: true,
      lang: "en",
      source_url: "/",
    },
  };
}
