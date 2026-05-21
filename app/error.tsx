'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Container, Section, Stack } from '@/components/ui/layout';
import { Heading, Muted } from '@/components/ui/typography';
import { logger } from '@/lib/logger/client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error('segment error boundary', error, { digest: error.digest });
  }, [error]);

  return (
    <Section as="main" spacing="xl" className="flex flex-1 items-center justify-center">
      <Container size="sm">
        <Stack gap="md" align="center" className="text-center">
          <Heading level={1} variant="h2">
            Something went wrong
          </Heading>
          <Muted>An unexpected error occurred. You can try again.</Muted>
          <Button onClick={reset}>Try again</Button>
        </Stack>
      </Container>
    </Section>
  );
}
