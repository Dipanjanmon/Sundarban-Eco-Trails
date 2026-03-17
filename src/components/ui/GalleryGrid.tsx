"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface ImageProps {
    src: string;
    span: string;
    alt: string;
}

export default function GalleryGrid({ images }: { images: ImageProps[] }) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const goToPrev = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
        }
    };

    const goToNext = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                goToPrev();
            } else if (e.key === 'ArrowRight') {
                goToNext();
            }
        };

        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedIndex, images.length]);

    return (
        <>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`group relative mb-6 overflow-hidden bg-slate-900 rounded-sm shadow-sm break-inside-avoid inline-block w-full animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both cursor-pointer`}
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={() => openLightbox(index)}
                    >
                        {/* 
                            Instead of fill=true and absolute positioning which forces 
                            a fixed aspect ratio container, we use intrinsic sizes 
                            to allow the container height to adapt, creating the true Masonry effect.
                        */}
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Dark Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                        {/* Center Hover Content: Eye Icon + "Discover Island" */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-20">
                            <Eye className="w-10 h-10 text-amber-500/90 mb-2 drop-shadow-lg" strokeWidth={1.5} />
                            <span className="text-white font-medium text-sm tracking-wide drop-shadow-md">Discover Island</span>
                        </div>

                        {/* Signature Text at the Bottom */}
                        <div className="absolute bottom-4 left-0 w-full text-center z-20">
                            <span className="font-serif italic text-white/80 text-lg tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                Sundarban Eco Trails
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal rendered via Portal to escape all stacking contexts */}
            {selectedIndex !== null && typeof document !== 'undefined' && createPortal(
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button 
                        className="fixed top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/50 border border-white/20 backdrop-blur-md rounded-full p-2 lg:p-3 z-[10000] shadow-xl"
                        onClick={closeLightbox}
                        title="Close Gallery (Esc)"
                        aria-label="Close lightbox"
                    >
                        <X size={32} />
                    </button>

                    {/* Navigation Buttons */}
                    <button 
                        className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 md:p-4 z-[10000] shadow-lg"
                        onClick={goToPrev}
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    
                    <button 
                        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 md:p-4 z-[10000] shadow-lg"
                        onClick={goToNext}
                        aria-label="Next image"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Main Image Container */}
                    <div 
                        className="relative w-full max-w-6xl h-screen flex flex-col items-center justify-center px-4 md:px-24 py-16"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-500 ease-out">
                            <Image
                                src={images[selectedIndex].src}
                                alt={images[selectedIndex].alt}
                                fill
                                className="object-contain drop-shadow-2xl select-none"
                                priority
                            />
                        </div>
                        <div className="absolute bottom-6 md:bottom-10 flex flex-col items-center font-medium tracking-wide drop-shadow-xl text-white/90 text-center animate-in slide-in-from-bottom-8 duration-500 delay-150 bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2 md:px-8 md:py-3 rounded-full z-[10000]">
                            <span className="text-base md:text-lg">{images[selectedIndex].alt}</span>
                            <span className="block text-emerald-400/80 text-xs md:text-sm mt-1 font-semibold tracking-wider uppercase">
                                {selectedIndex + 1} / {images.length}
                            </span>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
