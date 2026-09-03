"use server";

import { z } from "zod";
import { deliverLead } from "@/lib/leads";
import { logger } from "@/lib/logger";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  organization: z.string().trim().min(1, "Organization is required").max(200),
  industry: z.string().trim().max(80).optional().or(z.literal("")),
  teamSize: z.string().trim().max(40).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(200),
  challenge: z.string().trim().min(1, "Please share a few sentences").max(5000),
  // Never rejects: a malformed or oversized referrer is worth dropping, not
  // worth failing a genuine submission over.
  referrer: z.string().trim().max(2000).catch(""),
  website: z.string().max(0).optional(),
});

export type ContactState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof contactSchema>, string>>;
};

export async function submitContact(
  _prev: ContactState | undefined,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    organization: formData.get("organization"),
    industry: formData.get("industry"),
    teamSize: formData.get("teamSize"),
    email: formData.get("email"),
    challenge: formData.get("challenge"),
    website: formData.get("website"),
    referrer: formData.get("referrer"),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as
        | keyof z.infer<typeof contactSchema>
        | undefined;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      ok: false,
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  const data = parsed.data;

  if (data.website && data.website.length > 0) {
    return { ok: true, message: "Thank you." };
  }

  try {
    await deliverLead({
      name: data.name,
      organization: data.organization,
      email: data.email,
      challenge: data.challenge,
      industry: data.industry || undefined,
      teamSize: data.teamSize || undefined,
      referrer: data.referrer || undefined,
      source: "contact-form",
    });
  } catch (error) {
    // The visitor filled the form in good faith and every destination rejected
    // it, so log the submission in full — it is recoverable from the log — then
    // tell them to email us rather than losing the lead silently.
    logger.error("contact form delivery failed", error, {
      ...data,
      website: undefined,
    });
    return {
      ok: false,
      message:
        "We could not send your message right now. Please email us directly.",
    };
  }

  return {
    ok: true,
    message: "Thank you. We'll be in touch within one business day.",
  };
}
