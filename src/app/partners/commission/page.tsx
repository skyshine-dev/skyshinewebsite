"use client";

import { motion } from "framer-motion";


const features = [
  {
    title: "Up to 25% Recurring Commission",
    description: "Earn every month as long as your referred clients stay subscribed.",
    icon: "💰"
  },
  {
    title: "No Tech, No Support Required",
    description: "We handle the product, onboarding, support, and delivery. You focus on connecting.",
    icon: "🤝"
  },
  {
    title: "Marketing & Sales Resources",
    description: "Get access to ready-made email templates, landing pages, and pitch decks.",
    icon: "🧾"
  },
  {
    title: "Transparent Earnings Dashboard",
    description: "Track your referrals, commissions, and revenue in real-time.",
    icon: "📊"
  }
];

const steps = [
  {
    title: "Apply Online",
    description: "Choose the Commission Partner option and submit your details.",
    icon: "📝"
  },
  {
    title: "Onboard & Access Tools",
    description: "Get your referral links, materials, and tracking set up.",
    icon: "🧰"
  },
  {
    title: "Refer & Earn",
    description: "Share our services and earn commissions every month.",
    icon: "🚀"
  }
];

export default function CommissionPartners() {
  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2.5 w-2.5 bg-indigo-400/60 dark:bg-indigo-300 rounded-full shadow-glow"
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
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Earn with Skyshine – Commission Partner Program
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join Skyshine’s Commission Partner Program and earn recurring revenue by referring our SaaS, cloud, and marketing services. No setup, no support—just growth.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Why Choose the Commission Partner Model?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Refer our services and unlock these exclusive partner benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

        
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Start earning in three simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">Let’s Partner for Profit</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Apply today and start building a passive revenue stream by promoting trusted, high-converting Skyshine services.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg">
              Submit Application
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}