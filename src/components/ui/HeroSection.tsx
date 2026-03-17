"use client";

import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const heroMedia = [
    { type: 'image', src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2" },
    { type: 'image', src: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2" },
    { type: 'image', src: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2" },
    { type: 'image', src: "https://images.pexels.com/photos/105809/pexels-photo-105809.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2" },
];

const typingPhrases = [
    "Discover the pristine mangrove forests.",
    "Witness the majestic Royal Bengal Tiger.",
    "Experience thrilling boat safaris.",
    "Connect with the untamed wilderness."
];

export default function HeroSection() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroMedia.length);
        }, 6000); // Slide every 6 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const typingSpeed = isDeleting ? 40 : 80;
        const currentPhrase = typingPhrases[currentPhraseIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting && currentText === currentPhrase) {
                setTimeout(() => setIsDeleting(true), 2500); // Pause before deleting
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setCurrentPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
            } else {
                setCurrentText((prev) =>
                    isDeleting
                        ? prev.slice(0, -1)
                        : currentPhrase.slice(0, prev.length + 1)
                );
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentPhraseIndex]);

    return (
        <section className="relative h-[95vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Sliding Background Media */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950 z-10" />

                <div
                    className="flex w-full h-full transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {heroMedia.map((media, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 relative">
                            {media.type === 'image' ? (
                                <Image
                                    src={media.src}
                                    alt={`Sundarban Preview ${index + 1}`}
                                    fill
                                    priority={index === 0}
                                    className={`object-cover transition-transform duration-[10000ms] ease-linear opacity-60 ${index === currentImageIndex ? "scale-110" : "scale-100"
                                        }`}
                                />
                            ) : (
                                <video
                                    src={media.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Hero Content */}
            <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/50 backdrop-blur-xl border border-emerald-500/30 text-emerald-300 text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-lg shadow-emerald-900/20">
                    <MapPin className="w-4 h-4" />
                    <span className="tracking-wide uppercase">UNESCO World Heritage Site</span>
                </div>

                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tight text-white mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 font-display drop-shadow-2xl">
                    Into the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 indent-0">Wild</span>
                </h1>

                <div className="h-8 md:h-12 mb-8 flex items-center justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                    <p className="text-xl md:text-3xl text-emerald-300 font-medium tracking-wide drop-shadow-lg">
                        {currentText}<span className="animate-pulse inline-block w-[3px] h-6 md:h-8 bg-emerald-400 ml-1 align-middle"></span>
                    </p>
                </div>

                <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 text-balance drop-shadow-md">
                    Experience the untamed beauty of the world&apos;s largest mangrove forest. Spot the Royal Bengal Tiger in its natural habitat with our expert-guided eco-tours.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <Link
                        href="/tour-packages"
                        className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] btn-premium"
                    >
                        Explore Packages
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg btn-premium"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Video Modal */}
            {isVideoModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-300">
                    <div className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800">
                        <button
                            onClick={() => setIsVideoModalOpen(false)}
                            className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:scale-110"
                            aria-label="Close video"
                        >
                            x
                        </button>
                        {/* YouTube Embed Placeholder */}
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1"
                            title="Sundarban Tour Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}
