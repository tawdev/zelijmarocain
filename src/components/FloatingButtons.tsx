"use client";

import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, [showScroll]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[999]">
            {/* Scroll to Top Button */}
            {showScroll && (
                <button
                    onClick={scrollToTop}
                    className="w-12 h-12 bg-white text-primary border border-gray-200 rounded-full flex items-center justify-center shadow-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 animate-in fade-in zoom-in"
                    title="Retour en haut"
                >
                    <ArrowUp size={24} />
                </button>
            )}

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/212661690413?text=Bonjour%20Zlij%20Moroccan%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20collections%20de%20zellige%20authentique."
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
                title="Contactez-nous sur WhatsApp"
            >
                <MessageCircle size={32} fill="currentColor" />
            </a>
        </div>
    );
}
