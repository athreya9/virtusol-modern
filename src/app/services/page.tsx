"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const signals = [
    {
        title: "Inflency Signal™",
        description: "Creator–brand alignment intelligence.",
        slug: "inflency",
        pos: { top: "20%", left: "15%" },
        delay: 0
    },
    {
        title: "Connect 1to1™",
        description: "Demand-first partnerships and matching.",
        slug: "connect-1to1",
        pos: { top: "45%", left: "75%" },
        delay: 0.2
    },
    {
        title: "Market Signal Engine™",
        description: "Where to play. Where not to.",
        slug: "market-signal-engine",
        pos: { top: "15%", left: "60%" },
        delay: 0.4
    },
    {
        title: "Decision-Maker Intel™",
        description: "Who is actually ready to decide.",
        slug: "decision-maker-intel",
        pos: { top: "70%", left: "25%" },
        delay: 0.6
    },
    {
        title: "Revenue Motion Design™",
        description: "Designing the path before you walk it.",
        slug: "revenue-motion-design",
        pos: { top: "55%", left: "40%" },
        delay: 0.8
    },
    {
        title: "Performance Signal Monitoring™",
        description: "Knowing when to continue—or stop.",
        slug: "performance-signal-monitoring",
        pos: { top: "80%", left: "65%" },
        delay: 1.0
    }
];

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-transparent text-white font-sans selection:bg-white selection:text-black">
            <main className="flex-1 pt-48 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col">

                    {/* HERO SECTION */}
                    <div className="max-w-4xl mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-12 mix-blend-exclusion">
                            Signals
                        </h1>
                        <div className="space-y-6">
                            <p className="text-2xl text-white font-bold leading-relaxed">
                                Each signal answers a different question.<br />
                                You don’t need all of them.<br />
                                <span className="text-accent underline underline-offset-8">You need the right one.</span>
                            </p>
                        </div>
                    </div>

                    {/* SIGNAL FIELD */}
                    <div className="relative flex-1 min-h-[70vh] w-full mt-12 mb-24 cursor-default">
                        {signals.map((signal, i) => (
                            <SignalNode key={signal.slug} signal={signal} index={i} />
                        ))}

                        {/* Background Instructions (Subtle) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 text-[10px] uppercase tracking-[1em] pointer-events-none select-none">
                            Discover the Field
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function SignalNode({ signal, index }: { signal: typeof signals[0], index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="absolute hidden md:block"
            style={{ top: signal.pos.top, left: signal.pos.left }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -20, 0],
                x: [0, 10, 0]
            }}
            transition={{
                opacity: { duration: 1, delay: signal.delay },
                scale: { duration: 1, delay: signal.delay },
                y: { duration: 8 + index, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 10 + index, repeat: Infinity, ease: "easeInOut" }
            }}
        >
            <div
                className="relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Visual Node */}
                <Link href={`/services/${signal.slug}`} className="block">
                    <motion.div
                        className={cn(
                            "w-12 h-12 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-500",
                            isHovered ? "bg-accent border-accent shadow-[0_0_30px_rgba(47,128,237,0.4)]" : "bg-white/5"
                        )}
                        whileHover={{ scale: 1.2 }}
                    >
                        <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white" />
                    </motion.div>
                </Link>

                {/* label */}
                <div className={cn(
                    "absolute top-1/2 left-16 -translate-y-1/2 transition-all duration-500 whitespace-nowrap",
                    isHovered ? "opacity-100 translate-x-2" : "opacity-40 translate-x-0"
                )}>
                    <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-1">
                        {signal.title}
                    </h3>
                    <AnimatePresence>
                        {isHovered && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-[10px] text-white/50 uppercase tracking-widest leading-relaxed max-w-[200px]"
                            >
                                {signal.description}
                                <span className="block mt-2 text-accent">Explore protocol →</span>
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
