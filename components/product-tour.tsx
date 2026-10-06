"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, RotateCcw } from "lucide-react";
import type { ProductTourContent } from "@/lib/content";

export function ProductTour({ content }: { content: ProductTourContent }) {
  const [variantIndex, setVariantIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [held, setHeld] = useState(false);
  const variant = content.variants[variantIndex];
  const last = variant.steps.length - 1;
  const step = held && stepIndex === last ? variant.held : variant.steps[stepIndex];
  function reset() { setStepIndex(0); setHeld(false); }
  function showOutcome(isHeld: boolean) { setHeld(isHeld); setStepIndex(last); }
  return (
    <div className="product-tour" aria-label={`${content.title} guided screenshot tour`}>
      <div className="tour-header">
        <p className="tour-evidence-label">Actual product interface · Sample data · Guided walkthrough</p>
        <label className="tour-picker">
          <span>Choose an example</span>
          <select value={variantIndex} onChange={(e) => {setVariantIndex(Number(e.target.value)); reset();}}>
            {content.variants.map((v, i) => <option key={v.id} value={i}>{v.label}</option>)}
          </select>
        </label>
      </div>
      <p className="tour-scenario">{variant.description}</p>
      <ol className="tour-step-list" aria-label="Tour progress">
        {variant.steps.map((s, i) => <li key={s.id} aria-current={stepIndex === i ? "step" : undefined}><span>{i + 1}</span>{i === last && held ? "Held" : ({request:"Request",draft:"Draft",revision:"Revision",review:"Review",dashboard:"Dashboard",inputs:"Inputs",recommendation:"Recommendation",approved:"Outcome"} as Record<string,string>)[s.id]}</li>)}
      </ol>
      <figure className="tour-capture">
        <a href={step.media.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${step.title}`}>
          <Image src={step.media.src} alt={step.media.alt} width={step.media.width} height={step.media.height} sizes="(max-width: 767px) 100vw, 1100px" />
        </a>
        <figcaption><span>Captured state · {variant.label}</span><a href={step.media.src} target="_blank" rel="noopener noreferrer">Open full-size image <ArrowUpRight size={15} aria-hidden="true" /></a></figcaption>
      </figure>
      <div className="tour-step-copy" aria-live="polite" aria-atomic="true">
        <p className="tour-count">Step {stepIndex + 1} of {variant.steps.length}</p>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
      {stepIndex >= last - 1 && <div className="tour-branches" aria-label="View a captured decision outcome">
        <span>Explore the captured outcomes:</span>
        <button type="button" aria-pressed={stepIndex === last && !held} onClick={() => showOutcome(false)}>See approval</button>
        <button type="button" aria-pressed={stepIndex === last && held} onClick={() => showOutcome(true)}>See hold</button>
      </div>}
      <div className="tour-controls">
        <button type="button" className="button quiet" disabled={stepIndex === 0} onClick={() => setStepIndex(stepIndex - 1)}><ArrowLeft size={16} aria-hidden="true" />Previous</button>
        <button type="button" className="tour-reset" onClick={reset}><RotateCcw size={14} aria-hidden="true" />Start again</button>
        <button type="button" className="button primary" disabled={stepIndex === last} onClick={() => setStepIndex(stepIndex + 1)}>Next<ArrowRight size={16} aria-hidden="true" /></button>
      </div>
      <p className="tour-note">These are locally captured screenshots of the original interface, using fictional sample data. Tour controls navigate images only. Open a full-size image to read interface details.</p>
    </div>
  );
}
