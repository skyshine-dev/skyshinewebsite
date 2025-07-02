// components/NavBar.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useScroll } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface NavBarProps {
  mounted: boolean;
  theme: "light" | "dark";
  toggleTheme: () => void;
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function NavBar({
  mounted,
  theme,
  toggleTheme,
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavBarProps) {
  useScroll({ offset: ["start end", "end start"] });

  const menuItems = [
    {
      name: "Services",
      href: "/services",
      dropdownItems: [
        { name: "SaaS Solutions", href: "/services/saas" },
        { name: "Custom Development", href: "/services/custom-development" },
        { name: "Data Center as a Service", href: "/services/daas" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
      ],
    },
   
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
  ];

  const forceThemeColor = theme === "dark" ? "dark" : "light";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card-bg/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      } ${forceThemeColor}`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-200">
            Skyshine
          </Link>
        </motion.div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="p-2 rounded-lg bg-card-bg shadow-sm hover:shadow text-text-secondary hover:text-accent-primary transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <Link
                href={item.href}
                className="text-text-secondary hover:text-accent-primary font-medium transition-colors duration-200 flex items-center"
              >
                {item.name}
                {item.dropdownItems && (
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {item.dropdownItems && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {item.dropdownItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200/20 transition-colors duration-200"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}

         
          <button
            onClick={() => (window.location.href = "/partners")}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            Become a Partner
          </button>
          <button
  onClick={() => (window.location.href = "/contact")}
  className="
    bg-blue-600 text-white            /* always blue bg + white text */
    dark:bg-blue-500                  /* slightly different shade in dark if you like */
    px-6 py-3 rounded-full font-semibold
    hover:bg-blue-700 dark:hover:bg-blue-600  /* hover states */
    transition-colors duration-300 shadow-lg
  "
>
  Book a Demo
</button>
          {mounted && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-card-bg shadow-sm hover:shadow text-text-secondary hover:text-accent-primary transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )}
            </motion.button>
          )}
        </div>

        {/* Mobile menu stays unchanged */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg border-t border-card-border py-4 px-6 md:hidden"
            >
              {/* mobile items here */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}