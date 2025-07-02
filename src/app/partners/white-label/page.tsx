"use client";

import { motion } from "framer-motion";


const successStories = [
  {
    name: "TechFlow Solutions",
    type: "White-Label Partner",
    growth: "+150% YoY",
    description: "With Skyshine’s white-label setup, we scaled our new product line in under 60 days and hit +150% YoY revenue."
  },
  {
    name: "Digital Ventures Inc",
    type: "Commission Partner",
    growth: "+200% Revenue",
    description: "Expanded their service offerings with our white-label solutions."
  },
  {
    name: "CloudServe Pro",
    type: "Hybrid Partner",
    growth: "3x Growth",
    description: "Combined white-label and commission models for maximum market reach."
  }
];

export default function WhiteLabel() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0.8, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              White-Label Digital Solutions – Skyshine Partner Program
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Skyshine’s White-Label Partner Program enables digital agencies, SaaS entrepreneurs, and MSPs to launch their own technology solutions—without investing in product development or infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* White Label Solutions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0.5, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">What You Get as a White-Label Partner</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Use our proven, enterprise-grade platforms under your own brand, pricing, and domain, while we handle the backend, hosting, and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "Full Branding Control",
              description: "Rebrand our platform with your logo, domain, and color palette for a seamless client experience.",
              icon: "🎨"
            }, {
              title: "Custom Client Portal",
              description: "Deliver services through a modern, user-friendly dashboard branded as your own.",
              icon: "🧩"
            }, {
              title: "Reliable Hosting & Infrastructure",
              description: "Hosted on high-performance data centers with built-in scalability and 99.9% uptime.",
              icon: "🖥️"
            }, {
              title: "End-to-End Technical Support",
              description: "We manage security, updates, maintenance, and uptime while you grow your business.",
              icon: "🛠️"
            }, {
              title: "Freedom to Set Pricing",
              description: "Offer services at your own price point and retain full control over revenue.",
              icon: "💰"
            }].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Ideal For</h3>
              <ul className="space-y-4 text-lg">
                {[
                  "Digital agencies looking to expand their service offerings",
                  "SaaS startups wanting a fast go-to-market model",
                  "Hosting providers & managed service companies"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center text-gray-700 dark:text-gray-200"
                  >
                    <span className="text-blue-500 mr-3">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
    

      {/* Success Stories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Partner Success Stories</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how our partners have transformed their businesses with our white-label solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">{story.type}</p>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
                  {story.growth}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Ready to Build Your Brand?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Apply now to become a Skyshine White-Label Partner and launch your platform in days—not months.
              </p>
            </div>
            
            <motion.form 
              className="space-y-8 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                  <option value="">Select Partnership Type</option>
                  <option value="white-label">White-Label Partner</option>
                  <option value="commission">Commission Partner</option>
              
                </select>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Apply Now
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}