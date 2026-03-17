"use client";

import { useState } from "react";
import { galleryImages } from "@/data/gallery";
import GalleryGrid from "@/components/ui/GalleryGrid";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function GallerySection() {
    const [showAll, setShowAll] = useState(false);
    
    // Only show the first 4 images initially (which will fill the top row/grid decently well on mobile and desktop)
    const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 4);

    return (
        <section className="py-24 bg-slate-950 text-white relative border-t border-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-emerald-400 font-semibold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
                            <span className="w-8 h-px bg-emerald-400"></span>
                            Moments in the Wild
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                            A Glimpse of the <span className="text-emerald-500">Untamed</span>
                        </h3>
                        <p className="text-slate-400 text-lg">
                            Explore the raw, unfiltered beauty of the mangrove forests. Captured by our guests and expert naturalists.
                        </p>
                    </div>
                </div>

                <div className="mb-12">
                    <GalleryGrid images={displayedImages} />
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="inline-flex items-center gap-2 justify-center bg-transparent border-2 border-emerald-500 text-emerald-400 font-bold py-3 px-8 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300 btn-premium"
                    >
                        {showAll ? (
                            <>
                                Show Less <ChevronUp className="w-4 h-4" />
                            </>
                        ) : (
                            <>
                                See More Images <ChevronDown className="w-4 h-4" />
                            </>
                        )}
                    </button>
                    
                    <Link
                        href="/gallery"
                        className="inline-flex items-center justify-center bg-white text-slate-950 font-bold py-3 px-8 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] btn-premium"
                    >
                        View Full Gallery
                    </Link>
                </div>
            </div>
        </section>
    );
}
