import React from "react";
import { motion } from "framer-motion";
import { Shield, BadgeCheck, Smartphone, Building2 } from "lucide-react";

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aa62473c1e728438c409e6/337abdec9_NGKLogo_Y1.png";

const pillars = [
  {
    icon: BadgeCheck,
    title: "Verified Clinics Only",
    description: "Every clinic on NGK is medically verified, licensed, and background-checked. No unqualified providers, ever.",
    iconColor: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Genuine Users",
    description: "NGK ensures clinics receive only verified, genuine users — reducing no-shows and fake bookings.",
    iconColor: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    icon: Smartphone,
    title: "User Mobile App",
    description: "A beautiful, easy-to-use mobile app for users to discover clinics, book procedures, and track appointments.",
    iconColor: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Building2,
    title: "Clinic Web Application",
    description: "A powerful web dashboard for clinics to manage appointments, view patients, track earnings, and grow their business.",
    iconColor: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-sm font-semibold tracking-widest text-pink-500 uppercase">About NGK</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              India's Premier
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Dermatology Booking
              </span>
              <br />
              Platform
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              An integral unit of <strong className="text-gray-800">UDIT Cosmetech Pvt. Ltd.</strong> — NGK is a <strong>smart platform</strong> that bridges the gap between patients seeking quality skin care and the best verified dermatology clinics in your city.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you need a HydraFacial, laser treatment, acne procedure, or skin consultation — NGK finds you a certified clinic, guarantees an exclusive discount, and lets you book in seconds from your phone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-2 rounded-full">For Patients</span>
              <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full">For Clinics</span>
              <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full">100% Verified</span>
              <span className="bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full">Best Discounts</span>
            </div>
          </motion.div>

          {/* Right - Logo + visual */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="relative">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-10 border border-pink-100 flex items-center justify-center shadow-lg">
              <img src={LOGO_URL} alt="Neeha's Glow Kart" className="max-w-xs w-full object-contain drop-shadow-xl" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200/40 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl" />
          </motion.div>
        </div>

        {/* 4 pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, index) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }} className="group">
              <div className="h-full bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400">
                <div className={`w-12 h-12 rounded-2xl ${p.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <p.icon className={`w-6 h-6 ${p.iconColor}`} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}