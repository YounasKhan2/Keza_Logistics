import React from "react";

export default function Footer() {

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
                            <li className="text-sm text-gray-400">123 Industrial Parkway, Des Moines, IA 50309</li>
                            <li className="text-sm text-gray-400">(515) 555-0123</li>
                            <li className="text-sm text-gray-400">dispatch@americantrucking.com</li>
                        </ul>
                    </div>
                    <div className="bg-dark-blue p-8">
                        <h4 className="font-semibold tracking-wider uppercase text-white">Request a Quote</h4>
                        <p className="text-sm text-gray-300 mt-4">Get a fast, free, no-obligation quote for your shipping needs today.</p>
                        <a className="mt-4 w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden h-12 px-4 bg-accent-blue text-white text-sm font-bold uppercase tracking-wide hover:bg-blue-500 transition-colors" href="#">
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