"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import gsap from "gsap"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                // New Premium Variant: Refractive/Scanning
                glow: "bg-black text-white border border-white/10 hover:border-white/40 shadow-[0_0_20px_-5px_hsla(var(--accent),0.3)]",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-20 px-12 text-xl font-bold uppercase tracking-[0.2em]",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    magnetic?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, magnetic = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        const innerRef = React.useRef<HTMLButtonElement>(null)
        const timeline = React.useRef<gsap.core.Timeline | null>(null)

        // Combine refs
        React.useImperativeHandle(ref, () => innerRef.current!)

        const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (!magnetic || !innerRef.current) return

            const { clientX, clientY } = e
            const { left, top, width, height } = innerRef.current.getBoundingClientRect()

            const x = clientX - (left + width / 2)
            const y = clientY - (top + height / 2)

            gsap.to(innerRef.current, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.6,
                ease: "power2.out",
            })
        }

        const handleMouseLeave = () => {
            if (!magnetic || !innerRef.current) return
            gsap.to(innerRef.current, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "elastic.out(1, 0.3)",
            })
        }

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={innerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                {...props}
            >
                {/* Refractive Scanning Border (for glow variant) */}
                {variant === "glow" && (
                    <span className="absolute inset-0 pointer-events-none">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-scan" />
                        <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent translate-x-[100%] group-hover:-translate-x-[100%] transition-transform duration-1000" />
                    </span>
                )}
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
