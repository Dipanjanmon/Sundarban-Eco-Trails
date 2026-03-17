"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, TreePine, X } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [touchStart, setTouchStart] = useState<{ x: number, y: number } | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY });
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStart) return;
        const dx = e.changedTouches[0].clientX - touchStart.x;
        const dy = e.changedTouches[0].clientY - touchStart.y;

        // Close on significant horizontal swipe or swipe down
        if (Math.abs(dx) > 50 || dy > 50) {
            setIsMobileMenuOpen(false);
        }
        setTouchStart(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Tour Packages", href: "/tour-packages" },
        { name: "Gallery", href: "/gallery" },
        { name: "FAQs", href: "/faqs" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-[120] transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}
        >
            {/* Background container to prevent backdrop-blur from trapping the fixed mobile menu */}
            <div className={`absolute inset-0 -z-10 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"}`} />

            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-colors ${isScrolled ? "text-emerald-950" : "text-white"}`}>
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <TreePine className={`w-8 h-8 ${isScrolled ? "text-emerald-600" : "text-emerald-400"} transition-colors`} />
                        <div className="flex flex-col">
                            <span className={`text-xl font-bold tracking-tight uppercase ${isScrolled ? "text-emerald-900" : "text-white"}`}>
                                Sundarban
                            </span>
                            <span className={`text-xs font-semibold tracking-widest ${isScrolled ? "text-emerald-600" : "text-emerald-200"}`}>
                                Eco Trails
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <ul className="flex gap-6 font-medium text-sm w-full">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`hover:text-emerald-500 transition-colors ${isScrolled ? "text-slate-700" : "text-slate-100 font-medium"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="tel:+916289056302"
                            className={`flex items-center gap-2 font-semibold text-sm transition-colors ${isScrolled ? "text-slate-700 hover:text-emerald-600" : "text-white hover:text-emerald-300"
                                }`}
                        >
                            <Phone className="w-4 h-4" />
                            +91 6289 056 302
                        </a>
                        <a
                            href="https://wa.me/916289056302?text=Hello,%20I%20am%20interested%20in%20a%20Sundarban%20Tour."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] btn-premium"
                        >
                            Book A Tour
                        </a>
                    </div>

                    {/* Mobile Menu Toggle - Custom Animated Hamburger */}
                    <button
                        className="lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-[6px] rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? "bg-white rotate-45 translate-y-[8px]" : isScrolled ? "bg-slate-800" : "bg-white"}`} />
                        <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 translate-x-4 bg-white" : isScrolled ? "bg-slate-800 opacity-100" : "bg-white opacity-100"}`} />
                        <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? "bg-white -rotate-45 -translate-y-[8px]" : isScrolled ? "bg-slate-800" : "bg-white"}`} />
                    </button>
                </div>
            </div>

            {/* Fullscreen Mobile Menu Overlay - Premium Styling */}
            <div
                className={`fixed inset-0 bg-emerald-950/95 backdrop-blur-3xl z-[100] lg:hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
                    }`}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center p-5 border-b border-emerald-800/50">
                    <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
                        <TreePine className="w-8 h-8 text-emerald-500" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight uppercase text-white">
                                Sundarban
                            </span>
                            <span className="text-xs font-semibold tracking-widest text-emerald-400">
                                Eco Trails
                            </span>
                        </div>
                    </Link>
                    <button
                        className="p-2 text-white hover:text-emerald-400 transition-colors bg-white/5 rounded-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close Menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex flex-col h-full justify-center px-8 overflow-y-auto py-8">
                    <nav className="mb-12 mt-4">
                        <ul className="flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <li
                                    key={link.name}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                    className={`transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                                        }`}
                                >
                                    <Link
                                        href={link.href}
                                        className="inline-block text-4xl font-display font-bold text-white hover:text-emerald-400 hover:pl-4 transition-all duration-300"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={`flex flex-col gap-4 transform transition-all duration-700 delay-700 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}>
                        <div className="h-px w-12 bg-emerald-500 mb-2" />
                        <a
                            href="tel:+916289056302"
                            className="flex items-center gap-3 font-semibold text-slate-300 text-lg hover:text-emerald-400 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Phone className="w-5 h-5" />
                            </div>
                            +91 6289 056 302
                        </a>
                        <a
                            href="https://wa.me/916289056302?text=Hello,%20I%20am%20interested%20in%20a%20Sundarban%20Tour."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-center py-4 rounded-xl font-bold btn-premium shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                        >
                            Book A Tour
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
