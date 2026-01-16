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

      {/* 1. WHAT THIS IS – Compact Section */}
      <section className="min-h-screen flex items-center justify-center py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl space-y-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">What This Is</span>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl text-white font-bold leading-tight uppercase tracking-tighter">
                VirtuSol is a <br /> decision-intelligence company.
              </h2>
              <div className="space-y-6 text-xl md:text-3xl text-white/70 font-light leading-relaxed">
                <p>
                  We work with founders, brands, creators, vendors, and operators <br />
                  <span className="text-white font-bold">before execution begins —</span>
                </p>
                <p>
                  when the cost of a wrong decision is still avoidable.
                </p>
                <p className="text-white/40 pt-4 md:pt-8 italic">
                  In an AI-saturated world, action is cheap. <br />
                  Judgment is not.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHEN RELEVANT – Headline + Bullet Reveal */}
      <section className="min-h-screen flex items-center justify-center py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-12">When It Matters</span>
            <h2 className="text-4xl md:text-5xl text-white font-bold leading-tight mb-24 uppercase tracking-tighter">
              VirtuSol is not for teams asking <br />
              <span className="text-accent underline underline-offset-8">“How do we do more?”</span>
            </h2>
            <div className="space-y-12">
              <p className="text-2xl text-white/30 uppercase tracking-widest font-bold">It is for teams asking:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <p className="text-2xl md:text-3xl font-light text-white/80 border-l border-white/10 pl-8 py-4">Who should we actually engage?</p>
                <p className="text-2xl md:text-3xl font-light text-white/80 border-l border-white/10 pl-8 py-4">Does demand exist — or are we guessing?</p>
                <p className="text-2xl md:text-3xl font-light text-white/80 border-l border-white/10 pl-8 py-4">Is this the right moment to activate?</p>
                <p className="text-2xl md:text-3xl font-light text-white/80 border-l border-white/10 pl-8 py-4">What should we not do next?</p>
              </div>
            </div>
            <div className="mt-32 pt-12 border-t border-white/5">
              <p className="text-xl md:text-2xl text-white/40 italic">
                If speed is your priority, we are not a fit. <br />
                <span className="text-white font-bold not-italic">If clarity is your priority, we are.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO THIS IS FOR – Staggered Reveal */}
      <section className="min-h-screen flex items-center justify-center py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">The Match</span>
              <h2 className="text-4xl md:text-6xl text-white font-bold leading-tight uppercase tracking-tighter">
                Built for people <br /> already in motion.
              </h2>
              <p className="text-xl text-white/40 max-w-md">
                Aware that momentum alone is dangerous.
              </p>
            </div>
            <div className="space-y-12 lg:pt-24">
              {[
                "Brands unsure which partnerships deserve trust",
                "Creators tired of trading credibility for short-term deals",
                "Vendors pitching without knowing if demand exists",
                "Retailers filtering noise to find real opportunity",
                "Leaders who want fewer moves — but better ones"
              ].map((item, i) => (
                <div key={i} className="group border-b border-white/10 pb-8 hover:border-accent/40 transition-colors">
                  <p className="text-xl md:text-2xl text-white/70 group-hover:text-white transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE CORE PROBLEM – Focused Block */}
      <section className="min-h-screen flex items-center justify-center py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">The Core Problem</span>
            <h2 className="text-4xl md:text-7xl text-white font-bold leading-[0.9] uppercase tracking-tighter">
              AI multiplied output. <br />
              <span className="text-white/20">It did not multiply certainty.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-24">
              <p>More Emails</p>
              <p>More Creators</p>
              <p>More Demos</p>
              <p>More Dashboards</p>
            </div>
            <div className="space-y-12 text-2xl md:text-3xl font-light leading-relaxed text-white/70">
              <p>Yet decisions feel harder than ever.</p>
              <p>
                Most growth fails not because of execution — <br />
                <span className="text-white font-bold">but because the wrong choice was locked in too early.</span>
              </p>
              <p className="text-xl md:text-2xl text-white/40 italic pt-12">
                VirtuSol exists to slow the moment before action, <br />
                so execution becomes inevitable instead of hopeful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE DECISION CORE – Anchor Section */}
      <section className="min-h-screen flex items-center justify-center py-24 border-b border-white/5 bg-transparent relative z-10" id="decision-core">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">Official Protocol</span>
              <h2 className="text-5xl md:text-8xl text-white font-bold leading-[0.9] uppercase tracking-tighter">
                The <br /> Decision <br /> Core
              </h2>
            </div>
            <div className="space-y-12">
              <p className="text-2xl md:text-4xl font-bold text-white leading-tight">
                At the center of VirtuSol <br /> is the Decision Core.
              </p>
              <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-xl">
                This is where raw market noise is filtered into signals that can actually be trusted.
              </p>
              <p className="text-xl md:text-2xl text-white uppercase tracking-widest font-bold border-l-2 border-accent pl-12">
                We do not optimize for volume. <br />
                We optimize for alignment, readiness, and timing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW CLARITY BECOMES ACTION – Irreversible Phases */}
      <ImmersiveValueProp
        title="Clarity to Action"
        subtitle="VirtuSol operates through four irreversible phases:"
        items={[
          "Intake: Identifying high-authority signals hidden inside noise.",
          "Synthesis: Processing signals through the VirtuSol Decision Core.",
          "Architecture: Designing a logic-first operational path.",
          "Execution: Moving only once clarity removes friction."
        ]}
      />

      {/* 7. HOW THIS SHOWS UP – Bridge to Services */}
      <section className="min-h-screen flex items-center justify-center py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl space-y-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">Expressions</span>
            <h2 className="text-4xl md:text-6xl text-white font-bold leading-tight uppercase tracking-tighter">
              Signals become systems.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Alignment</h3>
                <p className="text-lg text-white/50 font-light leading-relaxed">
                  Inflency applies signals to brand ↔ creator alignment.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Readiness</h3>
                <p className="text-lg text-white/50 font-light leading-relaxed">
                  Connect 1to1 applies signals to vendor ↔ retailer readiness.
                </p>
              </div>
            </div>
            <p className="text-xl text-accent border-b border-accent/20 pb-2 w-fit uppercase tracking-widest font-bold pt-12">
              Different expressions. Same intelligence layer.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHY THIS IS DIFFERENT – Focused Block */}
      <section className="min-h-screen flex items-center justify-center py-24 border-b border-white/5 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="space-y-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-24">The Differentiator</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
              <div className="space-y-4">
                <p className="text-white/20 text-4xl font-bold line-through">Leads</p>
              </div>
              <div className="space-y-4">
                <p className="text-white/20 text-4xl font-bold line-through">Lists</p>
              </div>
              <div className="space-y-4">
                <p className="text-white/20 text-4xl font-bold line-through">Hype</p>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl text-white font-bold leading-tight uppercase tracking-tighter">
              We help you decide where <br />
              <span className="text-accent underline underline-offset-8">not</span> to spend energy.
            </h2>
            <p className="text-2xl text-white/50 font-light leading-relaxed pt-12">
              So the energy you do spend compounds.
            </p>
          </div>
        </div>
      </section>

      {/* 9. CLOSING ANCHOR – Final thought */}
      <section className="min-h-screen flex items-center justify-center py-24 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="w-[1px] h-32 bg-gradient-to-b from-white to-transparent mx-auto mb-24"></div>
            <h2 className="text-4xl md:text-7xl text-white font-bold leading-tight uppercase tracking-tighter">
              Most companies move fast and hope.
            </h2>
            <p className="text-2xl md:text-4xl text-accent font-bold uppercase tracking-widest pt-12">
              We slow one moment — <br />
              so everything after moves with certainty.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title=""
        description=""
        primaryBtnText="Enter the Decision Protocol →"
        primaryBtnLink="/contact"
        className="bg-transparent border-none text-white py-64"
      />
    </main>
  );
}
