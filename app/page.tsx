import React from "react";
import HeroSection from "../components/Hero";
import Services from "../components/Serives";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import About from "../components/About";
import SafetyCompliance from "../components/Safety_Compliance";
import ApplySection from "@/components/ApplySection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Showcase />
      <About/>
      <SafetyCompliance />
      <ApplySection />
      <Footer />
    </div>
      
    
    
  );
}