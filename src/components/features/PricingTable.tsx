import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
    {
        name: "Starter",
        price: "$2,500",
        frequency: "/mo",
        description: "For emerging brands ready to test AI matchmaking.",
        features: [
            "Up to 5 active matches",
            "Performance dashboard",
            "Email support",
            "Monthly strategy sync",
        ],
        cta: "Start Trial",
        popular: false,
    },
    {
        name: "Growth",
        price: "$5,000",
        frequency: "/mo",
        description: "For scaling teams needing dedicated intelligence.",
        features: [
            "Unlimited matches",
            "Real-time fraud detection",
            "Dedicated account manager",
            "Weekly strategy syncs",
            "Custom reporting",
        ],
        cta: "Get Started",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        frequency: "",
        description: "Full-spectrum activation studio for global brands.",
        features: [
            "White-label dashboard",
            "API access",
            "24/7 priority support",
            "On-premise data options",
            "Custom AI model training",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export function PricingTable() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tiers.map((tier) => (
                <div
                    key={tier.name}
                    className={cn(
                        "group relative flex flex-col rounded-[2.5rem] border transition-all duration-500 overflow-hidden",
                        tier.popular
                            ? "glass-dark border-accent/40 shadow-2xl shadow-accent/10 z-10 scale-[1.05]"
                            : "glass border-border/50 hover:border-accent/20 hover:scale-[1.02]"
                    )}
                >
                    {tier.popular && (
                        <div className="absolute top-6 left-6 inline-flex items-center rounded-full bg-accent/20 border border-accent/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-md">
                            Most Popular
                        </div>
                    )}

                    <div className="p-10 pt-16">
                        <h3 className="text-2xl font-jakarta font-bold text-foreground">
                            {tier.name}
                        </h3>
                        <div className="mt-4 flex items-baseline text-foreground">
                            <span className="text-5xl font-jakarta font-bold tracking-tighter">
                                {tier.price}
                            </span>
                            <span className="ml-1 text-lg font-medium text-muted-foreground">
                                {tier.frequency}
                            </span>
                        </div>
                        <p className="mt-4 text-base text-muted-foreground font-light leading-relaxed">
                            {tier.description}
                        </p>
                    </div>

                    <div className="flex-1 p-10 pt-0">
                        <ul className="space-y-4">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center">
                                        <Check className="h-4 w-4 text-secondary" />
                                    </div>
                                    <p className="text-sm text-foreground/80 font-medium">{feature}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-12">
                            <Button
                                size="lg"
                                variant={tier.popular ? "glow" : "outline"}
                                className={cn(
                                    "w-full rounded-full h-14 text-base font-semibold transition-all",
                                    !tier.popular && "bg-background/50 hover:bg-accent/5 backdrop-blur-md border-border/80"
                                )}
                            >
                                {tier.cta}
                            </Button>
                        </div>
                    </div>

                    {/* Background Glow */}
                    <div className={cn(
                        "absolute -z-10 bottom-0 left-0 h-32 w-full blur-3xl rounded-full opacity-50",
                        tier.popular ? "bg-accent/10" : "bg-primary/5"
                    )} />
                </div>
            ))}
        </div>
    );
}
