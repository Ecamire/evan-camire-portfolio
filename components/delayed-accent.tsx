"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function DelayedAccent({ children }: { children: ReactNode }) {
  const element = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = element.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return <span ref={element} className="delayed-accent" data-visible={visible ? "true" : undefined}>{children}</span>;
}
