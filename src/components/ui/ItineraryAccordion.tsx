"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
    title: string;
    day: number;
    activities: string[];
    isOpen: boolean;
    onToggle: () => void;
}

export function AccordionItem({ title, day, activities, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden mb-4 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-700 flex flex-col items-center justify-center rounded-xl font-bold">
                        <span className="text-xs uppercase tracking-wider text-emerald-600">Day</span>
                        <span className="text-lg leading-none">{day}</span>
                    </div>
                    <span className="text-lg font-bold text-slate-800 font-display">{title}</span>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <ul className="p-5 pt-0 pl-20 pb-6 space-y-3">
                        {activities.map((activity, index) => (
                            <li key={index} className="flex items-start gap-3 text-slate-600 leading-relaxed text-balance">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                                <span>{activity}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function ItineraryAccordion({ items }: { items: { day: number; title: string; activities: string[] }[] }) {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={item.day}
                    title={item.title}
                    day={item.day}
                    activities={item.activities}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
                />
            ))}
        </div>
    );
}
