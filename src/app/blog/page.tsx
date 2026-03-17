import { Metadata } from "next";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Travel Blog - Sundarban Eco Trails",
    description: "Read stories, wildlife tips, and travel guides about exploring the Sundarbans mangrove forest.",
};

import Link from "next/link";
import { blogPosts } from "@/data/blogs";

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
                                     <Link href={`/blog/${post.id}`}>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                     </Link>
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

                                    <Link href={`/blog/${post.id}`} className="group-hover:text-emerald-700 transition-colors">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-display line-clamp-2">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="text-slate-600 leading-relaxed mb-8 flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-emerald-600 font-semibold group/link mt-auto">
                                        Read Article
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
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
