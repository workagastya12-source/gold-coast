"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Message = {
  role: "bot" | "user";
  text: string;
};

type Step =
  | "greeting"
  | "engine_brand"
  | "service_type"
  | "boat_location"
  | "summary";

const STEPS: Record<Step, { question: string; options?: string[] }> = {
  greeting: {
    question:
      "G'day! 👋 I'm the Gold Coast Mobile Marine assistant. I can help you get a quick quote or book a service. What's your engine brand?",
    options: [
      "Yamaha",
      "Mercury",
      "Suzuki",
      "Honda",
      "Volvo Penta",
      "Mercruiser",
      "Yanmar",
      "Other",
    ],
  },
  engine_brand: {
    question: "Got it! Is this a routine service or a breakdown / urgent repair?",
    options: [
      "Routine Service",
      "Breakdown / Urgent",
      "Pre-Purchase Inspection",
      "Engine Repower",
      "Insurance Repair",
    ],
  },
  service_type: {
    question: "Perfect. Where is your boat located right now?",
    options: [
      "Broadwater / Southport",
      "Runaway Bay Marina",
      "Coomera / Hope Island",
      "Sanctuary Cove",
      "At home / garage",
      "Other location",
    ],
  },
  boat_location: {
    question: "", // dynamically generated
  },
  summary: {
    question: "",
  },
};

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<Step>("greeting");
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState<{
    engineBrand?: string;
    serviceType?: string;
    boatLocation?: string;
  }>({});
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Kick off greeting when chat opens for the first time
  useEffect(() => {
    if (open && !started) {
      setStarted(true);
      setTimeout(() => {
        setMessages([{ role: "bot", text: STEPS.greeting.question }]);
        setStep("engine_brand");
      }, 400);
    }
  }, [open, started]);

  const addMessage = (role: "bot" | "user", text: string) => {
    setMessages((prev) => [...prev, { role, text }]);
  };

  const handleOption = (option: string) => {
    addMessage("user", option);

    if (step === "engine_brand") {
      setAnswers((a) => ({ ...a, engineBrand: option }));
      setTimeout(() => {
        addMessage("bot", STEPS.engine_brand.question);
        setStep("service_type");
      }, 500);
    } else if (step === "service_type") {
      setAnswers((a) => ({ ...a, serviceType: option }));
      setTimeout(() => {
        addMessage("bot", STEPS.service_type.question);
        setStep("boat_location");
      }, 500);
    } else if (step === "boat_location") {
      const newAnswers = { ...answers, boatLocation: option };
      setAnswers(newAnswers);
      setTimeout(() => {
        const isUrgent = newAnswers.serviceType
          ?.toLowerCase()
          .includes("breakdown");
        const summary = isUrgent
          ? `Thanks! Here's what I've got:\n\n🔧 Engine: ${newAnswers.engineBrand}\n🚨 Type: ${newAnswers.serviceType}\n📍 Location: ${option}\n\nFor a breakdown we recommend calling us directly for the fastest response. Our team is standing by!`
          : `Thanks! Here's what I've got:\n\n🔧 Engine: ${newAnswers.engineBrand}\n🛠️ Service: ${newAnswers.serviceType}\n📍 Location: ${option}\n\nWe'll have someone contact you shortly to confirm a time. Or call us now for an immediate quote!`;
        addMessage("bot", summary);
        setStep("summary");
      }, 500);
    }
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    addMessage("user", text);
    setTimeout(() => {
      addMessage(
        "bot",
        "Thanks for the info! One of our team will follow up shortly. For urgent help, call us directly on (07) 5555 5555."
      );
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const currentOptions =
    step === "engine_brand"
      ? STEPS.greeting.options
      : step === "service_type"
      ? STEPS.engine_brand.options
      : step === "boat_location"
      ? STEPS.service_type.options
      : [];

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip */}
        {!open && (
          <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg animate-bounce">
            Get a Free Quote!
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close chat" : "Open chat assistant"}
          className={cn(
            "relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300",
            open
              ? "bg-foreground text-background rotate-0"
              : "bg-accent text-accent-foreground hover:scale-110"
          )}
        >
          {/* Pulse ring */}
          {!open && (
            <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
          )}
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col rounded-2xl shadow-2xl border border-border overflow-hidden bg-background">
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{
              background:
                "linear-gradient(135deg, hsl(215,60%,16%) 0%, hsl(200,70%,24%) 100%)",
            }}
          >
            <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm leading-tight">
                GCMM Assistant
              </p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-white/60 text-xs">Online now</p>
              </div>
            </div>
            <a href="tel:+61755555555">
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-bold h-8 px-3 gap-1"
              >
                <Phone className="w-3 h-3" /> Call
              </Button>
            </a>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72 bg-secondary/30">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "flex gap-2 items-end",
                  m.role === "user" ? "flex-row-reverse" : "flex-row"
                )}
              >
                {/* Avatar */}
                <div
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
                    m.role === "bot"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground"
                  )}
                >
                  {m.role === "bot" ? (
                    <Bot className="w-4 h-4" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                </div>

                {/* Bubble */}
                <div
                  className={cn(
                    "max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line",
                    m.role === "bot"
                      ? "bg-background border border-border text-foreground rounded-bl-sm"
                      : "bg-primary text-primary-foreground rounded-br-sm"
                  )}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick-reply options */}
          {currentOptions && currentOptions.length > 0 && step !== "summary" && (
            <div className="px-3 py-2 border-t border-border bg-background flex flex-wrap gap-1.5">
              {currentOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOption(opt)}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* CTA after summary */}
          {step === "summary" && (
            <div className="px-3 py-3 border-t border-border bg-background flex gap-2">
              <a href="tel:+61755555555" className="flex-1">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs gap-1.5 h-9">
                  <Phone className="w-3.5 h-3.5" /> Call Now
                </Button>
              </a>
              <a href="/contact#booking" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full text-xs font-bold h-9 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Book Online
                </Button>
              </a>
            </div>
          )}

          {/* Free-text input */}
          {step !== "summary" && (
            <div className="flex items-center gap-2 px-3 py-3 border-t border-border bg-background">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Or type your question…"
                className="flex-1 text-sm px-3 py-2 rounded-xl border border-input bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
