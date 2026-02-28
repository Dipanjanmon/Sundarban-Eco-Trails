import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photo Gallery - Sundarban Eco Trails",
    description: "Browse our collection of stunning wildlife photography, boat safaris, tiger sightings, and scenic mangrove landscapes.",
};

import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
    return (
        <>
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0 bg-emerald-950" />
                <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-display drop-shadow-lg">
                        Through the Lens
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-200 max-w-2xl mx-auto font-light text-balance">
                        A visual journey through the winding creeks and deep jungles of the Sundarbans.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white relative -mt-10 rounded-t-[3rem] z-30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[300px]">
                        {galleryImages.map((img, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-2xl shadow-sm ${img.span} animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-medium text-lg tracking-wide drop-shadow-md">{img.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Call to action */}
            <section className="py-20 bg-emerald-50 text-center">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 font-display">Ready to capture your own wild moments?</h3>
                    <a
                        href="/tour-packages/sundarban-photography-tour"
                        className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Check Photography Tours
                    </a>
                </div>
            </section>
        </>
    );
}
