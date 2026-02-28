"use client";

import Link from "next/link";
import { TreePine, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Send } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-emerald-950 text-emerald-50 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Col */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <TreePine className="w-8 h-8 text-emerald-400" />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight uppercase text-white">
                                    Sundarban
                                </span>
                                <span className="text-xs font-semibold tracking-widest text-emerald-400">
                                    Eco Trails
                                </span>
                            </div>
                        </Link>
                        <p className="text-emerald-200/80 text-sm leading-relaxed">
                            Experience the untamed beauty of the world&apos;s largest mangrove forest. We offer eco-friendly, expert-guided tours prioritizing safety and wildlife conservation.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-emerald-300 hover:bg-emerald-600 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-emerald-300 hover:bg-emerald-600 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-emerald-300 hover:bg-emerald-600 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-emerald-600"></span>
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-3 text-sm text-emerald-200/90">
                            <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                            <li><Link href="/tour-packages" className="hover:text-emerald-400 transition-colors">Our Packages</Link></li>
                            <li><Link href="/gallery" className="hover:text-emerald-400 transition-colors">Photo Gallery</Link></li>
                            <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Travel Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-emerald-600"></span>
                            Contact Info
                        </h3>
                        <ul className="flex flex-col gap-4 text-sm text-emerald-200/90">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>Sundarban Gateway, Canning, South 24 Parganas, West Bengal 743329</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                                <a href="tel:+916289056302" className="hover:text-emerald-400 transition-colors">+91 6289 056 302</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                                <a href="mailto:booking@sundarbanecotrails.com" className="hover:text-emerald-400 transition-colors">booking@sundarbanecotrails.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-emerald-600"></span>
                            Newsletter
                        </h3>
                        <p className="text-sm text-emerald-200/80 mb-4">
                            Subscribe for exclusive travel offers and wildlife photography tips.
                        </p>
                        <form className="flex group" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                required
                                className="w-full bg-emerald-900/50 border border-emerald-800 rounded-l-lg px-4 py-2.5 text-sm text-white placeholder:text-emerald-600/70 focus:outline-none focus:border-emerald-500 transition-colors"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="Please enter a valid email address with an '@' and a domain."
                            />
                            <button
                                type="submit"
                                className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 rounded-r-lg transition-colors flex items-center justify-center group-focus-within:bg-emerald-500"
                                aria-label="Subscribe"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-emerald-900/50 bg-emerald-950/80">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-500">
                    <p>&copy; {new Date().getFullYear()} Sundarban Eco Trails. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
