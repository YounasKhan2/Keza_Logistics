import react from 'react';

export default function Showcase() {
    return (
        <section className="py-16 sm:py-20 bg-dark-blue text-white bg-blue-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black uppercase tracking-wider">Our Modern Fleet</h2>
                    <p className="mt-4 text-lg text-white max-w-3xl mx-auto">Equipped with the latest technology for safety, efficiency, and real-time tracking to ensure your freight is in good hands.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                    {/* Flatbed */}
                    <div className="aspect-w-full aspect-h-3 relative group overflow-hidden">
                        <img className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-105" data-alt="A flatbed truck on the road." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnNF8xwDTEVmR_dY2-idGFVFiZh6CAFDAqwwnlPasQRSCvf7lf8GvE_ghY69DHiIc2uFO7hPyayRZxeqchH7iLTXtWLNC72jvruVovdLIqspi0VNtPUDugWVPAiJjnTL8oHSdEKhLcI-vP4xKAEeWHdYQ-dn7ealvGqJg8KBE9nN1iOcjRRtfI2eL-uLJpzSkW7FcVzLzLOMQ_8j3Cg2TTUD_JK7Y2HRdf1TmsdygrPPfu93aKgP90bAgC7ZstGi30UPxw78vWcXY" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="absolute bottom-3 left-4 text-xl font-semibold text-white">Flatbed</p>
                        </div>
                    </div>
                    {/* Dry Van */}
                    <div className="aspect-w-4 aspect-h-3 relative group overflow-hidden">
                        <img className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-105" data-alt="A fleet of clean, white dry van trailers parked in a row." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwFJ4va44CpXdqTWBZbXvobkp_p7pX_mOMNYZIWZ3GlBEsnp1_yUemDfmGPL-hbh7h9OOtmA_RWq_JGotmzOsYf5Ijwbft9dGgABCpCf8pSmBWS3agJCgb_6_Peckp2EU4FUddWfmBuuBSWlJJxYjs5CoXAYmqOjifTMjXVzACak4uQd0RlEf9Bmpy7IpQLNDjgVX3MFM2inmyFJN93KWRpAb4AzKz0rAO317RVJ_rv7NXo1Ah_m37uhdsi91CNIZJmwXZ9vu15FI" />
                        <div className="absolute inset-0 bg-linearrr-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="absolute bottom-3 left-4 text-xl font-semibold text-white">Dry Van</p>
                        </div>
                    </div>
                    {/* Reefer */}
                    <div className="aspect-w-4 aspect-h-3 relative group overflow-hidden">
                        <img className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-105" data-alt="Close-up of a refrigerated trailer unit." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEO9aSwpPk8aH4k2RTZksCfCx2vfdt6h55qMVseQQPiFIIeuuS21l4DrCb7Zb45iDBx7e5xqk0JtQi8cf5lf-q_zY363tUarmNPuukqkRYVSKwwUI1_buuB6l2M5jVfVRccdDcoyeTvy3NMmOBFnb9FECIGvCUPEMc9As_XLaH_soRpYTFyvRGoEz3kAYw2NJgUJnYvGj8FpA_CNHEf_ijbb2SoEktkfGc7_N7uGSENKsOFTjszQaJhecOZ7l6_e2efcvmcON_wh4" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="absolute bottom-3 left-4 text-xl font-semibold text-white">Reefer</p>
                        </div>
                    </div>
                    {/* Warehouse */}
                    <div className="aspect-w-4 aspect-h-3 sm:col-span-2 lg:col-span-1 relative group overflow-hidden">
                        <img className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-105" data-alt="Interior of a logistics warehouse." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmwECwa4Fjm-uW1xO44czrFQGrrQyNxHh-XBm6U_Veibxg99ZNK3M5VaDSvCO7cgt4Vc4HDexyAZTQtxKbyLKKf3-hpDlkM3BDpzStn59D_-9ns7YLhUMxwmqcJS3Fbemp-3peU7a0iL4XE2ykGCgKEt9TqqQ5ES8z2POus1uxAekkcsFLHRTMLos0x8nXLIxB0_gepFzpaN4VdW6PnsDt1qKA0R93M-xL7kV2cxyzpsh0AFokTuNoTrfk1wXETmE_WpOojE1mA_s" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="absolute bottom-3 left-4 text-xl font-semibold text-white">Warehouse</p>
                        </div>
                    </div>
                    {/* Long Haul */}
                    <div className="aspect-w-4 aspect-h-3 lg:col-span-2 relative group overflow-hidden">
                        <img className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-105" data-alt="A modern semi-truck at sunset." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvt-ka7dA4wrnyC5JHUwcY1ika2CGUj_T-vrBl-UAqQTjD-rOQjtrKud3lO-9tPn5ozyTDPaC9qwOAqZqPnJqYDdNbmh-vlDHoFaoUOFI49sYmZ5wa2ThLI6i0JWC7nR0_sMrRGrqQ15pdh8i1qM-oD5dm3Ug-iNT4ulDfO7nHvUlB5Fl4Yz_0VX79VQTOdJXCTz-l-HhhJEFBH9tkyenrdMhgzQ_Ws0jT8PUM1jBoJfZpLEijtnsv9rBa-Y4sJk3gI7UPuF_pZU8" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="absolute bottom-3 left-4 text-xl font-semibold text-white">Long Haul</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>



    );
}