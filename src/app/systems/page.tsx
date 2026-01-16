"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SystemsPage() {
    return (
        <main className="min-h-screen pt-48 pb-24 relative overflow-hidden bg-transparent selection:bg-white selection:text-black">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 mix-blend-exclusion">
                            How We <br /> Operate
                        </h1>
                        <p className="text-xl md:text-2xl text-white/40 font-light tracking-widest uppercase">
                            Systems built for judgment, not just activity.
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-32">
                        <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-accent mb-12">The Protocol</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xl md:text-2xl font-light leading-relaxed text-white/60">
                                <p>
                                    Our systems don't start with code. They start with logic. We architect decision frameworks that prioritize signal over noise, ensuring every action taken is rooted in verifiable intelligence.
                                </p>
                                <p>
                                    Whether it's interpreting market shifts or validating creator alignment, our protocols are designed to protect the integrity of the final decision. We call this <span className="text-white font-bold">Logic-First Architecture</span>.
                                </p>
                            </div>
                        </section>

                        {/* NEW SECTION – THE DECISION CORE */}
                        <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 py-24 border-y border-white/5">
                            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-accent mb-12">The Decision Core Logic</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div className="space-y-6">
                                    <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">01 / Filtration</span>
                                    <p className="text-lg text-white/70 font-light leading-relaxed">
                                        Raw data is passed through a high-authority filter. We strip away volume metrics that lack intent, leaving only the "Judgment Signal."
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">02 / Calibration</span>
                                    <p className="text-lg text-white/70 font-light leading-relaxed">
                                        The signal is calibrated against the specific physics of your category—be it retail shelf space or the attention economy of digital creators.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">03 / Command Path</span>
                                    <p className="text-lg text-white/70 font-light leading-relaxed">
                                        The output isn't a report. It's a command path—a verified operational sequence that makes growth inevitable.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-accent mb-12">The Infrastructure</h2>
                            <div className="space-y-12">
                                <div className="border-t border-white/10 pt-8">
                                    <h3 className="text-2xl font-bold text-white mb-4">Signal Integrity</h3>
                                    <p className="text-lg text-white/50 font-light max-w-2xl">
                                        Automated monitoring systems that filter out vanity metrics and focus on high-authority indicators. We prioritize <span className="text-white">certainty over scale</span>.
                                    </p>
                                </div>
                                <div className="border-t border-white/10 pt-8">
                                    <h3 className="text-2xl font-bold text-white mb-4">Decision Mapping</h3>
                                    <p className="text-lg text-white/50 font-light max-w-2xl">
                                        Visual and logical mapping of complex dependencies to reveal the "moment before action." This is where we identify the pivot points before they become costs.
                                    </p>
                                </div>
                                <div className="border-t border-white/10 pt-8">
                                    <h3 className="text-2xl font-bold text-white mb-4">Dynamic Response</h3>
                                    <p className="text-lg text-white/50 font-light max-w-2xl">
                                        Agile adjustment protocols that allow teams to pivot based on real-time signal interpretation. Not a pivot based on hope, but a pivot based on verified shifts.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 pb-24">
                            <blockquote className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white mix-blend-exclusion italic">
                                "The best system isn't the one that does the most work. It's the one that prevents the most mistakes."
                            </blockquote>
                        </section>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-24 text-center">
                        <a href="/" className="text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors">
                            Return to Origin
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
