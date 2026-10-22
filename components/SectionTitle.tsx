// Section heading: a compact green label so each block is clearly named without competing with its content.
export default function SectionTitle({
  children,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  as?: "h2" | "p";
}) {
  return (
    <Tag className="text-base font-semibold uppercase tracking-[0.14em] text-volt md:text-lg">{children}</Tag>
  );
}
