import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const LOGO_URL =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aa62473c1e728438c409e6/337abdec9_NGKLogo_Y1.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Clinics", href: "#clinics" },
  { label: "Users & Clinics", href: "#platform" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    clinic: "",
    phone: "",
    city: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookDemo = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const formatTimeTo12Hour = (time) => {
    const [hour, minute] = time.split(":");
    let h = parseInt(hour);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12;
    return `${h}:${minute} ${ampm}`;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedTime = formatTimeTo12Hour(formData.time);

    const message = `
Hello NGK Team 👋

━━━━━━━━━━━━━━━━━━━━━━
📌 *NEW CLINIC DEMO REQUEST*
━━━━━━━━━━━━━━━━━━━━━━

👤 *Contact Person*
Name: ${formData.name}

🏥 *Clinic Information*
Clinic Name: ${formData.clinic}
City / Location: ${formData.city}

📞 *Contact Details*
Phone Number: ${formData.phone}

━━━━━━━━━━━━━━━━━━━━━━
📅 *Preferred Demo Schedule*
━━━━━━━━━━━━━━━━━━━━━━

Preferred Date: ${formData.date}
Preferred Time: ${formattedTime}

━━━━━━━━━━━━━━━━━━━━━━

I am interested in learning more about the *NGK (Neeha's Glow Kart) platform* and would like to schedule a demo for my clinic.

Please confirm the demo slot and share the meeting details.

Looking forward to your response.

Thank you 😊
`;

    const url = `https://wa.me/918688767603?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    setFormData({
      name: "",
      clinic: "",
      phone: "",
      city: "",
      date: "",
      time: "",
    });

    setShowForm(false);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home">
              <img src={LOGO_URL} alt="logo" className="h-12" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-pink-600"
                >
                  {link.label}
                </a>
              ))}

              {/* Button */}
              <button
                onClick={handleBookDemo}
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-semibold text-sm hover:scale-105 transition"
                style={{
                  background: "linear-gradient(135deg, #c2185b, #d63384)",
                }}
              >
                Book Demo for Clinic WA
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Modal Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 w-full max-w-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <div className="relative flex items-center mb-4">
                <h2 className="text-xl font-bold  text-center w-full">
                 Book a Free Clinic Demo
                </h2>

                <button
                  onClick={() => setShowForm(false)}
                  className="absolute right-0"
                >
                  <X />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />

                <input
                  type="text"
                  name="clinic"
                  placeholder="Clinic / Company Name"
                  value={formData.clinic}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />

                <input
                  type="date"
                  name="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />

                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white font-semibold"
                  style={{
                    background:
                      "linear-gradient(135deg, #c2185b, #d63384)",
                  }}
                >
                  Submit Demo Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}