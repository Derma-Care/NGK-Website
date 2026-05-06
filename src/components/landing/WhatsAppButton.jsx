import React from "react";
import { motion } from "framer-motion";

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
      className="fixed bottom-6 right-6 z-50 w-20 h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-shadow duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-10 h-10"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.854L0 24l6.335-1.502A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.358-.214-3.724.882.933-3.617-.234-.372A9.818 9.818 0 1112 21.818z" />
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
}
