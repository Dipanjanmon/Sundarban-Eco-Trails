"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ImageProps {
    src: string;
    span: string;
    alt: string;
}

export default function GalleryGrid({ images }: { images: ImageProps[] }) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedIndex]);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const goToPrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
        }
    };

    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`group relative overflow-hidden rounded-2xl shadow-sm ${img.span} animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both cursor-pointer`}
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-white font-medium text-lg tracking-wide drop-shadow-md">{img.alt}</span>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ZoomIn size={32} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button 
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/50 border border-white/10 rounded-full p-2 z-[60]"
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                    >
                        <X size={24} />
                    </button>

                    {/* Navigation Buttons */}
                    <button 
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/50 border border-white/10 rounded-full p-3 z-[60]"
                        onClick={goToPrev}
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    
                    <button 
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/50 border border-white/10 rounded-full p-3 z-[60]"
                        onClick={goToNext}
                        aria-label="Next image"
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Main Image Container */}
                    <div 
                        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center px-4 md:px-20 z-50 pt-2 pb-12"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-[85vh] flex items-center justify-center m-auto animate-in zoom-in-95 duration-300">
                            <Image
                                src={images[selectedIndex].src}
                                alt={images[selectedIndex].alt}
                                fill
                                className="object-contain rounded-lg shadow-2xl"
                            />
                        </div>
                        <div className="absolute bottom-0 font-medium text-lg tracking-wide drop-shadow-md text-white/90 text-center animate-in slide-in-from-bottom-4 duration-300 delay-100 bg-black/50 px-6 py-2 rounded-full mt-4">
                            {images[selectedIndex].alt}
                            <span className="block text-white/60 text-sm mt-0.5 font-light tracking-normal">
                                {selectedIndex + 1} of {images.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
