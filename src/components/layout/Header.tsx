"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Origin", href: "/" },
    { name: "Signals", href: "/services" },
    { name: "Systems", href: "/systems" },
    { name: "Story", href: "/about" },
    { name: "Engagement", href: "/pricing" },
    { name: "Proof of Thinking", href: "/proof-of-thinking" },
    { name: "FAQ", href: "/faq" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Context-aware filtering
    const filteredNavItems = navItems.filter(item => item.href !== pathname);

    return (
        <header className="fixed top-0 z-[100] w-full bg-transparent px-8 py-10 transition-all duration-500">
            <div className="flex items-center justify-between">
                {/* Logo - Minimal & Text forward */}
                <Link href="/" className="group flex items-center gap-4">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        <img
                            src="/favicon.png"
                            alt="VirtuSol Decision Core"
                            className="w-full h-full object-contain mix-blend-screen opacity-90 group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <span className="text-3xl font-bold tracking-tighter text-white mix-blend-exclusion uppercase font-source-sans">
                        Virtusol
                    </span>
                    <span className="h-[1px] w-6 bg-white/40 group-hover:w-12 transition-all"></span>
                </Link>

                {/* Desktop Nav - Minimal Grid */}
                <nav className="hidden md:flex items-center gap-12 font-space-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                    {filteredNavItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="hover:text-white transition-colors mix-blend-exclusion"
                        >
                            {item.name}
                        </Link>
                    ))}
                    {pathname !== "/contact" && (
                        <Link href="/contact" className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-all">
                            Start a Conversation
                        </Link>
                    )}
                </nav>

                {/* Mobile & Utility */}
                <div className="flex items-center gap-8">
                    <ThemeToggle />
                    <button
                        className="p-2 text-white md:hidden mix-blend-exclusion"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Massive Typography Reveal */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 min-h-screen bg-black z-[200] flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-500 text-center px-4">
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
                    >
                        <X size={48} strokeWidth={1} />
                    </button>
                    {filteredNavItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter hover:text-accent transition-all"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    {pathname !== "/contact" && (
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-2xl font-light text-white/40 pt-12"
                        >
                            Start a Conversation
                        </Link>
                    )}
                </div>
            )}
        </header>
    );
}
