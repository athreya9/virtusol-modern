"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RevenueMotionDesignPage() {
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
                            Revenue <br /> Motion Design™
                        </h1>
                        <p className="text-2xl text-white font-bold leading-relaxed">
                            Design the Path Before You Walk It
                        </p>
                    </header>

                    {/* WHAT THIS IS */}
                    <section className="mb-48 border-l border-white/10 pl-12 py-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-8">What this is</span>
                        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                            Revenue Motion Design™ is the architectural layer that defines exactly how a deal should move, who needs to be involved, and what signals must be present at each stage.
                        </p>
                    </section>

                    {/* HOW WE HELP STRATEGISTS */}
                    <section className="mb-48 space-y-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">The Strategic POV</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">How we help STRATEGISTS</h2>
                        <div className="space-y-8">
                            <p className="text-xl text-white/80 leading-relaxed italic border-l-2 border-accent pl-8">
                                Strategists come to us when they have a product—but no clear path to revenue.
                            </p>
                            <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed">
                                <p>We help them:</p>
                                <ul className="space-y-4 text-white">
                                    <li>• Architect the “Optimal Motion” for their specific category</li>
                                    <li>• Remove friction from the buyer’s journey</li>
                                    <li>• Align marketing and sales under a single source of truth</li>
                                </ul>
                                <p className="pt-8 text-white font-bold non-italic">
                                    We don’t just build funnels. We design the physics of how your revenue moves.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* HOW WE HELP REVENUE LEADERS */}
                    <section className="mb-48 space-y-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">The Leadership POV</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">How we help REVENUE LEADERS</h2>
                        <div className="space-y-8">
                            <p className="text-xl text-white/80 leading-relaxed italic border-l-2 border-accent pl-8">
                                Revenue leaders come to us when their teams are “busy” but not closing.
                            </p>
                            <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed">
                                <p>We help them:</p>
                                <ul className="space-y-4 text-white">
                                    <li>• Audit existing motions for hidden leaks</li>
                                    <li>• Simplify the sales process</li>
                                    <li>• Focus the team on the highest-leverage activity</li>
                                </ul>
                                <p className="pt-8 text-white font-bold non-italic">
                                    Motion Design exists so your team doesn't have to fight the system to win.
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
                                <li className="text-white/20 line-through">No generic playbooks</li>
                                <li className="text-white/20 line-through">No “best practices” that don’t apply</li>
                            </ul>
                            <p className="text-2xl text-accent font-light leading-relaxed">
                                Only custom-designed <br /> motions for your specific <br /> signal environment.
                            </p>
                        </div>
                    </section>

                    {/* CALL TO ACTION */}
                    <div className="pt-16">
                        <Link href="/contact" className="group">
                            <Button variant="glow" size="lg" magnetic className="h-20 px-12 text-lg font-bold uppercase tracking-widest transition-all">
                                Ask for a motion audit →
                            </Button>
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}
