"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const questions = [
    {
        id: "q1",
        text: "What feels most unclear right now?",
        options: ["Where to focus", "Who to engage", "When to act", "Whether to pause", "Something else"],
    },
    {
        id: "q2",
        text: "Which statement feels closest to your situation?",
        options: [
            "“We’re doing a lot, but not confidently.”",
            "“We’re hesitating because timing feels off.”",
            "“We’re exploring options, but none feel right.”",
            "“We’re already active, but unsure what to double down on.”",
        ],
    },
    {
        id: "q3",
        text: "What would matter more right now?",
        options: ["Speed", "Confidence", "Alignment", "Reduction of risk"],
    },
];

export default function SignalReadinessCheck() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const handleAnswer = (option: string) => {
        setAnswers({ ...answers, [questions[step].id]: option });
        setStep(step + 1);
    };

    return (
        <main className="min-h-screen bg-transparent text-white font-sans selection:bg-white selection:text-black flex flex-col items-center justify-center px-4 md:px-6">
            <div className="max-w-2xl w-full">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8 text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                                Signal Readiness Check™
                            </h1>
                            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px]">
                                A short reflection before starting a conversation.
                            </p>
                            <div className="space-y-6 text-xl md:text-2xl font-light text-white/70 leading-relaxed">
                                <p>This is not an assessment.</p>
                                <p>There is no score.</p>
                                <p>
                                    These questions exist to help you decide whether now is the right moment to engage.
                                </p>
                                <p className="text-accent">Take your time.</p>
                            </div>
                            <Button
                                variant="glow"
                                className="mt-12"
                                onClick={() => setStep(1)}
                                magnetic
                            >
                                Begin →
                            </Button>
                        </motion.div>
                    )}

                    {step > 0 && step <= questions.length && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-12"
                        >
                            <div className="space-y-4">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
                                    Step 0{step} of 0{questions.length}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                    {questions[step - 1].text}
                                </h2>
                            </div>
                            <div className="flex flex-col gap-4">
                                {questions[step - 1].options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleAnswer(option)}
                                        className="text-left px-8 py-6 border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/20 transition-all group relative overflow-hidden"
                                    >
                                        <span className="relative z-10 text-lg md:text-xl font-light text-white/60 group-hover:text-white">
                                            {option}
                                        </span>
                                        <div className="absolute inset-y-0 left-0 w-1 bg-accent/0 group-hover:bg-accent transition-all"></div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step > questions.length && (
                        <motion.div
                            key="output"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-12 text-center"
                        >
                            <div className="space-y-8 text-2xl md:text-3xl font-light leading-relaxed text-white/80">
                                <p>
                                    “If you’re prioritizing clarity over speed, <br />
                                    a conversation may be useful.”
                                </p>
                                <p className="text-white/40">
                                    If not, waiting is often the smarter move.
                                </p>
                            </div>
                            <Link href="/contact" className="block">
                                <Button variant="glow" size="lg" magnetic>
                                    Start a conversation →
                                </Button>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
