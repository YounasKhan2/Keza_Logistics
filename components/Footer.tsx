"use client";

import React from "react";

export default function Footer() {

    const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        
        if (contactSection) {
            const offsetTop = contactSection.getBoundingClientRect().top + window.pageYOffset;
            const navbarHeight = 80;
            
            window.scrollTo({
                top: offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="bg-brand-black text-white bg-black">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold uppercase tracking-wider">American Trucking</h3>
                        <p className="text-sm text-gray-400">Your trusted partner for reliable, on-time logistics and transportation services across the nation.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-gray-300">Company</h4>
                        <ul className="mt-4 space-y-3">
                            <li><a className="text-sm text-gray-400 hover:text-white" href="#">About Us</a></li>
                            <li><a className="text-sm text-gray-400 hover:text-white" href="#">Our Fleet</a></li>
                            <li><a className="text-sm text-gray-400 hover:text-white" href="#">Safety</a></li>
                            <li><a className="text-sm text-gray-400 hover:text-white" href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-gray-300">Contact Info</h4>
                        <ul className="mt-4 space-y-3">
                            <li className="text-sm text-gray-400">4030 30TH ST DES MOINES, IA   50310 </li>
                            <li className="text-sm text-gray-400">(515) 608-3762  </li>
                            <li className="text-sm text-gray-400">
                                <a href="mailto:info@kezalogistics.com" className="hover:underline focus:outline-none focus:ring-2 focus:ring-accent-blue">
                                    info@kezalogistics.com
                                </a>
                            </li>
                             <li className="text-sm text-gray-400">MC # 1482550</li>
                        </ul>
                    </div>
                    <div className="bg-dark-blue p-8">
                        <h4 className="font-semibold tracking-wider uppercase text-white">Request a Quote</h4>
                        <p className="text-sm text-gray-300 mt-4">Get a fast, free, no-obligation quote for your shipping needs today.</p>
                        <a className="mt-4 w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden h-12 px-4 bg-blue-600 text-white text-sm font-bold uppercase tracking-wide hover:bg-blue-700 transition-colors rounded-md" href="#contact" onClick={handleQuoteClick}>
                            <span className="truncate">Get My Quote</span>
                        </a>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>© 2024 American Trucking Solutions. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}