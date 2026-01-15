import { Calendar, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Scheduler() {
    return (
        <div className="w-full max-w-5xl mx-auto glass rounded-[2.5rem] shadow-2xl border border-border/50 overflow-hidden flex flex-col md:flex-row h-auto md:h-[650px] relative z-20">
            {/* Sidebar Info */}
            <div className="md:w-[35%] bg-muted/30 p-10 border-r border-border/50 flex flex-col gap-8 backdrop-blur-xl">
                <div>
                    <div className="h-16 w-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-inner mb-6">
                        <span className="text-3xl font-bold font-jakarta text-accent">V</span>
                    </div>
                    <h3 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Discovery Session</h3>
                    <h2 className="text-3xl font-bold text-foreground font-jakarta leading-tight">Growth Match Verification</h2>
                </div>

                <div className="flex flex-col gap-6 text-muted-foreground">
                    <div className="flex items-center gap-4 group">
                        <div className="p-2 rounded-lg bg-background/50 border border-border/50">
                            <Clock className="h-5 w-5 text-accent" />
                        </div>
                        <span className="font-semibold text-foreground/80">45 Minute Deep Dive</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="p-2 rounded-lg bg-background/50 border border-border/50">
                            <Calendar className="h-5 w-5 text-secondary" />
                        </div>
                        <span className="font-semibold text-foreground/80">Video Conference</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="p-2 rounded-lg bg-background/50 border border-border/50">
                            <Globe className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <span className="font-semibold text-xs font-mono">GMT +05:30 (IST)</span>
                    </div>
                </div>

                <div className="mt-auto space-y-4">
                    <div className="h-px w-full bg-border/50" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        By booking, you agree to our <span className="text-foreground underline underline-offset-2">Privacy Policy</span> and <span className="text-foreground underline underline-offset-2">Terms of Service</span>.
                    </p>
                </div>
            </div>

            {/* Calendar Area (Mock) */}
            <div className="flex-1 p-10 md:p-14 overflow-y-auto bg-background/20 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-foreground font-jakarta mb-10 tracking-tight">Select your window</h3>

                <div className="grid grid-cols-7 gap-3 mb-10 text-center">
                    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
                        <div key={d} className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">{d}</div>
                    ))}
                    {Array.from({ length: 31 }).map((_, i) => (
                        <button
                            key={i}
                            className={`group h-12 w-12 rounded-2xl flex items-center justify-center text-sm font-semibold transition-all duration-300 relative
                ${i === 14
                                    ? 'bg-accent text-white shadow-xl shadow-accent/20 border-glow'
                                    : 'hover:bg-accent/10 text-foreground/70 hover:text-accent border border-transparent hover:border-accent/20'}
              `}
                        >
                            {i + 1}
                            {i === 14 && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white" />}
                        </button>
                    ))}
                </div>

                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Available Times</h4>
                        <span className="text-xs font-medium text-accent">Showing next available</span>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {['09:00 AM', '10:30 AM', '02:00 PM', '04:15 PM'].map(time => (
                            <button key={time} className="w-full py-4 px-6 rounded-2xl border border-border/50 bg-background/40 hover:bg-accent hover:border-accent hover:text-white transition-all font-semibold font-jakarta shadow-sm active:scale-95">
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
