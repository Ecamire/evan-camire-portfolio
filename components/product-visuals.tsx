import {
  ArrowUpRight,
  Check,
  FileText,
  Layers3,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export function PriceChart({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={`price-chart ${compact ? "compact" : ""}`}
      viewBox="0 0 380 120"
      role="img"
      aria-label="Illustrative pricing trend using fictional data"
    >
      <defs>
        <linearGradient
          id={compact ? "chart-fill-small" : "chart-fill"}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#2449e8" stopOpacity=".15" />
          <stop offset="100%" stopColor="#2449e8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 28H380M0 65H380M0 102H380"
        stroke="#e5eaf4"
        strokeDasharray="3 5"
      />
      <path
        d="M0 96L35 88L70 92L105 65L140 68L175 54L210 62L245 28L280 35L315 18L350 22L380 10V120H0Z"
        fill={`url(#${compact ? "chart-fill-small" : "chart-fill"})`}
      />
      <path
        d="M0 96L35 88L70 92L105 65L140 68L175 54L210 62L245 28L280 35L315 18L350 22L380 10"
        stroke="#2449e8"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
      <circle
        cx="315"
        cy="18"
        r="5"
        fill="#2449e8"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  );
}

export function MarketingVisual({ hero = false }: { hero?: boolean }) {
  return (
    <div
      className={`marketing-visual ${hero ? "hero-document" : ""}`}
      aria-label="Illustrative marketing asset preview"
    >
      <div className="paper">
        <div className="paper-top">
          <span className="mini-logo">
            <Layers3 size={13} /> Field notes
          </span>
          <span>Sample newsletter</span>
        </div>
        <div className="landscape" aria-hidden="true">
          <svg viewBox="0 0 600 240" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="240" fill="#dbe9fb" />
            <circle cx="460" cy="65" r="32" fill="#fff5d4" />
            <path d="M0 170L140 40L320 230Z" fill="#7b9eca" />
            <path d="M75 240L310 40L530 240Z" fill="#456f9f" />
            <path d="M310 40L248 93L319 73L350 94Z" fill="#ecf4ff" />
            <path d="M340 240L510 120L620 210V240Z" fill="#264f79" />
            <path d="M0 205Q150 155 280 213T600 208V240H0Z" fill="#a7c7cb" />
            <path d="M0 218Q150 198 280 224T600 220V240H0Z" fill="#79a5b0" />
          </svg>
          <span>Somewhere worth going.</span>
        </div>
        <div className="paper-body">
          <div className="artifact-heading">
            A little further
            <br />
            from the everyday.
          </div>
          <p>
            A mountain escape. A thoughtful itinerary.
            <br />A trip made for good company.
          </p>
          <div className="paper-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span className="paper-cta">
            Explore the trip <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
      {!hero && (
        <div className="visual-approval">
          <ShieldCheck size={17} />
          <span>Ready for your review</span>
          <span className="tiny-check">
            <Check size={12} />
          </span>
        </div>
      )}
    </div>
  );
}

export function PricingVisual({ hero = false }: { hero?: boolean }) {
  return (
    <div
      className={`pricing-visual ${hero ? "hero-pricing" : ""}`}
      aria-label="Illustrative pricing recommendation preview"
    >
      <div className="visual-panel-top">
        <span>
          <TrendingUp size={15} /> Morning brief
        </span>
        <span className="sample-pill">Sample data</span>
      </div>
      <div className="price-summary">
        <div>
          <span className="small-muted">Harbor House · Weekend rate</span>
          <div className="visual-price">
            $224<span>/ night</span>
          </div>
        </div>
        <span className="change-pill">+12%</span>
      </div>
      <PriceChart compact={hero} />
      <div className="visual-reason">
        <span className="check-icon">
          <Check size={13} />
        </span>
        <span>Demand up. Within your limits.</span>
      </div>
      {!hero && (
        <div className="visual-price-footer">
          <span>$200 current</span>
          <span>
            Review proposal <ArrowUpRight size={13} />
          </span>
        </div>
      )}
    </div>
  );
}

export function HeroWorkspace() {
  return (
    <div className="hero-workspace">
      <div className="workspace-orbit orbit-one" aria-hidden="true" />
      <div className="workspace-orbit orbit-two" aria-hidden="true" />
      <div className="hero-context">
        <span className="context-icon">
          <Layers3 size={18} />
        </span>
        <div>
          <strong>Built around the business</strong>
          <span>Context, tools, and a clear next step</span>
        </div>
      </div>
      <MarketingVisual hero />
      <PricingVisual hero />
      <div className="hero-human">
        <span className="human-check">
          <ShieldCheck size={18} />
        </span>
        <span>Human judgment stays in the loop</span>
      </div>
      <div className="hero-visual-note">
        <Sparkles size={12} /> Illustrative product workflows
      </div>
    </div>
  );
}

export function OutputDocument({
  format,
  revised,
}: {
  format: "newsletter" | "itinerary" | "handout";
  revised: boolean;
}) {
  const title =
    format === "newsletter"
      ? "A weekend in the mountains"
      : format === "itinerary"
        ? "Your mountain weekend"
        : "Good company. Fresh air.";
  return (
    <article className={`output-document format-${format}`}>
      <div className="output-document-top">
        <span>
          <FileText size={14} />{" "}
          {format === "newsletter"
            ? "Newsletter"
            : format === "itinerary"
              ? "Trip itinerary"
              : "Marketing handout"}
        </span>
        <span>Version {revised ? "2" : "1"}</span>
      </div>
      <div className="output-landscape">
        <svg
          viewBox="0 0 600 150"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect width="600" height="150" fill="#dbe9fb" />
          <circle cx="475" cy="35" r="23" fill="#fff5d4" />
          <path d="M0 150L155 15L320 150Z" fill="#87a7ce" />
          <path d="M170 150L330 0L495 150Z" fill="#456f9f" />
          <path d="M330 0L296 32L330 20L355 33Z" fill="#f5f8fc" />
          <path d="M400 150L510 60L650 150Z" fill="#264f79" />
        </svg>
      </div>
      <div className="output-copy">
        <p className="output-brand">Field notes travel</p>
        <h3>{title}</h3>
        <p>
          {revised
            ? "Slow down, take in the mountain views, and enjoy a thoughtfully paced weekend with your group."
            : "Join us for a group mountain getaway with scenic stops, local meals, and time to explore."}
        </p>
        {format === "itinerary" ? (
          <div className="itinerary-days">
            <div>
              <strong>Friday</strong>
              <span>Arrive and settle in. Group welcome dinner.</span>
            </div>
            <div>
              <strong>Saturday</strong>
              <span>
                {revised
                  ? "Scenic drive and an easy lakeside stroll. Afternoon at your own pace."
                  : "Scenic drive, guided walk, and local lunch."}
              </span>
            </div>
            <div>
              <strong>Sunday</strong>
              <span>Breakfast together, then the journey home.</span>
            </div>
          </div>
        ) : (
          <>
            <div className="output-details">
              <span>
                <strong>3 days</strong>Friday to Sunday
              </span>
              <span>
                <strong>{revised ? "Easy pace" : "Group escape"}</strong>
                {revised ? "More time to enjoy" : "Travel together"}
              </span>
            </div>
            <p className="document-cta">Ask us for the trip details</p>
          </>
        )}
        {revised && (
          <p className="revision-note">
            <Check size={13} /> Updated for a relaxed pace and clearer next
            step.
          </p>
        )}
      </div>
    </article>
  );
}
