import { MapPin, Phone, Clock } from "lucide-react";

export default function MapSection() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-emerald-400 font-semibold tracking-widest uppercase text-xs mb-4 flex items-center justify-center gap-3">
                        <span className="w-12 h-px bg-emerald-400/50"></span>
                        Location & Contact
                        <span className="w-12 h-px bg-emerald-400/50"></span>
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display tracking-tight">
                        Where The <span className="text-emerald-500">Wild</span> Begins
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg max-w-2xl mx-auto text-balance">
                        Our tours typically depart from Godhkhali Port, the main gateway to the Sundarbans. Reach out to coordinate your arrival.
                    </p>
                </div>

                <div className="relative w-full h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800 group">
                    {/* Dark Mode Map Filter using CSS */}
                    <div className="absolute inset-0 bg-slate-950/20 z-10 pointer-events-none"></div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.33230006322!2d88.60155601248469!3d22.138475252877134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02159046c8eabd%3A0xcfabc40f80bb3b37!2sGodkhali%20Ferry%20Ghat!5e0!3m2!1sen!2sin!4v1708801955938!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sundarban Eco Trails Location Map"
                        className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Overlaid Contact Card */}
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-auto md:w-[420px] bg-slate-950/80 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:-translate-y-2 z-20">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/30">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Departure Point</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">Godhkhali Ferry Ghat<br />South 24 Parganas, WB 743312</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-slate-800/50 rounded-2xl flex items-center justify-center text-slate-300 shrink-0 border border-slate-700">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Call Us</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">+91 96415 17945</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-800/50 rounded-2xl flex items-center justify-center text-slate-300 shrink-0 border border-slate-700">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Office Hours</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">Mon - Sun: 8:00 AM - 9:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
