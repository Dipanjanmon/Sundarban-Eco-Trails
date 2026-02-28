import { galleryImages } from "@/data/gallery";

export default function GallerySection() {
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
                    <div>
                        <a
                            href="/gallery"
                            className="inline-flex items-center justify-center bg-white text-slate-950 font-bold py-4 px-8 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                        >
                            View Full Gallery
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px] lg:auto-rows-[300px]">
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-3xl bg-slate-800 ${img.span} animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white font-display font-bold text-xl md:text-2xl tracking-wide drop-shadow-lg">{img.alt}</span>
                                <span className="text-emerald-400 text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Explore Nature &rarr;
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
