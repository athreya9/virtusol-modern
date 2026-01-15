"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const affirmations = [
    "Most clarity comes from slowing down.",
    "Not every opportunity deserves action.",
    "Timing changes everything.",
    "Focus is a competitive advantage.",
    "Doing less is often the smarter move.",
];

export function ScrollAffirmations() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const scrollDelta = Math.abs(currentScroll - scrollPos);

            // Only trigger change if we've scrolled enough (e.g. 300px)
            if (scrollDelta > 300) {
                setVisible(false);
                setTimeout(() => {
                    setIndex((prev) => (prev + 1) % affirmations.length);
                    setScrollPos(currentScroll);
                }, 500);
            }

            // Show if we are scrolling and not at the very top
            if (currentScroll > 100) {
                if (!visible) setVisible(true);
            } else {
                if (visible) setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollPos, visible]);

    return (
        <div className="fixed bottom-12 left-12 z-50 pointer-events-none">
            <AnimatePresence mode="wait">
                {visible && (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                        animate={{ opacity: 0.4, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="text-[10px] uppercase tracking-[0.4em] text-white font-space-mono"
                    >
                        {affirmations[index]}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
