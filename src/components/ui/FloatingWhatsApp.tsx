"use client";

import { MessageCircle, Phone } from "lucide-react";
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
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            <a
                href="tel:+919641517945"
                className="flex items-center justify-center w-14 h-14 bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in group relative"
                aria-label="Call us"
            >
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                {/* Pulse effect */}
                <span className="absolute inset-0 rounded-full border-2 border-emerald-600 animate-ping opacity-75"></span>
            </a>
            <a
                href="https://wa.me/919641517945?text=Hello,%20I%20am%20interested%20in%20a%20Sundarban%20Tour."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in group relative"
                aria-label="Chat with us on WhatsApp"
            >
                <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />

                {/* Pulse effect */}
                <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
            </a>
        </div>
    );
}
