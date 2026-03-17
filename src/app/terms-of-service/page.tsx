import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Sundarban Eco Trails',
    description: 'The terms, conditions, booking policies, and liability guidelines for taking a tour with Sundarban Eco Trails.',
};

export default function TermsOfServicePage() {
    return (
        <>
            <section className="relative h-[30vh] min-h-[300px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0 bg-emerald-950" />
                <div className="container relative z-20 mx-auto px-4 text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-display">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-emerald-200/80 font-light">
                        Last updated: March 17, 2026
                    </p>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative -mt-6 rounded-t-[2.5rem] z-30 border-t border-slate-200">
                 <div className="container mx-auto px-4 max-w-4xl space-y-12 text-slate-700 leading-relaxed font-light text-lg">
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">1. Acceptance of Terms</h2>
                        <p>
                            By booking a tour, expedition, or service with <strong>Sundarban Eco Trails</strong>, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree to these terms, please do not use our services.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">2. Booking and Payments</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>A minimum deposit of 50% is required to secure your booking.</li>
                            <li>The remaining balance must be paid at least 7 days prior to the departure date.</li>
                            <li>Prices are subject to change without prior notice, though confirmed bookings will not be affected.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">3. Cancellations and Refunds</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Cancellations made 15 days or more before departure: 75% refund of the deposit.</li>
                            <li>Cancellations made 7 to 14 days before departure: 50% refund of the deposit.</li>
                            <li>Cancellations made less than 7 days before departure: No refund.</li>
                            <li>In the event we must cancel a tour due to extreme weather or unforeseen government regulations, a full refund or free rescheduling will be offered.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">4. Traveler Responsibilities and Conduct</h2>
                        <p>
                            The Sundarbans is a protected and highly sensitive ecosystem containing dangerous wildlife. Your safety and the preservation of the forest are our top priorities.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Zero Tolerance for Plastic:</strong> Bringing single-use plastics into the core forest area is strictly prohibited.</li>
                            <li><strong>Guide Instructions:</strong> Travelers must explicitly follow the instructions of the official guides and Forest Department guards at all times. Failure to do so may result in immediate termination of the tour without refund.</li>
                            <li>Disembarking from the boat in unauthorized areas is strictly forbidden.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">5. Liability Limitations</h2>
                        <p>
                            Sundarban Eco Trails acts only in the capacity of an agent for providing transport, accommodation, and guiding services. We shall not be held liable for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Any injury, illness, or death resulting from the inherent risks of wildlife safaris.</li>
                            <li>Loss or damage to personal property or photographic equipment.</li>
                            <li>Delays or itinerary alterations caused by weather, tidal conditions, or mechanical breakdowns out of our direct control.</li>
                        </ul>
                        <p className="mt-4 font-medium">Travel Insurance is highly recommended for all guests.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">6. Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts in West Bengal.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">7. Contact Information</h2>
                        <p>
                            If you have specific questions about these terms before booking, please reach out to us: <br/>
                            <strong>Email:</strong> SundarbanEcoTrails@gmail.com <br/>
                        </p>
                    </div>

                 </div>
            </section>
        </>
    );
}
