"use client";

import React, { Suspense } from "react";
import { useWebGLStatus } from "@/hooks/use-webgl-status";

/**
 * WebGLContainer ensures that Three.js/WebGL content only loads
 * when the device is capable and the kill switch is off.
 * It provides a clean boundary for progressive enhancement.
 */
export function WebGLContainer({ children }: { children: React.ReactNode }) {
    const { shouldRender } = useWebGLStatus();

    // If we shouldn't render WebGL, return null (the 2D fallback is the existing CSS background)
    if (!shouldRender) return null;

    return (
        <div className="fixed inset-0 pointer-events-none -z-20 bg-transparent">
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </div>
    );
}
