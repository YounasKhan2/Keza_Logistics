import React from "react";

export default function Navbar() {
    return (
        <section id="about" className="py-20 sm:py-28 bg-light-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-left">
                        <h2 className="text-3xl font-black uppercase tracking-wider text-brand-black">About Our Company</h2>
                        <p className="mt-6 text-lg text-gray-700">Founded on the principles of hard work and integrity, American Trucking has grown from a small family operation into a leading freight carrier. We combine traditional values with modern technology to provide unparalleled service. Our roots are in the Midwest, but our reach is nationwide.</p>
                        <h3 className="mt-12 text-2xl font-bold uppercase text-brand-black">Service Area: Midwest Focus, National Reach</h3>
                        <p className="mt-4 text-lg text-gray-700">Headquartered in the heartland, we offer comprehensive coverage across all 48 contiguous states. Our strategic location ensures efficient transit times and competitive pricing, whether your destination is regional or coast-to-coast.</p>
                    </div>
                    <div>
                        <img className="object-cover w-full h-full shadow-lg border-4 border-white" data-alt="A stylized map of the United States with the Midwest region highlighted in blue to show service emphasis." data-location="USA" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-_bZZ-XzivslnD8Vi4gj_vXgajdgDr38h3516Y4nobPDrkY0ZFbkxZUIBG_qD5Sr8zoMJ4YF8wNGHzPK3IhzpWIq9AVVNnvci6_xdaovF66243o0KSUlQTXKO5hfw1ERZzOeykSgQ0GYFH6L0yvinf_4kl3RXss6w0c3kVWP7BgROXc96IVnrSxObgtMdx4cEaW3ca13JgCZpdvFkSziYcPUytQqSeSKm79V-pMKFoYDv6JtP3YSWL70ESMMMu4Ox7rJEIEF16Hg" />
                    </div>
                </div>
            </div>
        </section>
    );
}