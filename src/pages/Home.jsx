import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import PlatformSection from "@/components/landing/PlatformSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import InstagramSection from "@/components/landing/InstagramSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <AboutSection />
      <PlatformSection />
      <ServicesSection />
      <TestimonialsSection />
      <InstagramSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}