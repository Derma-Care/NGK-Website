import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  Shield,
  Stethoscope,
  Building2,
  HeartPulse,
  X,
} from "lucide-react";

const clinics = [
  {
    icon: Building2,
    title: "Prime Skin Clinic",
    desc: "A leading dermatology clinic known for advanced skin treatments and expert dermatologists.",
    discount: "Up to 40% OFF",
    gradient: "from-cyan-400 to-blue-400",
    tag: "Top Rated",
  },
  {
    icon: HeartPulse,
    title: "Radiance Derma Centre",
    desc: "Specialized clinic offering premium skin care, anti-aging solutions, and aesthetic treatments.",
    discount: "Up to 35% OFF",
    gradient: "from-pink-500 to-rose-500",
    tag: "Trending",
  },
  {
    icon: Stethoscope,
    title: "ClearSkin Dermatology",
    desc: "Trusted dermatology clinic providing acne treatment, scar removal, and pigmentation care.",
    discount: "Up to 45% OFF",
    gradient: "from-green-500 to-emerald-400",
    tag: "Popular",
  },
  {
    icon: Shield,
    title: "DermaCare Specialists",
    desc: "Certified dermatologists offering safe and personalized skin treatments with modern technology.",
    discount: "Up to 30% OFF",
    gradient: "from-amber-400 to-orange-500",
    tag: "Verified",
  },
  {
    icon: Star,
    title: "Glow Aesthetic Clinic",
    desc: "Premium clinic known for HydraFacial, PRP therapy, laser treatments, and skin rejuvenation.",
    discount: "Up to 38% OFF",
    gradient: "from-purple-500 to-violet-500",
    tag: "Premium",
  },
  {
    icon: MapPin,
    title: "Skin Health Hub",
    desc: "Well-known clinic offering complete dermatology consultations and modern skincare solutions.",
    discount: "Up to 50% OFF",
    gradient: "from-rose-400 to-pink-500",
    tag: "Recommended",
  },
];

export default function ServicesSection() {
  const [selectedClinic, setSelectedClinic] = useState(null);

  return (
    <section id="clinics" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-pink-50/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-pink-500 uppercase">
            Clinics on NGK
          </span>

          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Verified Dermatology{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              Clinics
            </span>
            <br />
            Near You
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Discover trusted NGK-verified dermatology clinics offering safe and
            professional skin treatments with exclusive member discounts.
          </p>
        </motion.div>

        {/* Clinics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinics.map((clinic, index) => (
            <motion.div
              key={clinic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">

                {/* Top Gradient */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${clinic.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon + Tag */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${clinic.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <clinic.icon className="w-7 h-7 text-white" />
                  </div>

                  <span className="text-xs font-semibold bg-pink-50 text-pink-600 px-3 py-1.5 rounded-full border border-pink-100">
                    {clinic.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {clinic.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {clinic.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-green-600 font-bold text-base">
                    {/* {clinic.discount} */}
                  </span>

                  <button
                    onClick={() => setSelectedClinic(clinic)}
                    className="text-sm font-semibold text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    View Clinic →
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedClinic && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedClinic(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                {selectedClinic.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {selectedClinic.desc}
              </p>

              {/* Discount */}
              <p className="text-green-600 font-bold mb-6">
                {selectedClinic.discount}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition">
                  Book Appointment
                </button>

                <button
                  onClick={() => setSelectedClinic(null)}
                  className="flex-1 border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}