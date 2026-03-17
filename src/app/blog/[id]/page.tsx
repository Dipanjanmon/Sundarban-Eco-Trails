import { notFound } from "next/navigation";
import { getBlogById, blogPosts } from "@/data/blogs";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

// Generate static parameters for all known blog posts at build time
export function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id.toString(),
    }));
}

// Dynamic metadata generation for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const post = getBlogById(id);
    if (!post) return {};

    return {
        title: `${post.title} - Sundarban Eco Trails Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = getBlogById(id);

    if (!post) {
        notFound();
    }

    // Split content by newlines into paragraphs to render them cleanly
    const paragraphs = post.content.split('\n\n');

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end pb-24 pt-32">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/60 to-transparent z-10" />
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-4xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-emerald-300 hover:text-white mb-8 transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Travel Blog
                    </Link>

                    <div className="inline-block bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full mb-6 shadow-sm border border-white/10">
                        {post.category}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-display drop-shadow-lg leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-emerald-100/90 drop-shadow-md">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-emerald-400" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4 text-emerald-400" />
                            By {post.author}
                        </span>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-24 bg-white relative -mt-10 rounded-t-[3rem] z-30 shadow-2xl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <div className="prose prose-lg prose-slate prose-emerald max-w-none">
                        <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-12 font-display italic">
                            {post.excerpt}
                        </p>
                        
                        <div className="space-y-8 text-lg text-slate-700 leading-relaxed font-light">
                            {paragraphs.map((paragraph, idx) => {
                                // Simple bold parsing (this allows for **Text** to be bolded)
                                // In a real production app we'd use a markdown parser, but this is sufficient for our mock data.
                                const parts = paragraph.split(/(\*\*.*?(\*\*|$))/g);
                                
                                const formattedParagraph = parts.map((part, pIdx) => {
                                    if (part && part.startsWith('**')) {
                                         // Clean off the asterisks if it closed properly
                                        const cleanText = part.replace(/\*\*/g, '');
                                        return <strong key={pIdx} className="font-bold text-slate-900">{cleanText}</strong>;
                                    }
                                    if(part === '**') return null; // Ignore the standalone capture groups
                                    return part;
                                });

                                return <p key={idx}>{formattedParagraph}</p>;
                            })}
                        </div>
                    </div>

                    <hr className="my-16 border-slate-200" />

                    {/* Author Box */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-emerald-100 flexitems-center justify-center flex-shrink-0 flex items-center">
                            <User className="w-8 h-8 text-emerald-600 mx-auto" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 font-display mb-1">{post.author}</h3>
                            <p className="text-sm text-slate-500 line-clamp-2">
                                Local naturalists, photographers, and passionate storytellers sharing their experiences from the world's largest mangrove forest.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
