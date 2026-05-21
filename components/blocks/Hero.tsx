import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Cluster, Container, Section, Stack } from '@/components/ui/layout';
import { Heading, Lead, Small } from '@/components/ui/typography';

export type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function Hero({ eyebrow, title, description, primaryCta, secondaryCta }: HeroProps) {
  return (
    <Section spacing="xl">
      <Container size="md">
        <Stack gap="lg" align="center" className="text-center">
          {eyebrow ? <Small className="tracking-wide uppercase">{eyebrow}</Small> : null}
          <Heading level={1} variant="display">
            {title}
          </Heading>
          <Lead className="max-w-2xl">{description}</Lead>
          {(primaryCta || secondaryCta) && (
            <Cluster gap="md" justify="center" className="mt-4">
              {primaryCta && (
                <Link href={primaryCta.href} className={buttonVariants({ size: 'lg' })}>
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className={buttonVariants({ variant: 'outline', size: 'lg' })}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </Cluster>
          )}
        </Stack>
      </Container>
    </Section>
  );
}
