import "server-only";
import { siteConfig } from "@/config/site.config";
import { email } from "@/lib/email";
import { env } from "@/lib/env";
import type { Lead } from "./types";

/**
 * Emails a captured lead to KEYOB through the email facade (`lib/email`), so
 * the fork's configured provider — SMTP today — carries it.
 *
 * Returns 'skipped' when no recipient is configured. Throws when the provider
 * is configured but rejects the send, so `deliverLead` can tell an outage
 * apart from a destination that was never set up.
 */

const SUBJECTS: Record<Lead["source"], string> = {
  "contact-form": "New free AI assessment request",
};

/** Lead content is visitor-supplied, so it is escaped before it meets HTML. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function rows(lead: Lead): Array<[string, string]> {
  return [
    ["Name", lead.name],
    ["Organization", lead.organization],
    ["Email", lead.email],
    ["Industry", lead.industry || "—"],
    ["Team size", lead.teamSize || "—"],
    ["Came from", lead.referrer || "Direct / unknown"],
  ];
}

function renderText(lead: Lead): string {
  return [
    `${SUBJECTS[lead.source]} from the ${siteConfig.shortName} website`,
    "",
    ...rows(lead).map(([k, v]) => `${k}: ${v}`),
    "",
    "Where they would most like AI to help:",
    lead.challenge,
    "",
    `Reply to this email to reach ${lead.name} directly.`,
  ].join("\n");
}

function renderHtml(lead: Lead): string {
  return `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#0b1320;max-width:560px;">
      <h2 style="margin:0 0 12px;font-size:18px;">${escapeHtml(SUBJECTS[lead.source])}</h2>
      <p style="margin:0 0 16px;color:#475569;">From the ${escapeHtml(siteConfig.shortName)} contact form.</p>
      <table style="border-collapse:collapse;font-size:14px;width:100%;">
        ${rows(lead)
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 10px 6px 0;color:#64748b;width:130px;vertical-align:top;">${escapeHtml(k)}</td><td style="padding:6px 0;">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:20px 0 6px;font-size:14px;color:#64748b;">Where they&#39;d most like AI to help</h3>
      <p style="margin:0;white-space:pre-wrap;line-height:1.5;">${escapeHtml(lead.challenge)}</p>
      <p style="margin:20px 0 0;font-size:12px;color:#64748b;">Reply to this email to reach ${escapeHtml(lead.name)} directly.</p>
    </div>
  `;
}

export async function sendLeadEmail(lead: Lead): Promise<"sent" | "skipped"> {
  const to = env.EMAIL_TO ?? siteConfig.contact.email;
  if (!to) return "skipped";

  const result = await email.send({
    to,
    replyTo: lead.email,
    subject: `${SUBJECTS[lead.source]} — ${lead.name} (${lead.organization})`,
    text: renderText(lead),
    html: renderHtml(lead),
  });

  if (!result.ok) {
    // The facade returns this exact error when the fork has no provider wired
    // yet — that is "not configured", not an outage, so it must not count as
    // a failed destination in deliverLead.
    if (
      result.error === "email provider not configured" ||
      result.error === "smtp not configured"
    ) {
      return "skipped";
    }
    throw new Error(`Lead email failed: ${result.error}`);
  }

  return "sent";
}
