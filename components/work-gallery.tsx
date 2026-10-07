"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { WorkGalleryContent } from "@/lib/content";

export function WorkGallery({ content, wide = false }: { content: WorkGalleryContent; wide?: boolean }) {
  const [index, setIndex] = useState(content.initialIndex);
  const id = useId();
  const tabs = useRef<HTMLDivElement>(null);
  const phase = content.phases[index];
  function navigate(event: KeyboardEvent<HTMLButtonElement>) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % content.phases.length;
    else if (event.key === "ArrowLeft") next = (index + content.phases.length - 1) % content.phases.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = content.phases.length - 1;
    else return;
    event.preventDefault();
    setIndex(next);
    tabs.current?.querySelectorAll<HTMLButtonElement>("button")[next]?.focus();
  }
  return (
    <div className="work-gallery">
      <div className="work-phase-tabs" ref={tabs} role="tablist" aria-label={`${content.title} interface stages`}>
        {content.phases.map((item, i) => (
          <button key={item.label} type="button" role="tab" id={`${id}-tab-${i}`} aria-controls={`${id}-panel`} aria-selected={index === i} tabIndex={index === i ? 0 : -1} onClick={() => setIndex(i)} onKeyDown={navigate}>
            {item.label}
          </button>
        ))}
      </div>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${index}`}>
        <a className="work-screen" href={phase.media.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${content.title} screenshot: ${phase.label}`}>
          <Image src={phase.media.src} alt={phase.media.alt} width={phase.media.width} height={phase.media.height} sizes={wide ? "100vw" : "(max-width: 767px) 100vw, 50vw"} />
        </a>
        <p className="work-phase-description">{phase.description}</p>
      </div>
    </div>
  );
}
