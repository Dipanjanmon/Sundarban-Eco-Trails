import { tourPackages } from "@/data/packages";
import TourCard from "@/components/ui/TourCard";
import { Metadata } from "next";
import { Map } from "lucide-react";

export const metadata: Metadata = {
    title: "Tour Packages - Sundarban Eco Trails",
    description: "Browse our eco-friendly Sundarban tour packages. Choose from 1-day trips, luxury 3-day safaris, photography tours, and more.",
};

export default function TourPackagesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-emerald-950/70 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1544490809-b68a8677aebb?q=80&w=2070&auto=format&fit=crop"
                        alt="Sundarban Tours"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center justify-center p-3 bg-emerald-600/80 backdrop-blur-sm rounded-2xl text-white mb-6 shadow-lg border border-white/10">
                        <Map className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-display drop-shadow-lg">
                        Our Safari Packages
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto font-light drop-shadow-md text-balance">
                        Find the perfect expedition tailored to your adventurous spirit. Every booking supports local communities and tiger conservation.
                    </p>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tourPackages.map((pkg, index) => (
                            <div
                                key={pkg.id}
                                className="animate-in fade-in slide-in-from-bottom-8 duration-500 fill-mode-both"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <TourCard pkg={pkg} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
