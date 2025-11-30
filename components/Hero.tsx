import React from "react";

export default function HeroSection() {
return (
<section className="relative h-screen min-h-[600px] w-full pt-0 ">
    <div className="absolute inset-0 bg-cover bg-center" data-alt="A modern semi-truck on an open highway under a dramatic sky, representing reliability and strength." style={{ backgroundImage: "url('/images/Heroimage.jpg')" }} />
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative h-full flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider">Driven by Excellence</h1>
            <p className="text-lg md:text-xl font-light leading-relaxed">Delivering reliable, secure, and on-time freight solutions across America. Your cargo is our commitment.</p>
        </div>
        <a className="mt-8 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden h-14 px-8 bg-blue-600 text-white text-base font-bold uppercase tracking-wider hover:bg-blue-500 transition-colors rounded-md" href="#">
            <span className="truncate">Explore Our Services</span>

        </a>
    </div>
</section>

);
}
