"use client";

import React, { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        message: ""
    });
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorText, setErrorText] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        setStatus('idle')
        setErrorText('')

        // simple honeypot check (if you add a hidden field named `hp`)
        // if ((formData as any).hp) return setStatus('error')

        try {
            const res = await fetch('/api/send-quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            let data = null
            try { data = await res.json() } catch (err) { /* ignore parse errors */ }

            if (!res.ok) {
                setStatus('error')
                setErrorText(data?.error || `Failed to send (status ${res.status})`)
            } else {
                setStatus('success')
                setFormData({ name: '', email: '', phone: '', company: '', serviceType: '', message: '' })
            }
        } catch (err: any) {
            console.error('[ApplySection] submit error', err?.message || err)
            setStatus('error')
            setErrorText(err?.message || 'Network error')
        } finally {
            setLoading(false)
        }
    };

    return (
        <section id="contact" className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-950 uppercase tracking-wider">Get A Quote</h2>
                    <p className="mt-4 text-lg text-gray-600">Fill out the form below and our team will get back to you within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                    {status === 'success' && (
                        <div className="p-3 mb-2 text-green-800 bg-green-100 rounded">Your request was sent — we will contact you soon.</div>
                    )}
                    {status === 'error' && (
                        <div className="p-3 mb-2 text-red-800 bg-red-100 rounded">{errorText || 'Failed to send request. Please try again.'}</div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-blue-950 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                                placeholder=""
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-blue-950 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                                placeholder=""
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-blue-950 mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                                placeholder="(555) 123-4567"
                            />
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-semibold text-blue-950 mb-2">
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                                placeholder="Your Company"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="serviceType" className="block text-sm font-semibold text-blue-950 mb-2">
                            Service Type *
                        </label>
                        <select
                            id="serviceType"
                            name="serviceType"
                            required
                            value={formData.serviceType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 bg-white"
                        >
                            <option value="" className="text-gray-500">Select a service</option>
                            <option value="dry-van" className="text-gray-900">Dry Van</option>
                            <option value="reefer" className="text-gray-900">Reefer</option>
                            <option value="flatbed" className="text-gray-900">Flatbed</option>
                            <option value="box-truck" className="text-gray-900">Box Truck</option>
                            <option value="ltl" className="text-gray-900">LTL</option>
                            <option value="logistics" className="text-gray-900">Logistics</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-blue-950 mb-2">
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none text-gray-900"
                            placeholder="Tell us about your shipping needs..."
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg-blue-600 text-white px-12 py-4 uppercase tracking-wider rounded-md transition-all duration-300 font-semibold ${loading ? 'opacity-60 cursor-wait' : 'hover:bg-blue-700 hover:cursor-pointer hover:transform hover:scale-105'}`}
                        >
                            {loading ? 'Sending...' : 'Submit Quote Request'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}