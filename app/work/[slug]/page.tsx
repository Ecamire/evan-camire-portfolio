import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cases, caseBriefs, workGalleries, trekDemoUrl, radarDemoUrl } from "@/lib/content";
import { WorkGallery } from "@/components/work-gallery";
import { TrekSamples } from "@/components/trek-samples";

export function generateStaticParams() { return cases.map(c => ({ slug: c.slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find(c => c.slug === slug);
  const description = c ? caseBriefs[c.kind].introduction : "Case study";
  return { title: c?.name ?? "Case study", description, alternates: { canonical: `/work/${slug}` }, openGraph: { title: `${c?.name} | Evan Camire`, description, url: `/work/${slug}`, images: ["/social-preview.png"] } };
}
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = cases.find(c => c.slug === slug);
  if (!c) notFound();
  const marketing = c.kind === "marketing";
  const brief = caseBriefs[c.kind];
  const other = cases.find(x => x.slug !== c.slug)!;
  return <main id="main" tabIndex={-1} className={`case-page case-${c.kind} focused-case concise-case`}>
    <section className="case-hero section-width">
      <Link href="/#work" className="back-link"><ArrowLeft size={15} aria-hidden="true" /> Selected work</Link>
      <p className="section-kicker">{c.industry}</p><h1>{c.name}</h1>
      <p className="case-summary">{brief.introduction}</p>
      <div className="case-intro-bottom"><a className="button primary" href={marketing ? trekDemoUrl : radarDemoUrl} target="_blank" rel="noopener noreferrer">Try the interactive demo <ArrowUpRight size={16} aria-hidden="true" /></a><a className="case-link" href="#architecture">How I built it <ArrowRight size={16} aria-hidden="true" /></a></div>
      <p className="demo-boundary">{marketing ? "Saved agent-created outputs. Review actions stay in your browser." : "Actual interface and pricing-engine decisions. Fictional portfolio; chat explains a recorded sample run."}</p>
    </section>
    <section id="demonstration" className="case-section section-width case-product">
      <WorkGallery content={workGalleries[c.kind]} wide />
      {marketing && <details className="case-evidence"><summary>Explore three agent-created assets</summary><TrekSamples /></details>}
      <span id="implementation" />
    </section>
    <section id="problem" className="case-section section-width case-build-grid">
      <div className="case-why"><p className="section-kicker">Why I built it</p><h2>{marketing ? "Less time making materials. More time selling trips." : "Give the operator his morning back."}</h2><p>{brief.why}</p><p className="case-role"><strong>My role</strong><br />Client discovery, scoping, architecture, implementation, testing, evaluation, and delivery.</p></div>
      <div id="architecture"><span id="decisions" /><p className="section-kicker">How I built it</p><ol className="case-build-steps">{brief.build.map((step, i) => <li key={step.title}><span className="decision-number">0{i + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol><details className="case-engineering"><summary>Testing and technical decisions</summary><p>{brief.detail}</p><div className="technology-tags" aria-label="Technologies">{c.technologies.map(t => <span key={t}>{t}</span>)}</div></details></div>
    </section>
    <section id="result" className="case-section section-width case-value"><div><p className="section-kicker">The value</p><h2>{marketing ? "A few prompts to a finished asset." : "Morning pricing, handled."}</h2><p>{brief.value}</p></div><p className="case-result">{c.result}</p></section>
    <aside className="next-case section-width" aria-label="Next case study"><div><p className="section-kicker">More selected work</p><Link href={`/work/${other.slug}`}><h2>{other.name} <ArrowUpRight size={24} aria-hidden="true" /></h2></Link></div><Link className="button quiet" href="/#work">Back to selected work <ArrowRight size={16} aria-hidden="true" /></Link></aside>
  </main>;
}
