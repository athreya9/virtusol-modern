"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function FocusedLight() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 40, stiffness: 200, mass: 1 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                x,
                y,
                translateX: "-50%",
                translateY: "-50%",
            }}
            className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-[1] select-none opacity-40 mix-blend-soft-light"
        >
            <div className="absolute inset-0 rounded-full bg-radial-gradient from-white/10 to-transparent blur-3xl" />
        </motion.div>
    );
}
