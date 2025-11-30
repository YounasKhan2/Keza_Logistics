import React from "react";

export default function ApplySection() {
    return (
        <section className="bg-blue-950">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
                <h2 className="text-4xl font-extrabold uppercase tracking-wider">Drive With The Best</h2>
                <p className="mt-4 text-lg leading-6 max-w-2xl mx-auto">We are hiring professional CDL-A drivers. Join a team that values your skill and dedication. We offer top pay, modern equipment, and excellent benefits.</p>
                <a className="mt-8 inline-block text-white px-8 py-4 text-sm font-bold uppercase transition-colors bg-blue-500 rounded-xl hover:bg-blue-700" href="#">
                    Apply Today
                </a>
            </div>
        </section>
    );
}