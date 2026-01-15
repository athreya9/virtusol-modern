"use client";

import { CTABand } from "@/components/sections/CTABand";
import { ScrollAffirmations } from "@/components/features/cinematic/ScrollAffirmations";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function EngagementPage() {
    return (
        <main className="min-h-screen pt-48 pb-24 relative overflow-hidden bg-transparent text-white font-sans selection:bg-white selection:text-black">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* HERO SECTION */}
                <div className="max-w-4xl mb-32">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-12 mix-blend-exclusion">
                        Engagement
                    </h1>
                    <div className="flex flex-col gap-6">
                        <p className="text-2xl text-white/50 font-light max-w-2xl leading-relaxed">
                            How teams work with VirtuSol — and how we decide if it makes sense.
                        </p>
                        <Link
                            href="/pricing/signal-readiness"
                            className="text-[10px] uppercase tracking-[0.3em] text-accent hover:text-white transition-colors w-fit border-b border-accent/20 pb-1"
                        >
                            Check your signal readiness →
                        </Link>
                    </div>
                </div>

                {/* SECTION 1 — RESET EXPECTATIONS */}
                <section className="mb-48 grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div className="space-y-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">Reset Expectations</span>
                        <div className="space-y-8 text-2xl md:text-3xl text-white font-bold leading-tight">
                            <p>VirtuSol does not sell packages.</p>
                            <p>We don’t publish rate cards.</p>
                            <p>And we don’t believe one price fits every situation.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-8 bg-white/5 p-12 rounded-2xl border border-white/10">
                        <p className="text-2xl md:text-3xl font-light leading-relaxed italic text-white/80">
                            "Because the cost of a bad decision is always higher than the cost of thinking."
                        </p>
                        <div className="space-y-4 pt-8 border-t border-white/10">
                            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">Engagement shaped by:</p>
                            <ul className="space-y-2 text-lg font-bold uppercase tracking-widest">
                                <li>• The clarity you already have</li>
                                <li>• The uncertainty you’re facing</li>
                                <li>• The risk of moving too early — or too late</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SECTION 2 — WHY THERE IS NO PRICE LIST */}
                <section className="mb-48 py-24 border-y border-white/5">
                    <div className="max-w-3xl space-y-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">Why there is no price list</span>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-tight">
                            Most services price effort.<br />
                            <span className="text-accent">We price judgment.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed">
                            Two teams may ask for the same system and require entirely different levels of work. Publishing fixed prices would be dishonest.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
                            <div className="space-y-4">
                                <span className="text-accent font-mono text-sm tracking-widest uppercase">Focus 01</span>
                                <p className="text-white font-bold uppercase tracking-widest text-sm">Scope that actually matters</p>
                            </div>
                            <div className="space-y-4">
                                <span className="text-accent font-mono text-sm tracking-widest uppercase">Focus 02</span>
                                <p className="text-white font-bold uppercase tracking-widest text-sm">Signals that justify action</p>
                            </div>
                            <div className="space-y-4">
                                <span className="text-accent font-mono text-sm tracking-widest uppercase">Focus 03</span>
                                <p className="text-white font-bold uppercase tracking-widest text-sm">Outcomes that reduce regret</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3 — HOW ENGAGEMENTS ARE STRUCTURED */}
                <section className="mb-48">
                    <div className="mb-24">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-12">Structure</span>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-tight max-w-4xl">
                            Every VirtuSol engagement follows the same logic — even if the work itself differs.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-12 bg-white/5 border border-white/10 space-y-8">
                            <span className="text-xs uppercase tracking-widest text-white/30">Phase 01</span>
                            <h3 className="text-2xl font-bold uppercase tracking-tight">Signal Discovery</h3>
                            <p className="text-white/50 font-light leading-relaxed">
                                We analyze your situation to determine:
                            </p>
                            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/70">
                                <li>• Whether a real signal exists</li>
                                <li>• Whether timing is right</li>
                                <li>• Whether VirtuSol is even needed</li>
                            </ul>
                            <p className="text-xs text-accent uppercase tracking-widest pt-8">Some engagements stop here — by design.</p>
                        </div>
                        <div className="p-12 bg-white/5 border border-white/10 space-y-8">
                            <span className="text-xs uppercase tracking-widest text-white/30">Phase 02</span>
                            <h3 className="text-2xl font-bold uppercase tracking-tight">Decision Framing</h3>
                            <p className="text-white/50 font-light leading-relaxed">
                                If signals are strong, we help define:
                            </p>
                            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/70">
                                <li>• The smartest path forward</li>
                                <li>• What to ignore</li>
                                <li>• What to delay</li>
                                <li>• What to pursue deliberately</li>
                            </ul>
                            <p className="text-xs text-accent uppercase tracking-widest pt-8">Clarity replaces urgency.</p>
                        </div>
                        <div className="p-12 bg-white/5 border border-white/10 space-y-8">
                            <span className="text-xs uppercase tracking-widest text-white/30">Phase 03</span>
                            <h3 className="text-2xl font-bold uppercase tracking-tight">Selective Activation</h3>
                            <p className="text-white/50 font-light leading-relaxed">
                                Only when alignment exists do we help activate:
                            </p>
                            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/70">
                                <li>• Partnerships</li>
                                <li>• Outreach</li>
                                <li>• Campaigns</li>
                                <li>• Conversations</li>
                            </ul>
                            <p className="text-xs text-accent uppercase tracking-widest pt-8">Execution without clarity is never offered.</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 4 — WHAT A TYPICAL ENGAGEMENT FEELS LIKE */}
                <section className="mb-48 max-w-4xl">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-12">The Experience</span>
                    <blockquote className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-tight mb-24">
                        “It felt slower at first — <br />
                        then <span className="text-accent underline underline-offset-8">everything</span> became obvious.”
                    </blockquote>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <p className="text-2xl font-bold text-white uppercase tracking-widest">Calm</p>
                            <p className="text-white/40 font-light mt-2 uppercase tracking-widest text-xs">Not frantic</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white uppercase tracking-widest">Focused</p>
                            <p className="text-white/40 font-light mt-2 uppercase tracking-widest text-xs">Not busy</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white uppercase tracking-widest">Precise</p>
                            <p className="text-white/40 font-light mt-2 uppercase tracking-widest text-xs">Not expansive</p>
                        </div>
                    </div>
                    <p className="text-xl text-white/60 font-light leading-relaxed mt-24 text-center max-w-2xl mx-auto">
                        You will do less — and be more confident doing it.
                    </p>
                </section>

                {/* SECTION 5 — WHO THIS MODEL WORKS FOR */}
                <section className="mb-48 py-24 border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div className="space-y-12">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">The Match</span>
                            <h3 className="text-3xl font-bold uppercase tracking-tight">This works best for teams who:</h3>
                            <ul className="space-y-6 text-xl text-white/60 font-light">
                                <li>• Are tired of guessing</li>
                                <li>• Don’t want vanity metrics</li>
                                <li>• Care about timing</li>
                                <li>• Prefer honesty over optimism</li>
                            </ul>
                        </div>
                        <div className="space-y-12 border-l border-white/10 pl-12">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block opacity-0">...</span>
                            <h3 className="text-3xl font-bold uppercase tracking-tight text-white/40">It does not work for:</h3>
                            <ul className="space-y-6 text-xl text-white/30 font-light">
                                <li>• Fixed packages</li>
                                <li>• Quick hacks</li>
                                <li>• Guaranteed outcomes</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SECTION 6 — THE QUESTION WE ALWAYS ASK FIRST */}
                <section className="mb-32 max-w-4xl">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-12">Protocol Alpha</span>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-tight mb-12">
                        “Is there a real decision to be made here?”
                    </h2>
                    <p className="text-2xl text-white/50 font-light leading-relaxed">
                        Before any commercial discussion, we ask this one question. If the answer is no, <span className="text-white font-bold">we will tell you.</span>
                    </p>
                </section>

                <DelayedCTABand />

                <ScrollAffirmations />
            </div>
        </main>
    );
}

function DelayedCTABand() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTriggered) {
                    setHasTriggered(true);
                    setTimeout(() => {
                        setIsVisible(true);
                    }, 2000);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [hasTriggered]);

    return (
        <div ref={containerRef} className="min-h-[300px]">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <CTABand
                            title="If you’re considering an engagement, start by explaining what feels unclear."
                            description=""
                            primaryBtnText="Start a conversation →"
                            primaryBtnLink="/contact"
                            className="bg-transparent border-none text-white py-24 px-0"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
