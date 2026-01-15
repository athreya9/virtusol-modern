"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const faqs = [
    {
        q: "“Is VirtuSol a marketing or lead generation company?”",
        a: <>
            <p>No.</p>
            <p>VirtuSol exists before marketing begins. We help teams decide whether something is worth marketing, partnering on, or pursuing at all.</p>
            <p>If execution is the problem, others can help. If deciding what not to execute is the problem, that’s where we fit.</p>
        </>
    },
    {
        q: "“Can you guarantee outcomes?”",
        a: <>
            <p>No — and anyone who does isn’t being honest.</p>
            <p>What we do guarantee is:</p>
            <ul className="space-y-2 mt-4">
                <li>• Clear signal interpretation</li>
                <li>• Honest recommendations</li>
                <li>• The restraint to say “don’t do this yet”</li>
            </ul>
            <p className="mt-6 font-bold uppercase tracking-widest text-[10px] text-accent">Clarity reduces regret. Guarantees usually increase it.</p>
        </>
    },
    {
        q: "“Why don’t you publish prices?”",
        a: <>
            <p>Because pricing decisions require the same clarity as growth decisions.</p>
            <p>Two situations that look similar on the surface often carry very different risk underneath.</p>
            <p>Publishing prices would optimize for convenience, not truth.</p>
        </>
    },
    {
        q: "“Do you work with early-stage startups?”",
        a: <>
            <p>Sometimes.</p>
            <p>Stage matters less than decision maturity.</p>
            <p>If the question is real and the timing matters, we’re open to the conversation.</p>
            <p>If you’re still exploring ideas broadly, waiting may serve you better.</p>
        </>
    },
    {
        q: "“What happens after I start a conversation?”",
        a: <>
            <p>First, we read — carefully.</p>
            <p>Then one of three things happens:</p>
            <ul className="space-y-2 mt-4">
                <li>• We suggest a focused next step</li>
                <li>• We recommend waiting</li>
                <li>• We tell you we’re not the right fit</li>
            </ul>
            <p className="mt-6 text-white/40 italic">All three outcomes are intentional.</p>
        </>
    },
    {
        q: "“Why does this feel different from other firms?”",
        a: <>
            <p>Because VirtuSol is not designed to scale activity.</p>
            <p>It’s designed to protect judgment — even when that means less work.</p>
        </>
    }
];

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-transparent text-white font-sans selection:bg-white selection:text-black pt-48 pb-24 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="max-w-4xl mb-48">
                    <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-8 mix-blend-exclusion">
                        Things People Ask — <br />
                        Before They’re Ready
                    </h1>
                    <p className="text-xl md:text-2xl text-white/40 font-light tracking-widest uppercase">
                        Clarity often arrives just after the question is truly asked.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-[40vh] pb-[40vh]">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} faq={faq} />
                    ))}
                </div>

                {/* Back to Home */}
                <div className="mt-24 text-center">
                    <a href="/" className="text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors">
                        Return to Origin
                    </a>
                </div>
            </div>
        </main>
    );
}

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.1, 1, 1, 0.1]);
    const blur = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
    const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.95, 1, 0.95]);

    const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

    return (
        <motion.div
            ref={ref}
            style={{ opacity: springOpacity, filter: blur, scale }}
            className="max-w-3xl mx-auto space-y-12"
        >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
                {faq.q}
            </h2>
            <div className="text-xl md:text-2xl text-white/60 font-light leading-relaxed space-y-6">
                {faq.a}
            </div>
        </motion.div>
    );
}
