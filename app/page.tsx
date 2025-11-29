import React from "react";
import HeroSection from "../components/Hero";
import Services from "../components/Serives";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Showcase />
    </div>
      
    
    
  );
}