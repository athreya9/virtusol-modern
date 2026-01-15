"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiesPage() {
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
                            Cookie <br /> Policy
                        </h1>
                        <p className="text-xl text-white/40 font-light max-w-2xl leading-relaxed">
                            Last Updated: January 15, 2026
                        </p>
                    </header>

                    <div className="space-y-16 text-white/60 font-light leading-relaxed">
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">01. Signal Persistence</h2>
                            <p>
                                We use essential cookies to maintain your session state and ensure the persistence of your intelligence preferences across the VirtuSol platform.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">02. Performance Optimization</h2>
                            <p>
                                Some cookies enable us to optimize the rendering of WebGL components and 3D interactions based on your device's historical performance.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">03. Managing Preferences</h2>
                            <p>
                                You can control cookie activation through your browser settings. Please note that disabling essential cookies may impact the functional integrity of the "Void" environment.
                            </p>
                        </section>
                    </div>

                </div>
            </main>
        </div>
    );
}
