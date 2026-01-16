"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InflencySignalPage() {
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
                            Inflency <br /> Signal™
                        </h1>
                        <p className="text-2xl text-white font-bold leading-relaxed">
                            Creator–Brand Alignment Intelligence
                        </p>
                    </header>

                    {/* WHAT THIS IS */}
                    <section className="mb-48 border-l border-white/10 pl-12 py-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-8">What this is</span>
                        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                            Inflency Signal™ evaluates trust, timing, and audience readiness before creators and brands collaborate.
                        </p>
                    </section>

                    {/* HOW WE HELP BRANDS */}
                    <section className="mb-48 space-y-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">The Buyer POV</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">How we help BRANDS</h2>
                        <div className="space-y-8">
                            <p className="text-xl text-white/80 leading-relaxed italic border-l-2 border-accent pl-8">
                                Brands come to us when influencer spend “looks good” but doesn’t convert.
                            </p>
                            <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed">
                                <p>We help brands:</p>
                                <ul className="space-y-4 text-white">
                                    <li>• Understand if a creator’s audience is ready to act</li>
                                    <li>• Avoid renting attention that won’t translate</li>
                                    <li>• Choose fewer creators—with higher impact</li>
                                </ul>
                                <p className="pt-8 text-white font-bold non-italic">
                                    We don’t optimize for reach. We optimize for alignment.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* HOW WE HELP CREATORS */}
                    <section className="mb-48 space-y-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">The Creator POV</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">How we help CREATORS</h2>
                        <div className="space-y-8">
                            <p className="text-xl text-white/80 leading-relaxed italic border-l-2 border-accent pl-8">
                                Creators come to us when deals feel frequent—but hollow.
                            </p>
                            <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed">
                                <p>We help creators:</p>
                                <ul className="space-y-4 text-white">
                                    <li>• Protect audience trust</li>
                                    <li>• Filter brands before saying yes</li>
                                    <li>• Build fewer, longer-term partnerships</li>
                                </ul>
                                <p className="pt-8 text-white font-bold non-italic">
                                    Inflency exists so creators don’t have to gamble with credibility.
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
                                <li className="text-white/20 line-through">No marketplaces</li>
                                <li className="text-white/20 line-through">No bidding</li>
                                <li className="text-white/20 line-through">No pay-per-post logic</li>
                            </ul>
                            <p className="text-2xl text-accent font-light leading-relaxed">
                                Only partnerships that make <br /> sense right now.
                            </p>
                        </div>
                    </section>

                    {/* SCENARIO SYNTHESIS */}
                    <section className="mb-48 space-y-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">Scenario Synthesis</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                            <div className="p-8 border border-white/5 bg-white/[0.02] space-y-6">
                                <h4 className="text-xs uppercase tracking-[0.3em] text-accent font-bold">The Trust Trap</h4>
                                <p className="text-white/60 font-light leading-relaxed">
                                    A creator receives a high-six-figure offer to promote a new crypto-trading app. The Inflency Signal identifies that their audience has a high "Skepticism Index" toward financial products after a recent industry crash. <br /><br />
                                    <strong>Signal:</strong> Reject the deal. The payout will not cover the long-term audience decay. Wait for a "Utility-First" partnership.
                                </p>
                            </div>
                            <div className="p-8 border border-white/5 bg-white/[0.02] space-y-6">
                                <h4 className="text-xs uppercase tracking-[0.3em] text-accent font-bold">The Hidden Alignment</h4>
                                <p className="text-white/60 font-light leading-relaxed">
                                    A brand is considering a "Tier 1" celebrity for their campaign. The Signal reveals that a "Tier 3" niche expert has 4x the "Specific Authority" over the brand's core product category. <br /><br />
                                    <strong>Signal:</strong> Reallocate 80% of budget to the expert. Achieve deeper penetration for 20% of the cost.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CALL TO ACTION */}
                    <div className="pt-16">
                        <Link href="/contact" className="group">
                            <Button variant="glow" size="lg" magnetic className="h-20 px-12 text-lg font-bold uppercase tracking-widest transition-all">
                                Check if Inflency applies to your situation →
                            </Button>
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}
