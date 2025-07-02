"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "SaaS Solutions",
    description: "Cloud-based software solutions designed for scalability and efficiency",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18l9-2zm0 0v-8" />
      </svg>
    ),
    link: "/services/saas",
    features: ["Custom SaaS Products", "Third-party Solutions", "Cloud Integration"],
    metrics: {
      clients: "200+",
      satisfaction: "98%",
      uptime: "99.99%"
    }
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions to meet your unique business requirements",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    link: "/services/custom-development",
    features: ["Web Applications", "Mobile Apps", "Enterprise Software"],
    metrics: {
      projects: "500+",
      satisfaction: "96%",
      retention: "92%"
    }
  },
  {
    title: "Data Center as a Service",
    description: "Reliable and secure infrastructure solutions for your business",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    link: "/services/daas",
    features: ["Virtual Servers", "Cloud Computing", "Kubernetes Management"],
    metrics: {
      datacenters: "25+",
      uptime: "99.999%",
      security: "ISO 27001"
    }
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your online presence",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    link: "/services/digital-marketing",
    features: ["SEO Optimization", "Social Media", "PPC Campaigns"],
    metrics: {
      campaigns: "1000+",
      roi: "300%",
      growth: "150%"
    }
  }
];

const industryVerticals = [
  {
    name: "Healthcare",
    icon: "🏥",
    solutions: ["Patient Management Systems", "Telemedicine Platforms", "Healthcare Analytics"]
  },
  {
    name: "Finance",
    icon: "💰",
    solutions: ["Payment Gateways", "Risk Management", "Trading Platforms"]
  },
  {
    name: "E-commerce",
    icon: "🛍️",
    solutions: ["Online Marketplaces", "Inventory Management", "Customer Analytics"]
  },
  {
    name: "Education",
    icon: "📚",
    solutions: ["Learning Management", "Virtual Classrooms", "Student Analytics"]
  }
];

const comparisonMatrix = [
  {
    category: "Infrastructure",
    basic: "Shared Resources",
    professional: "Dedicated Resources",
    enterprise: "Custom Infrastructure"
  },
  {
    category: "Support",
    basic: "Email Support",
    professional: "24/7 Phone Support",
    enterprise: "Dedicated Team"
  },
  {
    category: "SLA",
    basic: "99.9% Uptime",
    professional: "99.95% Uptime",
    enterprise: "99.99% Uptime"
  },
  {
    category: "Security",
    basic: "Standard Security",
    professional: "Advanced Security",
    enterprise: "Custom Security"
  }
];

import { useState } from "react";

type ServiceCardProps = {
  service: typeof services[0];
  isActive: boolean;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isActive }) => {
  // Remove scaling differences between active and inactive cards
  const cardClasses = isActive
    ? 'opacity-100 z-30'
    : 'opacity-80 z-10';

  return (
    <div className={`w-full max-w-xl relative group ${cardClasses} transition-all duration-500`}>
      {/* Frosted Glass Card */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[10px] rounded-[20px] overflow-hidden transition-all duration-300 group-hover:scale-105">
        <div className="absolute inset-0 opacity-5 bg-[url('/tech-pattern.svg')]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Card Content */}
      <div className="relative p-8 border border-white/10 rounded-[20px] group-hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-6 text-blue-400 relative">
          <div className="absolute inset-0 bg-blue-400/10 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
          <div className="relative">{service.icon}</div>
        </div>
        
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-4">
          {service.title}
        </h3>
        
        <p className="text-gray-400 mb-6 max-w-xl">{service.description}</p>
        
        <ul className="space-y-3 mb-8">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center justify-center text-gray-300">
              <motion.div 
                className="w-2 h-2 bg-blue-400 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* Success Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl w-full max-w-lg">
          {Object.entries(service.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-blue-400 font-bold text-xl">{value}</div>
              <div className="text-gray-400 text-sm capitalize">{key}</div>
            </div>
          ))}
        </div>

        <Link
          href={service.link}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 group-hover:transform group-hover:translate-y-[-2px]"
        >
          <span className="relative">
            <span>Explore Service</span>
            <motion.span 
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
            />
          </span>
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Tech-inspired Background Animation */}
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

      {/* Hero Section with Interactive Elements */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Transform Your Business
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions tailored to your industry needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Innovation", "Scalability", "Security", "Reliability"].map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 text-blue-400"
                >
                  {value}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section with 3D Carousel View */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevClick}
              className="absolute left-4 md:left-8 z-40 w-12 h-12 rounded-full bg-gray-800/80 border border-blue-500/30 text-blue-400 flex items-center justify-center backdrop-blur-sm hover:bg-gray-700/80 hover:border-blue-400/50 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            {/* Service Cards Container */}
            <div className="relative flex items-center justify-center min-h-[600px] w-full max-w-4xl mx-auto overflow-visible perspective-[1200px]">
              {/* We'll render all cards in a circular arrangement */}
              {services.map((service, index) => {
                // Calculate the position in the carousel
                const isActive = index === currentIndex;
                const isPrev = index === ((currentIndex - 1 + services.length) % services.length);
                const isNext = index === ((currentIndex + 1) % services.length);
                
                // Only render cards that are visible in the carousel (current, prev, next)
                if (!isActive && !isPrev && !isNext) return null;
                
                // Calculate rotation and position based on card position
                let rotateY = 0;
                let x = 0;
                let z = 0;
                let opacity = 1;
                
                if (isPrev) {
                  rotateY = 45; // Rotate left card
                  x = -400; // Increased from -300 to -400 for more horizontal spacing
                  z = -250; // Pushed further back
                  opacity = 0.7; // Reduced opacity for better contrast with center card
                } else if (isNext) {
                  rotateY = -45; // Rotate right card
                  x = 400; // Increased from 300 to 400 for more horizontal spacing
                  z = -250; // Pushed further back
                  opacity = 0.7; // Reduced opacity for better contrast with center card
                } else if (isActive) {
                  // Ensure center card has full opacity and is visually dominant
                  z = 50; // Bring forward slightly
                  opacity = 1; // Explicitly set to full opacity
                }
                
                return (
                  <motion.div
                    key={`card-${index}`}
                    className={`absolute ${isActive ? 'relative z-30' : 'z-10'}`}
                    initial={false}
                    animate={{
                      rotateY,
                      x,
                      z,
                      opacity,
                      scale: isActive ? 1 : 0.85
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 50,
                      duration: 1.2,
                      ease: "easeInOut"
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden"
                    }}
                  >
                    <ServiceCard 
                      service={service} 
                      isActive={isActive} 
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextClick}
              className="absolute right-4 md:right-8 z-20 w-12 h-12 rounded-full bg-gray-800/80 border border-blue-500/30 text-blue-400 flex items-center justify-center backdrop-blur-sm hover:bg-gray-700/80 hover:border-blue-400/50 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 relative z-10 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Industry Solutions</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Specialized solutions tailored for your industry&apos;s unique challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryVerticals.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.solutions.map((solution) => (
                    <li key={solution} className="text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison Matrix */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Service Tiers</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Compare our service tiers to find the perfect fit for your business
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 text-gray-400">Features</th>
                  <th className="text-center p-4 text-blue-400">Basic</th>
                  <th className="text-center p-4 text-blue-400">Professional</th>
                  <th className="text-center p-4 text-blue-400">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMatrix.map((row, index) => (
                  <motion.tr
                    key={row.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-t border-gray-800"
                  >
                    <td className="p-4 text-white font-medium">{row.category}</td>
                    <td className="p-4 text-center text-gray-400">{row.basic}</td>
                    <td className="p-4 text-center text-gray-400">{row.professional}</td>
                    <td className="p-4 text-center text-gray-400">{row.enterprise}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10 bg-gray-800/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how we can help bring your ideas to life
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/25"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}