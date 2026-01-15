"use client";

import { EffectComposer, Noise, ChromaticAberration, Vignette, Bloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Vector2 } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

/**
 * CinematicLens implements the 'Lusion' post-processing stack.
 * Adds grain, edge distortion, and dynamic chromatic aberration.
 */
export function CinematicLens() {
    const abRef = useRef<any>(null);
    const [offset] = useState(() => new Vector2(0, 0));

    useFrame((state) => {
        // Dynamic aberration based on time and a bit of 'jitter'
        const time = state.clock.getElapsedTime();
        const intensity = 0.0015 + Math.sin(time * 2) * 0.0005;
        if (abRef.current) {
            abRef.current.offset.set(intensity, intensity);
        }
    });

    return (
        <EffectComposer disableNormalPass>
            <Noise
                opacity={0.12}
                premultiply
                blendFunction={BlendFunction.SCREEN}
            />
            <ChromaticAberration
                ref={abRef}
                offset={offset}
                radialModulation={true}
                modulationOffset={0.5}
            />
            <Bloom
                intensity={0.6}
                luminanceThreshold={0.85}
                luminanceSmoothing={0.1}
            />
            <Vignette
                eskil={false}
                offset={0.4}
                darkness={0.8}
            />
        </EffectComposer>
    );
}
