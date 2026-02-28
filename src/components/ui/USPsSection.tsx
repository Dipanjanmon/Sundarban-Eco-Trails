import { ShieldCheck, Leaf, Map, Users } from "lucide-react";

const features = [
    {
        icon: Leaf,
        title: "100% Eco-Friendly",
        description: "Our tours are designed to minimize environmental impact and support local conservation efforts."
    },
    {
        icon: Users,
        title: "Expert Local Guides",
        description: "Navigate the complex waterways with indigenous guides who know the forest's every secret."
    },
    {
        icon: ShieldCheck,
        title: "Safety First",
        description: "Modern, stable boats and strict safety protocols ensure a secure adventure for your family."
    },
    {
        icon: Map,
        title: "Tailored Itineraries",
        description: "From photography to family trips, our flexible plans cater to your specific interests."
    }
];

export default function USPsSection() {
    return (
        <section className="py-24 bg-slate-950 text-white relative border-b border-slate-900 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-emerald-400 font-semibold tracking-widest uppercase text-xs mb-4 flex items-center justify-center gap-3">
                        <span className="w-12 h-px bg-emerald-400/50"></span>
                        Why Choose Us
                        <span className="w-12 h-px bg-emerald-400/50"></span>
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
                        The <span className="text-emerald-500">Authentic</span> Experience
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg max-w-2xl mx-auto text-balance">
                        We don&apos;t just offer tours; we offer a gateway into the heart of the mangrove forest. Discover what makes our expeditions stand apart.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Card Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-slate-950 border border-slate-800 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-all duration-500 shadow-inner shadow-black/50">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 tracking-wide font-display group-hover:text-emerald-100 transition-colors">{feature.title}</h4>
                                <p className="text-slate-400 leading-relaxed font-light">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
