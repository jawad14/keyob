import "server-only";
import { logger } from "@/lib/logger";
import { sendLeadToAleesa } from "./aleesa";
import { sendLeadEmail } from "./email";
import type { Lead } from "./types";

/**
 * THE DESTINATION FOR CAPTURED LEADS.
 *
 * Every capture point routes through here, so there is one place to maintain.
 *
 * There are two deliveries and they are independent: email via the `lib/email`
 * facade, and the Aleesa CRM's Website Form intake. Both run, and either one
 * landing is enough to consider the lead captured — configuring only one is a
 * supported setup, and an outage in one must not cost a lead the other
 * accepted.
 *
 * With neither configured the lead is logged server-side so the flow is
 * testable end to end. Logs are not durable storage, so set EMAIL_TO (with an
 * SMTP provider) or ALEESA_WEBSITE_FORM_API_KEY before launch.
 *
 * Throws only when every configured destination rejected — the caller surfaces
 * that to the visitor rather than losing the lead silently.
 */
export async function deliverLead(lead: Lead): Promise<void> {
  // Settled rather than all: a rejected email must not skip the CRM write, and
  // vice versa. Both are awaited — a serverless function is frozen the moment
  // it responds, so a floating promise here would simply be dropped.
  const results = await Promise.allSettled([
    sendLeadEmail(lead),
    sendLeadToAleesa(lead),
  ]);

  const failures = results.filter((result) => result.status === "rejected");
  const sent = results.filter(
    (result) => result.status === "fulfilled" && result.value === "sent",
  );

  for (const failure of failures) {
    logger.error("lead delivery failed", failure.reason, {
      source: lead.source,
    });
  }

  if (failures.length > 0 && sent.length === 0) {
    throw failures[0].reason;
  }

  if (failures.length === 0 && sent.length === 0) {
    logger.warn("lead captured but no delivery destination is configured", {
      source: lead.source,
      name: lead.name,
      organization: lead.organization,
      email: lead.email,
      industry: lead.industry,
      teamSize: lead.teamSize,
      challenge: lead.challenge,
    });
  }
}

export type { Lead, LeadSource } from "./types";
