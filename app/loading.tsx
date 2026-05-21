export default function Loading() {
  return (
    <main
      role="status"
      aria-live="polite"
      className="flex flex-1 items-center justify-center px-6 py-24"
    >
      <span className="sr-only">Loading…</span>
      <div className="border-muted-foreground/30 border-t-foreground h-8 w-8 animate-spin rounded-full border-2" />
    </main>
  );
}
