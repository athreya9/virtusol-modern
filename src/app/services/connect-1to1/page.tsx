"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Connect1to1Page() {
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
                            Connect <br /> 1to1™
                        </h1>
                        <p className="text-2xl text-white font-bold leading-relaxed">
                            Demand-First Vendor–Retailer Matching
                        </p>
                    </header>

                    {/* WHAT THIS IS */}
                    <section className="mb-48 border-l border-white/10 pl-12 py-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-8">What this is</span>
                        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                            Connect 1to1™ skips the pitch. We only facilitate introductions when a retailer has an active, documented need.
                        </p>
                    </section>

                    {/* HOW WE HELP VENDORS */}
                    <section className="mb-48 space-y-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">The Vendor POV</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">How we help VENDORS</h2>
                        <div className="space-y-8">
                            <p className="text-xl text-white/80 leading-relaxed italic border-l-2 border-accent pl-8">
                                Vendors come to us when their outreach is ignored by buyers.
                            </p>
                            <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed">
                                <p>We help vendors:</p>
                                <ul className="space-y-4 text-white">
                                    <li>• Stop guessing what retailers want</li>
                                    <li>• Only pitch when demand is “pre-validated”</li>
                                    <li>• Shorten sales cycles by weeks</li>
                                </ul>
                                <p className="pt-8 text-white font-bold non-italic">
                                    We don’t open doors. We open the right doors.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* HOW WE HELP RETAILERS */}
                    <section className="mb-48 space-y-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">The Retailer POV</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">How we help RETAILERS</h2>
                        <div className="space-y-8">
                            <p className="text-xl text-white/80 leading-relaxed italic border-l-2 border-accent pl-8">
                                Retailers come to us when they are tired of noise from vendors who don’t “get” their shelf space.
                            </p>
                            <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed">
                                <p>We help retailers:</p>
                                <ul className="space-y-4 text-white">
                                    <li>• See only curated solutions that meet current needs</li>
                                    <li>• Reduce inward noise</li>
                                    <li>• Filter for quality, trust, and readiness</li>
                                </ul>
                                <p className="pt-8 text-white font-bold non-italic">
                                    Connect 1to1 exists to make “Yes” faster for everyone involved.
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
                                <li className="text-white/20 line-through">No cold calls</li>
                                <li className="text-white/20 line-through">No mass emails</li>
                                <li className="text-white/20 line-through">No generic decks</li>
                            </ul>
                            <p className="text-2xl text-accent font-light leading-relaxed">
                                Only demand-led introductions.
                            </p>
                        </div>
                    </section>

                    {/* CALL TO ACTION */}
                    <div className="pt-16">
                        <Link href="/contact" className="group">
                            <Button variant="glow" size="lg" magnetic className="h-20 px-12 text-lg font-bold uppercase tracking-widest transition-all">
                                Ask if we see demand for your category →
                            </Button>
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}
