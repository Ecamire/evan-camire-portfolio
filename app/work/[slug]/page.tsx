import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Layers3,
} from "lucide-react";
import { cases, ownership, productTours, workGalleries } from "@/lib/content";
import { ProductTour } from "@/components/product-tour";
import { ProductScreenshot } from "@/components/product-screenshot";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((c) => c.slug === slug);
  return {
    title: c?.name ?? "Case study",
    description: c?.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${c?.name} | Evan Camire`,
      description: c?.description,
      url: `/work/${slug}`,
      images: ["/social-preview.png"],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cases.find((c) => c.slug === slug);
  if (!c) notFound();
  const other = cases.find((other) => other.slug !== c.slug)!;
  return (
    <main id="main" tabIndex={-1} className={`case-page case-${c.kind}`}>
      <section className="case-hero section-width">
        <Link href="/#work" className="back-link">
          <ArrowLeft size={15} aria-hidden="true" /> All selected work
        </Link>
        <div className="case-hero-grid">
          <div>
            <p className="section-kicker">{c.name} · {c.industry}</p>
            <h1>{c.title}</h1>
            <p className="case-summary">{c.summary}</p>
            <a href="#demonstration" className="button primary">
              Explore the product tour{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className={`case-hero-visual stage-${c.kind}`}>
            <ProductScreenshot media={workGalleries[c.kind].phases[workGalleries[c.kind].initialIndex].media} />
          </div>
        </div>
        <div className="case-facts">
          <div>
            <span>My responsibility</span>
            <strong>End-to-end product ownership</strong>
          </div>
          <div>
            <span>Product</span>
            <strong>Custom AI workflow</strong>
          </div>
          <div>
            <span>Reported result</span>
            <strong>
              {c.metric} {c.metricContext}
            </strong>
            <small>Client-reported</small>
          </div>
        </div>
      </section>
      <div className="case-jump-bar">
        <nav className="section-width" aria-label="Case study sections">
          <a href="#problem">The problem</a>
          <a href="#decisions">Product decisions</a>
          <a href="#demonstration">Guided product tour</a>
          <a href="#architecture">Under the hood</a>
          <a href="#result">The result</a>
        </nav>
      </div>
      <section id="problem" className="case-section section-width two-column">
        <div>
          <p className="section-kicker">The problem</p>
          <h2>
            {c.kind === "marketing"
              ? "The work behind each marketing asset."
              : "The operator’s morning pricing routine."}
          </h2>
        </div>
        <div className="case-prose">
          {c.problem.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="before-after">
            <div>
              <span>Before</span>
              <p>{c.before}</p>
            </div>
            <div>
              <span>After</span>
              <p>{c.after}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="ownership-section section-width">
        <div>
          <p className="section-kicker">My contribution</p>
          <h2>I owned the whole build.</h2>
          <p>
            I handled client discovery, scoping, architecture, implementation,
            testing, evaluations, and delivery.
          </p>
        </div>
        <ul>
          {ownership.map((item) => (
            <li key={item}>
              <Check size={16} aria-hidden="true" /> {item}
            </li>
          ))}
        </ul>
      </section>
      <section id="decisions" className="case-section section-width">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Product decisions</p>
            <h2>
              {c.kind === "marketing"
                ? "Context, rendering, revisions, and approval."
                : "Data integrations, pricing limits, and a controlled write path."}
            </h2>
          </div>
          <p>
            More time invested in the surrounding system,
            <br />
            so the output becomes useful work.
          </p>
        </div>
        <div className="decision-grid">
          {c.decisions.map((d, i) => (
            <article className="decision" key={d.title}>
              <span className="decision-symbol" aria-hidden="true">
                {["◇", "⊞", "↗", "↺"][i]}
              </span>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="demonstration" className="demo-section">
        <div className="section-width">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Explore the workflow</p>
              <h2>
                {c.kind === "marketing"
                  ? "A short brief. A clear path to approval."
                  : "A recommendation with reasons and limits."}
              </h2>
            </div>
            <p>
              Follow captured interface states from a local sample environment. The controls below navigate screenshots; they do not operate either product.
            </p>
          </div>
          {c.kind === "marketing" && <div className="sample-output-links" aria-label="Full-size sample outputs">
            <p>Open the rendered sample outputs</p>
            <div>{["newsletter", "itinerary", "handout"].map((asset) => <a key={asset} href={`/images/products/trek-${asset}-full.jpg`} target="_blank" rel="noopener noreferrer">{asset[0].toUpperCase() + asset.slice(1)} <ArrowUpRight size={15} aria-hidden="true" /></a>)}</div>
            <small>Original renderers · Fictional content · Photography: NPS / Victoria Stauffenberg</small>
          </div>}
          <span id="implementation" />
          <ProductTour content={productTours[c.kind]} />
        </div>
      </section>
      <section id="architecture" className="case-section section-width">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Under the hood</p>
            <h2>
              {c.kind === "marketing"
                ? "From business context to an approved asset."
                : "From booking data to an approved override."}
            </h2>
          </div>
          <p>
            The business state lives in the application.
            <br />
            Model calls are part of a larger system.
          </p>
        </div>
        <ol className="architecture-flow">
          {c.architecture.map((step, i) => (
            <li key={step.name}>
              <span className="architecture-icon">
                <Layers3 size={19} aria-hidden="true" />
              </span>
              <h3>{step.name}</h3>
              <p>{step.description}</p>
              {i < c.architecture.length - 1 && (
                <ArrowRight
                  className="flow-arrow"
                  size={17}
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
        <div className="technical-note">
          <h3>A precise note on model flexibility</h3>
          <p>
            Model access is managed through dedicated code, while the
            application owns the workflow and business state. Both products
            currently use Anthropic-specific interfaces. Changing providers
            would require adapter and tool-interface changes, plus validation.
          </p>
        </div>
        <div
          className="technology-tags"
          aria-label="Technologies and technical capabilities"
        >
          {c.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>
      <section className="validation-section section-width">
        <div>
          <p className="section-kicker">Testing & evaluation</p>
          <h2>
            {c.kind === "marketing"
              ? "Check the draft, the state, and the approval."
              : "Check the inputs, the bounds, and the failure paths."}
          </h2>
        </div>
        <div className="validation-list">
          {c.validation.map((v) => (
            <article key={v.title}>
              <span className="check-icon">
                <Check size={14} aria-hidden="true" />
              </span>
              <div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="result" className="result-section section-width">
        <div className="result-number">
          <strong>{c.metric}</strong>
          <span>{c.metricContext}</span>
          <p>Client-reported</p>
        </div>
        <div className="result-copy">
          <p className="section-kicker">The result & the lesson</p>
          <h2>
            {c.kind === "marketing"
              ? "Less assembly work for every asset."
              : "A shorter morning pricing routine."}
          </h2>
          <p className="result-statement">{c.result}</p>
          <p className="measurement-note">
            Time savings reported directly by the client.
          </p>
          <p>{c.lesson}</p>
        </div>
      </section>
      <aside className="next-case section-width" aria-label="Next case study">
        <div>
          <p className="section-kicker">Another workflow, another problem</p>
          <Link href={`/work/${other.slug}`}>
            <h2>
              {other.name} <ArrowUpRight size={28} aria-hidden="true" />
            </h2>
          </Link>
          <p>{other.description}</p>
        </div>
        <Link className="button secondary" href={`/work/${other.slug}`}>
          Read the case study <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </aside>
    </main>
  );
}
