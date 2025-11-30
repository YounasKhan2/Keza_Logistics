import React from "react";
import Logo from "./Logo";

export default function Navbar() {
    return (
            <div>
              <div className="fixed top-0 left-0 right-0 z-50 py-8 text-white flex justify-between px-10 bg-transparent backdrop-blur-sm">
              
              <div>
                <Logo />
              </div>
              
              <div>
                <ul className="flex px-4 gap-8 text-lg font-semibold hover:cursor-pointer  ">
                  <li className="hover:underline underline-offset-8 hover:transform hover:scale-105 transition-all duration-300">Home</li>
                  <li className="hover:underline underline-offset-8 hover:transform hover:scale-105 transition-all duration-300" >About</li>
                  <li className="hover:underline underline-offset-8 hover:transform hover:scale-105 transition-all duration-300">Contact</li>
                  <li className="hover:underline underline-offset-8 hover:transform hover:scale-105 transition-all duration-300" >Services</li>
                </ul>
              </div>
              
              <div>
                <button className="bg-white text-blue-950 px-4 py-2 rounded-md hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-300">Get a Quote</button>
              </div>
        
              </div>
            </div>
            
            
          );
    }
