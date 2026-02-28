import { Metadata } from "next";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Travel Blog - Sundarban Eco Trails",
    description: "Read stories, wildlife tips, and travel guides about exploring the Sundarbans mangrove forest.",
};

const blogPosts = [
    {
        id: 1,
        title: "5 Reasons Why Winter is the Best Time to Visit the Sundarbans",
        excerpt: "From misty mornings perfect for photography to the highest chances of spotting the elusive Royal Bengal Tiger basking in the sun on the muddy banks.",
        date: "Dec 12, 2025",
        author: "Arunava Chatterjee",
        image: "https://images.unsplash.com/photo-1544490809-b68a8677aebb?q=80&w=2070&auto=format&fit=crop",
        category: "Travel Guide"
    },
    {
        id: 2,
        title: "Understanding the Mangrove Ecosystem",
        excerpt: "The Sundarbans is not just a forest; it's a dynamic, breathing barrier that protects the mainland from cyclones. Learn how these unique trees survive in saltwater.",
        date: "Nov 28, 2025",
        author: "Dr. Sen",
        image: "https://images.unsplash.com/photo-1590616149419-faaaab83ed41?q=80&w=2070&auto=format&fit=crop",
        category: "Conservation"
    },
    {
        id: 3,
        title: "A Photographer's Guide to the Sundarbans",
        excerpt: "What lenses to pack, how to handle the humidity, and the best watchtowers for capturing endemic bird species and crocodiles.",
        date: "Oct 15, 2025",
        author: "Priya Sharma",
        image: "https://plus.unsplash.com/premium_photo-1661962369677-fcb69ad3123b?q=80&w=2070&auto=format&fit=crop",
        category: "Photography"
    },
    {
        id: 4,
        title: "The Legend of Bonbibi: Guardian of the Forest",
        excerpt: "Before entering the deep forest, honey collectors and fishermen pray to Bonbibi. Discover the fascinating folklore that unites communities across the delta.",
        date: "Sep 02, 2025",
        author: "Local Voice",
        image: "https://images.unsplash.com/photo-1596489399436-b78ee741639f?q=80&w=2070&auto=format&fit=crop",
        category: "Culture"
    }
];

export default function BlogPage() {
    return (
        <>
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0 bg-emerald-950" />
                <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-display drop-shadow-lg">
                        Wild Chronicles
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-200 max-w-2xl mx-auto font-light text-balance">
                        Stories from the mangrove, travel tips, and conservation updates.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative -mt-10 rounded-t-[3rem] z-30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {blogPosts.map((post, index) => (
                            <article
                                key={post.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full animate-in fade-in slide-in-from-bottom-8"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md text-emerald-700 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-sm">
                                        {post.category}
                                    </div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <User className="w-3.5 h-3.5" />
                                            {post.author}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-display group-hover:text-emerald-700 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-slate-600 leading-relaxed mb-8 flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <a href="#" className="inline-flex items-center gap-2 text-emerald-600 font-semibold group/link mt-auto">
                                        Read Article
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-emerald-700 font-semibold py-3 px-8 rounded-full transition-colors hidden">
                            Load More Articles
                        </button>
                    </div>

                </div>
            </section>
        </>
    );
}
