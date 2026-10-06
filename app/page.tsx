import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  biography,
  cases,
  experiences,
  profile,
  socialLinks,
  writing,
  productTours,
} from "@/lib/content";
import { ProductVideo } from "@/components/product-video";

const socialIcons = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};
function SectionRule({ title, id }: { title: string; id?: string }) {
  return (
    <div className="editorial-rule">
      <h2 id={id}>{title}</h2>
      <Asterisk size={35} strokeWidth={1.1} aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="portfolio-home">
      <section
        className="personal-hero section-width"
        aria-labelledby="hero-title"
      >
        <div className="personal-hero-copy">
          <h1 id="hero-title">
            I build AI for real work
            <br />
            and real people<span className="blue-period">.</span>
          </h1>
          <p className="hero-description">{profile.introduction}</p>
          <div className="hero-actions">
            <Link className="button primary" href="#work">
              Explore my work <ArrowDown size={16} aria-hidden="true" />
            </Link>
            <Link className="button quiet" href="#contact">
              Get in touch <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="social-paper" aria-label="Social profiles">
            {socialLinks
              .filter((s) => s.kind !== "email")
              .map((s) => {
                const Icon = socialIcons[s.kind];
                return (
                  <a
                    key={s.kind}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${profile.name} on ${s.label}`}
                  >
                    <Icon size={23} strokeWidth={1.6} />
                    <span>{s.label}</span>
                  </a>
                );
              })}
          </div>
        </div>
        <figure className="hero-gallery" aria-label="Photos of Evan Camire">
          <div className="hero-gallery-grid">
            <a className="gallery-photo gallery-portrait" href="/images/evan-headshot.webp" target="_blank" rel="noopener noreferrer" aria-label="Open Evan’s portrait in full size">
            <Image
              src="/images/evan-headshot.webp"
              alt="Evan Camire"
              width={1100}
              height={1600}
              priority
              sizes="(max-width: 767px) 38vw, 18vw"
            />
            </a>
            <a className="gallery-photo gallery-conversation" href="/images/evan-conversation.webp" target="_blank" rel="noopener noreferrer" aria-label="Open photo of Evan at a table in full size">
              <Image src="/images/evan-conversation.webp" alt="Evan smiling while seated at a table" width={1600} height={1067} priority sizes="(max-width: 767px) 50vw, 23vw" />
            </a>
            <a className="gallery-photo gallery-outdoors" href="/images/evan-outdoors.webp" target="_blank" rel="noopener noreferrer" aria-label="Open outdoor group photo in full size">
              <Image src="/images/evan-outdoors.webp" alt="Evan with a group in an outdoor cold plunge" width={1600} height={1067} sizes="(max-width: 767px) 50vw, 23vw" />
            </a>
          </div>
          <figcaption>
            <span>{profile.name}</span>
            <span>Charleston, SC</span>
          </figcaption>
        </figure>
      </section>
      <section
        id="work"
        className="work-section section-width"
        aria-labelledby="work-title"
      >
        <SectionRule title="Selected work" id="work-title" />
        <p className="section-intro">Two products I took from client discovery to delivery. See them in action.</p>
        <div className="work-features">
          {cases.map((c, i) => (
            <article key={c.slug} className="work-feature">
              <div className="work-feature-copy">
                <p className="project-industry">0{i + 1} / {c.industry}</p>
                <h3><Link href={"/work/" + c.slug}>{c.name}</Link></h3>
                <p className="work-feature-description">{c.kind === "marketing"
                  ? "A short trip brief becomes a newsletter, itinerary, or handout. Revise it in the conversation, review the finished piece, and approve it."
                  : "Booking pace and demand signals become explained pricing proposals. The operator reviews the limits and decides what changes."}</p>
                <p className="work-feature-result">{c.result}</p>
                <Link className="case-link" href={"/work/" + c.slug}>Explore the full case study <ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
              <ProductVideo content={productTours[c.kind]} />
            </article>
          ))}
        </div>

      </section>
      <section
        id="experience"
        className="experience-section section-width"
        aria-labelledby="experience-title"
      >
        <SectionRule title="Experience" id="experience-title" />
        <div className="experience-layout">
          <div className="experience-introduction">
            <h3>
              Building the product.
              <br />
              Running the business.
            </h3>
            <p>
              Client work, startup teams, and a business of my own. Each has
              given me a different view of the work behind a useful product.
            </p>
            <a
              href="https://openhour.io/"
              className="case-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Openhour <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <ol className="experience-list">
            {experiences.map((e) => (
              <li key={e.company}>
                <div className="experience-meta">
                  <span>{e.dates}</span>
                  <span
                    className={
                      e.status === "Current" ? "experience-current" : ""
                    }
                  >
                    {e.status}
                  </span>
                </div>
                <h3>
                  {e.url ? (
                    <a href={e.url} target="_blank" rel="noopener noreferrer">
                      {e.company}
                      <ArrowUpRight size={19} aria-hidden="true" />
                    </a>
                  ) : (
                    e.company
                  )}
                </h3>
                <p className="experience-role">{e.role}</p>
                <p>{e.description}</p>
                <ul
                  className="experience-focus"
                  aria-label={`${e.company} areas of work`}
                >
                  {e.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        id="about"
        className="personal-about section-width"
        aria-labelledby="about-title"
      >
        <SectionRule title="About me" id="about-title" />
        <div className="personal-about-layout">
          <figure className="presentation-photo">
            <Image
              src="/images/evan-presenting.webp"
              alt="Evan presenting an AI workflow"
              width={1086}
              height={724}
              sizes="(max-width: 767px) 90vw, 44vw"
            />
            <figcaption>Presenting an AI workflow.</figcaption>
          </figure>
          <div className="personal-about-copy">
            <h3>{biography.title}</h3>
            {biography.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="education-note">{biography.education}</p>
          </div>
        </div>
      </section>
      <section
        id="writing"
        className="writing-section section-width"
        aria-labelledby="writing-title"
      >
        <SectionRule title="Writing" id="writing-title" />
        <div className="writing-layout">
          <div
            className="newsletter-cover"
            aria-label="Friday AI Brief newsletter"
          >
            <span className="newsletter-cover-name">
              Friday
              <br />
              AI Brief<span className="blue-period">.</span>
            </span>
            <div className="newsletter-cover-rule" />
            <span className="newsletter-cover-description">
              AI news, translated
              <br />
              for builders.
            </span>
            <ArrowUpRight size={42} strokeWidth={1.1} aria-hidden="true" />
          </div>
          <div className="writing-copy">
            <p className="writing-name">{writing.name}</p>
            <h3>{writing.title}</h3>
            <p>{writing.description}</p>
            <div className="writing-actions">
              <a
                className="button primary"
                href={writing.archive}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the archive <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                className="case-link"
                href={writing.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                View the agent code <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="contact-section section-width"
        aria-labelledby="contact-title"
      >
        <SectionRule title="Get in touch" id="contact-title" />
        <div className="contact-intro">
          <h3>
            Have something
            <br />
            in mind<span className="blue-period">?</span>
          </h3>
          <p>
            For a role, a client project, or a conversation about what you’re
            building, you can reach me here.
          </p>
        </div>
        <div className="contact-links">
          {socialLinks.map((s) => {
            const Icon = socialIcons[s.kind];
            return (
              <a
                key={s.kind}
                href={s.href}
                {...(s.kind === "email"
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
              >
                <span className="contact-label">
                  <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                  {s.label}
                </span>
                <span className="contact-detail">{s.detail}</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
