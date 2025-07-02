"use client";

import { motion } from "framer-motion";
import Image from "next/image";





interface PlatformExample {
  label: string;
  height: string;
  url: string;
}

export default function ProptikAIPage() {


 

  const heroImage = {
    url: "/images/proptikai-hero.png",
    alt: "ProptikAI Hero Image"
  };

  const finalCtaImage = {
    url: "/images/proptikai-last.png",
    alt: "ProptikAI Platform Demo"
  };

  const platformExamples: PlatformExample[] = [
    { label: "Property Dashboard", height: "h-72", url: "/images/Proptikai-block-1.png" },
    { label: "Agent Portal", height: "h-72", url: "/images/Proptikai-block-2.png" },
    { label: "Listing Management", height: "h-48", url: "/images/Proptikai-block-3.png" },
    { label: "Analytics View", height: "h-48", url: "/images/Proptikai-block-4.png" },
    { label: "Lead Pipeline", height: "h-48", url: "/images/Proptikai-block-5.png" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Animation */}
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
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.2, 0.3], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full"
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">ProptikAI</h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              A unified real estate business management platform that centralizes property listings, streamlines operations, and drives growth through powerful analytics.
            </p>
            <div className="flex gap-4 mt-6">
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started
              </button>
              <button
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                onClick={() => window.location.href = '/contact'}
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
            <Image src={heroImage.url} alt={heroImage.alt} className="rounded-xl object-inherit w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Platform Examples */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Platform Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Explore how ProptikAI adapts to your real estate business needs.
          </p>
          <div className="grid gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platformExamples.slice(0, 2).map((item) => (
                <Image key={item.label} src={item.url} alt={item.label} className={`rounded-2xl w-full object-inherit ${item.height} border border-gray-200 dark:border-gray-700 shadow-xl`} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platformExamples.slice(2).map((item) => (
                <Image key={item.label} src={item.url} alt={item.label} className={`rounded-2xl w-full object-inherit ${item.height} border border-gray-200 dark:border-gray-700 shadow-xl`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/70 z-10 relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to transform your real estate business?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Let ProptikAI help you streamline your operations and drive growth with our comprehensive real estate management platform.
            </p>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </button>
          </div>
          <div className="rounded-xl aspect-video flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-md">
            <Image src={finalCtaImage.url} alt={finalCtaImage.alt} className="rounded-xl object-inherit w-full h-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

