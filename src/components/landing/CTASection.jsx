import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Smartphone, Building2, X } from "lucide-react";

export default function CTASection() {

  const [openForm, setOpenForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    clinic: "",
    phone: "",
    city: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const message = `
Hello NGK Team,

Clinic Partnership Request

Name: ${formData.name}
Clinic Name: ${formData.clinic}
Phone: ${formData.phone}
City: ${formData.city}
    `;

    const url = `https://wa.me/918688767603?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="book-demo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-rose-500 to-pink-700" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">

        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-semibold text-white">Join 10,000+ Happy Users</span>
        </div>

        <h2 className="text-4xl font-bold text-white">
          Book Your Glow Demo Today
        </h2>

        <p className="mt-6 text-white/90 max-w-2xl mx-auto">
          Experience how NGK connects you to verified skin clinics with exclusive discounts.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">

          {/* Users Card */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-center">
            <Smartphone className="w-10 h-10 text-white mx-auto mb-4" />

            <h3 className="text-lg font-bold text-white mb-2">
              For Users
            </h3>

            <p className="text-white/80 text-sm mb-5">
              Download the app and book your first skin procedure with an exclusive discount.
            </p>

            <button className="px-6 py-3 rounded-full bg-white text-pink-600 font-bold">
              📱 Coming Soon
            </button>
          </div>


          {/* Clinics Card */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-center">
            <Building2 className="w-10 h-10 text-white mx-auto mb-4" />

            <h3 className="text-lg font-bold text-white mb-2">
              For Clinics
            </h3>

            <p className="text-white/80 text-sm mb-5">
              Get NGK-verified, manage appointments smarter, and grow your clinic's reach.
            </p>

            <button
              onClick={() => setOpenForm(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-green-600 font-bold text-sm shadow-xl"
            >
              🏥 Partner With Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        <p className="mt-8 text-white/60 text-sm">
          ✨ Free demo • No credit card required • Setup in minutes
        </p>

      </div>

      {/* FORM MODAL */}

      {openForm && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md relative">

            <button
              onClick={() => setOpenForm(false)}
              className="absolute right-4 top-4"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">
              Clinic Partnership Form
            </h3>

            <form onSubmit={sendWhatsApp} className="space-y-4">

              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="clinic"
                required
                placeholder="Clinic Name"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="city"
                required
                placeholder="City"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg font-bold"
              >
                Send via WhatsApp
              </button>

            </form>

          </div>

        </div>

      )}

    </section>
  );
}