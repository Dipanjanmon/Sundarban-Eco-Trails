import { faqsInfo } from "@/data/faqs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export default function FaqSection() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-100/30 rounded-l-[100%] blur-3xl z-0 transform translate-x-1/3"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column: Heading */}
                    <div className="w-full lg:w-1/3 pt-4 relative lg:sticky lg:top-32 z-10">
                        <h2 className="text-emerald-600 font-semibold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
                            <span className="w-8 h-px bg-emerald-600"></span>
                            Knowledge Base
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 font-display mb-4 md:mb-6 leading-tight">
                            Frequently Asked <span className="text-emerald-600 font-light italic">Questions</span>
                        </h3>
                        <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed text-balance">
                            Everything you need to know before venturing into the wild. From safety protocols to what you should pack.
                        </p>
                        <a
                            href="/faqs"
                            className="hidden lg:inline-flex items-center justify-center bg-slate-900 text-white font-semibold py-4 px-8 rounded-full hover:bg-emerald-600 hover:shadow-xl transition-all duration-300 w-full md:w-auto"
                        >
                            Read All FAQs
                        </a>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="w-full lg:w-2/3 relative z-20">
                        <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <FaqAccordion items={faqsInfo.slice(0, 5)} />
                        </div>

                        <div className="mt-8 bg-emerald-900 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl text-center md:text-left">
                            <div>
                                <h4 className="text-white font-bold text-lg md:text-xl font-display mb-2">Still planning your trip?</h4>
                                <p className="text-emerald-200 text-sm md:text-base">Chat directly with our naturalist team on WhatsApp.</p>
                            </div>
                            <a
                                href="https://wa.me/919641517945"
                                target="_blank"
                                rel="noreferrer"
                                className="whitespace-nowrap inline-flex items-center justify-center bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-400 transition-colors shadow-lg"
                            >
                                Message Us
                            </a>
                        </div>
                        
                        {/* Mobile Only: Read All FAQs Button at the bottom */}
                        <div className="mt-8 lg:hidden">
                            <a
                                href="/faqs"
                                className="inline-flex items-center justify-center bg-slate-900 text-white font-semibold py-4 px-8 rounded-xl hover:bg-emerald-600 hover:shadow-xl transition-all duration-300 w-full"
                            >
                                Read All FAQs
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
