import type { ProductTourContent } from "@/lib/content";

export function ProductVideo({ content }: { content: ProductTourContent }) {
  return (
    <figure className="product-video">
      <div className="video-heading"><span>Watch the workflow</span><span>{content.video.duration} · Captioned</span></div>
      <video controls playsInline preload="none" poster={content.video.poster} aria-label={`${content.title} recorded sample walkthrough`}>
        <source src={content.video.src} type="video/mp4" />
        <track default kind="captions" src={content.video.captions} srcLang="en" label="English walkthrough captions" />
        Your browser does not support video. Read the walkthrough transcript below.
      </video>
      <figcaption>Actual product interface · Sample data · Recorded walkthrough</figcaption>
      <details className="video-transcript">
        <summary>Read the walkthrough</summary>
        <p>Edited captures of the original interface and renderers in a local sample environment. Conversations and outcomes use fictional fixtures; this recording does not run a live model or operate a client system.</p>
        <ol>{content.video.chapters.map((chapter) => <li key={chapter.title}><strong>{chapter.title}.</strong> {chapter.description}</li>)}</ol>
      </details>
    </figure>
  );
}
