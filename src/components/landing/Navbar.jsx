// @ts-ignore
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ArrowRight } from "lucide-react";
import { Menu, X } from "lucide-react";

const LOGO_URL =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aa62473c1e728438c409e6/337abdec9_NGKLogo_Y1.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Users & Clinics", href: "#platform" },
  { label: "Clinics", href: "#clinics" },
  { label: "Privacy Policy", href: "#privacypolicy" },
  { label: "Data Deletion", href: "#datadeletion" },
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

  // @ts-ignore
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // @ts-ignore
  const formatTimeTo12Hour = (time) => {
    const [hour, minute] = time.split(":");
    let h = parseInt(hour);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12;
    return `${h}:${minute} ${ampm}`;
  };
  // @ts-ignore
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
  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#25D366]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      className="w-4 h-4"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.854L0 24l6.335-1.502A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.358-.214-3.724.882.933-3.617-.234-.372A9.818 9.818 0 1112 21.818z" />
    </svg>
  </span>
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
                  type="text"
                  name="date"
                  placeholder="Preferred Date for Demo"
                  onFocus={(e) => {
                    e.target.type = "date";
                    e.target.min = new Date().toISOString().split("T")[0];
                  }}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="time"
                  placeholder="Preferred Time for Demo"
                  onFocus={(e) => (e.target.type = "time")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
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
