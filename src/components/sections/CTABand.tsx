import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTABandProps {
    title?: string;
    description?: string;
    primaryBtnText?: string;
    primaryBtnLink?: string;
    secondaryBtnText?: string;
    secondaryBtnLink?: string;
    className?: string;
}

export function CTABand({
    title = "Ready to verify your growth?",
    description = "",
    primaryBtnText = "Start a quick build",
    primaryBtnLink = "/contact",
    secondaryBtnText = "",
    secondaryBtnLink = "",
    className,
}: CTABandProps) {
    return (
        <section className={cn("w-full py-64 relative bg-transparent flex flex-col items-center justify-center", className)}>
            <div className="container mx-auto px-4 md:px-6 z-10 text-center space-y-16">
                <h2 className="text-6xl md:text-[10rem] font-bold text-white uppercase tracking-tighter leading-[0.8] mix-blend-exclusion">
                    {title}
                </h2>
                {description && (
                    <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
                        {description}
                    </p>
                )}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-16">
                    <Link href={primaryBtnLink}>
                        <Button variant="glow" size="lg" magnetic className="px-16 h-20 text-2xl font-bold uppercase tracking-widest transition-all hover:scale-110 active:scale-95">
                            {primaryBtnText}
                            <ArrowRight className="ml-4 h-8 w-8" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
