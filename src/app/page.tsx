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

      {/* SECTION 1 — PHILOSOPHY ANCHOR */}
      <section className="min-h-screen flex items-center justify-center py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-7xl text-white font-bold leading-tight uppercase tracking-tighter">
                Growth is noisy. <br />
                We make it decisive.
              </h2>
              <div className="space-y-6 text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                <p>
                  Markets overflow with hype, trends, and distractions. VirtuSol exists to cut through that chaos.
                </p>
                <p className="text-white font-bold">
                  We don't sell campaigns. We build certainty.
                </p>
                <p>
                  Every system we offer — Inflency, Connect 1to1, and the VirtuSol Decision Core — is an expression of one intelligence layer designed to filter, match, and activate with precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT VIRTUSOL IS */}
      <section className="min-h-screen flex items-center justify-center py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl space-y-12">
            <h2 className="text-4xl md:text-6xl text-white font-bold leading-tight uppercase tracking-tighter">
              Not an agency. Not a marketplace. <br />
              A decision system.
            </h2>
            <div className="space-y-8 text-xl md:text-2xl text-white/70 font-light leading-relaxed">
              <p>
                VirtuSol is built for founders and leaders who value precision over volume.
              </p>
              <div className="space-y-4 pl-8 border-l-2 border-white/10">
                <p className="text-white">
                  We don't flood you with options. <br />
                  We prevent wrong ones.
                </p>
                <p className="text-white">
                  We don't pitch generic growth tactics. <br />
                  We design curated pathways where every move is backed by verified signals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section className="min-h-screen flex items-center justify-center py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <div className="space-y-16">
              {[
                { label: "Filter", text: "Identify what matters. Discard what doesn't." },
                { label: "Decide", text: "Turn signals into logic-first systems." },
                { label: "Activate", text: "Execute only when certainty exists." }
              ].map((item, i) => (
                <div key={i} className="group border-b border-white/10 pb-8 hover:border-accent/40 transition-colors">
                  <span className="text-xs tracking-[0.3em] uppercase text-white/30 block mb-4">Step 0{i + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-accent transition-colors mb-4">
                    {item.label}
                  </h3>
                  <p className="text-xl md:text-2xl text-white/60 font-light">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY THIS EXISTS NOW */}
      <section className="min-h-screen flex items-center justify-center py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-7xl text-white font-bold leading-[0.9] uppercase tracking-tighter">
                AI multiplied output. <br />
                <span className="text-white/20">It did not multiply certainty.</span>
              </h2>
              <div className="space-y-8 text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                <p>
                  More tools. More creators. More dashboards. <br />
                  Yet decisions feel harder than ever.
                </p>
                <p className="text-white/40 italic pt-8">
                  VirtuSol exists to slow the moment before action — <br />
                  so everything after moves with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SERVICE BRIDGE */}
      <section className="min-h-screen flex items-center justify-center py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <p className="text-2xl md:text-4xl text-white/50 font-light leading-relaxed">
                Different expressions. <br />
                Same intelligence layer.
              </p>
              <p className="text-3xl md:text-5xl text-white font-bold uppercase tracking-tighter">
                Signals become systems — <br />
                and systems become outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABand
        title=""
        description=""
        primaryBtnText="Enter the Decision Protocol"
        primaryBtnLink="/contact"
        className="bg-transparent border-none text-white py-64"
      />
    </main>
  );
}
