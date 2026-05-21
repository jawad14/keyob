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
});

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;
