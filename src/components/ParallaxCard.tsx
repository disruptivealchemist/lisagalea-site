"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function ParallaxCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const screenCenter = window.innerHeight / 2;
      const distance = screenCenter - elementCenter;
      const progress = distance / window.innerHeight;
      setOffset(Math.max(-20, Math.min(20, progress * 40)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="rounded-[28px] bg-grey-light p-6">
      <div className="relative h-40 overflow-hidden rounded-[20px] mb-4 bg-grey-light">
        <Image
          src="/images/sanctuary-retreat.jpg"
          alt="Sanctuary in the Pocket retreat"
          fill
          className="object-cover"
          style={{ transform: `translateY(${offset}px)` }}
        />
      </div>
      <p className="bauhaus-kicker text-ink/55">Looking to Escape</p>
      <p className="mt-3 font-heading text-[1.5rem] uppercase leading-[0.95] tracking-[-0.04em] text-brand-black">
        Come Play in the Pocket
      </p>
      <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
        Only 25 mins from Gold Coast Airport &amp; Ballina Airport
      </p>
      <a
        href="https://sanctuaryinthepocket.com.au"
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-4 inline-block text-xs"
      >
        View Sanctuary
      </a>
    </div>
  );
}
