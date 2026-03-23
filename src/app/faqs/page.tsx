import { Metadata } from "next";
import { AccordionItem } from "@/components/ui/ItineraryAccordion";

export const metadata: Metadata = {
    title: "FAQs - Sundarban Eco Trails",
    description: "Find answers to common questions about safety, booking, what to pack, and Tiger spotting in the Sundarbans.",
};

import { faqsInfo } from "@/data/faqs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export default function FaqsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqsInfo.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0 bg-emerald-950" />
                <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-display drop-shadow-lg">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-200 max-w-2xl mx-auto font-light text-balance">
                        Everything you need to know before venturing into the wild.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative -mt-10 rounded-t-[3rem] z-30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <FaqAccordion items={faqsInfo} />

                    <div className="mt-16 bg-emerald-50 rounded-3xl p-8 md:p-12 text-center border border-emerald-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Still have questions?</h3>
                        <p className="text-slate-600 mb-8">Our expert team is always ready to help you plan your perfect trip.</p>
                        <a
                            href="https://wa.me/919641517945?text=Hello,%20I%20have%20a%20query%20about%20your%20tours."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-emerald-600 text-white font-bold py-4 px-8 rounded-full shadow-md hover:bg-emerald-500 hover:-translate-y-1 transition-all text-lg"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
