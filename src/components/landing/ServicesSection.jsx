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
    address: "Banjara Hills, Hyderabad",
    rating: "4.8",
    treatments: ["Laser Facial", "Acne Treatment", "PRP Therapy"],
  },
  {
    icon: HeartPulse,
    title: "Radiance Derma Centre",
    desc: "Specialized clinic offering premium skin care and aesthetic treatments.",
    discount: "Up to 35% OFF",
    gradient: "from-pink-500 to-rose-500",
    tag: "Trending",
    address: "Jubilee Hills, Hyderabad",
    rating: "4.7",
    treatments: ["HydraFacial", "Botox", "Skin Brightening"],
  },
  {
    icon: Stethoscope,
    title: "ClearSkin Dermatology",
    desc: "Trusted dermatology clinic providing acne treatment, scar removal, and pigmentation care.",
    discount: "Up to 45% OFF",
    gradient: "from-green-500 to-emerald-400",
    tag: "Popular",
    address: "Madhapur, Hyderabad",
    rating: "4.6",
    treatments: ["Acne Treatment", "Scar Removal", "Chemical Peels"],
  },
  {
    icon: Shield,
    title: "DermaCare Specialists",
    desc: "Certified dermatologists offering safe and personalized skin treatments.",
    discount: "Up to 30% OFF",
    gradient: "from-amber-400 to-orange-500",
    tag: "Verified",
    address: "Gachibowli, Hyderabad",
    rating: "4.7",
    treatments: ["Pigmentation Treatment", "Laser Therapy", "Skin Consultation"],
  },
  {
    icon: Star,
    title: "Glow Aesthetic Clinic",
    desc: "Premium clinic known for HydraFacial, PRP therapy and skin rejuvenation.",
    discount: "Up to 38% OFF",
    gradient: "from-purple-500 to-violet-500",
    tag: "Premium",
    address: "Hitech City, Hyderabad",
    rating: "4.9",
    treatments: ["HydraFacial", "PRP Therapy", "Skin Rejuvenation"],
  },
  {
    icon: MapPin,
    title: "Skin Health Hub",
    desc: "Well-known clinic offering complete dermatology consultations and modern skincare solutions.",
    discount: "Up to 50% OFF",
    gradient: "from-rose-400 to-pink-500",
    tag: "Recommended",
    address: "Kukatpally, Hyderabad",
    rating: "4.5",
    treatments: ["Skin Consultation", "Acne Solutions", "Laser Treatment"],
  },
];

export default function ServicesSection() {
  const [selectedClinic, setSelectedClinic] = useState(null);

  const bookAppointment = (clinic) => {
    const message = `
Hello NGK Team 👋

📌 *Clinic Appointment Request*

Clinic: ${clinic.title}
Location: ${clinic.address}

I found this clinic on the NGK platform and would like to book an appointment.

Please share available slots and further details.

Thank you 🙂
`;

    const url = `https://wa.me/918688767603?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="clinics" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-pink-50/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest text-pink-500 uppercase">
            Clinics on NGK
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Verified Dermatology Clinics
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Discover trusted NGK verified dermatology clinics with exclusive discounts.
          </p>
        </div>

        {/* Clinics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinics.map((clinic, index) => (
            <motion.div
              key={clinic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between mb-6">

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${clinic.gradient} flex items-center justify-center`}
                >
                  <clinic.icon className="w-7 h-7 text-white" />
                </div>

                <span className="text-xs font-semibold bg-pink-50 text-pink-600 px-3 py-1 rounded-full">
                  {clinic.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {clinic.title}
              </h3>

              <p className="text-gray-600 text-sm mb-6">{clinic.desc}</p>

              <button
                onClick={() => setSelectedClinic(clinic)}
                className="text-pink-600 font-semibold"
              >
                View Details →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedClinic && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-3xl p-8 max-w-md w-full relative">

              <button
                onClick={() => setSelectedClinic(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              <h3 className="text-2xl font-bold mb-3">
                {selectedClinic.title}
              </h3>

              <p className="text-gray-600 mb-4">{selectedClinic.desc}</p>

              <p className="text-sm mb-2">
                📍 <b>Location:</b> {selectedClinic.address}
              </p>

              <p className="text-sm mb-2">
                ⭐ <b>Rating:</b> {selectedClinic.rating} / 5
              </p>

              <p className="text-sm mb-4 text-green-600">
                💰 {selectedClinic.discount}
              </p>

              <p className="font-semibold mb-2">Available Treatments</p>

              <ul className="list-disc list-inside text-sm text-gray-600 mb-6">
                {selectedClinic.treatments.map((treatment) => (
                  <li key={treatment}>{treatment}</li>
                ))}
              </ul>

              <div className="flex gap-3">
                <button
                  onClick={() => bookAppointment(selectedClinic)}
                  className="flex-1 bg-green-500 text-white py-3 rounded-xl"
                >
                  Book via WhatsApp
                </button>

                <button
                  onClick={() => setSelectedClinic(null)}
                  className="flex-1 border py-3 rounded-xl"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}