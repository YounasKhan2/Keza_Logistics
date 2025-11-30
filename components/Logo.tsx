'use client';

export default function Logo() {
    return (
        <div className="flex items-center gap-3 group cursor-pointer">
            {/* Animated SVG Logo */}
            <svg 
                width="50" 
                height="50" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            >
                {/* Define gradient */}
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#172554" /> {/* blue-950 */}
                        <stop offset="100%" stopColor="#D1D5DB" /> {/* gray-300 */}
                    </linearGradient>
                    
                    {/* Animated gradient for hover effect */}
                    <linearGradient id="logoGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E40AF" className="animate-pulse">
                            <animate 
                                attributeName="stop-color" 
                                values="#172554; #1E40AF; #172554" 
                                dur="3s" 
                                repeatCount="indefinite"
                            />
                        </stop>
                        <stop offset="100%" stopColor="#F3F4F6">
                            <animate 
                                attributeName="stop-color" 
                                values="#D1D5DB; #F3F4F6; #D1D5DB" 
                                dur="3s" 
                                repeatCount="indefinite"
                            />
                        </stop>
                    </linearGradient>
                </defs>

                {/* Truck Icon Design */}
                {/* Truck cabin */}
                <path 
                    d="M 20 55 L 20 40 L 35 35 L 45 35 L 45 55 Z" 
                    fill="url(#logoGradient)" 
                    className="group-hover:fill-[url(#logoGradientHover)]"
                />
                
                {/* Truck trailer */}
                <rect 
                    x="45" 
                    y="40" 
                    width="35" 
                    height="15" 
                    fill="url(#logoGradient)"
                    className="group-hover:fill-[url(#logoGradientHover)]"
                />
                
                {/* Front wheel */}
                <circle 
                    cx="32" 
                    cy="58" 
                    r="5" 
                    fill="url(#logoGradient)"
                    className="group-hover:fill-[url(#logoGradientHover)]"
                >
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 32 58"
                        to="360 32 58"
                        dur="4s"
                        repeatCount="indefinite"
                    />
                </circle>
                
                {/* Back wheel 1 */}
                <circle 
                    cx="55" 
                    cy="58" 
                    r="5" 
                    fill="url(#logoGradient)"
                    className="group-hover:fill-[url(#logoGradientHover)]"
                >
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 55 58"
                        to="360 55 58"
                        dur="4s"
                        repeatCount="indefinite"
                    />
                </circle>
                
                {/* Back wheel 2 */}
                <circle 
                    cx="70" 
                    cy="58" 
                    r="5" 
                    fill="url(#logoGradient)"
                    className="group-hover:fill-[url(#logoGradientHover)]"
                >
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 70 58"
                        to="360 70 58"
                        dur="4s"
                        repeatCount="indefinite"
                    />
                </circle>

                {/* Letter K styled as route/path */}
                <path 
                    d="M 25 25 L 25 15 M 25 20 L 32 15 M 25 20 L 32 25" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    fill="none"
                    className="group-hover:stroke-[url(#logoGradientHover)]"
                >
                    <animate 
                        attributeName="stroke-dasharray" 
                        from="0,100" 
                        to="100,0" 
                        dur="2s" 
                        fill="freeze"
                    />
                </path>

                {/* Letter L as route marker */}
                <path 
                    d="M 68 15 L 68 25 L 75 25" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    fill="none"
                    className="group-hover:stroke-[url(#logoGradientHover)]"
                >
                    <animate 
                        attributeName="stroke-dasharray" 
                        from="0,100" 
                        to="100,0" 
                        dur="2s" 
                        fill="freeze"
                    />
                </path>
            </svg>

            {/* Brand Text */}
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                    Keza Logistics
                </h1>
                <p className="text-[10px] text-gray-400 tracking-widest uppercase -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Driven by Excellence
                </p>
            </div>
        </div>
    );
}
