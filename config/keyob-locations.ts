// Data for the Global Presence section — ported from global-presence.html.
// Coords are in the SVG viewBox 0 0 1000 520.

export type KeyobLocation = {
  key: string;
  name: string;
  short: string; // map tooltip title (e.g. "Dubai" vs full "Dubai, UAE")
  address: string;
  role: string;
  description: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  hq?: boolean;
};

export const keyobLocations: KeyobLocation[] = [
  {
    key: 'us',
    name: 'United States',
    short: 'United States',
    address: 'North America',
    role: 'Client engagement and growth support',
    description:
      'Consulting, strategic conversations, and support for businesses expanding their digital and operational capability.',
    x: 165,
    y: 150,
    labelX: 150,
    labelY: 126,
  },
  {
    key: 'se',
    name: 'Sweden',
    short: 'Sweden',
    address: 'Regional collaboration',
    role: 'European presence and partnerships',
    description:
      'Regional collaboration, business development, and client engagement across European opportunities.',
    x: 470,
    y: 84,
    labelX: 470,
    labelY: 60,
  },
  {
    key: 'pk',
    name: 'Pakistan',
    short: 'Pakistan',
    address: 'Delivery operations',
    role: 'Engineering, delivery, and support',
    description:
      'Software development, CRM, ERP, automation, integrations, dashboards, and ongoing technical support.',
    x: 772,
    y: 172,
    labelX: 788,
    labelY: 146,
  },
  {
    key: 'au',
    name: 'Australia',
    short: 'Australia',
    address: 'Springwood, Queensland',
    role: 'Client strategy, consulting, partnerships',
    description:
      'Local conversations, business discovery, AI assessment, and client relationship management.',
    x: 500,
    y: 262,
    labelX: 500,
    labelY: 226,
    hq: true,
  },
  {
    key: 'ae',
    name: 'Dubai',
    short: 'Dubai',
    address: 'Dubai, UAE',
    role: 'Middle East client engagement and partnerships',
    description:
      'Regional business conversations, digital transformation advisory, AI opportunity discovery, and partnership support across the UAE market.',
    x: 742,
    y: 366,
    labelX: 758,
    labelY: 400,
  },
  {
    key: 'sa',
    name: 'Kingdom of Saudi Arabia',
    short: 'Saudi Arabia',
    address: 'Saudi Arabia',
    role: 'Regional growth, consulting, and enterprise support',
    description:
      'Strategic engagement for businesses modernizing operations, customer systems, ERP workflows, automation, and AI-enabled business processes.',
    x: 300,
    y: 372,
    labelX: 288,
    labelY: 406,
  },
];

// Spokes: HQ → each non-HQ location. Used both for the visible lines and the
// pulse motion paths.
export type KeyobSpoke = { id: string; d: string; outDur: number; outBegin: number; inDur: number; inBegin: number };

const hq = keyobLocations.find((l) => l.hq);
export const keyobSpokes: KeyobSpoke[] = !hq
  ? []
  : keyobLocations
      .filter((l) => !l.hq)
      .map((l, i) => ({
        id: `gpSpoke-${l.key}`,
        d: `M${hq.x} ${hq.y} L${l.x} ${l.y}`,
        outDur: [3.6, 2.8, 3.0, 3.2, 2.6][i] ?? 3.0,
        outBegin: [0, 0.7, 1.3, 0.4, 1.8][i] ?? 0,
        inDur: [4.2, 3.4, 3.6, 3.8, 3.1][i] ?? 3.4,
        inBegin: [1.1, 2.0, 0.9, 2.4, 0.2][i] ?? 1.0,
      }));
