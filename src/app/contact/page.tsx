import { ContactForm } from "@/components/features/ContactForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Start a Conversation | VirtuSol Decision Intelligence",
    description: "Connect with the VirtuSol team to discuss your strategic priorities and decision signals.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-48 pb-24 relative overflow-hidden bg-transparent transition-colors duration-500 selection:bg-white selection:text-black">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* CINEMATIC PRELUDE */}
                    <div className="max-w-3xl mb-32 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="space-y-6 text-xl md:text-2xl font-light text-white/50 leading-relaxed italic">
                            <p>Sometimes the hardest part isn’t deciding what to do. It’s admitting something feels unclear.</p>
                            <p>Most teams keep moving because stopping feels risky. But many regrets start with momentum, not hesitation.</p>
                            <p>This space exists for the moment before action — when you want to think, not rush.</p>
                        </div>
                    </div>

                    {/* PAGE HEADER */}
                    <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-8">
                            <div className="space-y-8">
                                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mix-blend-exclusion">
                                    Start a <br /> Conversation
                                </h1>
                                <p className="text-2xl text-accent font-light max-w-2xl leading-relaxed uppercase tracking-widest text-sm">
                                    Begin with context, not commitment.
                                </p>
                            </div>

                            <Link href="/book" className="group">
                                <Button variant="glow" size="lg" magnetic className="h-24 px-10 rounded-2xl border-white/10 hover:border-accent/40 bg-white/[0.02]">
                                    <div className="flex flex-col items-start gap-1 text-left">
                                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Priority Access</span>
                                        <span className="text-sm uppercase tracking-[0.2em] text-white group-hover:text-accent transition-colors">Secure Exclusive Timing</span>
                                    </div>
                                    <ArrowRight className="ml-6 h-5 w-5 text-accent animate-pulse" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* TOP SECTION CONTENT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                        <div className="space-y-8">
                            <p className="text-2xl md:text-3xl font-bold leading-tight">
                                This is not a sales call. And it’s not a form for urgent requests.
                            </p>
                            <p className="text-xl text-white/40 font-light leading-relaxed">
                                This is where you explain:
                            </p>
                            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/70">
                                <li>• What feels unclear</li>
                                <li>• What decision you’re approaching</li>
                                <li>• What you want to avoid getting wrong</li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-end">
                            <p className="text-xl text-white/50 font-light leading-relaxed">
                                If VirtuSol is relevant, we’ll say so. If not, we’ll tell you that too.
                            </p>
                        </div>
                    </div>

                    {/* FORM SECTION */}
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
