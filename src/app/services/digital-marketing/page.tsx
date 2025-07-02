"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// Sample data (unchanged)
const features = [
  {
    title: "Research & Analytics",
    description: "Turn insights into action with real-time dashboards, customer journey mapping, and performance analytics",
    icon: "📊"
  },
  {
    title: "Brand Strategy",
    description: "Create powerful brand narratives through positioning, messaging architecture, and competitive audits",
    icon: "🎨"
  },
  {
    title: "SEO",
    description: "Boost visibility and attract quality traffic through technical, on-page, and local SEO practices",
    icon: "🔍"
  },
  {
    title: "Content Strategy & Copywriting",
    description: "Create engaging content that drives conversions, from SEO blogs to thought leadership assets",
    icon: "📝"
  },
  {
    title: "Performance Marketing",
    description: "Launch and optimize high-impact paid campaigns across Google, Meta, and LinkedIn",
    icon: "🎯"
  },
  {
    title: "Social Media Marketing",
    description: "Build active communities and grow brand loyalty with strategic social content",
    icon: "📱"
  },
  {
    title: "Creative Design",
    description: "Deliver visually compelling campaigns and branded assets that enhance engagement",
    icon: "🎭"
  },
  {
    title: "CRO",
    description: "Turn visitors into customers through data-backed UX testing and optimized conversion paths",
    icon: "📈"
  }
];

const services = [
  {
    name: "Research & Analytics",
    price: "Custom",
    period: "",
    features: [
      "Market and competitor research",
      "Customer behavior analysis",
      "Campaign performance tracking",
      "Conversion rate analysis",
      "Real-time data insights"
    ]
  },
  {
    name: "Brand Strategy",
    price: "Custom",
    period: "",
    isPopular: true,
    features: [
      "Brand positioning and messaging",
      "Voice and tone alignment",
      "Visual identity consultation",
      "Competitive landscape analysis",
      "Multi-channel strategy alignment"
    ]
  },
  {
    name: "Performance Marketing",
    price: "Custom",
    period: "",
    features: [
      "Sales and marketing alignment",
      "Lead nurturing workflows",
      "Funnel optimization",
      "Multi-touch attribution",
      "Post-click optimization"
    ]
  }
];

const pricingFeatures = [
  "Market Research",
  "Customer Journey Analysis",
  "Performance Tracking",
  "Brand Strategy",
  "Content Creation",
  "SEO Optimization",
  "Social Media Management",
  "Paid Advertising",
  "Creative Design",
  "Conversion Optimization"
];

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen pt-16 relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
      
      {/* ---- HERO SECTION (Figma-Inspired) ---- */}
      <section className="relative py-20">
  <div className="container mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">
    {/* Left Column: Images */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-4"
    >
      {/* Row 1: 2 images */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative rounded-xl aspect-square overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
          <Image
            src="/images/marketing-section-1.png"
            alt="Showcase 1"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
        <div className="relative rounded-xl aspect-square overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
          <Image
            src="/images/marketing-section-2.png"
            alt="Showcase 2"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* Row 2: 3 images (center one larger) */}
      <div className="grid grid-cols-3 gap-4">
        <div className="relative rounded-xl aspect-square overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
          <Image
            src="/images/marketing-section-3.png"
            alt="Showcase 3"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
          />
        </div>
        <div className="relative rounded-xl aspect-square overflow-hidden shadow-md border-4 border-blue-300 dark:border-blue-600 transform scale-105">
          <Image
            src="/images/marketing-section-4.png"
            alt="Featured Showcase"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
          />
        </div>
        <div className="relative rounded-xl aspect-square overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
          <Image
            src="/images/marketing-section-5.png"
            alt="Showcase 4"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>

    {/* Right Column: Headings and CTAs */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center md:text-left"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        Fueling Growth with Insight-Driven Strategy & Innovation
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
        At Skyshine, our digital marketing services go beyond just clicks and
        impressions. We focus on building intelligent, data-backed strategies
        that strengthen your brand, elevate your market presence, and convert
        engagement into real growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <Link
                href="/contact"
                style={{
                  color: "white",
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                Get started
              </Link>
        <Link
          href="#services"
          className="bg-transparent border border-blue-500 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-500/10 transition-colors duration-300 shadow-lg"
        >
          Learn more
        </Link>
      </div>
    </motion.div>
  </div>
</section>
      {/* ---- END HERO SECTION ---- */}

    {/* Our Services Section */}
<section id="services" className="py-20 relative z-10">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Our Services
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Comprehensive digital marketing solutions tailored to your business goals
      </p>
    </motion.div>

    <div className="grid gap-8"
         style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="w-full h-full p-6 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 transition-colors duration-300 shadow-lg"
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Pricing Plans Section */}
      <section className="py-20 relative z-10 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Pricing Plans</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-xl shadow-lg ${
                  service.isPopular
                    ? "bg-blue-600 text-white border-2 border-blue-400"
                    : "bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700"
                } hover:shadow-xl transition-shadow duration-300`}
              >
                {service.isPopular && (
                  <div className="text-sm font-semibold text-white mb-4 bg-blue-500 inline-block px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{service.price}</span>
                  <span
                    className={
                      service.isPopular ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
                    }
                  >
                    {service.period}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className={`w-5 h-5 mr-3 ${
                          service.isPopular ? "text-blue-300" : "text-blue-500 dark:text-blue-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={
                          service.isPopular ? "text-blue-100" : "text-gray-600 dark:text-gray-300"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
     onClick={() => (window.location.href = "/contact")}
      className={`w-full py-3 px-6 rounded-full font-semibold transition-colors duration-300 ${
        service.isPopular
          ? "bg-white text-blue-600 hover:bg-blue-50"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      Subscribe
    </button>
              </motion.div>
            ))}
          </div>

          {/* Pricing Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="py-4 px-6 text-left text-gray-700 dark:text-gray-300">
                    Features
                  </th>
                  {services.map(service => (
                    <th
                      key={service.name}
                      className="py-4 px-6 text-center text-gray-700 dark:text-gray-300"
                    >
                      {service.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingFeatures.map((feature, index) => (
                  <tr
                    key={feature}
                    className={
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-800"
                        : "bg-gray-50 dark:bg-gray-700/50"
                    }
                  >
                    <td className="py-3 px-6 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                      {feature}
                    </td>
                    {services.map(service => (
                      <td
                        key={`${service.name}-${feature}`}
                        className="py-3 px-6 text-center border-t border-gray-200 dark:border-gray-700"
                      >
                        {service.features.includes(feature) ||
                        (service.name === "Professional" &&
                          services[0].features.includes(feature)) ||
                        (service.name === "Enterprise" &&
                          (services[0].features.includes(feature) ||
                            services[1].features.includes(feature))) ? (
                          <svg
                            className="w-5 h-5 mx-auto text-blue-500 dark:text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 mx-auto text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
  {/* First Feature Highlight */}
<section className="py-20 relative z-10">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-2 lg:order-1"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Drive Smarter Decisions with Research & Analytics
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Our data-first approach ensures every marketing move is backed by deep insights,
          helping you understand your audience and optimize for success.
        </p>
        <ul className="space-y-4">
          {[
            "Market and competitor research",
            "Customer behavior and journey analysis",
            "Campaign performance tracking and dashboards",
            "Conversion rate analysis and reporting",
            "Real-time data insights for strategic decisions",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start">
              <svg
                className="w-5 h-5 mt-1 mr-3 text-blue-500 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-1 lg:order-2"
      >
        <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video">
          <Image
            src="/images/marketing-analytics-section.png"
            alt="Research & Analytics Dashboard"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* Second Feature Highlight */}
<section className="py-20 relative z-10 bg-gray-50 dark:bg-gray-800/50">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=""
      >
        <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video">
          <Image
            src="/images/marketing-brand-strategy-section.png"
            alt="Brand Strategy Illustration"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Build a Stronger Brand with Strategy That Scales
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Your brand is more than a visual—it’s the story you tell and the promise you keep.
          We help define and refine your brand strategy to create lasting impressions.
        </p>
        <ul className="space-y-4">
          {[
            "Brand positioning and messaging development",
            "Voice, tone, and personality alignment",
            "Visual identity consultation and brand audits",
            "Competitive landscape and perception analysis",
            "Strategy alignment across all digital channels",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start">
              <svg
                className="w-5 h-5 mt-1 mr-3 text-purple-500 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
</section>
      
      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Not sure which plan fits your needs? Request a free assessment and we&#39;ll help craft
              a custom digital marketing strategy tailored to your goals.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg inline-block"
            >
              <span className="text-white">Get a Quote</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}