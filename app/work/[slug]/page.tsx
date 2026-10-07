import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowLeft,ArrowRight,ArrowUpRight} from "lucide-react";
import {cases,workGalleries,trekDemoUrl} from "@/lib/content";
import {WorkGallery} from "@/components/work-gallery";
import {TrekSamples} from "@/components/trek-samples";
export function generateStaticParams(){return cases.map(c=>({slug:c.slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const c=cases.find(c=>c.slug===slug);return {title:c?.name??"Case study",description:c?.summary,alternates:{canonical:`/work/${slug}`},openGraph:{title:`${c?.name} | Evan Camire`,description:c?.description,url:`/work/${slug}`,images:["/social-preview.png"]}};}
export default async function CaseStudyPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const c=cases.find(c=>c.slug===slug);if(!c)notFound();const marketing=c.kind==="marketing";const other=cases.find(x=>x.slug!==c.slug)!;
 return <main id="main" tabIndex={-1} className={`case-page case-${c.kind} focused-case`}>
  <section className="case-hero section-width">
   <Link href="/#work" className="back-link"><ArrowLeft size={15} aria-hidden="true"/> Selected work</Link>
   <p className="section-kicker">{c.industry}</p><h1>{c.name}</h1>
   <p className="case-summary">{marketing?"A short request becomes a newsletter, itinerary, or handout. I built the business context, agents, rendering, revisions, and approval workflow that make it possible.":"At 5 a.m. Eastern, the agent reviews booking pace and demand, then updates eligible listing prices in PriceLabs. The operator can ask why a price changed, review exceptions, and see the results."}</p>
   <div className="case-intro-bottom"><p className="case-result">{c.result}</p>{marketing?<a className="button primary" href={trekDemoUrl} target="_blank" rel="noopener noreferrer">Try the interactive demo <ArrowUpRight size={16} aria-hidden="true"/></a>:<a className="button primary" href="#demonstration">See the product <ArrowRight size={16} aria-hidden="true"/></a>}</div>
   {marketing&&<p className="demo-boundary">The demo runs separately with fictional data and prepared responses. No model calls or client-system access.</p>}
  </section>
  <nav className="case-jump-bar" aria-label="Case study sections"><div className="section-width"><a href="#demonstration">The product</a><a href="#problem">The problem</a><a href="#decisions">My decisions</a><a href="#architecture">How it works</a><a href="#result">The result</a></div></nav>
  <section id="demonstration" className="case-section section-width case-product">
   <div className="case-section-intro"><p className="section-kicker">The product</p><h2>{marketing?"Ask for the work. Review what comes back.":"Automatic pricing. A direct line to the agent."}</h2><p>{marketing?"The chat creates and revises assets. The library keeps the finished work accessible, with context and review controls.":"Reports track booking performance. Chat gives the operator a way to question the agent’s decisions and work through exceptions."}</p></div>
   <WorkGallery content={workGalleries[c.kind]} wide/>
   {marketing&&<div className="case-output-section"><div className="case-section-intro"><p className="section-kicker">Three different outputs</p><h2>Designed for the job at hand.</h2><p>Read complete sample documents here, or open the separate demo to try requests, revisions, and review.</p></div><TrekSamples/></div>}
   <span id="implementation"/>
  </section>
  <section id="problem" className="case-section section-width case-story-grid">
   <div><p className="section-kicker">The problem</p><h2>{marketing?"Writing was only part of the work.":"Pricing was taking over the morning."}</h2><p>{c.problem[0]}</p></div>
   <div className="case-ownership"><p className="section-kicker">My role</p><h3>Discovery through delivery</h3><p>I handled client discovery, scoping, architecture, implementation, testing, evaluation, and delivery.</p><div className="case-change"><span>Before</span><p>{c.before}</p><span>After</span><p>{c.after}</p></div></div>
  </section>
  <section id="decisions" className="case-section section-width">
   <div className="case-section-intro"><p className="section-kicker">My decisions</p><h2>{marketing?"Build the workflow around the model.":"Automate inside explicit limits."}</h2></div>
   <div className="case-decisions">{c.decisions.map((d,i)=><article key={d.title}><span className="decision-number">0{i+1}</span><div><h3>{d.title}</h3><p>{d.text}</p></div></article>)}</div>
  </section>
  <section id="architecture" className="case-section section-width">
   <div className="case-section-intro"><p className="section-kicker">How it works</p><h2>{marketing?"Business context stays with the work.":"From booking data to a recorded price change."}</h2></div>
   <ol className="case-system">{c.architecture.map((s,i)=><li key={s.name}><span>0{i+1}</span><h3>{s.name}</h3><p>{s.description}</p></li>)}</ol>
   <div className="case-technical-copy"><h3>Model flexibility</h3><p>The application owns the workflow and business state. Both products currently use Anthropic-specific interfaces. Replacing the provider would require adapter and tool-interface changes, plus validation.</p></div>
   <div className="technology-tags" aria-label="Technologies">{c.technologies.map(t=><span key={t}>{t}</span>)}</div>
   <div className="case-checks"><h3>What I test and evaluate</h3>{c.validation.map(v=><details key={v.title}><summary>{v.title}</summary><p>{v.text}</p></details>)}</div>
  </section>
  <section id="result" className="case-section section-width case-outcome"><p className="section-kicker">The result</p><h2>{c.metric} {c.metricContext}.</h2><p className="result-statement">{c.result}</p><p>{c.lesson}</p></section>
  <aside className="next-case section-width" aria-label="Next case study"><div><p className="section-kicker">More selected work</p><Link href={`/work/${other.slug}`}><h2>{other.name} <ArrowUpRight size={24} aria-hidden="true"/></h2></Link></div><Link className="button quiet" href="/#work">Back to selected work <ArrowRight size={16} aria-hidden="true"/></Link></aside>
 </main>;
}
