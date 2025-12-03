import React from "react";

export default function Services() {
    return (
        <section id="services" className="pb-16 bg-gray-100 px-12">
            <div className="text-center py-16">
                <h2 className="text-4xl font-bold text-blue-950">Comprehensive Freight Services</h2>
                <p className="text-lg text-gray-600 mt-4 mb-8">Tailored transportation solutions to meet the specific needs of your business, ensuring efficiency and reliability</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-gray-300">

                <div className="bg-white p-8 text-center flex flex-col items-center">
                    <div className="text-blue-950 text-5xl mb-4">🚛</div>
                    <h3 className="text-2xl font-bold uppercase text-blue-950">Dry Van</h3>
                    <p className="text-gray-600 mt-2">Secure, enclosed transport for general freight. Perfect for protecting your cargo from the elements.</p>
                </div>
                <div className="bg-white p-8 text-center flex flex-col items-center">
                    <div className="text-blue-950 text-5xl mb-4">❄️</div>
                    <h3 className="text-2xl font-bold uppercase text-blue-950">Reefer</h3>
                    <p className="text-gray-600 mt-2">Temperature-controlled shipping for perishable goods, from frozen foods to pharmaceuticals.</p>
                </div>
                <div className="bg-white p-8 text-center flex flex-col items-center">
                    <div className="text-blue-950 text-5xl mb-4">🏗️</div>
                    <h3 className="text-2xl font-bold uppercase text-blue-950">Flatbed</h3>
                    <p className="text-gray-600 mt-2">Versatile solutions for oversized, heavy, or irregularly shaped loads and construction materials.</p>
                </div>
                <div className="bg-white p-8 text-center flex flex-col items-center">
                    <div className="text-blue-950 text-5xl mb-4">⚙️</div>
                    <h3 className="text-2xl font-bold uppercase text-blue-950">Logistics</h3>
                    <p className="text-gray-600 mt-2">End-to-end supply chain management, freight brokerage, and customized logistics planning.</p>
                </div>
            </div>
        </section>
    );
}
