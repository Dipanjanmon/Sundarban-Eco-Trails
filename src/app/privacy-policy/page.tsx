import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Sundarban Eco Trails',
    description: 'Our commitment to protecting your privacy and personal information while using Sundarban Eco Trails services.',
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <section className="relative h-[30vh] min-h-[300px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0 bg-emerald-950" />
                <div className="container relative z-20 mx-auto px-4 text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-display">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-emerald-200/80 font-light">
                        Last updated: March 17, 2026
                    </p>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative -mt-6 rounded-t-[2.5rem] z-30 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl space-y-12 text-slate-700 leading-relaxed font-light text-lg">
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">1. Introduction</h2>
                        <p>
                            Welcome to <strong>Sundarban Eco Trails</strong>. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">2. The Data We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Financial Data</strong> includes bank account and payment card details (processed securely by our payment providers).</li>
                            <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of tours and services you have purchased from us.</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">3. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking a safari).</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal obligation.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">5. Data Retention</h2>
                        <p>
                            We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">6. Your Legal Rights</h2>
                        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Request access to your personal data.</li>
                            <li>Request correction of your personal data.</li>
                            <li>Request erasure of your personal data.</li>
                            <li>Object to processing of your personal data.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">7. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at: <br/>
                            <strong>Email:</strong> SundarbanEcoTrails@gmail.com <br/>
                            <strong>Phone:</strong> +91 6289 056 302
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}
