"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
                            Privacy <br /> Protocol
                        </h1>
                        <p className="text-xl text-white/40 font-light max-w-2xl leading-relaxed">
                            Last Updated: January 15, 2026
                        </p>
                    </header>

                    <div className="space-y-16 text-white/60 font-light leading-relaxed">
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">01. Data Synthesis</h2>
                            <p>
                                VirtuSol collects and synthesizes market signals to provide strategic intelligence. Unlike traditional data brokers, we prioritize the anonymization of behavioral triggers. We do not sell PII (Personally Identifiable Information) to third-party advertisers.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">02. Signal Intelligence</h2>
                            <p>
                                Our proprietary algorithms process public and permissioned data to identify growth patterns. All data processing is executed within high-security environments, ensuring that competitive intelligence remains exclusive to the authorized user.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">03. User Rights</h2>
                            <p>
                                Every entity interacting with the VirtuSol framework has the right to request a summary of the data signals associated with their identification. You may request the absolute deletion of your signal history at any time through our protocol interface.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">04. Protocol Security</h2>
                            <p>
                                We implement architectural safeguards to prevent unauthorized access to our signal core. Encryption is applied at both rest and in-transit, following the highest industry standards for decision-intelligence security.
                            </p>
                        </section>
                    </div>

                </div>
            </main>
        </div>
    );
}
