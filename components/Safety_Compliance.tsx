import React from "react";
import { MdHealthAndSafety, MdVerifiedUser } from "react-icons/md";

export default function safetyCompliance() {
    return (
        <section id="safety" className="py-20 sm:py-28 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black uppercase tracking-wider">Safety &amp; Compliance: Our #1 Priority</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">We are committed to the highest standards of safety for our drivers, your cargo, and the public.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                    <div className="bg-[#1E1E1E] p-10 rounded-lg hover:bg-[#252525] transition-colors duration-300">
                        <MdHealthAndSafety className="text-blue-500 text-6xl mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold uppercase">Impeccable Safety Record</h3>
                        <p className="mt-2 text-gray-400">Our operations consistently exceed federal safety standards, thanks to rigorous training, regular equipment maintenance, and a culture of vigilance.</p>
                    </div>
                    <div className="bg-[#1E1E1E] p-10 rounded-lg hover:bg-[#252525] transition-colors duration-300">
                        <MdVerifiedUser className="text-blue-500 text-6xl mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold uppercase">Fully Compliant &amp; Insured</h3>
                        <p className="mt-2 text-gray-400">We maintain full compliance with all DOT regulations and carry comprehensive insurance coverage for your complete peace of mind.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}