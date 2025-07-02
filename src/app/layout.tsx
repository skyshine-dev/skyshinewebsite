"use client";

import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import { useState, useEffect } from 'react';
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('skyshine-theme') || 'light';    setTheme(savedTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(savedTheme);
    
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    console.log('Toggling theme from:', theme, 'to:', newTheme);
    setTheme(newTheme);
    
    // Apply theme to document element
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    
    // Store theme preference
    localStorage.setItem('skyshine-theme', newTheme);
  };

  return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <body className="antialiased min-h-screen flex flex-col">
          {mounted && (
            <>
        <NavBar
              mounted={mounted}
              theme={theme as 'light' | 'dark'}
              toggleTheme={toggleTheme}
              isScrolled={isScrolled}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
            />
              {children}

              <Footer/>
            </>
          )}
        </body>
      </html>
  );
}