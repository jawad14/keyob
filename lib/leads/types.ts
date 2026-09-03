/** Where a lead came from, so each destination can label and route it. */
export type LeadSource = "contact-form";

export type Lead = {
  name: string;
  organization: string;
  email: string;
  challenge: string;
  source: LeadSource;
  /** Both optional: the form offers them as selects the visitor can skip. */
  industry?: string;
  teamSize?: string;
  /**
   * document.referrer when the form was submitted — the page that sent the
   * visitor here. Empty for direct visits and where the browser suppresses
   * it, so it is always optional.
   */
  referrer?: string;
};
