import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-card">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted">
        <p>
          © 2026 {site.name}. <span className="block sm:inline">{site.role}</span>
        </p>
      </div>
    </footer>
  );
}
