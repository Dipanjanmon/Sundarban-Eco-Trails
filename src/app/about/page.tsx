import { Metadata } from "next";
import { Leaf, Users, Shield, Target } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us - Sundarban Eco Trails",
    description: "Learn about our mission, our indigenous guides, and our commitment to eco-tourism and tiger conservation in the Sundarbans.",
};

const values = [
    {
        icon: Leaf,
        title: "Eco-Conscious Travel",
        description: "We strictly adhere to zero-plastic policies on our boats and prioritize leaving no trace in the fragile mangrove ecosystem."
    },
    {
        icon: Users,
        title: "Empowering Locals",
        description: "100% of our guides, boatmen, and cooks are from the local villages. Your tour directly supports their livelihoods."
    },
    {
        icon: Shield,
        title: "Uncompromised Safety",
        description: "Equipped with life jackets, medical kits, and experienced navigators, we ensure safe passage through the tidal rivers."
    },
    {
        icon: Target,
        title: "Conservation Focus",
        description: "A portion of our proceeds goes towards local tiger conservation awareness programs and community development."
    }
];

export default function AboutPage() {
    return (
        <>
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-emerald-950/80 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1596489399436-b78ee741639f?q=80&w=2070&auto=format&fit=crop"
                        alt="Sundarban Locals"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-display drop-shadow-lg">
                        Our Story
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto font-light drop-shadow-md text-balance">
                        Born from a deep love for the mangroves. We are environmentalists, locals, and wildlife enthusiasts.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5]">
                                <img
                                    src="https://images.unsplash.com/photo-1544490809-b68a8677aebb?q=80&w=2070&auto=format&fit=crop"
                                    alt="Founder in Sundarban"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">The Mission</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Bridging the Gap Between Humans and the Wild
                            </h3>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-balance">
                                <p>
                                    Sundarban Eco Trails was founded with a singular vision: to showcase the raw beauty of the world&apos;s largest delta while actively protecting it.
                                </p>
                                <p>
                                    Growing up on the fringes of the forest, our founders witnessed firsthand the delicate balance between the villagers and the apex predator, the Royal Bengal Tiger. We realized that sustainable tourism was the key to providing alternative livelihoods that don&apos;t depend on extracting resources from the core forest.
                                </p>
                                <p>
                                    Today, we are proud to run expeditions that are 100% locally staffed, ensuring that when you travel with us, you are directly contributing to the local micro-economy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Core Values</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">
                            What Drives Us Forward
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
