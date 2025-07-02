"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";


interface PlatformExample {
  label: string;
  height: string;
  url: string;
}

export default function ResolvedeskPage() {
  // Sample testimonials array for the slider
  const testimonialsData = [
    {
      quote: `"ResolveDesk has transformed our customer support operations. 
        The smart routing saves our team hours every day!"`,
      author: "Sarah Thompson",
      role: "Support Manager, TechCorp",
    },
    {
      quote: `"The automated workflows are a game-changer. Our response 
        times have improved by 60% since implementation."`,
      author: "Michael Chen",
      role: "Operations Director, GlobalServe",
    },
    {
      quote: `"The analytics dashboard helps us make data-driven decisions. 
        It's revolutionized how we handle customer support."`,
      author: "Emily Rodriguez",
      role: "CEO, SupportPro Solutions",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  // Replace the placeholder text with actual image URLs
  const heroImage = {
    url: "/images/proptikAI-hero.png",
    alt: "ResolveDesk Hero Image",
  };

  const platformExamples: PlatformExample[] = [
    { label: "Support Dashboard", height: "h-72", url: "/images/resolvedesk-dashboard.png" },
    { label: "Ticket Management", height: "h-72", url: "/images/resolvedesk-ticket.png" },
    { label: "Analytics View", height: "h-48", url: "/images/resolvedesk-analytics.png" },
    { label: "Knowledge Base", height: "h-48", url: "/images/resolvedesk-knowledge.png" },
    { label: "Team Portal", height: "h-48", url: "/images/resolvedesk-team.png" },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
              ResolveDesk
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              A smart helpdesk and ticket management system that streamlines customer support,
              automates workflows, and delivers exceptional service quality.
            </p>
            <div className="flex gap-4 mt-6">
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow"
                onClick={() => window.location.href = "/contact"}
              >
                Get Started
              </button>
              <button
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                onClick={() => window.location.href = "/contact"}
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
            <Image
              src={heroImage.url}
              alt={heroImage.alt}
              className="rounded-xl object-cover w-full h-full"
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
              Discover powerful tools designed to transform your customer support
              operations and deliver exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                number: "01",
                title: "Smart Ticket Routing",
                desc: "Automatically assign tickets to the right team members based on expertise and workload.",
              },
              {
                number: "02",
                title: "Automated Workflows",
                desc: "Streamline support processes with customizable automation rules and triggers.",
              },
              {
                number: "03",
                title: "Knowledge Base",
                desc: "Build and manage a comprehensive self-service portal for common inquiries.",
              },
              {
                number: "04",
                title: "Multi-channel Support",
                desc: "Handle tickets from email, chat, and social media in one unified interface.",
              },
              {
                number: "05",
                title: "Performance Analytics",
                desc: "Track support metrics and team performance with detailed insights.",
              },
              {
                number: "06",
                title: "SLA Management",
                desc: "Monitor and maintain service level agreements with automated tracking.",
              },
            ].map((feat, i) => (
              <motion.div
                key={feat.number}
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
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {feat.desc}
                </p>
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
            See how ResolveDesk adapts to your support team&#39;s needs with powerful features.
          </p>

          <div className="grid gap-8">
            {/* Top row: 2 bigger images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platformExamples.slice(0, 2).map((item) => (
                <Image
                  key={item.label}
                  src={item.url}
                  alt={item.label}
                  className={`rounded-2xl w-full object-cover ${item.height} border border-gray-200 dark:border-gray-700 shadow-xl`}
                />
              ))}
            </div>

            {/* Bottom row: 3 smaller images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platformExamples.slice(2).map((item) => (
                <Image
                  key={item.label}
                  src={item.url}
                  alt={item.label}
                  className={`rounded-2xl w-full object-cover ${item.height} border border-gray-200 dark:border-gray-700 shadow-xl`}
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
            Real feedback from support teams using ResolveDesk to transform their operations.
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
              Ready to transform your customer support?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Let ResolveDesk help you deliver exceptional customer service with
              our intelligent support management platform.
            </p>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Contact Us
            </button>
          </div>
          <div className="rounded-xl aspect-video flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-md">
            <Image
              src="/images/resolvedesk-demo.png"
              alt="ResolveDesk Platform Demo"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}