// @ts-ignore
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Monitor, CheckCircle, X } from "lucide-react";

const userFeatures = [
  "Browse 200+ verified clinics near you",
  "View procedures, prices & exclusive discounts",
  "Book appointments in under 60 seconds",
  "Real-time appointment reminders",
  "Genuine user reviews & ratings",
  "Digital consultation history",
];

const clinicFeatures = [
  "Smart appointment management dashboard",
  "Patient profile & history tracking",
  "Revenue & analytics reporting",
  "Verified genuine user bookings only",
  "Digital schedule & availability control",
  "NGK-backed marketing & visibility",
];

export default function PlatformSection() {

  const [openForm, setOpenForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    clinic: "",
    phone: "",
    city: "",
    date: "",
    time: ""
  });
  // @ts-ignore
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
  const sendWhatsApp = (e) => {
    e.preventDefault();
const formattedTime = formatTimeTo12Hour(formData.time);
    const message = `
Hello NGK Team 👋

━━━━━━━━━━━━━━━━━━━━━━
📌 *CLINIC PARTNERSHIP REQUEST*
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

I am interested in partnering with *NGK (Neeha's Glow Kart)* and would like to see a demo of the platform.

Please share the demo meeting details and guide us through the onboarding process.

Looking forward to collaborating with NGK.

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
      time: ""
    });

    setOpenForm(false);
  };

  return (
    <section id="platform" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest text-pink-500 uppercase">Two Powerful Platforms</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Users</span>
            {" & "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Clinics</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            NGK delivers two purpose-built solutions — one for patients, one for clinics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* User App */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="relative h-full bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl -translate-y-8 translate-x-8" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <span className="bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full">For Users</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  NGK User Mobile App
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  An intuitive, beautiful mobile app that makes booking dermatology appointments as easy as ordering food — with real discounts at real verified clinics.
                </p>
                <ul className="space-y-3">
                  {userFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#download"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-white font-semibold text-sm shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #d63384, #e91e8c)" }}>
                  📱 Download App
                </a>
              </div>
            </div>
          </motion.div>

          {/* Clinic Web App */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="relative h-full bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full blur-2xl -translate-y-8 translate-x-8" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Monitor className="w-7 h-7 text-white" />
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">For Clinics</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  Clinic Management Web App
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A comprehensive web dashboard that empowers verified clinics to manage appointments, track patient data, and grow their business effortlessly.
                </p>
                <ul className="space-y-3">
                  {clinicFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Partner Button with functionality */}
                <button
                  onClick={() => setOpenForm(true)}
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-white font-semibold text-sm shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #2d6a4f, #40916c)" }}
                >
                  🏥 Partner With NGK
                </button>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FORM MODAL */}
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
              Clinic Partnership Form
            </h3>

            <form onSubmit={sendWhatsApp} className="space-y-4">

              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="clinic"
                required
                placeholder="Clinic / Company Name"
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
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold"
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