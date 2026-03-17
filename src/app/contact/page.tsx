"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");

        // Simulate form submission
        setTimeout(() => {
            setFormStatus("success");
            (e.target as HTMLFormElement).reset();

            // Reset success message after 5 seconds
            setTimeout(() => setFormStatus("idle"), 5000);
        }, 1500);
    };

    return (
        <>
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0 bg-emerald-950" />
                <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-display drop-shadow-lg">
                        Talk to an Expert
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-200 max-w-2xl mx-auto font-light text-balance">
                        Planning a trip? Have special requirements? We are here to help craft your ideal safari.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative -mt-10 rounded-t-[3rem] z-30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Contact Information */}
                        <div className="w-full lg:w-1/3">
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 h-full">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 font-display">Get In Touch</h2>

                                <ul className="space-y-8">
                                    <li className="flex gap-4 items-start">
                                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">Sundarban Office</h4>
                                                <p className="text-slate-600 leading-relaxed text-sm">
                                                    Rangabelia, Gosaba, <br />South 24 Paraganas, West Bengal 743370
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">Kolkata Office</h4>
                                                <p className="text-slate-600 leading-relaxed text-sm">
                                                    Badu Road, opposite NSG Hub, <br />Madhyamgram, Kolkata, West Bengal 700155
                                                </p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="flex gap-4 items-start">
                                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                                            <p className="text-slate-600 text-sm">
                                                <a href="tel:+916289056302" className="hover:text-emerald-600 transition-colors">+91 6289 056 302</a>
                                                <br />
                                                <span className="text-xs text-slate-400 font-medium">Available on WhatsApp</span>
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex gap-4 items-start">
                                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                                            <p className="text-slate-600 text-sm overflow-hidden text-ellipsis">
                                                <a href="mailto:SundarbanEcoTrails@gmail.com" className="hover:text-emerald-600 transition-colors">SundarbanEcoTrails@gmail.com</a>
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex gap-4 items-start">
                                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                                            <p className="text-slate-600 text-sm">
                                                Mon - Sun: 8:00 AM - 9:00 PM
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="w-full lg:w-2/3">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                                <h2 className="text-3xl font-bold text-slate-900 mb-2 font-display">Send us a message</h2>
                                <p className="text-slate-500 mb-8">Fill out the form below and we will get back to you within 2-4 hours.</p>

                                {formStatus === "success" && (
                                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-6 py-4 rounded-xl mb-8 flex items-center gap-3 animate-in fade-in">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="font-medium">Thank you! Your inquiry has been sent. We will contact you shortly.</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number (WhatsApp preferred)</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-slate-700">Your Inquiry *</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all resize-y"
                                            placeholder="Tell us about your trip dates, group size, and any specific requirements..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === "submitting"}
                                        className="w-full md:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {formStatus === "submitting" ? "Sending..." : "Send Inquiry"}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Embed Placeholder */}
            <section className="h-96 w-full bg-slate-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117961.43673544322!2d88.6672323719119!3d22.181313386620573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0210fa00000001%3A0xc6bf8ed18cf52ad3!2sSundarbans!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sundarban Eco Trails Location Map"
                ></iframe>
            </section>
        </>
    );
}
