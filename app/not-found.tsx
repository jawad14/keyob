import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H1, Small, Text } from '@/components/ui/typography';

export default function NotFound() {
  return (
    <Section as="main" spacing="xl" className="flex flex-1 items-center justify-center">
      <Container size="sm">
        <Stack gap="md" align="center" className="text-center">
          <Small>404</Small>
          <H1>Page not found</H1>
          <Text variant="muted">The page you are looking for doesn&apos;t exist or has moved.</Text>
          <Link href="/" className={buttonVariants()}>
            Back home
          </Link>
        </Stack>
      </Container>
    </Section>
  );
}
