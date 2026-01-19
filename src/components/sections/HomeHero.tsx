"use client";

import { useRef, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HomeHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Initial reveal
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                skewY: 7,
                stagger: 0.1
            })
                .from(subtitleRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1
                }, "-=1")
                .from(ctaRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1
                }, "-=0.8");

            // Scroll parallax for text
            gsap.to(titleRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                },
                y: -100,
                opacity: 0
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[120vh] flex flex-col items-center justify-center bg-transparent overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 z-10 text-center">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* 👑 Bold, Immersive Headline */}
                    <h1
                        ref={titleRef}
                        className="text-7xl md:text-[10rem] font-bold tracking-[-0.05em] leading-[0.85] text-white mix-blend-exclusion uppercase"
                    >
                        VirtuSol is a <br />
                        <span className="text-transparent stroke-text">growth decision system.</span>
                    </h1>

                    <p
                        ref={subtitleRef}
                        className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto text-balance leading-relaxed pt-8"
                    >
                        We don't chase noise. We filter signals, prevent wrong moves, and activate only what works.
                    </p>

                    {/* ⚡ Cinematic Action */}
                    <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
                        <Button variant="glow" size="lg" magnetic className="px-12 h-20 text-xl font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
                            Request Intelligence Briefing
                            <ArrowRight className="ml-3 h-7 w-7" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
            </div>

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.4);
                }
            `}</style>
        </section>
    );
}
