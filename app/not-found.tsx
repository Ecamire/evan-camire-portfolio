import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="not-found">
      <p>Page not found</p>
      <h1>Let’s get you back to the work.</h1>
      <Link className="button primary" href="/">
        Return to the portfolio
      </Link>
    </main>
  );
}
