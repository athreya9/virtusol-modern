"use client";

import React, { useRef, useMemo, useLayoutEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Float, MeshDistortMaterial, Sphere, Points, PointMaterial } from "@react-three/drei";
import { CinematicLens } from "./CinematicLens";
import { useWebGLStatus } from "@/hooks/use-webgl-status";

gsap.registerPlugin(ScrollTrigger);

/**
 * Liquid Bubble Component
 * Reactive spheres with high distortion and vibrancy.
 */
function LiquidBubble({ position, size, color, speed, distort, delay, isLowPower }: any) {
    const meshRef = useRef<THREE.Mesh>(null);
    const mouse = useRef({ x: 0, y: 0 });

    const initialPos = useMemo(() => new THREE.Vector3(...position), [position]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime() + delay;
        if (meshRef.current) {
            // 1. Harmonic floating motion (subtle)
            const floatY = Math.sin(time) * 0.1;
            const floatX = Math.cos(time * 0.5) * 0.05;

            // 2. Mouse Interaction (Repulsion)
            const targetX = (state.mouse.x * state.viewport.width) / 2;
            const targetY = (state.mouse.y * state.viewport.height) / 2;

            const dx = meshRef.current.position.x - targetX;
            const dy = meshRef.current.position.y - targetY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Repulsion force
            const repulsionStrength = 0.5;
            if (dist < 4 && dist > 0.1) {
                meshRef.current.position.x += (dx / dist) * 0.02 * repulsionStrength;
                meshRef.current.position.y += (dy / dist) * 0.02 * repulsionStrength;
            }

            // 3. Spring back to initial position + floating offset
            meshRef.current.position.x += (initialPos.x + floatX - meshRef.current.position.x) * 0.02;
            meshRef.current.position.y += (initialPos.y + floatY - meshRef.current.position.y) * 0.02;
            meshRef.current.position.z += (initialPos.z - meshRef.current.position.z) * 0.02;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[size, isLowPower ? 32 : 64, isLowPower ? 32 : 64]} position={position}>
                <MeshDistortMaterial
                    color="#000000"
                    speed={speed * 2}
                    distort={distort}
                    radius={1}
                    emissive={color}
                    emissiveIntensity={0.8}
                    roughness={0.1}
                    metalness={0.9}
                />
            </Sphere>
        </Float>
    );
}

/**
 * Atmospheric Particle Field
 */
function ParticleField() {
    const points = useMemo(() => {
        const p = new Float32Array(500 * 3);
        for (let i = 0; i < 500; i++) {
            p[i * 3] = (Math.random() - 0.5) * 20;
            p[i * 3 + 1] = (Math.random() - 0.5) * 20;
            p[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return p;
    }, []);

    const pointsRef = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <Points ref={pointsRef} positions={points} stride={3}>
            <PointMaterial
                transparent
                color="#2F80ED"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

function GridFloor() {
    return (
        <gridHelper args={[100, 50, "#2F80ED", "#0B1B2B"]} position={[0, -5, 0]} />
    );
}

function SceneContent({ core }: { core: any }) {
    const { viewport, camera } = useThree();

    // Adaptive FOV based on aspect ratio
    // If height > width (mobile portrait), we increase FOV to keep the core centered and visible
    useLayoutEffect(() => {
        if (camera instanceof THREE.PerspectiveCamera) {
            const aspect = viewport.width / viewport.height;
            if (aspect < 1) {
                camera.fov = 65; // Wide for mobile
            } else {
                camera.fov = 45; // Standard for desktop
            }
            camera.updateProjectionMatrix();
        }
    }, [viewport, camera]);

    return (
        <>
            <color attach="background" args={["#000000"]} />
            <fog attach="fog" args={["#000000", 5, 20]} />

            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 10]} intensity={3} color="#2F80ED" />
            <pointLight position={[-10, -10, -10]} intensity={1.5} color="#2ECC71" />

            <LiquidBubble {...core} />

            <ParticleField />
            <GridFloor />

            <CinematicLens />
        </>
    );
}

export function AmbientScene() {
    const { isLowPower } = useWebGLStatus();

    // Single massive "Decision Core" bubble
    const core = {
        position: [0, 0, -2],
        size: 1.6,
        color: "#2F80ED",
        speed: 1.0,
        distort: 0.5,
        delay: 0,
        isLowPower // Pass hint to sub-component
    };

    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <Canvas
                gl={{ alpha: true, antialias: true, stencil: false, depth: true }}
                dpr={[1, 2]}
                camera={{ position: [0, 0, 8], fov: 45 }}
            >
                <SceneContent core={core} />
            </Canvas>
        </div>
    );
}
