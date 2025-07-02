"use client";

import { motion } from "framer-motion";

const partnershipModels = [
  {
    title: "White-Label Partner Program",
    description: "Build and sell your own branded platform using Skyshine's enterprise-grade infrastructure. Perfect for digital agencies and SaaS providers ready to launch without development costs.",
    benefits: ["Zero development cost", "Fast time-to-market", "Custom branding", "Full support & updates"]
  },
  {
    title: "Commission Partner Program",
    description: "Refer our services and earn monthly recurring commissions—no tech or platform management needed. Ideal for marketers, consultants, and influencers.",
    benefits: ["Recurring revenue", "No technical skills needed", "Transparent tracking", "Dedicated support"]
  }
];

export default function Partners() {
  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
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
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        {/* Animated Background Graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400/10 to-blue-400/10 rounded-full"
          />
        </div>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0.8, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Unlock New Revenue Streams with Skyshine
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join a growing network of technology partners, agencies, and resellers who are scaling their businesses with Skyshine&#39;s powerful white-label platforms and revenue-sharing commission models.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white dark:bg-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center">
            <motion.div 
              initial={{ opacity: 0.3, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
              transition={{ duration: 0.2 }}
              className="w-full md:w-1/4 mb-8 md:mb-0 relative"
            >
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  <div className="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-left" />
                </motion.div>
              </div>
              <p className="text-center mt-4 text-gray-600 dark:text-gray-300 font-medium">Global Partners</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.3, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
              transition={{ duration: 0.2 }}
              className="w-full md:w-1/4 mb-8 md:mb-0 relative"
            >
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.05 }}
                  className="relative"
                >
                  <div className="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">95%</div>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-left" />
                </motion.div>
              </div>
              <p className="text-center mt-4 text-gray-600 dark:text-gray-300 font-medium">Partner Satisfaction</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.3, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
              transition={{ duration: 0.2 }}
              className="w-full md:w-1/4 mb-8 md:mb-0 relative"
            >
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="relative"
                >
                  <div className="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-left" />
                </motion.div>
              </div>
              <p className="text-center mt-4 text-gray-600 dark:text-gray-300 font-medium">Years of Partnership</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.3, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
              transition={{ duration: 0.2 }}
              className="w-full md:w-1/4 mb-8 md:mb-0 relative"
            >
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
                  className="relative"
                >
                  <div className="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-left" />
                </motion.div>
              </div>
              <p className="text-center mt-4 text-gray-600 dark:text-gray-300 font-medium">Partner Support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 bg-white dark:bg-gray-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Become a Partner with Skyshine</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join our growing network of resellers, agencies, and consultants who are building successful businesses with Skyshine&#39;s powerful platforms and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{model.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {model.description}
                </p>
                <ul className="space-y-2">
                  {model.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg
                        className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Partner Success Stories</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how our partners are achieving remarkable growth with Skyshine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "TechFlow Solutions",
                description: "+150% YoY growth - Created their own branded platform with Skyshine, capturing a new market segment.",
                icon: "🚀"
              },
              {
                title: "Digital Ventures Inc",
                description: "+200% Revenue Increase - Successfully monetized their business network through our referral system.",
                icon: "📈"
              },
              {
                title: "CloudServe Pro",
                description: "3x Growth in 12 Months - Used Commission models to expand reach and multiply revenue streams.",
                icon: "💫"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="py-20 bg-white dark:bg-gray-700">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">Ready to Grow With Us?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let&apos;s discuss your partnership goals and explore how we can grow together.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
               onClick={() => window.location.href = '/partners/white-label'}>
                Explore White-Label
              </button>
              <button className="bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
               onClick={() => window.location.href = '/partners/commission'}>
                Join Commission Program
              </button>
            </div>
              
              
              
             
           
          </motion.div>
        </div>
      </section>
    </div>
  );
}