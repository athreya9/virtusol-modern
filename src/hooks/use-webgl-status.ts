"use client";

import { useState, useEffect } from "react";

export function useWebGLStatus() {
    const [status, setStatus] = useState<{
        isAvailable: boolean;
        isKillSwitchEnabled: boolean;
        isLowPower: boolean;
        shouldRender: boolean;
    }>({
        isAvailable: false,
        isKillSwitchEnabled: false,
        isLowPower: false,
        shouldRender: false,
    });

    useEffect(() => {
        // 1. Check Kill Switch
        const isKillSwitchEnabled = process.env.NEXT_PUBLIC_DISABLE_WEBGL === "true";

        // 2. Check WebGL Availability
        let isAvailable = false;
        try {
            const canvas = document.createElement("canvas");
            isAvailable = !!(
                window.WebGLRenderingContext &&
                (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
            );
        } catch (e) {
            isAvailable = false;
        }

        // 3. Simple Low Power Detection (Mobile or low RAM)
        // Note: Simple heuristic for now, can be expanded with HardwareConcurrency
        const isLowPower =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
            (typeof (navigator as any).deviceMemory !== 'undefined' && (navigator as any).deviceMemory < 4);

        // 4. Final Verdict
        const shouldRender = isAvailable && !isKillSwitchEnabled && !isLowPower;

        setStatus({
            isAvailable,
            isKillSwitchEnabled,
            isLowPower,
            shouldRender,
        });
    }, []);

    return status;
}
