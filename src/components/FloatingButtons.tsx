"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function FloatingButtons() {
    const [isVisible, setIsVisible] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        setMounted(true);
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const toggleChat = () => setIsChatOpen(!isChatOpen);

    // Zlij Moroccan Theme Colors
    const themeColor = "#054A29"; // Zlij Emerald
    const accentColor = "#C5A059"; // Zlij Gold

    const t = {
        title: "Support Zlij Moroccan",
        status: "En ligne",
        description: "Bonjour ! Comment pouvons-nous vous aider aujourd'hui ?",
        role: "Service Client",
        tooltip_title: "Besoin d'aide ?",
        tooltip_sub: "Discutez avec nous sur WhatsApp"
    };

    if (!mounted) return null;

    return (
        <>
            {/* Scroll to Top with Progress */}
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.5,
                }}
                onClick={scrollToTop}
                className="fixed bottom-28 right-8 z-50 flex items-center justify-center p-0 bg-transparent rounded-full group cursor-pointer"
                aria-label="Retour en haut"
            >
                <div className="relative flex items-center justify-center w-14 h-14">
                    {/* SVG Circle Progress */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                        {/* Background circle */}
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="text-slate-200"
                        />
                        {/* Progress circle */}
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                            stroke={accentColor}
                            strokeWidth="4"
                            strokeDasharray="0 1"
                            style={{ pathLength: scaleProgress }}
                            className="drop-shadow-[0_0_8px_rgba(197,160,89,0.4)]"
                        />
                    </svg>

                    {/* Icon */}
                    <div className="relative z-10 text-primary transition-transform duration-300 group-hover:-translate-y-1">
                        <ArrowUp size={24} />
                    </div>

                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-secondary/0 group-hover:bg-secondary/5 transition-colors duration-300" />
                </div>
            </motion.button>

            {/* WhatsApp Chat Section */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleChat}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        className="fixed bottom-24 md:bottom-28 right-4 md:right-8 z-[999] w-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    >
                        <div className="p-6 text-white" style={{ background: `linear-gradient(135deg, ${themeColor} 0%, #03351d 100%)` }}>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-2 rounded-full backdrop-blur-md">
                                    <FaWhatsapp size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-playfair">{t.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        <span className="text-xs text-white/80">{t.status}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">
                            <p className="text-slate-500 text-sm leading-relaxed">{t.description}</p>
                            <a
                                href="https://wa.me/212661690413?text=Bonjour%20Zlij%20Moroccan%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20collections%20de%20zellige%20authentique."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-4 rounded-xl border border-gray-100 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg" style={{ backgroundColor: themeColor }}>
                                        ZM
                                    </div>
                                    <div>
                                        <span className="block font-bold text-text-dark">Zlij Moroccan</span>
                                        <span className="text-xs text-slate-400">{t.role}</span>
                                    </div>
                                </div>
                                <FaWhatsapp size={24} style={{ color: themeColor }} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main WhatsApp Trigger Button */}
            <div className="fixed bottom-8 right-8 z-[999]">
                <motion.button
                    onClick={toggleChat}
                    className="relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white overflow-hidden cursor-pointer"
                    style={{ background: isChatOpen ? '#ef4444' : `linear-gradient(135deg, ${themeColor} 0%, #03351d 100%)` }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ rotate: isChatOpen ? 0 : [0, -5, 5, -5, 0] }}
                    transition={{ rotate: { duration: 2, repeat: isChatOpen ? 0 : Infinity, repeatDelay: 3 } }}
                >
                    {isChatOpen ? <FaTimes size={28} /> : <FaWhatsapp size={28} />}
                </motion.button>
            </div>

            {/* Tooltip */}
            <AnimatePresence>
                {!isChatOpen && (
                    <motion.div
                        className="fixed bottom-10 right-20 md:right-24 z-40 bg-white/90 backdrop-blur-md py-2 px-4 rounded-xl shadow-xl border border-gray-100 hidden md:block"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="text-primary font-bold text-sm tracking-wide">{t.tooltip_title}</div>
                        <div className="text-slate-500 text-xs">{t.tooltip_sub}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
