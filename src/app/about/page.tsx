import { CTABand } from "@/components/sections/CTABand";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col bg-transparent text-white font-sans selection:bg-white selection:text-black">
            <main className="flex-1 pt-48 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
                    <div className="mb-32">
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-12 mix-blend-exclusion">
                            The Moment <br /> Before Action
                        </h1>
                        <p className="text-2xl text-white font-bold max-w-2xl leading-relaxed mb-12">
                            Most companies don’t fail at execution.<br />
                            They fail earlier.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-48">
                        <div className="space-y-8 text-xl text-white/60 font-light leading-relaxed">
                            <p>They act when signals are weak.</p>
                            <p>They partner when alignment is missing.</p>
                            <p>They scale what hasn’t been proven.</p>
                        </div>
                        <div className="space-y-8 text-xl text-white/60 font-light leading-relaxed border-l border-white/10 pl-12">
                            <p>We’ve watched brands burn trust.</p>
                            <p>Creators lose credibility.</p>
                            <p>Vendors pitch into silence.</p>
                        </div>
                    </div>

                    <div className="mb-48 max-w-3xl">
                        <p className="text-3xl md:text-4xl text-white font-bold leading-tight mb-12">
                            Not because people weren’t talented—<br />
                            but because no one paused to ask:<br />
                            <span className="text-accent">“Is this the right move right now?”</span>
                        </p>
                        <p className="text-2xl text-white/50 font-light leading-relaxed">
                            VirtuSol was built for that pause.
                        </p>
                    </div>

                    {/* NEW SECTION – HUMAN GROUNDING */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-48">
                        <div className="space-y-12">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">Human Grounding</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9] text-white mix-blend-exclusion">
                                AI has no <br /> Skin in the Game
                            </h2>
                        </div>
                        <div className="space-y-12 text-xl font-light leading-relaxed text-white/50">
                            <p>
                                Every algorithm can generate an answer. None can feel the weight of the consequences.
                            </p>
                            <p>
                                VirtuSol rejects autonomous decision-making. We believe in <span className="text-white font-bold">Augmented Judgment</span>—using the raw processing power of machines to illuminate the path, so that human intuition can finally see clearly.
                            </p>
                        </div>
                    </div>

                    {/* NEW SECTION – ORIGIN NARRATIVE */}
                    <div className="mb-48 py-24 border-y border-white/5">
                        <div className="max-w-3xl space-y-12">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block">Origin</span>
                            <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed italic">
                                "We started VirtuSol because we were tired of watching high-potential founders be suffocated by their own noise. We wanted to build a sanctuary for clarity."
                            </p>
                            <p className="text-lg text-white/40 font-light">
                                Founded on the principle that complexity is a choice, not an inevitability. We exist to simplify the equation of growth by architecting the signals that matter most.
                            </p>
                        </div>
                    </div>

                    <div className="mb-32">
                        <p className="text-3xl md:text-5xl text-white font-bold mb-12 uppercase tracking-tighter">
                            And when signals align,<br />
                            action becomes calm instead of frantic.
                        </p>
                        <p className="text-xl text-white/30 tracking-[0.4em] uppercase font-mono">
                            That’s our work.
                        </p>
                    </div>

                    <CTABand
                        title=""
                        description=""
                        primaryBtnText="Explore how our signal systems work →"
                        primaryBtnLink="/services"
                        className="bg-transparent border-none text-white py-24 px-0"
                    />

                </div>
            </main>
        </div>
    );
}
