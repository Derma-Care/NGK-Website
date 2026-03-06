import React,{useState} from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Shield,X } from "lucide-react";

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aa62473c1e728438c409e6/337abdec9_NGKLogo_Y1.png";

export default function HeroSection() {
    const [openForm, setOpenForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    clinic: "",
    phone: "",
    email: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const message = `
Hello NGK Team,

*Book a Demo Request*

Name: ${formData.name}
Clinic / Company: ${formData.clinic}
Phone: ${formData.phone}
Email: ${formData.email}
City: ${formData.city}
`;

    const url = `https://wa.me/918688767603?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");

    setOpenForm(false);
  };
  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-green-50" />

      {/* Soft blobs */}
      <motion.div animate={{ y: [-20,20,-20], x: [-10,10,-10] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-[10%] w-80 h-80 bg-pink-200/25 rounded-full blur-3xl pointer-events-none" />
      <motion.div animate={{ y: [20,-20,20] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-[5%] w-96 h-96 bg-green-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floral pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d63384' fill-opacity='1'%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3Ccircle cx='40' cy='20' r='3'/%3E%3Ccircle cx='40' cy='60' r='3'/%3E%3Ccircle cx='20' cy='40' r='3'/%3E%3Ccircle cx='60' cy='40' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Content */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className="text-center lg:text-left">

            {/* Trust badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-pink-100 rounded-full px-4 py-2 mb-8 shadow-sm">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">India's Trusted Dermatology Booking Platform</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              <span className="text-gray-900">Book Verified</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500">
                Skin Clinics
              </span>
              <br />
              <span className="text-gray-900">Near You</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              NGK connects you to <strong className="text-green-700">verified dermatology clinics</strong> for skin procedures — with guaranteed discounts, genuine reviews, and seamless appointment booking from your phone.
            </motion.p>

            {/* Bullets */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
              className="mt-6 flex flex-col gap-2 items-center lg:items-start">
              {[
                "100% Verified & Certified Clinics",
                "Exclusive Discounts on Skin Procedures",
                "Easy App Booking – Anytime, Anywhere",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#download"  onClick={() => setOpenForm(true)}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(214,51,132,0.4)]"
                style={{ background: "linear-gradient(135deg, #c2185b, #d63384, #e91e8c)" }}>
                <span className="relative z-10">Book a Demo for Clinic WA</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border-2 border-pink-200 text-pink-700 font-semibold text-lg hover:bg-pink-50 transition-all duration-300 hover:scale-105">
                How It Works
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
              {[
                { val: "200+", label: "Verified Clinics" },
                { val: "10K+", label: "Bookings Made" },
                { val: "40%", label: "Avg. Discount" },
              ].map((s, i) => (
                <React.Fragment key={s.label}>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{s.val}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                  {i < 2 && <div className="w-px h-10 bg-gray-200" />}
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: App mockup visual */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative w-72 mx-auto">
                <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden h-[560px] flex flex-col">
                    {/* Status bar */}
                    <div className="bg-gradient-to-r from-pink-600 to-rose-500 px-6 pt-8 pb-6 text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <img src={LOGO_URL} alt="NGK" className="h-8 object-contain" />
                      </div>
                      <p className="text-sm opacity-90">Good Morning, Priya! 👋</p>
                      <p className="text-lg font-bold mt-1">Find a Skin Clinic</p>
                      {/* Search bar */}
                      <div className="mt-3 bg-white/20 rounded-full px-4 py-2 flex items-center gap-2">
                        <span className="text-white/70 text-sm">Search procedures...</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-gray-50 px-4 py-4 overflow-hidden">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Nearby Clinics</p>
                      {[
                        { name: "Glow Derma Clinic", proc: "Laser Facial • HydraFacial", rating: 4.9, disc: "35% OFF", color: "bg-pink-100" },
                        { name: "Skin Studio Pro", proc: "Botox • PRP Therapy", rating: 4.8, disc: "28% OFF", color: "bg-green-100" },
                        { name: "DermaCare Centre", proc: "Acne Treatment • Peels", rating: 4.7, disc: "40% OFF", color: "bg-purple-100" },
                      ].map((clinic) => (
                        <div key={clinic.name} className="bg-white rounded-2xl p-3 mb-3 shadow-sm flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl ${clinic.color} flex items-center justify-center text-lg shrink-0`}>🏥</div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-gray-900 truncate">{clinic.name}</p>
                            <p className="text-[10px] text-gray-500 truncate">{clinic.proc}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                              <span className="text-[10px] text-gray-600">{clinic.rating}</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full shrink-0">{clinic.disc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/50 rounded-full" />
              </div>

              {/* Floating badges */}
              <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 top-16 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-pink-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Verified Clinic</p>
                    <p className="text-[10px] text-gray-500">NGK Certified</p>
                  </div>
                </div>
              </motion.div>

              <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-10 bottom-24 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-pink-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs">₹</div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Save ₹2,400</p>
                    <p className="text-[10px] text-gray-500">on HydraFacial</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    {/* MODAL FORM */}
      {openForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl p-8 w-[90%] max-w-md relative">

            <button
              onClick={() => setOpenForm(false)}
              className="absolute right-4 top-4"
            >
              <X />
            </button>

            <h3 className="text-xl font-bold mb-6 text-center">
              Book a Demo
            </h3>

            <form onSubmit={sendWhatsApp} className="space-y-4">

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="clinic"
                required
                value={formData.clinic}
                placeholder="Clinic / Company Name"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="city"
                required
                value={formData.city}
                placeholder="City"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700"
              >
                Send Demo Request
              </button>

            </form>
          </div>
        </div>
      )}
      </>
  );
}