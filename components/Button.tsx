import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
};

export default function Button({ href, children, variant = "solid", external }: Props) {
  const className = `inline-block rounded-sm px-5 py-2.5 text-sm font-semibold transition-colors ${
    variant === "solid"
      ? "bg-volt text-ink hover:bg-paper"
      : "border border-paper/40 text-paper hover:border-volt hover:text-volt"
  }`;

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
