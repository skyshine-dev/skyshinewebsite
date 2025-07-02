// app/components/Footer.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Modal } from "./Modal"; // adjust path if needed

export default function Footer() {
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const bitrixUrl = process.env.NEXT_PUBLIC_BITRIX24_URL;

  // email format validation
  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!bitrixUrl) {
      setModalTitle("Configuration Error");
      setModalMessage("Subscription URL is not configured.");
      setModalOpen(true);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      // build URL with query params
      const url = new URL(bitrixUrl);
      url.searchParams.set("fields[TITLE]", email);
      url.searchParams.set("fields[EMAIL][0][VALUE]", email);
      url.searchParams.set("fields[SOURCE_ID]", "11");

      const res = await fetch(url.toString(), { method: "GET" });
      const data = await res.json();
      if (data.result) {
        setSuccess("Thank you! You’ve been subscribed.");
        setEmail("");
      } else {
        throw new Error(data.error_description || "Subscription failed.");
      }
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
      setModalTitle(error ? "Error" : "Success!");
      setModalMessage(error || success);
      setModalOpen(true);
    }
  };

  return (
    <>
      <footer className="mt-auto bg-card-bg border-t border-card-border relative overflow-hidden">
        {/* subtle footer bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 bg-blue-400/30 dark:bg-blue-300 rounded-full"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              animate={{ opacity: [0, 0.4, 0] }}
              transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4 }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
            {/* Logo & About */}
            <div className="flex-1">
              <Link href="/" className="inline-flex items-center mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 12h10v8l10-10H12V2z" />
                </svg>
                <span className="ml-2 text-2xl font-bold">Skyshine</span>
              </Link>
              <p className="text-text-secondary">
                Empowering businesses worldwide with innovative technology solutions.
              </p>
            </div>

            {/* Quick Links & Social */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {['Services','Blog','About','Contact'].map(label => (
                    <li key={label}>
                      <Link href={`/${label.toLowerCase()}`} className="text-text-secondary hover:text-accent-primary transition">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  {/* social icons array unchanged */}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); setSuccess(''); }}
                  required
                  className={`w-full px-4 py-2 rounded-lg bg-input-bg border
                    ${
                      error
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-input-border focus:ring-input-focus focus:border-input-focus"
                    }
                    placeholder-gray-500 dark:placeholder-gray-400 transition-colors`
                  }
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-sm hover:shadow ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Submitting...' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-card-border mt-8 pt-8 text-center text-text-secondary">
            <p>© {new Date().getFullYear()} Skyshine. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Modal isOpen={modalOpen} title={modalTitle} onClose={() => setModalOpen(false)}>
        <p>{modalMessage}</p>
      </Modal>
    </>
  );
}