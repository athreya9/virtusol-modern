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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-48 items-center">
                        <div className="space-y-12">
                            <p className="text-2xl text-white/80 font-light leading-relaxed">
                                Not to generate more activity.<br />
                                <span className="text-white font-bold non-italic">But to help you decide what not to do.</span>
                            </p>
                        </div>
                        <div className="space-y-4 text-white uppercase tracking-[0.3em] font-bold text-sm">
                            <p>• We read markets</p>
                            <p>• We observe behavior</p>
                            <p>• We track timing</p>
                        </div>
                    </div>

                    <div className="mb-32 py-24 border-t border-white/5">
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
