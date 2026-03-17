import Link from "next/link";
import Image from "next/image";
import { Clock, CheckCircle2 } from "lucide-react";
import { TourPackage } from "@/data/packages";

interface TourCardProps {
    pkg: TourPackage;
}

export default function TourCard({ pkg }: TourCardProps) {
    // WhatsApp pre-fill message
    const whatsappMsg = encodeURIComponent(`Hello, I am interested in the ${pkg.title} package.`);
    const whatsappUrl = `https://wa.me/916289056302?text=${whatsappMsg}`;

    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
            {/* Image Header */}
            <div className="relative h-64 overflow-hidden">
                {pkg.isPopular && (
                    <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                        Most Popular
                    </div>
                )}
                <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-md text-emerald-900 text-sm font-semibold py-1.5 px-3 rounded-full shadow-md flex items-center gap-1">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    {pkg.duration}
                </div>
                <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display group-hover:text-emerald-700 transition-colors">
                    {pkg.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow text-balance">
                    {pkg.shortDescription}
                </p>

                {/* Features Snippet */}
                <ul className="flex flex-col gap-2 mb-6">
                    {pkg.inclusions.slice(0, 3).map((inclusion, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="truncate">{inclusion}</span>
                        </li>
                    ))}
                    {pkg.inclusions.length > 3 && (
                        <li className="text-xs text-slate-500 italic pl-6">+ more inclusions</li>
                    )}
                </ul>

                {/* Pricing */}
                <div className="flex items-end gap-3 mb-6 pt-4 border-t border-slate-100">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Starting From</span>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-emerald-600">₹{pkg.discountedPrice.toLocaleString('en-IN')}</span>
                            <span className="text-sm text-slate-400 line-through decoration-slate-300">₹{pkg.basePrice.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Link
                        href={`/tour-packages/${pkg.slug}`}
                        className="flex items-center justify-center bg-emerald-50 text-emerald-700 font-semibold py-3 rounded-xl hover:bg-emerald-100 transition-colors btn-premium"
                    >
                        View Details
                    </Link>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-emerald-600 text-white font-semibold py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all btn-premium"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    );
}
