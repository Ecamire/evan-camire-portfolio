"use client";
import {useId,useRef,useState,type KeyboardEvent} from "react";
import {trekSamples} from "@/lib/content";

export function TrekSamples(){
 const [index,setIndex]=useState(0);const id=useId();const tabs=useRef<HTMLDivElement>(null);const sample=trekSamples[index];
 function navigate(e:KeyboardEvent<HTMLButtonElement>){let next=index;if(e.key==="ArrowRight")next=(index+1)%trekSamples.length;else if(e.key==="ArrowLeft")next=(index+trekSamples.length-1)%trekSamples.length;else if(e.key==="Home")next=0;else if(e.key==="End")next=trekSamples.length-1;else return;e.preventDefault();setIndex(next);tabs.current?.querySelectorAll<HTMLButtonElement>("button")[next]?.focus();}
 return <div className="trek-samples">
  <div className="sample-tabs" ref={tabs} role="tablist" aria-label="Sample product outputs">{trekSamples.map((s,i)=><button key={s.kind} role="tab" id={`${id}-tab-${i}`} aria-controls={`${id}-panel`} aria-selected={i===index} tabIndex={i===index?0:-1} onClick={()=>setIndex(i)} onKeyDown={navigate}>{s.label}</button>)}</div>
  <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${index}`} className="sample-layout">
   <div className="sample-context"><p className="section-kicker">{sample.label}</p><h3>{sample.title}</h3><p>{sample.description}</p><blockquote>{sample.request}</blockquote><a className="case-link" href={sample.src} target="_blank" rel="noopener noreferrer">Open the {sample.kind} ↗</a><p className="sample-note">Fictional content rendered with the product’s actual layout code. Photos: NPS / Victoria Stauffenberg.</p></div>
   <iframe key={sample.kind} src={sample.src} title={`${sample.label}: ${sample.title}`} loading="lazy" sandbox="allow-scripts" className="sample-document" />
  </div>
 </div>;
}
