'use client';

import React, { useState } from "react";
import Logo from "./Logo";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const navbarHeight = 80; // Adjust based on navbar height
            
            window.scrollTo({
                top: offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        }
    };

    const handleMobileScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        handleSmoothScroll(e, targetId);
        toggleMenu();
    };

    return (
            <div>
              <div className="fixed top-0 left-0 right-0 z-50 py-8 text-white flex justify-between items-center px-6 lg:px-10 bg-transparent backdrop-blur-sm">
              
              <div className="z-40">
                <Logo />
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex">
                <ul className="flex px-4 gap-8 text-lg font-semibold text-white hover:cursor-pointer">
                  <li className="hover:underline underline-offset-8 hover:transform hover:scale-105 transition-all duration-300"><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
                  <li className="hover:underline underline-offset-8 hover:transform hover:scale-105 transition-all duration-300"><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a></li>
                  <li className="hover:underline underline-offset-8 hover:transform hover:scale-105 transition-all duration-300"><a href="#fleet" onClick={(e) => handleSmoothScroll(e, '#fleet')}>Fleet</a></li>
                  <li className="hover:underline underline-offset-8 hover:transform hover:scale-105 transition-all duration-300"><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></li>
                  <li className="hover:underline underline-offset-8 hover:transform hover:scale-105 transition-all duration-300"><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
                </ul>
              </div>
              
              {/* Desktop CTA Button */}
              <div className="hidden lg:block">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-300 font-semibold" onClick={(e) => { const event = e as any; handleSmoothScroll(event, '#contact'); }}>Get a Quote</button>
              </div>
        
              </div>

              {/* Hamburger/Close Menu Button - Fixed Position */}
              <button 
                onClick={toggleMenu}
                className="lg:hidden fixed top-8 right-6 text-white text-3xl z-60 hover:scale-110 transition-transform duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>

              {/* Mobile Menu */}
              <div className={`fixed top-0 right-0 h-screen w-64 bg-blue-950 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-[55] lg:hidden ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}>
                <div className="flex flex-col pt-24 px-8 gap-6">
                  <ul className="flex flex-col gap-6 text-lg font-semibold text-white">
                    <li className="hover:underline underline-offset-8 hover:transform hover:translate-x-2 transition-all duration-300 cursor-pointer"><a href="#home" onClick={(e) => handleMobileScroll(e, '#home')}>Home</a></li>
                    <li className="hover:underline underline-offset-8 hover:transform hover:translate-x-2 transition-all duration-300 cursor-pointer"><a href="#services" onClick={(e) => handleMobileScroll(e, '#services')}>Services</a></li>
                    <li className="hover:underline underline-offset-8 hover:transform hover:translate-x-2 transition-all duration-300 cursor-pointer"><a href="#fleet" onClick={(e) => handleMobileScroll(e, '#fleet')}>Fleet</a></li>
                    <li className="hover:underline underline-offset-8 hover:transform hover:translate-x-2 transition-all duration-300 cursor-pointer"><a href="#about" onClick={(e) => handleMobileScroll(e, '#about')}>About</a></li>
                    <li className="hover:underline underline-offset-8 hover:transform hover:translate-x-2 transition-all duration-300 cursor-pointer"><a href="#contact" onClick={(e) => handleMobileScroll(e, '#contact')}>Contact</a></li>
                  </ul>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md hover:transform hover:scale-105 transition-all duration-300 mt-4 font-semibold" onClick={(e) => { const event = e as any; handleMobileScroll(event, '#contact'); }}>
                    Get a Quote
                  </button>
                </div>
              </div>

              {/* Overlay */}
              {isMenuOpen && (
                <div 
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[45] lg:hidden"
                  onClick={toggleMenu}
                ></div>
              )}
            </div>
            
            
          );
    }
