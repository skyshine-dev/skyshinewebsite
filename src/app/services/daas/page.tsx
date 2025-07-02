"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Virtual Servers",
    description: "High-performance virtual machines with flexible configurations",
    icon: "💻"
  },
  {
    title: "Cloud Storage",
    description: "Secure and scalable storage solutions for your data",
    icon: "☁️"
  },
  {
    title: "Managed Kubernetes",
    description: "Simplified container orchestration and deployment",
    icon: "🚀"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical assistance and monitoring",
    icon: "🔧"
  }
];



export default function DaaSPage() {
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
      
      {/* -- REVISED HERO SECTION (Half Text, Half Image) -- */}
      <section className="relative py-20">
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
        {/* Left Column: Heading, Subtitle, Key Highlights, CTA */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Data Center as a Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
            Enterprise-grade infrastructure solutions designed for reliability and scalability.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "High Availability",
              "Scalable",
              "Secure",
              "Cost-Effective",
            ].map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-5 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 text-blue-400"
              >
                {value}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://cloud.skyshine.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-blue-500 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-500/10 transition-colors duration-300 shadow-lg inline-block"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Top & Bottom Images */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {/* Top Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
            <Image
              src="/images/dass-hero-1.png"
              alt="Data Center rack overview"
              fill
              className="object-fill"
            />
          </div>

          {/* Bottom Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
            <Image
              src="/images/dass-hero-2.png"
              alt="Data Center cooling systems"
              fill
              className="object-fill"
            />
          </div>
        </motion.div>
      </div>
    </section>
      {/* -- END REVISED HERO SECTION -- */}

      {/* Our DaaS Features Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Our DaaS Features
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions designed for reliability and scalability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 transition-colors duration-300 shadow-lg"
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

      {/* Key Benefits Section */}
      <section className="py-20 relative z-10 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Key Benefits
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Why choose our DaaS solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 transition-colors duration-300 shadow-lg"
            >
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                200+
              </div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Scalability
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Dynamically scale your infrastructure resources up or down based
                on demand, with support for over 200 different configuration
                options
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 transition-colors duration-300 shadow-lg"
            >
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                97%
              </div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Cost-Effective
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Our clients report an average of 97% cost savings compared to
                traditional infrastructure, with pay-as-you-go pricing and no
                upfront capital expenses
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-white dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 transition-colors duration-300 shadow-lg"
            >
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                34+
              </div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                High Availability
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Redundant infrastructure across 34+ global data centers ensures
                99.999% uptime with automatic failover and disaster recovery
                capabilities
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Excited to work together section */}
      <section className="py-20 relative z-10 bg-gray-100 dark:bg-gray-900/50">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Excited to work together on your next project?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Transform your IT infrastructure with our enterprise-grade DaaS solutions tailored to your business need.
                </p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-6 py-3 rounded-full bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
          />
          <button className="whitespace-nowrap bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg">
            Subscribe
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative hidden lg:grid grid-cols-2 grid-rows-2 gap-4"
      >
        {/* Image 1 */}
        <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg aspect-square">
          <div className="w-full h-full relative">
            <Image
              src="/images/dass-cta-1.png"
              alt="CTA Image 1"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>

        {/* Image 2 */}
        <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg aspect-square">
          <div className="w-full h-full relative">
            <Image
              src="/images/dass-cta-2.png"
              alt="CTA Image 2"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>

        {/* Image 3 */}
        <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg aspect-square">
          <div className="w-full h-full relative">
            <Image
              src="/images/dass-cta-3.png"
              alt="CTA Image 3"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>

        {/* Image 4 */}
        <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg aspect-square">
          <div className="w-full h-full relative">
            <Image
              src="/images/dass-cta-4.png"
              alt="CTA Image 4"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
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
              Ready to transform your infrastructure?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get started with our DaaS solutions today
            </p>
            <Link
              href="https://cloud.skyshine.in/"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg inline-block"
            >
              <span className="text-white">Get Started</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}