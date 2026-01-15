import { Scheduler } from "@/components/features/Scheduler";

export const metadata = {
    title: "Book a Call | VirtuSol",
    description: "Schedule a 20-minute introductory call with our growth specialists.",
};

export default function BookPage() {
    return (
        <main className="min-h-screen pt-32 pb-12 relative overflow-hidden bg-transparent transition-colors duration-500">

            <div className="container mx-auto px-4 md:px-6 mb-16 text-center relative z-10">
                <div className="inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-secondary mb-8">
                    Discovery Session
                </div>
                <h1 className="text-5xl md:text-7xl font-jakarta font-bold tracking-tighter text-foreground mb-6 leading-[0.9]">
                    Let's verify your <span className="text-gradient">potential</span>.
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                    No sales pressure. Just a 20-minute conversation to see if our matching engine aligns with your growth goals.
                </p>
            </div>

            <div className="container mx-auto px-4 animate-slide-up relative z-20">
                <Scheduler />
            </div>
        </main>
    );
}
