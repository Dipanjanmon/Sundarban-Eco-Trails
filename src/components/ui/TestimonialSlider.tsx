"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    text: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Arunava Chatterjee",
        role: "Wildlife Photographer",
        avatar: "https://i.pravatar.cc/150?u=arunava",
        rating: 5,
        text: "The 3D/2N photography tour was phenomenal. The guides knew exactly where to position the boat for the golden hour. Spotted a tiger on day two! Highly recommend their expert tracking skills.",
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Family Vacationer",
        avatar: "https://i.pravatar.cc/150?u=priya",
        rating: 5,
        text: "Safety was our biggest concern traveling with kids, but Sundarban Eco Trails exceeded expectations. The AC rooms were comfortable, the food was delicious (excellent local fish), and the staff was incredibly attentive.",
    },
    {
        id: 3,
        name: "Sneha Das",
        role: "Solo Traveler",
        avatar: "https://i.pravatar.cc/150?u=sneha",
        rating: 5,
        text: "As a solo female traveler, the Women-Only tour made me feel completely secure. " +
            "সত্যি বলতে কি, ওদের আন্তরিকতা আর গাইডদের ব্যবহার আমাকে মুগ্ধ করেছে। (Honestly, their sincerity and the behavior of the guides impressed me.)",
    }
];

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handlePrevious = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50 rounded-l-[100px] opacity-50 z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Header Section */}
                    <div className="w-full lg:w-1/3 text-center lg:text-left">
                        <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">
                            Don&apos;t Just Take Our Word For It
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg mb-8">
                            Join thousands of happy travelers who have explored the Sundarbans with us. See what they have to say about their wild encounters.
                        </p>

                        {/* Custom Navigation Dots (Visible mainly on desktop) */}
                        <div className="hidden lg:flex items-center gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "w-8 bg-emerald-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Slider Section */}
                    <div className="w-full lg:w-2/3">
                        <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100">
                            <Quote className="absolute top-8 right-8 w-16 h-16 text-emerald-100 rotate-180 z-0" />

                            <div
                                key={currentIndex}
                                className="relative z-10 animate-in fade-in slide-in-from-right-8 duration-500"
                            >
                                {/* Rating */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < currentTestimonial.rating ? "text-amber-400 fill-amber-400" : "text-slate-300"}`}
                                        />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed italic mb-8">
                                    &quot;{currentTestimonial.text}&quot;
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={currentTestimonial.avatar}
                                        alt={currentTestimonial.name}
                                        className="w-14 h-14 rounded-full border-2 border-emerald-100"
                                        loading="lazy"
                                    />
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">{currentTestimonial.name}</h4>
                                        <span className="text-emerald-600 font-medium text-sm">{currentTestimonial.role}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile/Tablet Controls */}
                            <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-100 lg:hidden">
                                <div className="flex items-center gap-2">
                                    {testimonials.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === index ? "w-6 bg-emerald-600" : "w-1.5 bg-slate-200"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handlePrevious}
                                        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Desktop floating controls */}
                            <button
                                onClick={handlePrevious}
                                className="hidden lg:flex absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 items-center justify-center text-slate-600 hover:text-emerald-600 hover:scale-110 transition-all z-20"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 items-center justify-center text-slate-600 hover:text-emerald-600 hover:scale-110 transition-all z-20"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
