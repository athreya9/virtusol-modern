"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DecisionMakerIntelPage() {
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
                            Decision-Maker <br /> Intel™
                        </h1>
                        <p className="text-2xl text-white font-bold leading-relaxed">
                            Who Is Actually Ready to Decide
                        </p>
                    </header>

                    {/* WHAT THIS IS */}
                    <section className="mb-48 border-l border-white/10 pl-12 py-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-8">What this is</span>
                        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                            Decision-Maker Intel™ identifies the psychological and situational triggers that indicate a person of authority is ready for a conversation.
                        </p>
                    </section>

                    {/* HOW WE HELP SALES TEAMS */}
                    <section className="mb-48 space-y-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">The Outreach POV</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">How we help SALES TEAMS</h2>
                        <div className="space-y-8">
                            <p className="text-xl text-white/80 leading-relaxed italic border-l-2 border-accent pl-8">
                                Sales teams come to us when they are talking to the right titles—but getting no traction.
                            </p>
                            <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed">
                                <p>We help them:</p>
                                <ul className="space-y-4 text-white">
                                    <li>• Identify “windows of transition” (new hires, budget shifts, strategic pivots)</li>
                                    <li>• Filter for “intent to change” vs “intent to browse”</li>
                                    <li>• Align messaging with current situational pain</li>
                                </ul>
                                <p className="pt-8 text-white font-bold non-italic">
                                    We don’t find people. We find the right moment to talk to them.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* HOW WE HELP LEADERSHIP */}
                    <section className="mb-48 space-y-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">The Executive POV</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">How we help LEADERSHIP</h2>
                        <div className="space-y-8">
                            <p className="text-xl text-white/80 leading-relaxed italic border-l-2 border-accent pl-8">
                                Leadership comes to us when they need to protect executive time.
                            </p>
                            <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed">
                                <p>We help them:</p>
                                <ul className="space-y-4 text-white">
                                    <li>• Prioritize high-authority meetings that have a real path to value</li>
                                    <li>• Reduce “empty” calendar slots</li>
                                    <li>• Ensure every conversation has a decision-ready counterparty</li>
                                </ul>
                                <p className="pt-8 text-white font-bold non-italic">
                                    Intel exists so your time isn’t traded for curiosity.
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
                                <li className="text-white/20 line-through">No scraped lists</li>
                                <li className="text-white/20 line-through">No bulk databases</li>
                            </ul>
                            <p className="text-2xl text-accent font-light leading-relaxed">
                                Only behavior-led insights on <br /> individual readiness.
                            </p>
                        </div>
                    </section>

                    {/* SCENARIO SYNTHESIS */}
                    <section className="mb-48 space-y-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">Scenario Synthesis</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                            <div className="p-8 border border-white/5 bg-white/[0.02] space-y-6">
                                <h4 className="text-xs uppercase tracking-[0.3em] text-accent font-bold">The Calibration Gap</h4>
                                <p className="text-white/60 font-light leading-relaxed">
                                    An AE has been following up with a CMO for three months. The Intel identifies that the CMO has just initiated a major agency review. <br /><br />
                                    <strong>Signal:</strong> Stop the follow-up. Transition To "Support Intelligence" mode. Provide the metrics they need for the review. Win the trust, not the meeting.
                                </p>
                            </div>
                            <div className="p-8 border border-white/5 bg-white/[0.02] space-y-6">
                                <h4 className="text-xs uppercase tracking-[0.3em] text-accent font-bold">The Strategic Pivot</h4>
                                <p className="text-white/60 font-light leading-relaxed">
                                    Leadership wants to pitch a Fortune 500 account. Intel reveals the key stakeholder has shifted their focus from "Cost Reduction" to "Risk Mitigation" based on recent internal shareholder communications.<br /><br />
                                    <strong>Signal:</strong> Refactor the pitch immediately. Focus on stability features. Move to the front of the line.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CALL TO ACTION */}
                    <div className="pt-16">
                        <Link href="/contact" className="group">
                            <Button variant="glow" size="lg" magnetic className="h-20 px-12 text-lg font-bold uppercase tracking-widest transition-all">
                                Determine if your target list is ready to talk →
                            </Button>
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}
