"use client";

import { useState, useEffect, useMemo } from "react";

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

        // 3. Performance Hint (Low Memory)
        // We use this as a hint, not a hard block for mobile anymore.
        const isLowPower =
            (typeof (navigator as any).deviceMemory !== 'undefined' && (navigator as any).deviceMemory < 4);

        // 4. Final Verdict
        // Mobile is no longer blocked by default. We only block if WebGL is unavailable or kill switch is active.
        const shouldRender = isAvailable && !isKillSwitchEnabled;

        setStatus({
            isAvailable,
            isKillSwitchEnabled,
            isLowPower,
            shouldRender,
        });
    }, []);

    const memoizedStatus = useMemo(() => status, [status]);

    return memoizedStatus;
}
