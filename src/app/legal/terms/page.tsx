"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-transparent text-white font-sans selection:bg-white selection:text-black">
            <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">

                    <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group">
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs uppercase tracking-widest font-bold">Back to Base</span>
                    </Link>

                    <header className="mb-24">
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 mix-blend-exclusion">
                            Protocol <br /> Terms
                        </h1>
                        <p className="text-xl text-white/40 font-light max-w-2xl leading-relaxed">
                            Last Updated: January 15, 2026
                        </p>
                    </header>

                    <div className="space-y-16 text-white/60 font-light leading-relaxed">
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">01. Acceptance of Terms</h2>
                            <p>
                                By accessing the VirtuSol Intelligence Core, you agree to be bound by these Protocol Terms. If you do not agree to these terms, you must immediately cease all signal interactions with the platform.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">02. License to Intelligence</h2>
                            <p>
                                VirtuSol grants you a limited, non-exclusive, non-transferable license to access and use the signals generated for your specific account. All intellectual property related to the Signal Engine™ and related protocols remains the exclusive property of VirtuSol.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">03. Restrictions</h2>
                            <p>
                                You may not reverse-engineer the Signal Engine™, scrape our behavioral triggers, or attempt to subvert the architectural integrity of the "Void" environment. Any attempt to do so will result in an immediate and permanent suspension of your protocol access.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">04. Limitation of Liability</h2>
                            <p>
                                VirtuSol provides signals for informational and strategic purposes. We do not guarantee specific financial outcomes. The "Risk of Action" remains with the user. VirtuSol is not liable for any strategic losses incurred based on signal interpretation.
                            </p>
                        </section>
                    </div>

                </div>
            </main>
        </div>
    );
}
