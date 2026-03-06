import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aa62473c1e728438c409e6/337abdec9_NGKLogo_Y1.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Clinics", href: "#clinics" },
  { label: "For Clinics", href: "#platform" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <img src={LOGO_URL} alt="NGK - Neeha's Glow Kart" className="h-12 object-contain" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <a href="#book-demo"
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(214,51,132,0.35)]"
                style={{ background: "linear-gradient(135deg, #c2185b, #d63384)" }}>
                Book Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-2xl font-semibold text-gray-900 py-3 border-b border-gray-100 hover:text-pink-600 transition-colors">
                  {link.label}
                </motion.a>
              ))}
              <motion.a href="#book-demo" onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                className="mt-6 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg"
                style={{ background: "linear-gradient(135deg, #c2185b, #d63384)" }}>
                Book Demo <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}