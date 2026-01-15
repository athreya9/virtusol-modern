"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Sparkles, ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type Message = {
    id: string
    role: "assistant" | "user"
    content: string
    type?: "text" | "options" | "form" | "summary"
    options?: string[]
}

type LeadData = {
    name: string
    email: string
    company: string
}

export function InsightAssistant() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [inputText, setInputText] = useState("")
    const [step, setStep] = useState<"intro" | "diagnostic" | "capture" | "done">("intro")
    const [diagnosticCount, setDiagnosticCount] = useState(0)
    const [leadData, setLeadData] = useState<LeadData>({ name: "", email: "", company: "" })
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isOpen])

    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    id: "intro-1",
                    role: "assistant",
                    content: "SYSTEM INITIALIZED // VIRTUSOL CORE\n\nI am here to filter signal from noise. No sales. Only architectural clarity.",
                    type: "text",
                },
            ])
        }
    }, [])

    const handleOpen = () => {
        setIsOpen(true)
        if (step === "intro" && messages.length === 1) {
            setTimeout(() => {
                addAssistantMessage("What is the primary volatility you are attempting to stabilize?", "options", [
                    "Market Expansion",
                    "Data Integrity",
                    "Strategic Retention",
                    "Generic Noise"
                ])
                setStep("diagnostic")
            }, 800)
        }
    }

    const addAssistantMessage = (content: string, type: Message["type"] = "text", options?: string[]) => {
        setMessages((prev) => [
            ...prev,
            {
                id: Math.random().toString(36).substring(7),
                role: "assistant",
                content,
                type,
                options,
            },
        ])
    }

    const addUserMessage = (content: string) => {
        setMessages((prev) => [
            ...prev,
            {
                id: Math.random().toString(36).substring(7),
                role: "user",
                content,
            },
        ])
    }

    const handleOptionClick = (option: string) => {
        addUserMessage(option)
        handleDiagnosticFlow(option)
    }

    const handleSend = () => {
        if (!inputText.trim()) return
        addUserMessage(inputText)
        setInputText("")
        handleDiagnosticFlow(inputText)
    }

    const handleDiagnosticFlow = (input: string) => {
        if (step === "diagnostic") {
            const nextCount = diagnosticCount + 1
            setDiagnosticCount(nextCount)

            setTimeout(() => {
                if (nextCount === 1) {
                    addAssistantMessage("Acknowledge. Current operational handling?", "options", [
                        "Manual Legacy Flows",
                        "Fragmented Software",
                        "Zero Protocol",
                    ])
                } else if (nextCount === 2) {
                    addAssistantMessage("Strategic horizon?", "options", [
                        "Q1-Q2 2026",
                        "Fiscal Year End",
                        "Indefinite Discovery"
                    ])
                } else {
                    setStep("capture")
                    addAssistantMessage("Signal confirmed. We recommend architectural activation.")
                    setTimeout(() => {
                        addAssistantMessage("Submit identification for intelligence handover.", "form")
                    }, 500)
                }
            }, 600)
        }
    }

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!leadData.name || !leadData.email) return
        addUserMessage(`INITIATING HANDOVER FOR ${leadData.name.toUpperCase()}...`)
        setTimeout(() => {
            setStep("done")
            addAssistantMessage("DATA TRANSMITTED. STANDBY FOR PROTOCOL ACTIVATION.", "summary")
        }, 1000)
    }

    return (
        <div className="fixed bottom-10 right-10 z-[300] flex flex-col items-end pointer-events-none font-space-mono">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        className="mb-6 pointer-events-auto"
                    >
                        <div className="w-[320px] sm:w-[380px] h-[550px] flex flex-col bg-black border border-white/20 overflow-hidden">
                            {/* Terminal Header */}
                            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 bg-accent animate-ping" />
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-white">Core_Briefing.exe</h3>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                                    <X size={14} />
                                </button>
                            </div>

                            {/* Stream Area */}
                            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={cn(
                                            "flex w-full flex-col",
                                            msg.role === "user" ? "items-end" : "items-start"
                                        )}
                                    >
                                        <span className="text-[8px] uppercase tracking-widest text-white/20 mb-2">
                                            {msg.role === "assistant" ? ">> Core" : ">> User"}
                                        </span>
                                        <div className={cn(
                                            "p-4 text-[13px] leading-relaxed",
                                            msg.role === "user" ? "bg-white/10 text-white" : "text-white/80 border-l border-accent/40"
                                        )}>
                                            {msg.type === "summary" && (
                                                <div className="mb-2 text-accent font-bold">TRANSMISSION COMPLETE</div>
                                            )}
                                            <div className="whitespace-pre-wrap">{msg.content}</div>

                                            {msg.type === "options" && msg.options && (
                                                <div className="mt-6 grid gap-2">
                                                    {msg.options.map((opt) => (
                                                        <button
                                                            key={opt}
                                                            onClick={() => handleOptionClick(opt)}
                                                            className="text-left py-2 hover:text-accent transition-colors flex items-center gap-3 group"
                                                        >
                                                            <div className="h-1 w-1 bg-white/20 group-hover:bg-accent" />
                                                            {opt}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}

                                            {msg.type === "form" && step === "capture" && (
                                                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                                                    <input
                                                        placeholder="FULL_NAME"
                                                        value={leadData.name}
                                                        onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                                                        required
                                                        className="w-full bg-white/5 border-none p-3 text-xs placeholder:text-white/10 focus:ring-1 focus:ring-accent outline-none"
                                                    />
                                                    <input
                                                        placeholder="WORK_EMAIL"
                                                        type="email"
                                                        value={leadData.email}
                                                        onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                                                        required
                                                        className="w-full bg-white/5 border-none p-3 text-xs placeholder:text-white/10 focus:ring-1 focus:ring-accent outline-none"
                                                    />
                                                    <button type="submit" className="w-full bg-white text-black py-4 text-[10px] uppercase font-bold tracking-widest hover:bg-white/80 transition-all">
                                                        Execute Sync
                                                    </button>
                                                </form>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Input Area */}
                            {!isOpen && <div className="p-4 border-t border-white/10">
                                <span className="text-[10px] text-white/20">READY_FOR_INPUT...</span>
                            </div>}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Matrix Toggle Button */}
            <button
                onClick={isOpen ? () => setIsOpen(false) : handleOpen}
                className={cn(
                    "h-16 w-16 border border-white/20 backdrop-blur-xl flex items-center justify-center pointer-events-auto transition-all duration-700 hover:border-accent",
                    isOpen ? "bg-white text-black" : "bg-black text-white"
                )}
            >
                {isOpen ? <X size={24} strokeWidth={1} /> : <Sparkles size={24} strokeWidth={1} />}
            </button>
        </div>
    )
}
