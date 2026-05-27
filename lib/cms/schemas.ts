import { z } from 'zod';

export const postFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z
    .union([z.string(), z.date()])
    .transform((v) => (v instanceof Date ? v.toISOString() : v))
    .refine((v) => !Number.isNaN(Date.parse(v)), {
      message: 'date must be ISO 8601 parseable',
    }),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  cover: z
    .object({
      src: z.string().min(1),
      alt: z.string().min(1, 'alt text is required'),
    })
    .optional(),
  cta: z
    .object({
      heading: z.string().min(1),
      body: z.string().min(1),
      label: z.string().min(1),
      href: z.string().default('/#contact'),
    })
    .optional(),
});

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;
