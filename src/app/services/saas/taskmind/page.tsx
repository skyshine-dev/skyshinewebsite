"use client";

import { motion } from "framer-motion";

import { useState } from "react";

export default function TaskmindPage() {
  // Sample testimonials array for the slider
  const testimonialsData = [
    {
      quote: `"TaskMind AI has revolutionized our project management. The AI-powered insights and automation are game-changing!"`,
      author: "Jennifer Chen",
      role: "Project Director, TechInnovate Inc",
    },
    {
      quote: `"Our team productivity increased by 45% after implementing TaskMind AI. The resource optimization is exceptional."`,
      author: "Michael Williams",
      role: "Operations Manager, AgileFlow",
    },
    {
      quote: `"The predictive analytics have helped us prevent bottlenecks before they occur. TaskMind AI is essential to our success."`,
      author: "Sarah Rodriguez",
      role: "Program Lead, FutureWorks",
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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
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
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full"
        />
      </div>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900 pb-16 pt-24">
        <div className="container mx-auto px-6 relative flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Left: Overlapping content card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl 
                       border border-gray-200 dark:border-gray-700 
                       w-full md:max-w-lg md:mr-[-80px]"
            style={{ background: 'var(--gradient-subtle) !important' }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
              TaskMind AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Your intelligent project management companion powered by AI for enhanced 
              productivity, automated workflows, and data-driven insights.
            </p>
            <div className="flex gap-4 mt-6">
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-full 
                           text-base md:text-lg font-semibold 
                           hover:bg-blue-700 transition-colors duration-300 shadow"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started
              </button>
              <button
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 
                           rounded-full text-base md:text-lg font-semibold 
                           hover:bg-blue-50 transition-colors duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right: Large Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 aspect-video bg-white dark:bg-gray-800 
                       rounded-xl border border-gray-200 dark:border-gray-700 
                       shadow-xl flex items-center justify-center 
                       w-full mt-4 md:mt-0"
          >
            <span className="text-sm text-gray-400 dark:text-gray-500">
              Large Hero Image
            </span>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
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
              Discover how TaskMind AI revolutionizes project management with powerful 
              AI-driven capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                number: "01",
                title: "AI-Powered Planning",
                desc: "Intelligent project planning and resource allocation based on historical data."
              },
              {
                number: "02",
                title: "Smart Task Management",
                desc: "Automated task prioritization and assignment based on team capacity."
              },
              {
                number: "03",
                title: "Predictive Analytics",
                desc: "Advanced analytics to forecast project timelines and potential bottlenecks."
              },
              {
                number: "04",
                title: "Team Collaboration",
                desc: "Seamless communication and file sharing within project teams."
              },
              {
                number: "05",
                title: "Resource Optimization",
                desc: "AI-driven resource allocation for maximum efficiency."
              },
              {
                number: "06",
                title: "Integration Hub",
                desc: "Connect with popular tools and services for streamlined workflow."
              }
            ].map((feat, i) => (
              <motion.div
                key={feat.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-gray-50 dark:bg-gray-800 
                           rounded-2xl shadow-xl hover:shadow-2xl 
                           transition-shadow duration-300"
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

      {/* Interface Examples */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Platform Interface
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Experience TaskMind AI&#39;s intuitive interfaces designed for modern project management.
          </p>

          <div className="grid gap-8">
            {/* Top row: 2 bigger placeholders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PlaceholderBox label="Project Dashboard" extraClasses="h-72" icon="📊" />
              <PlaceholderBox label="Task Management" extraClasses="h-72" icon="✅" />
            </div>

            {/* Bottom row: 3 smaller placeholders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PlaceholderBox label="Team Collaboration" extraClasses="h-48" icon="👥" />
              <PlaceholderBox label="Analytics View" extraClasses="h-48" icon="📈" />
              <PlaceholderBox label="Resource Planning" extraClasses="h-48" icon="⚙️" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            What our clients say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-10">
            Real feedback from teams using TaskMind AI to transform their project management.
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

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              Why Choose TaskMind AI?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the benefits of AI-driven project management, analytics, and 
              intelligent insights—all in one powerful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 text-gray-700 dark:text-gray-200">
              <Bullet text="Enhanced productivity through AI-driven automation" />
              <Bullet text="Data-driven insights for better decision making" />
              <Bullet text="Smart resource allocation and optimization" />
            </div>

            <div className="space-y-6 text-gray-700 dark:text-gray-200">
              <Bullet text="Seamless integration with existing tools" />
              <Bullet text="Advanced analytics and reporting capabilities" />
              <Bullet text="Improved team collaboration and communication" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/70">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to transform your project management?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Let TaskMind AI help you streamline your operations and boost productivity 
              with our intelligent project management platform.
            </p>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </button>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl aspect-video flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-md">
            <span className="text-sm text-gray-400 dark:text-gray-500">Platform Demo</span>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Simple bullet item for "Why Choose" */
function Bullet({ text }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="text-blue-600 dark:text-blue-400 text-2xl">✓</div>
      <p>{text}</p>
    </div>
  );
}

/* Reusable placeholder box for interface examples */
function PlaceholderBox({ label, extraClasses, icon }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl ${extraClasses} 
                  flex items-center justify-center 
                  border border-gray-200 dark:border-gray-700 
                  shadow-xl hover:shadow-2xl transition-shadow duration-300`}
    >
      <div className="text-center">
        <span className="text-3xl mb-3 block">{icon}</span>
        <span className="text-sm text-gray-400 dark:text-gray-500">{label}</span>
      </div>
    </div>
  );
}