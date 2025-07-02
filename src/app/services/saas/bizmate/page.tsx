"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function BizMatePage() {
  // Testimonials data for future use
 

 





  const heroImage = {
    url: "/Images/bizmate-hero.png",
    alt: "BizMate Hero Image"
  };

  const finalCtaImage = {
    url: "/Images/common-Image.png",
    alt: "Final CTA Image"
  };

  const websiteExamples = [
    { label: "Enterprise Dashboard", icon: "🖥️", height: "h-72", url: "/Images/bizmate-block-1.png" },
    { label: "Mobile Interface", icon: "📱", height: "h-72", url: "/Images/bizmate-block-2.png" },
    { label: "Chat Interface", icon: "💬", height: "h-48", url: "/Images/bizmate-block-3.png" },
    { label: "Analytics View", icon: "📊", height: "h-48", url: "/Images/bizmate-block-4.png" },
    { label: "Integration Hub", icon: "🔄", height: "h-48", url: "/Images/bizmate-block-5.png" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2.5 w-2.5 bg-blue-400/60 dark:bg-blue-300 rounded-full shadow-glow"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [0, 1.2, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-white dark:bg-gray-900 pb-16 pt-24">
        <div className="container mx-auto px-6 relative flex flex-col md:flex-row items-start md:items-center gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            className="z-10 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 w-full md:max-w-lg md:mr-[-80px]"
            style={{ background: 'var(--gradient-subtle) !important' }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
              BizMate AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Your WhatsApp-style AI business companion for smarter operations, automated tasks, and real-time insights—boosting your productivity and growth.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow"
                onClick={() => window.location.href = '/contact'}>
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                onClick={() => window.location.href = '/contact'}>
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            className="flex-1 aspect-video bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl flex items-center justify-center w-full mt-4 md:mt-0">
            <Image src={heroImage.url} alt={heroImage.alt} className="rounded-xl object-contain w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* WEBSITE EXAMPLES */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Website Examples</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            See how BizMate AI&#39;s capabilities can adapt to various web platforms and designs.
          </p>

          <div className="grid gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {websiteExamples.slice(0, 2).map((item) => (
                <Image key={item.label} src={item.url} alt={item.label} className={`rounded-2xl w-full object-contain ${item.height} border border-gray-200 dark:border-gray-700 shadow-xl`} />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {websiteExamples.slice(2).map((item) => (
                <Image key={item.label} src={item.url} alt={item.label} className={`rounded-2xl w-full object-contain ${item.height} border border-gray-200 dark:border-gray-700 shadow-xl`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/70">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Excited to create synergy in your organization?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Let BizMate AI guide your business to its next breakthrough with personalized AI solutions tailored to your unique challenges.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              onClick={() => window.location.href = '/contact'}>
              Contact Us
            </button>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl aspect-video flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-md">
            <Image src={finalCtaImage.url} alt={finalCtaImage.alt} className="rounded-xl object-contain w-full h-full" />
          </div>
        </div>
      </section>
    </div>
  );
}