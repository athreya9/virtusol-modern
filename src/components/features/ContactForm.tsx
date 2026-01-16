"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2, ChevronDown } from "lucide-react";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        role: "",
        decision: "",
        system: "",
        extraInfo: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // TRANSMISSION TO: kevin@virtusol.com
            // Include Timestamp, Selected System, and Full Payload
            const payload = {
                ...formData,
                timestamp: new Date().toISOString()
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            setIsSuccess(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-12 bg-white/[0.02] rounded-[2.5rem] border border-white/5 animate-in fade-in zoom-in duration-1000 backdrop-blur-3xl">
                <div className="h-20 w-20 bg-accent/10 rounded-full flex items-center justify-center mb-10 shadow-2xl shadow-accent/5">
                    <CheckCircle2 className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-tighter">
                    You took the right first step.
                </h3>
                <div className="text-white/50 max-w-lg mx-auto leading-relaxed text-lg space-y-6 font-light">
                    <p>Most teams wait until things break. You reached out when things felt unclear.</p>
                    <p>We’ll review this carefully and respond with honesty — even if that means telling you VirtuSol isn’t the right fit.</p>
                    <p className="text-white/80 font-bold uppercase tracking-widest text-xs pt-8">Expect a thoughtful reply shortly.</p>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-12 bg-white/[0.02] p-8 md:p-16 rounded-[2.5rem] border border-white/5 shadow-2xl backdrop-blur-3xl transition-all duration-700 hover:border-white/10">
            <div className="space-y-10">

                {/* Name */}
                <div className="space-y-4">
                    <Label htmlFor="name" className="text-white/30 uppercase text-[10px] tracking-[0.4em] ml-2">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-16 px-6 focus:border-accent/50 transition-colors uppercase tracking-widest text-xs"
                    />
                </div>

                {/* Work Email */}
                <div className="space-y-4">
                    <Label htmlFor="email" className="text-white/30 uppercase text-[10px] tracking-[0.4em] ml-2">Work email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-16 px-6 focus:border-accent/50 transition-colors uppercase tracking-widest text-xs"
                    />
                </div>

                {/* Company & Role Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <Label htmlFor="company" className="text-white/30 uppercase text-[10px] tracking-[0.4em] ml-2">Company</Label>
                        <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company"
                            required
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-16 px-6 focus:border-accent/50 transition-colors uppercase tracking-widest text-xs"
                        />
                    </div>
                    <div className="space-y-4">
                        <Label htmlFor="role" className="text-white/30 uppercase text-[10px] tracking-[0.4em] ml-2">Role</Label>
                        <Input
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="Role"
                            required
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-16 px-6 focus:border-accent/50 transition-colors uppercase tracking-widest text-xs"
                        />
                    </div>
                </div>

                {/* What are you trying to decide right now? */}
                <div className="space-y-4">
                    <Label htmlFor="decision" className="text-white/30 uppercase text-[10px] tracking-[0.4em] ml-2">What are you trying to decide right now?</Label>
                    <Textarea
                        id="decision"
                        name="decision"
                        value={formData.decision}
                        onChange={handleChange}
                        placeholder="Explain the context of your pause."
                        className="min-h-[160px] bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl resize-none p-6 focus:border-accent/50 transition-colors leading-relaxed"
                        required
                    />
                </div>

                {/* Which system feels closest to your situation? */}
                <div className="space-y-4 relative">
                    <Label htmlFor="system" className="text-white/30 uppercase text-[10px] tracking-[0.4em] ml-2">Which system feels closest to your situation?</Label>
                    <div className="relative">
                        <select
                            id="system"
                            name="system"
                            value={formData.system}
                            onChange={handleChange}
                            required
                            className="w-full appearance-none bg-white/5 border border-white/10 text-white rounded-xl h-16 px-6 focus:outline-none focus:border-accent/50 transition-colors uppercase tracking-widest text-[10px]"
                        >
                            <option value="" disabled className="bg-black text-white/50">Select a system...</option>
                            <option value="Inflency Signal™ (Creators & Brands)" className="bg-black text-white">Inflency Signal™ (Creators & Brands)</option>
                            <option value="Connect 1to1™ (Vendors & Retailers)" className="bg-black text-white">Connect 1to1™ (Vendors & Retailers)</option>
                            <option value="Market Signal Engine™" className="bg-black text-white">Market Signal Engine™</option>
                            <option value="Decision-Maker Intel™" className="bg-black text-white">Decision-Maker Intel™</option>
                            <option value="Revenue Motion Design™" className="bg-black text-white">Revenue Motion Design™</option>
                            <option value="Performance Signal Monitoring™" className="bg-black text-white">Performance Signal Monitoring™</option>
                            <option value="Not sure yet" className="bg-black text-white">Not sure yet</option>
                            <option value="Other" className="bg-black text-white">Other</option>
                        </select>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
                    </div>
                </div>

                {/* Anything else we should know? */}
                <div className="space-y-4">
                    <Label htmlFor="extraInfo" className="text-white/30 uppercase text-[10px] tracking-[0.4em] ml-2">Anything else we should know? (Optional)</Label>
                    <Textarea
                        id="extraInfo"
                        name="extraInfo"
                        value={formData.extraInfo}
                        onChange={handleChange}
                        placeholder="Additional details or specific constraints."
                        className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl resize-none p-6 focus:border-accent/50 transition-colors leading-relaxed"
                    />
                </div>

            </div>

            <Button type="submit" variant="glow" magnetic className="w-full h-20 text-xs font-bold uppercase tracking-[0.3em] rounded-xl" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                        Transmitting Signal...
                    </>
                ) : (
                    "Submit Signal intake"
                )}
            </Button>
        </form>
    );
}
