"use client";

import {   useScroll } from "framer-motion";
import { useRef } from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProductShowcase from "./components/ProductShowcase";
import TestimonialsSection from "./components/TestimonialsSection";

const Home = () => {
 

  const targetRef = useRef(null);
  const { } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  return (
    <div className="min-h-screen relative overflow-hidden" ref={targetRef}>
      <HeroSection/>
      <ServicesSection/>
      <WhyChooseSection/>
      <ProductShowcase />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
