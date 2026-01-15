"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PerformanceSignalMonitoringPage() {
    return (
        <div className="flex min-h-screen flex-col bg-transparent text-white font-sans selection:bg-white selection:text-black">
            <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">

                    {/* Back Link */}
                    <Link href="/services" className="inline-flex items-center gap-2 text-white/40 hover:text-accent transition-colors mb-24 group">
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs uppercase tracking-widest">Back to Signals</span>
                    </Link>

                    {/* HERO SECTION */}
                    <header className="mb-32">
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 mix-blend-exclusion">
                            Performance <br /> Signal Monitoring™
                        </h1>
                        <p className="text-2xl text-white font-bold leading-relaxed">
                            Knowing When to Continue—or Stop
                        </p>
                    </header>

                    {/* WHAT THIS IS */}
                    <section className="mb-48 border-l border-white/10 pl-12 py-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-8">What this is</span>
                        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                            Performance Signal Monitoring™ isn't about dashboarding. It's about detecting the moment a strategy has reached its peak—and alerting you before the decline begins.
                        </p>
                    </section>

                    {/* HOW WE HELP GROWTH TEAMS */}
                    <section className="mb-48 space-y-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">The Growth POV</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">How we help GROWTH TEAMS</h2>
                        <div className="space-y-8">
                            <p className="text-xl text-white/80 leading-relaxed italic border-l-2 border-accent pl-8">
                                Growth teams come to us when they are tired of “lagging” metrics.
                            </p>
                            <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed">
                                <p>We help them:</p>
                                <ul className="space-y-4 text-white">
                                    <li>• Identify “leading” signals of saturation</li>
                                    <li>• Detect channel decay before it impacts CAC</li>
                                    <li>• Verify if current momentum is sustainable</li>
                                </ul>
                                <p className="pt-8 text-white font-bold non-italic">
                                    We don’t just track data. We track the health of your strategy.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* HOW WE HELP DECISION MAKERS */}
                    <section className="mb-48 space-y-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">The Buyer POV</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">How we help DECISION MAKERS</h2>
                        <div className="space-y-8">
                            <p className="text-xl text-white/80 leading-relaxed italic border-l-2 border-accent pl-8">
                                Decision makers come to us when they need a “Neutral Signal” on performance.
                            </p>
                            <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed">
                                <p>We help them:</p>
                                <ul className="space-y-4 text-white">
                                    <li>• Make the hard call to stop underperforming initiatives</li>
                                    <li>• Double down on signals that are truly scaling</li>
                                    <li>• Remove the emotion from budget reallocation</li>
                                </ul>
                                <p className="pt-8 text-white font-bold non-italic">
                                    Monitoring exists to protect you from the “Sunk Cost” trap.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* WHAT MAKES THIS DIFFERENT */}
                    <section className="mb-48 py-24 border-y border-white/5">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-12">Differentiation</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">What makes this different</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <ul className="space-y-4 text-lg text-white uppercase tracking-widest font-bold">
                                <li className="text-white/20 line-through">No vanity metrics</li>
                                <li className="text-white/20 line-through">No noise</li>
                            </ul>
                            <p className="text-2xl text-accent font-light leading-relaxed">
                                Only the signals that matter for <br /> your next decision.
                            </p>
                        </div>
                    </section>

                    {/* CALL TO ACTION */}
                    <div className="pt-16">
                        <Link href="/contact" className="group">
                            <Button variant="glow" size="lg" magnetic className="h-20 px-12 text-lg font-bold uppercase tracking-widest transition-all">
                                Request a signal audit on your current performance →
                            </Button>
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}
