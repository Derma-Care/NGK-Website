import React from "react";
import { motion } from "framer-motion";
import { Search, CalendarCheck, BadgePercent, Star } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Search Verified Clinics",
    description: "Browse NGK-certified dermatology clinics near you. All clinics are background-checked and verified.",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
  },
  {
    step: "02",
    icon: BadgePercent,
    title: "Choose Your Procedure & Discount",
    description: "Pick from laser treatments, facials, acne care, and more. Instantly see the exclusive NGK member discount.",
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
  },
  {
    step: "03",
    icon: CalendarCheck,
    title: "Book Instantly via App",
    description: "Choose your preferred date and time. Your appointment is confirmed instantly — no phone calls needed.",
    color: "from-purple-500 to-violet-500",
    bg: "bg-purple-50",
  },
  {
    step: "04",
    icon: Star,
    title: "Visit & Review",
    description: "Visit your verified clinic, enjoy your treatment at a discounted rate, and help others with your genuine review.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/20 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest text-pink-500 uppercase">Simple Process</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">NGK Works</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            From discovery to your glowing skin — in just 4 simple steps.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-pink-200 via-green-200 to-pink-200 z-0" />

          {steps.map((s, index) => (
            <motion.div key={s.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }} className="relative z-10 group">
              <div className="text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border-2 border-pink-100 rounded-full w-7 h-7 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-pink-500">{s.step}</span>
                </div>
              </div>
              <div className={`${s.bg} rounded-3xl p-6 text-center mt-2 border border-white`}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}