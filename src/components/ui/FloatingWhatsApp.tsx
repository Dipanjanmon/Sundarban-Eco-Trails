"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    // Show widget after a small delay to not block initial render
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <a
            href="https://wa.me/916289056302?text=Hello,%20I%20am%20interested%20in%20a%20Sundarban%20Tour."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in group"
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />

            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
        </a>
    );
}
