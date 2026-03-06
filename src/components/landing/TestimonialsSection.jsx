import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "User — Booked HydraFacial",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "I was skeptical at first, but NGK made everything so easy. I found a verified clinic near me, got 40% off my HydraFacial, and the results were amazing. 10/10 would book again!",
  },
  {
    name: "Dr. Anjali Mehta",
    role: "Dermatologist — Glow Skin Clinic",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "As a clinic partner, NGK has genuinely improved our appointment flow. All bookings are from verified users, no-shows reduced drastically, and the management dashboard is excellent.",
  },
  {
    name: "Ananya Reddy",
    role: "User — Laser Treatment",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "I was nervous about getting a laser treatment. NGK showed me only certified clinics with real patient reviews. I saved ₹3,000 and finally got my pigmentation treated properly!",
  },
  {
    name: "Rajesh Kumar",
    role: "Clinic Manager — DermaCare Centre",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The NGK clinic web app is brilliant. We manage all appointments from one dashboard, patient history is organized, and our clinic visibility has tripled since joining the platform.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/20 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest text-pink-500 uppercase">Real Reviews</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
            Loved by Users
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500"> & Clinics</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">What our community says about the NGK experience.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <Quote className="w-8 h-8 text-pink-200 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-pink-100" />
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}