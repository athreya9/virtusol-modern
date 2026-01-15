import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
    const services = [
        {
            title: "Market Signal Engine™",
            description: "Identifies where demand is forming, where it’s fading, and where not to play.",
            slug: "market-signal-engine"
        },
        {
            title: "Decision-Maker Intel™",
            description: "Maps companies that are already deciding—not browsing.",
            slug: "decision-maker-intel"
        },
        {
            title: "Inflency Signal™",
            description: "Creator–Brand Alignment Intelligence",
            slug: "inflency"
        },
        {
            title: "Connect 1to1™",
            description: "Demand-First Vendor–Retailer Matching",
            slug: "connect-1to1"
        },
        {
            title: "Market Signal Engine™",
            description: "Where to Play. Where Not To.",
            slug: "market-signal-engine"
        },
        {
            title: "Decision-Maker Intel™",
            description: "Who Is Actually Ready to Decide",
            slug: "decision-maker-intel"
        },
        {
            title: "Revenue Motion Design™",
            description: "Design the Path Before You Walk It",
            slug: "revenue-motion-design"
        },
        {
            title: "Performance Signal Monitoring™",
            description: "Knowing When to Continue—or Stop",
            slug: "performance-signal-monitoring"
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-transparent text-white font-sans selection:bg-white selection:text-black">
            <main className="flex-1 pt-48 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">

                    {/* HERO SECTION */}
                    <div className="max-w-4xl mb-32">
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-12 mix-blend-exclusion">
                            Signals
                        </h1>
                        <div className="space-y-6">
                            <p className="text-2xl text-white font-bold leading-relaxed">
                                VirtuSol systems are not campaigns or tools.<br />
                                <span className="text-accent underline underline-offset-8">They are decision filters.</span>
                            </p>
                            <p className="text-xl text-white/50 font-light max-w-2xl leading-relaxed">
                                Each system answers a different question—but all serve the same purpose: <br />
                                <span className="text-white">reduce regret.</span>
                            </p>
                        </div>
                    </div>

                    {/* OUR SERVICES GRID */}
                    <section className="mb-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/10 border border-white/10">
                            {services.map((service, index) => (
                                <Link
                                    key={index}
                                    href={`/services/${service.slug}`}
                                    className="group relative p-12 bg-black hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden"
                                >
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 block mb-8">Protocol 0{index + 1}</span>
                                    <h3 className="text-3xl font-bold text-white uppercase tracking-tight mb-6 group-hover:text-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/40 font-light leading-relaxed mb-12">
                                        {service.description}
                                    </p>
                                    <Button variant="glow" size="sm" magnetic className="w-fit text-[10px] uppercase tracking-widest font-bold">
                                        Deep Dive
                                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
