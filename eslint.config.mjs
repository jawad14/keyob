import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const restrictTypographyRule = {
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'JSXOpeningElement[name.type="JSXIdentifier"][name.name=/^h[1-6]$/]',
        message:
          'Use <Heading level={n}> (or H1–H6) from @/components/ui/typography instead of raw <h1>–<h6>.',
      },
      {
        selector: 'JSXOpeningElement[name.type="JSXIdentifier"][name.name="p"]',
        message:
          'Use <Text> (or P/Lead/Muted/Small) from @/components/ui/typography instead of raw <p>.',
      },
    ],
  },
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Allow underscore-prefixed args/vars as the conventional "intentionally unused" signal.
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
    },
  },
  // Typography discipline: enforce the primitives over raw HTML in app/component code.
  {
    files: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
    ...restrictTypographyRule,
  },
  // Exceptions: global-error renders its own <html>/<body> outside the React tree,
  // and the typography primitives themselves render the underlying h1-h6/p tags.
  {
    files: ['app/global-error.tsx', 'components/ui/typography.tsx', 'components/seo/**/*.{ts,tsx}'],
    rules: { 'no-restricted-syntax': 'off' },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
