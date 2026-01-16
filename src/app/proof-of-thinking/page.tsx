"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProofOfThinkingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-transparent text-white font-sans selection:bg-white selection:text-black">
            <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">

                    {/* Back Link */}
                    <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-accent transition-colors mb-24 group">
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs uppercase tracking-widest">Return Home</span>
                    </Link>

                    {/* HERO SECTION */}
                    <header className="mb-32">
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 mix-blend-exclusion">
                            Observed <br /> Patterns
                        </h1>
                        <p className="text-2xl text-white/50 font-light max-w-2xl leading-relaxed">
                            We do not believe in theoretical frameworks. We believe in observed patterns that repeat across markets, categories, and cycles. These are the signals we follow.
                        </p>
                    </header>

                    {/* PATTERN 1: THE LAGGARD TRAP */}
                    <section className="mb-48 border-l border-white/10 pl-12 py-12 group hover:border-accent transition-colors">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-8 transition-colors group-hover:text-accent">Pattern 01</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">The Laggard Trap</h2>
                        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                            Most companies react to what happened yesterday. By the time the data is “clean” enough to present to the board, the opportunity has already decayed. We call this the Laggard Trap. Strategy is the act of deciding before the data is obvious.
                        </p>
                    </section>

                    {/* PATTERN 2: THE CREDIBILITY GAP */}
                    <section className="mb-48 border-l border-white/10 pl-12 py-12 group hover:border-accent transition-colors">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-8 transition-colors group-hover:text-accent">Pattern 02</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">The Credibility Gap</h2>
                        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                            In a world of infinite content, attention is cheap. Trust is expensive. Brands that optimize for reach usually sacrifice resonance. The signal we look for isn’t how many people saw it—it’s how many people changed their behavior because of it.
                        </p>
                    </section>

                    {/* PATTERN 3: THE DECISION CORE */}
                    <section className="mb-48 border-l border-white/10 pl-12 py-12 group hover:border-accent transition-colors">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-8 transition-colors group-hover:text-accent">Pattern 03</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">The Decision Core</h2>
                        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                            The difference between a billion-dollar company and a failed one is rarely the product. It’s the quality of the decisions made at the Core. We monitor for the signals that reveal if a leadership team is acting on conviction or merely reacting to noise.
                        </p>
                    </section>

                    {/* NEW SECTION – THE DISCOVERY PAUSE */}
                    <div className="mb-48 py-24 border-y border-white/5">
                        <div className="max-w-3xl space-y-12">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">Core Philosophy</span>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-tight">
                                The Discovery Pause™
                            </h2>
                            <p className="text-xl font-light leading-relaxed text-white/60">
                                Most failure is not a failure of ability, but a failure of timing. The Discovery Pause is the intentional interval where the VirtuSol engine processes raw signal before allowing human action. It is the buffer that replaces impulse with architecture.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                                <div className="space-y-4">
                                    <h4 className="text-xs uppercase tracking-[0.3em] text-accent font-bold italic">Before the Pause</h4>
                                    <p className="text-sm text-white/40 uppercase tracking-widest leading-relaxed">Urgent, reactive, volume-heavy, high-anxiety execution.</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xs uppercase tracking-[0.3em] text-accent font-bold italic">After the Pause</h4>
                                    <p className="text-sm text-white/40 uppercase tracking-widest leading-relaxed">Calm, intentional, precise, logic-first growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CALL TO ACTION */}
                    <div className="pt-24">
                        <div className="max-w-xl mb-12">
                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Apply these patterns</h3>
                            <p className="text-white/40 font-light leading-relaxed">
                                Let's determine which patterns are currently impacting your trajectory.
                            </p>
                        </div>
                        <Link href="/contact">
                            <Button variant="glow" size="lg" magnetic className="h-20 px-12 text-lg font-bold uppercase tracking-widest hover:border-accent/40 transition-all">
                                Apply patterns to your category →
                            </Button>
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}
