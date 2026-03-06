import React from "react";
import { Instagram, Facebook, Twitter, Youtube, Mail, MapPin, Phone, Heart } from "lucide-react";

const LOGO_URL =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aa62473c1e728438c409e6/337abdec9_NGKLogo_Y1.png";

const footerLinks = {
  Platform: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Users", href: "#platform" },
    { label: "For Clinics", href: "#platform" },
    { label: "Clinics", href: "#clinics" },
  ],
  Company: [
    { label: "About NGK", href: "#about" },
    { label: "Partner With Us", href: "mailto:ngkderma@gmail.com" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/ngkderma/" },
  { icon: Facebook, href: "https://www.facebook.com/ngkderma" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gray-950 text-white overflow-hidden">
      
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-green-500" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={LOGO_URL} alt="NGK Logo" className="h-14 object-contain mb-4" />

            <p className="text-gray-400 leading-relaxed text-sm mb-6">
              India's trusted platform connecting users to verified dermatology clinics —
              with exclusive discounts and seamless booking.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform + Company Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-6">{title}</h4>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-pink-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-pink-400 mt-1 shrink-0" />
                <span className="text-sm text-gray-400">
                  7/111E, Plot No. 80/1, P&K Nest, Chil SEZ IT Park Rd, Coimbatore North, Coimbatore, Tamil Nadu, India - 641035
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <span className="text-sm text-gray-400">
                  +91 86887 67603
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <span className="text-sm text-gray-400">
                  ngkderma@gmail.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-gray-500">
            © 2026 Neeha's Glow Kart. All rights reserved.
          </p>

          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with
            <Heart className="w-3 h-3 text-pink-500 fill-pink-500 mx-1" />
            for glowing skin
          </p>

        </div>

      </div>
    </footer>
  );
}