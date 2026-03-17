import { notFound } from "next/navigation";
import { getPackageBySlug, tourPackages } from "@/data/packages";
import { Clock, CheckCircle2, XCircle, MapPin } from "lucide-react";
import { ItineraryAccordion } from "@/components/ui/ItineraryAccordion";
import { Metadata } from "next";

// Generate static parameters for all known packages at build time
export function generateStaticParams() {
    return tourPackages.map((pkg) => ({
        slug: pkg.slug,
    }));
}

// Dynamic metadata generation for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const pkg = getPackageBySlug(slug);
    if (!pkg) return {};

    return {
        title: `${pkg.title} - Sundarban Eco Trails`,
        description: pkg.shortDescription,
    };
}

export default async function PackageDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pkg = getPackageBySlug(slug);

    if (!pkg) {
        notFound();
    }

    const whatsappMsg = encodeURIComponent(`Hello, I am interested in booking the ${pkg.title} (${pkg.duration}).`);
    const whatsappUrl = `https://wa.me/916289056302?text=${whatsappMsg}`;

    // JSON-LD Product Schema for SEO
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": pkg.title,
        "image": pkg.image,
        "description": pkg.shortDescription,
        "offers": {
            "@type": "Offer",
            "url": `https://sundarbanecotrails.com/tour-packages/${pkg.slug}`,
            "priceCurrency": "INR",
            "price": pkg.discountedPrice,
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/50 to-transparent z-10" />
                    <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium mb-6">
                        <Clock className="w-4 h-4 text-emerald-300" />
                        <span>{pkg.duration}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-display drop-shadow-lg">
                        {pkg.title}
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed text-balance drop-shadow-md">
                        {pkg.shortDescription}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Left Column: Itinerary & Details */}
                        <div className="w-full lg:w-2/3">
                            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 font-display flex items-center gap-3">
                                    <MapPin className="w-6 h-6 text-emerald-600" />
                                    Detailed Itinerary
                                </h2>
                                <ItineraryAccordion items={pkg.itinerary} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                        Inclusions
                                    </h3>
                                    <ul className="space-y-4">
                                        {pkg.inclusions.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-600">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-rose-500" />
                                        Exclusions
                                    </h3>
                                    <ul className="space-y-4">
                                        {pkg.exclusions.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-600">
                                                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Sticky Booking Card */}
                        <div className="w-full lg:w-1/3">
                            <div className="sticky top-28 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Book This Tour</h3>
                                <p className="text-slate-500 text-sm mb-6">Secure your spot instantly via WhatsApp.</p>

                                <div className="bg-emerald-50 rounded-2xl p-6 mb-8 border border-emerald-100">
                                    <span className="text-xs text-emerald-700 font-bold uppercase tracking-wider block mb-2">Price per person</span>
                                    <div className="flex items-end gap-3 mb-2">
                                        <span className="text-4xl font-bold text-emerald-700 font-display">
                                            ₹{pkg.discountedPrice.toLocaleString('en-IN')}
                                        </span>
                                        <span className="text-lg text-slate-400 line-through decoration-slate-300 font-medium mb-1">
                                            ₹{pkg.basePrice.toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                    <p className="text-xs text-emerald-600 font-medium mt-2">*Taxes & fees included where applicable</p>
                                </div>

                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-md hover:bg-emerald-500 hover:shadow-lg transition-all mb-4 text-lg"
                                >
                                    Book via WhatsApp
                                </a>

                                <p className="text-center text-xs text-slate-500 leading-relaxed">
                                    Clicking the button will open a WhatsApp chat with our sales team to finalize dates.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
