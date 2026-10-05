import { Check, Code2, Download } from "lucide-react";
import { evidence } from "@/lib/evidence";

export function CodeEvidence({ slug }: { slug: string }) {
  const item = evidence.find((item) => item.slug === slug)!;
  return (
    <section
      id="implementation"
      className="code-section section-width"
      aria-labelledby="implementation-title"
    >
      <div className="section-heading">
        <div>
          <p className="section-kicker">Implementation evidence</p>
          <h2 id="implementation-title">
            Inspect the code behind the workflow.
          </h2>
        </div>
        <p>
          Selected backend code from the client build. The full repository
          remains private.
        </p>
      </div>
      <div className="evidence-grid">
        <div className="evidence-explanation">
          <h3>{item.title}</h3>
          <p>{item.context}</p>
          <p>{item.decision}</p>
          <ul>
            {item.checks.map((check) => (
              <li key={check}>
                <Check size={15} aria-hidden="true" />
                {check}
              </li>
            ))}
          </ul>
          <p className="evidence-test-result">
            {item.testResult} · Verified October 3, 2026
          </p>
        </div>
        <div className="evidence-source">
          <details>
            <summary>
              <span>
                <Code2 size={17} aria-hidden="true" />
                {item.filename}
              </span>
              <span>View source</span>
            </summary>
            <pre tabIndex={0} aria-label={item.filename + " source excerpt"}>
              <code>{item.code}</code>
            </pre>
          </details>
          <p>{item.scope}</p>
          <div className="evidence-downloads">
            <a className="code-link" href={item.download} download>
              <Download size={15} aria-hidden="true" />
              Download this excerpt
            </a>
            <a
              className="code-link"
              href="/code/implementation-excerpts.zip"
              download
            >
              Both excerpts + notes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
