export interface Offer {
  id: string;
  tag: string;
  icon: string;
  title: string;
  description: string;
  duration: string;
  color: string;
  image?: string;
}

export const offers: Offer[] = [
  {
    id: "assessment",
    tag: "Baseline & Prioritise",
    icon: "CompassOutlined",
    title: "AI Readiness & Opportunity Assessment",
    description:
      "We take a good look at what data you have, who's on your team, and what tools you're using. Then we help you pick the AI projects that will actually improve your business.",
    duration: "3 weeks",
    color: "#00F5D4",
    image: "/images/TeamWork.png",
  },
  {
    id: "strategy",
    tag: "Plan for Scale",
    icon: "AuditOutlined",
    title: "AI Strategy & Roadmap",
    description:
      "We create a clear 12-month plan showing what you'll build, how you'll keep it safe and under control, and how to explain it to your leadership team.",
    duration: "4–6 weeks",
    color: "#00F5D4",
  },
  {
    id: "pilot",
    tag: "Deliver Fast",
    icon: "RocketOutlined",
    title: "Lighthouse Pilot Delivery",
    description:
      "A Lighthouse Pilot is a single, high-value use case taken from concept to live production — fully integrated, monitored, and governed — in 10 to 12 weeks. We connect it to your existing systems, set up monitoring, and ensure your team can operate it from day one.",
    duration: "10–12 weeks",
    color: "#00F5D4",
  },
  {
    id: "scale",
    tag: "Industrialise",
    icon: "SyncOutlined",
    title: "Scale & Industrialisation",
    description:
      "Once we prove something works, we help you apply those same successful approaches to other parts of your business. We create reusable tools and clear instructions so you can keep expanding.",
    duration: "3–6 months",
    color: "#00F5D4",
  },
  {
    id: "governance",
    tag: "Protect Value",
    icon: "SafetyOutlined",
    title: "AI Governance & Risk Advisory",
    description:
      "We help you set up the rules, safety measures, and controls for using AI responsibly right from the beginning. No trying to add security later.",
    duration: "4–8 weeks",
    color: "#00F5D4",
  },
  {
    id: "enablement",
    tag: "Upskill Teams",
    icon: "TeamOutlined",
    title: "Enablement & Capability Uplift",
    description:
      "Executive briefings, bootcamps and embedded coaching to make your team self-sufficient.",
    duration: "Ongoing",
    color: "#00F5D4",
  },
  {
    id: "managed",
    tag: "Operate Confidently",
    icon: "SettingOutlined",
    title: "Managed AI Services",
    description:
      "Ongoing MLOps, drift monitoring, incident response and quarterly optimisation cycles.",
    duration: "12-month terms",
    color: "#00F5D4",
  },
];

export const differentiators = [
  {
    title: "Human Approval Built-In",
    description:
      "Every AI action passes through a configurable human checkpoint before execution. Your team stays in control.",
    icon: "CheckCircleOutlined",
  },
  {
    title: "Zero Data Leakage",
    description:
      "Your ERP and CRM data never leaves your environment. We deploy agents inside your infrastructure.",
    icon: "LockOutlined",
  },
  {
    title: "IP Ownership & Transfer",
    description:
      "You receive models, code and playbooks with full documentation. No black-box dependencies.",
    icon: "ThunderboltOutlined",
  },
  {
    title: "Enterprise Governance",
    description:
      "Model risk, privacy, bias and vendor lock-in are built into delivery from day zero.",
    icon: "TeamOutlined",
  },
];
