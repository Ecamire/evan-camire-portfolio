"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  FileText,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { OutputDocument, PriceChart } from "./product-visuals";

type Format = "newsletter" | "itinerary" | "handout";
type MarketingStage = "brief" | "draft" | "revised" | "approved" | "held";

export function MarketingDemo() {
  const [format, setFormat] = useState<Format>("newsletter");
  const [stage, setStage] = useState<MarketingStage>("brief");
  const [revised, setRevised] = useState(false);
  const chooseFormat = (value: Format) => {
    setFormat(value);
    setStage("brief");
    setRevised(false);
  };
  const reset = () => {
    setStage("brief");
    setRevised(false);
  };
  const labels: Record<MarketingStage, string> = {
    brief: "Brief ready",
    draft: "Draft ready for review",
    revised: "Revision ready for review",
    approved: "Approved in this demo",
    held: "On hold in this demo",
  };
  return (
    <div className="demo marketing-demo">
      <div className="demo-toolbar">
        <span className="demo-title">
          <FileText size={17} /> Marketing workspace
        </span>
        <span className="demo-badge">Interactive demonstration</span>
      </div>
      <p className="demo-disclaimer">
        Fictional sample data and predetermined responses. This illustrates the
        workflow; it does not generate or send content.
      </p>
      <div className="demo-grid">
        <div className="demo-controls">
          <label className="control-label" htmlFor="marketing-format">
            Choose an asset
          </label>
          <select
            id="marketing-format"
            value={format}
            onChange={(e) => chooseFormat(e.target.value as Format)}
          >
            <option value="newsletter">Newsletter</option>
            <option value="itinerary">Trip itinerary</option>
            <option value="handout">Marketing handout</option>
          </select>
          <div className="sample-brief">
            <span className="control-label">The owner’s brief</span>
            <p>
              “Create a{" "}
              {format === "newsletter"
                ? "newsletter"
                : format === "itinerary"
                  ? "three-day itinerary"
                  : "marketing handout"}{" "}
              for a weekend mountain trip. Keep it friendly and invite people to
              ask for details.”
            </p>
          </div>
          <div className="context-list">
            <span className="control-label">Context the workflow carries</span>
            <span>
              <Check size={14} /> Business voice and audience
            </span>
            <span>
              <Check size={14} /> Trip details and asset format
            </span>
            <span>
              <Check size={14} /> Owner approval before delivery
            </span>
          </div>
          {stage === "brief" ? (
            <button
              className="button primary"
              onClick={() => setStage("draft")}
            >
              <Sparkles size={16} /> Build the sample draft
            </button>
          ) : (
            <div className="demo-actions">
              {(stage === "draft" || stage === "revised") && (
                <>
                  <button
                    className="button primary"
                    onClick={() => setStage("approved")}
                  >
                    <ShieldCheck size={16} /> Approve sample asset
                  </button>
                  {stage === "draft" && (
                    <button
                      className="button secondary"
                      onClick={() => {
                        setRevised(true);
                        setStage("revised");
                      }}
                    >
                      Revise for a relaxed pace
                    </button>
                  )}
                  <button
                    className="text-button"
                    onClick={() => setStage("held")}
                  >
                    Hold for later
                  </button>
                </>
              )}
              <button className="text-button reset-button" onClick={reset}>
                <RotateCcw size={13} /> Start again
              </button>
            </div>
          )}
          <div
            className={`demo-status status-${stage}`}
            role="status"
            aria-live="polite"
          >
            <span className="status-dot" />
            {labels[stage]}
          </div>
        </div>
        <div className="demo-output">
          {stage === "brief" ? (
            <div className="demo-empty">
              <div className="empty-document" aria-hidden="true">
                <FileText size={36} strokeWidth={1.3} />
                <span />
                <span />
                <span />
              </div>
              <h3>A clear brief. A consistent asset.</h3>
              <p>
                Build the sample draft to see how context becomes content, then
                revise or approve it.
              </p>
            </div>
          ) : (
            <>
              <OutputDocument format={format} revised={revised} />
              {stage === "approved" && (
                <div className="completion-note" role="status">
                  <CheckCircle2 size={19} />
                  <div>
                    <strong>Approval recorded in the demonstration.</strong>
                    <p>
                      In the product, approval permits the next delivery step.
                      This demo has no sending connection.
                    </p>
                  </div>
                </div>
              )}
              {stage === "held" && (
                <div className="completion-note hold-note" role="status">
                  <ShieldCheck size={19} />
                  <div>
                    <strong>The asset stays on hold.</strong>
                    <p>
                      The owner keeps control of the next step. No delivery is
                      permitted.
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="demo-bottom">
        <span>
          <span className="step-dot" /> Business context
        </span>
        <ArrowRight size={13} />
        <span>
          <span className="step-dot" /> Structured content
        </span>
        <ArrowRight size={13} />
        <span>
          <span className="step-dot" /> Render & review
        </span>
        <ArrowRight size={13} />
        <span>
          <span className="step-dot" /> Human approval
        </span>
      </div>
    </div>
  );
}

const scenarios = {
  weekend: {
    title: "Weekend demand",
    target: 224,
    proposed: 224,
    change: 12,
    explanation:
      "Booking pace and a fictional local event support a higher weekend rate. The proposal stays within the operator's configured limits.",
    event: "Local event",
    pace: "Above target",
    capped: false,
  },
  surge: {
    title: "Demand exceeds the move limit",
    target: 240,
    proposed: 230,
    change: 15,
    explanation:
      "The fictional demand signal suggests $240, a 20% increase. The pricing rule caps the proposal at $230, the maximum permitted 15% move.",
    event: "Strong demand",
    pace: "Above target",
    capped: true,
  },
  slow: {
    title: "Slower booking pace",
    target: 184,
    proposed: 184,
    change: -8,
    explanation:
      "A slower fictional booking pace supports a modest reduction. The proposal remains above the $180 minimum and within the configured move limit.",
    event: "Normal demand",
    pace: "Below target",
    capped: false,
  },
};

export function PricingDemo() {
  const [scenario, setScenario] = useState<keyof typeof scenarios>("weekend");
  const [status, setStatus] = useState<"review" | "approved" | "held">(
    "review",
  );
  const data = scenarios[scenario];
  return (
    <div className="demo pricing-demo">
      <div className="demo-toolbar">
        <span className="demo-title">
          <TrendingUp size={17} /> Pricing workspace
        </span>
        <span className="demo-badge">Interactive demonstration</span>
      </div>
      <p className="demo-disclaimer">
        Fictional property, prices, and demand signals. All actions are
        simulated; this does not connect to PriceLabs or change real prices.
      </p>
      <div className="demo-grid">
        <div className="demo-controls">
          <label className="control-label" htmlFor="pricing-scenario">
            Explore a scenario
          </label>
          <select
            id="pricing-scenario"
            value={scenario}
            onChange={(e) => {
              setScenario(e.target.value as keyof typeof scenarios);
              setStatus("review");
            }}
          >
            <option value="weekend">Weekend demand</option>
            <option value="surge">Demand exceeds the move limit</option>
            <option value="slow">Slower booking pace</option>
          </select>
          <div className="sample-brief">
            <span className="control-label">The operator’s rules</span>
            <div className="rules-list">
              <div>
                <span>Minimum rate</span>
                <strong>$180</strong>
              </div>
              <div>
                <span>Maximum rate</span>
                <strong>$300</strong>
              </div>
              <div>
                <span>Maximum single move</span>
                <strong>15%</strong>
              </div>
              <div>
                <span>Approval required</span>
                <strong>Yes</strong>
              </div>
            </div>
          </div>
          <div className="context-list">
            <span className="control-label">Inputs to the decision</span>
            <span>
              <Check size={14} /> Booking pace: {data.pace.toLowerCase()}
            </span>
            <span>
              <Check size={14} /> Demand: {data.event.toLowerCase()}
            </span>
            <span>
              <Check size={14} /> Current rate: $200 / night
            </span>
          </div>
          <p className="demo-control-note">
            Try the demand-limit scenario to see the rules constrain a
            recommendation.
          </p>
        </div>
        <div className="demo-output">
          <div className="proposal-card">
            <div className="proposal-head">
              <span className="property-monogram" aria-hidden="true">
                H
              </span>
              <div>
                <h3>Harbor House</h3>
                <span>Sample property · Weekend stay</span>
              </div>
              <span className="proposal-state">
                {status === "review"
                  ? "Needs review"
                  : status === "approved"
                    ? "Approved · demo"
                    : "On hold · demo"}
              </span>
            </div>
            <div className="proposal-prices">
              <div>
                <span>Current nightly rate</span>
                <strong>$200</strong>
              </div>
              <ArrowRight size={21} />
              <div>
                <span>Proposed nightly rate</span>
                <strong>${data.proposed}</strong>
              </div>
              <span
                className={`change-pill ${data.change < 0 ? "negative" : ""}`}
              >
                {data.change > 0 ? "+" : ""}
                {data.change}%
              </span>
            </div>
            <PriceChart />
            <div className="proposal-explanation">
              <span className="control-label">Why this change?</span>
              <p>{data.explanation}</p>
            </div>
            <div className={`constraint-note ${data.capped ? "capped" : ""}`}>
              <ShieldCheck size={17} />
              <span>
                {data.capped
                  ? "Move limit enforced: $240 requested, $230 permitted."
                  : "Within rate bounds and the 15% move limit."}
              </span>
            </div>
            {status === "review" ? (
              <div className="proposal-actions">
                <button
                  className="button primary"
                  onClick={() => setStatus("approved")}
                >
                  <Check size={16} /> Approve sample proposal
                </button>
                <button
                  className="button secondary"
                  onClick={() => setStatus("held")}
                >
                  Hold proposal
                </button>
              </div>
            ) : (
              <>
                <div
                  className={`completion-note ${status === "held" ? "hold-note" : ""}`}
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 size={20} />
                  <div>
                    <strong>
                      {status === "approved"
                        ? "Simulated override recorded."
                        : "Proposal placed on hold."}
                    </strong>
                    <p>
                      {status === "approved"
                        ? `Harbor House · $200 to $${data.proposed}. In the product, the approved override goes to PriceLabs and the action is logged.`
                        : "No override would be sent. The operator can revisit the decision later."}
                    </p>
                  </div>
                </div>
                <button
                  className="text-button reset-button"
                  onClick={() => setStatus("review")}
                >
                  <RotateCcw size={13} /> Review again
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="demo-bottom">
        <span>
          <span className="step-dot" /> Data & demand
        </span>
        <ArrowRight size={13} />
        <span>
          <span className="step-dot" /> Bounded proposal
        </span>
        <ArrowRight size={13} />
        <span>
          <span className="step-dot" /> Operator approval
        </span>
        <ArrowRight size={13} />
        <span>
          <span className="step-dot" /> Override & record
        </span>
      </div>
    </div>
  );
}
