// app/services/saas/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";


interface PlatformExample {
  label: string;
  height: string;
  url: string;
}

interface KeyFeature {
  number: string;
  title: string;
  desc: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  heroImageUrl: string;
  keyFeatures: KeyFeature[];
  platformExamples: { label: string; url: string }[];
  testimonials: Testimonial[];
  previewDescription: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaImageUrl?: string;
  href?: string;
}

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/product/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Product = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  const handlePrev = () => {
    if (!product) return;
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? product.testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!product) return;
    setCurrentTestimonialIndex((prev) =>
      prev === product.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <p className="text-gray-700 dark:text-gray-300">Product not found.</p>
      </div>
    );
  }

  // Construct exactly the same objects as in the static ResolvedeskPage:
  const heroImage = {
    url: product.heroImageUrl,
    alt: `${product.title} Hero Image`,
    
  };

  const platformExamples: PlatformExample[] = product.platformExamples.map((item, idx) => ({
    label: item.label,
    url: item.url,
    height: idx < 2 ? "h-72" : "h-48",
  }));

  const testimonialsData: Testimonial[] = product.testimonials;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2.5 w-2.5 bg-blue-400/60 dark:bg-blue-300 rounded-full shadow-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 1.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full 
                     bg-gradient-to-br from-blue-400/20 to-indigo-400/20 
                     rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full 
                     bg-gradient-to-tr from-purple-400/20 to-blue-400/20 
                     rounded-full"
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-white dark:bg-gray-900 pb-16 pt-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-start md:items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 w-full md:max-w-lg md:mr-[-80px]"
            style={{ background: 'var(--gradient-subtle) !important' }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
             {product.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
             {product.description}
            </p>
            <div className="flex gap-4 mt-6">
              
              <button
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                onClick={() => window.location.href = product.href || "#"}
              >
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 aspect-video rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl flex items-center justify-center w-full mt-4 md:mt-0"
          >
            <img
              src={heroImage.url}
            
              alt={heroImage.alt}
              className="rounded-xl object-contain w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 z-10 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              Key Features
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Discontain powerful tools designed to transform your workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {product.keyFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {feat.number}
                  </h3>
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  {feat.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-lg">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 z-10 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Platform Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            See how {product.title} adapts to your needs with powerful features.
          </p>

          <div className="grid gap-8">
            {/* Top row: 2 bigger images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platformExamples.slice(0, 2).map((item, idx) => (
                <img
                  key={idx}
                  src={item.url}
                  alt={item.label}
                  width={800}
                  height={450}
                  className="rounded-2xl w-full object-inherit h-72 border border-gray-200 dark:border-gray-700 shadow-xl"
                />
              ))}
            </div>

            {/* Bottom row: 3 smaller images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platformExamples.slice(2).map((item, idx) => (
                <img
                  key={idx}
                  src={item.url}
                  alt={item.label}
                  width={800}
                  height={450}
                  className="rounded-2xl w-full object-inherit h-48 border border-gray-200 dark:border-gray-700 shadow-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 z-10 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            What our clients say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-10">
            Real feedback from customers who trust {product.title}.
          </p>

          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 shadow-xl border border-gray-200 dark:border-gray-700">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 italic leading-relaxed">
                {testimonialsData[currentTestimonialIndex].quote}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {testimonialsData[currentTestimonialIndex].author}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonialsData[currentTestimonialIndex].role}
                  </p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-2xl">‹</span>
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-2xl">›</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



  {/* Final CTA Section */}
  <section className="py-16 bg-gray-50 dark:bg-gray-900/70 z-10 relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {product.ctaHeading}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
            {product.ctaDescription}
            </p>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              onClick={() => window.location.href = "/contact"}
            >
             Get Started
            </button>
          </div>
          <div className="rounded-xl aspect-video flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-md">
          <img
              src={product.ctaImageUrl?product.ctaImageUrl:""}
              alt={`${product.title} CTA Image`}
              
              className="rounded-xl object-contain w-full h-full"
            />
          </div>
        </div>
      </section>

    
    </div>
  );
}