// Small gray label that sits above each block (Career / Skills / Services on the reference site).
export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted">{children}</p>;
}
