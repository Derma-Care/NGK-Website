import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
     href="https://wa.me/918688767603?text=Hello%20NGK%20Team%20%F0%9F%91%8B%0A%0AI%20recently%20came%20across%20*Neeha's%20Glow%20Kart%20(NGK)*%20and%20I%20am%20interested%20in%20learning%20more%20about%20your%20services.%0A%0ANGK%20seems%20to%20be%20a%20great%20platform%20for%20connecting%20users%20with%20verified%20skin%20clinics%20and%20procedures.%20I%20would%20like%20to%20get%20more%20information.%0A%0ACould%20you%20please%20assist%20me%20with%20the%20following:%0A%0A%E2%9C%85%20Booking%20appointments%20with%20verified%20skin%20clinics%0A%E2%9C%85%20Available%20skin%20treatments%20and%20procedures%0A%E2%9C%85%20Current%20discounts%20or%20offers%20on%20treatments%0A%E2%9C%85%20Partnering%20my%20clinic%20with%20NGK%0A%E2%9C%85%20Booking%20a%20demo%20of%20the%20NGK%20platform%0A%0A-----------------------------------%0A%0AMy%20Details:%0AName:%0ACity:%0ARequirement:%0A%0A-----------------------------------%0A%0APlease%20share%20the%20next%20steps%20or%20any%20additional%20information.%0A%0ALooking%20forward%20to%20your%20response.%20%F0%9F%99%82"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-shadow duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </motion.a>
  );
}