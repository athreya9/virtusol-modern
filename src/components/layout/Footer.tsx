import Link from "next/link";
import { cn } from "@/lib/utils";
import { Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-black pt-24 pb-12 relative overflow-hidden text-white">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">

                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2 group">
                            <span className="text-2xl font-bold tracking-[0.3em] uppercase mix-blend-exclusion">VirtuSol</span>
                        </Link>
                        <p className="text-white/40 text-sm max-w-xs leading-relaxed font-light uppercase tracking-widest">
                            Synthesizing raw market signals into strategic growth protocols. Architecting clarity in an AI-saturated world.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="font-bold text-white mb-8 uppercase tracking-[0.4em] text-[10px] opacity-30">How It Works</h3>
                        <ul className="space-y-4 text-xs tracking-[0.2em] uppercase font-light">
                            <li><Link href="/" className="text-white/50 hover:text-white transition-colors">Origin</Link></li>
                            <li><Link href="/services" className="text-white/50 hover:text-white transition-colors">Signals</Link></li>
                            <li><Link href="/book" className="text-white/50 hover:text-white transition-colors">Systems</Link></li>
                            <li><Link href="/about" className="text-white/50 hover:text-white transition-colors">Story</Link></li>
                            <li><Link href="/pricing" className="text-white/50 hover:text-white transition-colors">Engagement</Link></li>
                            <li><Link href="/proof-of-thinking" className="text-white/50 hover:text-white transition-colors">Proof of Thinking</Link></li>
                            <li><Link href="/faq" className="text-white/50 hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Where We Are Column (Quiet) */}
                    <div>
                        <h3 className="font-bold text-white mb-8 uppercase tracking-[0.4em] text-[10px] opacity-30">Where We Are</h3>
                        <div className="space-y-4 text-xs tracking-widest uppercase text-white/40 font-light leading-relaxed">
                            <p>92 Park Groton Pl, <br />San Jose, CA 95136</p>
                            <p>+1(408)657.7085</p>
                            <p>kevin@virtusol.com</p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold text-white/20 uppercase tracking-[0.4em]">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <p>© {new Date().getFullYear()} VirtuSol Logic.</p>
                        <Link href="/contact" className="text-white/40 hover:text-white transition-colors border-l border-white/10 pl-8">Start a Conversation</Link>
                    </div>
                    <div className="flex gap-12">
                        <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
