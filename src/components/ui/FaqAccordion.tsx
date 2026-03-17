export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
    return (
        <div className="w-full space-y-4">
            {items.map((item, index) => (
                <details key={index} className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden open:shadow-md transition-all duration-300">
                    <summary className="flex items-center justify-between gap-4 p-4 sm:p-6 cursor-pointer list-none font-bold text-base sm:text-lg text-slate-800 font-display group-open:bg-slate-50 transition-colors">
                        <span className="flex-1">{item.question}</span>
                        <span className="transition duration-300 group-open:rotate-180 flex-shrink-0 text-emerald-500">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed text-balance border-t border-slate-100 font-medium">
                        {item.answer}
                    </div>
                </details>
            ))}
        </div>
    );
}
