import { EMAIL, MAILTO, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 {site.name}. <span className="block sm:inline">{site.role}</span>
        </p>
        <a href={MAILTO} target="_blank" rel="noopener noreferrer" className="hover:text-volt">
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}
