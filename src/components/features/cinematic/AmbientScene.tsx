"use client";

import React, { useRef, useMemo, useLayoutEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Float, MeshDistortMaterial, Sphere, Points, PointMaterial } from "@react-three/drei";
import { CinematicLens } from "./CinematicLens";

gsap.registerPlugin(ScrollTrigger);

/**
 * Liquid Bubble Component
 * Reactive spheres with high distortion and vibrancy.
 */
function LiquidBubble({ position, size, color, speed, distort, delay }: any) {
    const meshRef = useRef<THREE.Mesh>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useFrame((state) => {
        const time = state.clock.getElapsedTime() + delay;
        if (meshRef.current) {
            // Harmonic floating motion
            meshRef.current.position.y += Math.sin(time) * 0.002;
            meshRef.current.position.x += Math.cos(time * 0.5) * 0.001;

            // Mouse Repulsion/Magnetism logic
            const targetX = (state.mouse.x * state.viewport.width) / 2;
            const targetY = (state.mouse.y * state.viewport.height) / 2;

            const dx = meshRef.current.position.x - targetX;
            const dy = meshRef.current.position.y - targetY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 3) {
                meshRef.current.position.x += dx * 0.01;
                meshRef.current.position.y += dy * 0.01;
            }
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
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

export function AmbientScene() {
    // Single massive "Decision Core" bubble
    const core = {
        position: [0, 0, -2],
        size: 1.6,
        color: "#2F80ED",
        speed: 1.0,
        distort: 0.5,
        delay: 0
    };

    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <Canvas
                gl={{ alpha: true, antialias: true, stencil: false, depth: true }}
                dpr={[1, 2]}
                camera={{ position: [0, 0, 8], fov: 45 }}
            >
                <color attach="background" args={["#000000"]} />
                <fog attach="fog" args={["#000000", 5, 20]} />

                <ambientLight intensity={0.1} />
                <pointLight position={[10, 10, 10]} intensity={3} color="#2F80ED" />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#2ECC71" />

                <LiquidBubble {...core} />

                <ParticleField />
                <GridFloor />

                <CinematicLens />
            </Canvas>
        </div>
    );
}
