"use client";

import React from "react";
import { Truck, Snowflake, Container, Settings, Package, TrendingUp } from "lucide-react";

export default function Services() {
    return (
        <section id="services" className="pb-16 bg-gray-100 px-12">
            <div className="text-center py-16">
                <h2 className="text-4xl font-bold text-blue-950">Comprehensive Freight Services</h2>
                <p className="text-lg text-gray-600 mt-4 mb-8">Tailored transportation solutions to meet the specific needs of your business, ensuring efficiency and reliability</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

                <div className="bg-white p-8 text-center flex flex-col items-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                    <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <Truck className="text-blue-950 w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-blue-950 mb-3">Dry Van</h3>
                    <p className="text-gray-600">Secure, enclosed transport for general freight. Perfect for protecting your cargo from the elements.</p>
                </div>

                <div className="bg-white p-8 text-center flex flex-col items-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                    <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <Snowflake className="text-blue-950 w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-blue-950 mb-3">Reefer</h3>
                    <p className="text-gray-600">Temperature-controlled shipping for perishable goods, from frozen foods to pharmaceuticals.</p>
                </div>

                <div className="bg-white p-8 text-center flex flex-col items-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                    <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <Container className="text-blue-950 w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-blue-950 mb-3">Flatbed</h3>
                    <p className="text-gray-600">Versatile solutions for oversized, heavy, or irregularly shaped loads and construction materials.</p>
                </div>

                <div className="bg-white p-8 text-center flex flex-col items-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                    <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <Package className="text-blue-950 w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-blue-950 mb-3">Box Truck</h3>
                    <p className="text-gray-600">Ideal for local deliveries and smaller shipments requiring enclosed protection and easy loading access.</p>
                </div>

                <div className="bg-white p-8 text-center flex flex-col items-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                    <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <TrendingUp className="text-blue-950 w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-blue-950 mb-3">LTL</h3>
                    <p className="text-gray-600">Less-Than-Truckload shipping for cost-effective transportation of smaller freight that does not require a full trailer.</p>
                </div>

                <div className="bg-white p-8 text-center flex flex-col items-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                    <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <Settings className="text-blue-950 w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-blue-950 mb-3">Logistics</h3>
                    <p className="text-gray-600">End-to-end supply chain management, freight brokerage, and customized logistics planning.</p>
                </div>
            </div>
        </section>
    );
}
