import Link from 'next/link';
import { Cluster, Container } from '@/components/ui/layout';
import { siteConfig } from '@/config/site.config';

export function Header() {
  return (
    <header className="border-border/60 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <Container size="lg" className="flex h-14 items-center justify-between">
        <Link href="/" className="text-foreground text-base font-semibold tracking-tight">
          {siteConfig.shortName}
        </Link>
        <Cluster as="nav" aria-label="Primary" gap="lg" className="hidden text-sm md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </Cluster>
      </Container>
    </header>
  );
}
