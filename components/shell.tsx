import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Evan Camire home">
          Evan Camire<span className="blue-period">.</span>
        </Link>
        <nav aria-label="Main navigation">
          {["Work", "Experience", "About", "Writing", "Contact"].map(
            (label) => (
              <Link href={`/#${label.toLowerCase()}`} key={label}>
                {label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link href="/" className="footer-name">
          Evan Camire
        </Link>
        <p>{profile.location}</p>
      </div>
      <a href={profile.source} target="_blank" rel="noopener noreferrer">
        View portfolio source <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      <span className="footer-year">
        © {new Date().getFullYear()} Evan Camire
      </span>
    </footer>
  );
}
