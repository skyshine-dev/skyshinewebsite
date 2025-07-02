"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
      name: "Ritika S.",
      role: "CEO, UrbanNest Realty",
      image: "/testimonials/ritika-s.jpg",
      companyLogo: "/companies/urbannest.svg",
      rating: 5,
      text: "Working with Skyshine has been a game-changer for our real estate firm. ProptikAI helped us cut administrative tasks in half while improving lead management dramatically.",
      project: "ProptikAI Implementation",
      results: [
        "50% reduction in administrative workload",
        "Lead management efficiency up by 70%",
        "Centralized dashboard adoption across teams"
      ]
    },
    {
      name: "Rahul M.",
      role: "Head of Operations, FinTech Innovations",
      image: "/testimonials/rahul-m.jpg",
      companyLogo: "/companies/fintech-innovations.svg",
      rating: 5,
      text: "NeuroBot allowed us to scale our customer service and automate internal processes without sacrificing quality. It’s like having a 24/7 team of experts.",
      project: "NeuroBot Deployment",
      results: [
        "24/7 customer support coverage",
        "Automated 5,000+ service tickets monthly",
        "Response time improved by 80%"
      ]
    },
    {
      name: "Amit T.",
      role: "Co-Founder, RetailEdge India",
      image: "/testimonials/amit-t.jpg",
      companyLogo: "/companies/retailedge.svg",
      rating: 5,
      text: "BizMate AI is a brilliant concept — we’ve replaced multiple tools with just one smart assistant. Our team is faster, more organized, and far more productive.",
      project: "BizMate AI Rollout",
      results: [
        "Consolidated 5+ tools into one platform",
        "Team productivity increased by 60%",
        "Tasks automated across CRM, calendar, and reporting"
      ]
    }
  ];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            What our clients say about us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full opacity-50" />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-gray-800 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.text}</p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.project}</h4>
                  <ul className="space-y-2">
                    {testimonial.results.map((result, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;