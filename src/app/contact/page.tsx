// app/components/Contact.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { Modal } from "../components/Modal"; // adjust path as needed

type InquiryType = "general" | "sales" | "support";

const contactInfo = {
  email: "support@skyshine.in",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Park, Innovation District\nSilicon Valley, CA 94025",
  workingHours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
  responseTime: "We typically respond within 24 hours",
  socialMedia: [
    { name: "LinkedIn", url: "https://linkedin.com/company/skyshine", icon: "🔗" },
    { name: "Twitter", url: "https://twitter.com/skyshine", icon: "🐦" },
    { name: "GitHub", url: "https://github.com/skyshine", icon: "📦" },
  ],
};

export default function Contact() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const bitrixUrl = process.env.NEXT_PUBLIC_BITRIX24_URL;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!bitrixUrl) {
      setModalTitle("Configuration Error");
      setModalMessage("Subscription URL is not set.");
      return setModalOpen(true);
    }

    setSubmitting(true);

    const url = new URL(bitrixUrl);
    url.searchParams.set("fields[TITLE]", inquiryType);
    url.searchParams.set("fields[NAME]", name);
    url.searchParams.set("fields[EMAIL][0][VALUE]", email);
    if(inquiryType=="support")
    {
      url.searchParams.set("fields[COMMENT]", message+"for Following service , "+company);
      url.searchParams.set("fields[COMPANY_TITLE]", "");
    }
   else
   { url.searchParams.set("fields[COMMENT]", message);
    url.searchParams.set("fields[COMPANY_TITLE]", company);
   }
    // pick a source ID per type
    const sourceMap: Record<InquiryType, string> = {
      general: "10",
      sales: "11",
      support: "12",
    };
    url.searchParams.set("fields[SOURCE_ID]", sourceMap[inquiryType]);

    try {
      const res = await fetch(url.toString(), { method: "GET" });
      const data = await res.json();
      if (data.result) {
        setModalTitle("Thank you!");
        setModalMessage("Your message has been received. We’ll be in touch soon.");
        // reset
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setInquiryType("general");
      } else {
        throw new Error(data.error_description || "Submission failed");
      }
    } catch (err: unknown) {
      setModalTitle("Oops!");
      setModalMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
      setModalOpen(true);
    }
  }

  return (
    <>
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
              animate={{ scale: [0, 1.2, 0], opacity: [0, 0.8, 0] }}
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

        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            >
              Contact Us
            </motion.h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We&apos;re here to help! Choose the best way to reach us and we&apos;ll get back to you promptly.
            </p>
          </div>
        </section>

        {/* Form & Info */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              {/* Inquiry Type */}
              <div className="flex space-x-4 mb-8">
                {(["general", "sales", "support"] as InquiryType[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setInquiryType(t)}
                    type="button"
                    className={`px-4 py-2 rounded-full ${
                      inquiryType === t
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}{" "}
                    {t === "general" ? "" : ""}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                {inquiryType === "sales" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                    />
                  </div>
                )}

                {inquiryType === "support" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Product/Service
                    </label>
                    <select
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                    >
                      <option value="">Select one</option>
                      <option value="SaaS Solutions">SaaS Solutions</option>
                      <option value="Custom Development">Custom Development</option>
                      <option value="Data Center Services">Data Center Services</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{contactInfo.responseTime}</p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-blue-500">✉️</span>
                  {contactInfo.email}
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-blue-500">📞</span>
                  {contactInfo.phone}
                </p>
                <p className="whitespace-pre-line text-gray-600 dark:text-gray-300 mt-4">
                  <span className="mr-2 text-blue-500">📍</span>
                  {contactInfo.address}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
                <p className="text-gray-600 dark:text-gray-300">{contactInfo.workingHours}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4 text-2xl">
                  {contactInfo.socialMedia.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        title={modalTitle}
        onClose={() => setModalOpen(false)}
      >
        {modalMessage}
      </Modal>
    </>
  );
}