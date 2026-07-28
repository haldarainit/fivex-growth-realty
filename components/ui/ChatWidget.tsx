'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const BOT_REPLIES: Record<string, string> = {
  default: "Hi there! 👋 I'm FIVEX's virtual assistant. I can help you with property inquiries, pricing, or connect you with our experts. What are you looking for today?",
  hello: "Hello! Welcome to FIVEX Growth Realty. How can I assist you today? Are you looking to buy, invest, or just explore options?",
  hi: "Hi! Great to have you here. Are you looking for residential properties, commercial spaces, or investment opportunities?",
  residential: "Excellent choice! We have a curated portfolio of luxury apartments, villas, and penthouses. Key locations: Sector 150 Noida, Golf Course Rd Gurgaon. Want me to connect you with our residential advisor?",
  commercial: "We specialize in Grade-A commercial spaces in prime locations. Would you like information on office spaces, retail, or IT parks? Our commercial team can arrange a free site visit.",
  price: "Our residential portfolio starts from ₹50 Lakhs (plots) to ₹10 Cr+ (luxury villas). Commercial from ₹1.5 Cr onwards. Shall I share specific options in your budget?",
  location: "We cover Noida, Greater Noida, Gurgaon, Delhi NCR, and Mumbai. Which city are you interested in?",
  noida: "Noida is one of our strongest markets! Hot sectors right now: 150, 143, 137, and Noida Extension. 15-18% annual appreciation potential. Want details?",
  gurgaon: "Gurgaon/Gurugram offers excellent rental yields of 4.5-6%. Golf Course Extension and Dwarka Expressway are our top picks. Want to explore?",
  contact: "Our team is available Mon-Sat, 9 AM - 7 PM. You can call us at +91 98765 43210 or email info@fivexgrowthrealty.com. Would you like us to call you back?",
  rera: "All our listed projects are RERA-registered. We verify each project through our proprietary 42-point checklist. Your investment is safe with FIVEX.",
  loan: "We have partnerships with HDFC, ICICI, SBI, Axis, and Kotak for home loans. We can help you get the best rates. Want a loan consultation?",
};

function getBotReply(message: string): string {
  const lower = message.toLowerCase();
  for (const [key, reply] of Object.entries(BOT_REPLIES)) {
    if (key !== 'default' && lower.includes(key)) return reply;
  }
  return BOT_REPLIES.default;
}

function formatTime(date: Date) {
  return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
}

const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-4 py-3 bg-gray-100 rounded-2xl rounded-bl-none w-fit">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'bot',
      text: BOT_REPLIES.default,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: text.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate bot thinking (replace with real API call)
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 800));
    setIsTyping(false);

    const botMsg: Message = {
      id: `b-${Date.now()}`,
      role: 'bot',
      text: getBotReply(text),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botMsg]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const quickReplies = ['Residential', 'Commercial', 'Pricing', 'Locations', 'Contact'];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-[340px] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ height: '520px' }}
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border-2 border-secondary/40">
                <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>support_agent</span>
              </div>
              <div className="flex-1">
                <p className="font-display font-bold text-white text-sm">FIVEX Assistant</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/60 text-xs">Online · Usually replies instantly</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] space-y-1`}>
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-primary text-white rounded-br-none'
                          : 'bg-white text-gray-700 rounded-bl-none shadow-sm border border-gray-100'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <p className={`text-[10px] text-gray-400 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <TypingIndicator />
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div className="px-4 py-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto no-scrollbar">
              {quickReplies.map((r) => (
                <button
                  key={r}
                  onClick={() => sendMessage(r)}
                  className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full border border-secondary/30 text-secondary hover:bg-secondary hover:text-primary transition-all font-medium"
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="px-4 py-3 bg-white border-t border-gray-100 flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-200 focus:border-secondary/50 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-primary hover:brightness-110 transition-all disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative w-14 h-14 rounded-full bg-primary shadow-2xl flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform chat-pulse"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isOpen ? 'close' : 'open'}
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="material-symbols-outlined text-secondary text-2xl"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            {isOpen ? 'close' : 'chat'}
          </motion.span>
        </AnimatePresence>

        {/* Unread badge */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-secondary text-primary text-[10px] font-bold flex items-center justify-center">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
}
