"use client";

import { HomeHero } from "@/components/sections/HomeHero";
import { CTABand } from "@/components/sections/CTABand";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ImmersiveValueProp({ title, subtitle, items }: { title: string, subtitle: string, items: string[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
        y: 100,
        opacity: 0,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center py-32 relative bg-transparent">
      <div ref={contentRef} className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-8xl font-bold tracking-[-0.04em] leading-[0.9] text-white uppercase mix-blend-exclusion">
              {title}
            </h2>
            <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-xl">
              {subtitle}
            </p>
          </div>
          <div className="space-y-12 pt-12 lg:pt-32">
            {items.map((item, i) => (
              <div key={i} className="group border-b border-white/10 pb-8 transition-colors hover:border-white/40">
                <span className="text-xs tracking-[0.3em] uppercase text-white/30 block mb-4">Phase 0{i + 1}</span>
                <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-accent transition-colors">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-transparent">
      <HomeHero />

      {/* ANCHOR SECTION – WHAT THIS IS */}
      <section className="py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl space-y-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">What This Is</span>
            <div className="space-y-8">
              <p className="text-3xl md:text-5xl text-white font-bold leading-tight">
                VirtuSol is a decision-intelligence company.
              </p>
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                We help founders, brands, and operators understand where to act, who to engage, and when to move—before execution begins.
              </p>
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                In an AI-saturated world, activity is cheap.<br />
                <span className="text-white font-bold">Judgment is not.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANCHOR SECTION – WHO THIS IS FOR */}
      <section className="py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">Who This Is For</span>
              <p className="text-3xl md:text-4xl text-white font-bold leading-tight">
                VirtuSol is built for:
              </p>
              <ul className="space-y-6 text-xl text-white/60 font-light">
                <li>• Brands unsure which partnerships are worth trust</li>
                <li>• Creators tired of trading credibility for short-term deals</li>
                <li>• Vendors pitching without knowing if demand actually exists</li>
                <li>• Leaders who want fewer moves—but better ones</li>
              </ul>
            </div>
            <div className="flex items-end">
              <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed italic border-l-2 border-accent pl-12">
                If speed is your priority, we are not a fit.<br />
                <span className="text-white font-bold non-italic">If clarity is your priority, we are.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANCHOR SECTION – WHY NOW */}
      <section className="py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl space-y-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">Why Now</span>
            <div className="space-y-8">
              <p className="text-3xl md:text-4xl text-white font-bold leading-tight">
                AI multiplied output.<br />
                It did not multiply certainty.
              </p>
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                More emails, more creators, more demos, more dashboards—<br />
                yet decisions feel harder than ever.
              </p>
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                VirtuSol exists to slow the moment before action,<br />
                so execution becomes inevitable instead of hopeful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title=""
        description=""
        primaryBtnText="Explore how our signal systems work →"
        primaryBtnLink="/services"
        className="bg-transparent border-none text-white py-64"
      />
    </main>
  );
}
