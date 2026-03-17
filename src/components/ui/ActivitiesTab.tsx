"use client";

import { useState, useEffect } from "react";
import { Ship, Camera, Tent, Footprints } from "lucide-react";

interface Activity {
    id: string;
    title: string;
    icon: React.ElementType;
    description: string;
    image: string;
}

const activities: Activity[] = [
    {
        id: "boat-safari",
        title: "Boat Safari",
        icon: Ship,
        description: "Navigate the intricate network of tidal waterways. Our sturdy, custom-built boats offer the perfect vantage point for spotting wildlife, including the elusive Royal Bengal Tiger, crocodiles, and diverse bird species.",
        image: "/imagegaller/mamun-srizon-mNVk2uupXs0-unsplash.jpg"
    },
    {
        id: "photography",
        title: "Photography",
        icon: Camera,
        description: "Capture the golden hour over the mangrove canopy. Our specialized photography tours position you perfectly for stunning landscape and wildlife shots, guided by experts who understand the local light and animal behavior.",
        image: "/imagegaller/ashique-anan-abir-saEnr4oJ950-unsplash.jpg"
    },
    {
        id: "nature-walk",
        title: "Nature Walks",
        icon: Footprints,
        description: "Step off the boat and explore the protected watchtower areas. Experience the unique flora of the mangrove ecosystem up close and learn about the medicinal properties of local plants from our indigenous guides.",
        image: "/imagegaller/shourav-chowdhury-FzLRR5MZ5k0-unsplash.jpg"
    },
    {
        id: "culture",
        title: "Local Culture",
        icon: Tent,
        description: "Engage with the resilient communities of the Sundarbans. Witness traditional tribal dances, visit local villages, and understand the deep connection between the people and the forest they call home.",
        image: "/imagegaller/md-arafat-ul-alam-KNJdjEdfa-g-unsplash.jpg"
    }
];

export default function ActivitiesTab() {
    const [activeTab, setActiveTab] = useState<string>(activities[0].id);
    const [progress, setProgress] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        const DURATION = 6000; // 6 seconds per tab
        const TICK_RATE = 50;

        if (!isHovering) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        const currentIndex = activities.findIndex(a => a.id === activeTab);
                        const nextIndex = (currentIndex + 1) % activities.length;
                        setActiveTab(activities[nextIndex].id);
                        return 0;
                    }
                    return prev + (100 / (DURATION / TICK_RATE));
                });
            }, TICK_RATE);
        }

        return () => clearInterval(interval);
    }, [activeTab, isHovering]);

    const handleTabClick = (id: string) => {
        setActiveTab(id);
        setProgress(0);
    };

    const activeContent = activities.find(a => a.id === activeTab) || activities[0];

    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Top Border Glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center md:text-left max-w-4xl mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-16">
                    <div>
                        <h2 className="text-emerald-400 font-semibold tracking-widest uppercase text-xs mb-3 flex items-center justify-center md:justify-start gap-3">
                            <span className="w-8 h-px bg-emerald-400/50"></span>
                            Immersive Experiences
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display leading-tight">
                            Discover Your <br className="hidden md:block" />Next <span className="text-emerald-500">Adventure</span>
                        </h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-base md:text-lg max-w-md pb-1 md:pb-2 font-light text-balance md:text-right">
                        Whether you&apos;re seeking the thrill of a wild safari or the tranquility of a nature walk.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start">

                    {/* Tab Controls */}
                    <div className="w-full lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible snap-x snap-mandatory gap-3 pb-4 lg:pb-0 scrollbar-hide">
                        {activities.map((activity) => {
                            const isActive = activeTab === activity.id;
                            const Icon = activity.icon;
                            return (
                                <button
                                    key={activity.id}
                                    onClick={() => handleTabClick(activity.id)}
                                    className={`relative flex-shrink-0 lg:flex-shrink w-[280px] lg:w-auto snap-center flex items-center gap-4 p-4 lg:p-5 rounded-2xl lg:rounded-3xl text-left transition-all duration-500 overflow-hidden ${isActive
                                        ? "bg-slate-900 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)] z-10"
                                        : "bg-slate-900/50 border-transparent text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                                        } border backdrop-blur-sm group`}
                                    aria-selected={isActive}
                                    role="tab"
                                >
                                    {/* Active Tab Progress Bar Background */}
                                    {isActive && (
                                        <div
                                            className="absolute top-0 left-0 bottom-0 bg-emerald-950/30 -z-10"
                                            style={{ width: `${progress}%`, transition: 'width 50ms linear' }}
                                        />
                                    )}
                                    {isActive && (
                                        <div
                                            className="absolute bottom-0 left-0 h-1 bg-emerald-500"
                                            style={{ width: `${progress}%`, transition: 'width 50ms linear' }}
                                        />
                                    )}

                                    <div className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl transition-all duration-500 relative z-10 ${isActive ? 'bg-emerald-500 text-slate-950 shadow-lg' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700'}`}>
                                        <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                                    </div>
                                    <div className="relative z-10">
                                        <span className={`font-display font-bold text-lg lg:text-xl block transition-colors ${isActive ? 'text-emerald-400' : 'text-slate-300'}`}>{activity.title}</span>
                                        <span className={`text-xs lg:text-sm mt-0.5 lg:mt-1 transition-colors duration-500 block ${isActive ? 'text-slate-300' : 'text-slate-500'} hidden lg:block`}>{isActive ? 'Currently Viewing' : 'Select Activity'}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content */}
                    <div
                        className="w-full lg:w-2/3"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <div className="relative aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl group border border-slate-800/60 transition-all duration-500 flex flex-col justify-end">
                            {/* Image with smooth fade transition between tabs */}
                            {activities.map((activity) => (
                                <img
                                    key={activity.image}
                                    src={activity.image}
                                    alt={activity.title}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${activeTab === activity.id ? 'opacity-80 scale-100' : 'opacity-0 scale-105'
                                        }`}
                                />
                            ))}

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent pointer-events-none"></div>

                            {/* Floating Content Card */}
                            <div
                                key={`content-${activeContent.id}`} // Force specific animation for content block
                                className="relative z-30 p-6 sm:p-8 md:p-10 md:absolute md:bottom-10 md:left-10 md:max-w-xl md:bg-slate-950/50 md:backdrop-blur-2xl md:border md:border-white/10 md:rounded-3xl animate-in slide-in-from-bottom-8 duration-700 ease-out md:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transform-gpu w-full"
                            >
                                <div className="inline-flex items-center justify-center p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-emerald-400 mb-4 shadow-lg">
                                    <activeContent.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 font-display tracking-wide">
                                    {activeContent.title}
                                </h4>
                                <p className="text-slate-300/90 text-sm sm:text-base md:text-lg leading-relaxed text-balance mb-5 sm:mb-6 line-clamp-4 lg:line-clamp-none">
                                    {activeContent.description}
                                </p>
                                <div>
                                    <a
                                        href="/tour-packages"
                                        className="inline-flex w-full sm:w-auto justify-center items-center gap-2 text-slate-950 bg-emerald-400 hover:bg-emerald-300 font-semibold px-6 py-3 sm:py-3.5 rounded-full transition-colors group/link text-sm shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                                    >
                                        Explore Package
                                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
