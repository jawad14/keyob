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
};
