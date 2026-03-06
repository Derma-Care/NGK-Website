import React from "react";
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const posts = [
  { image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop", likes: 412, comments: 34 },
  { image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop", likes: 287, comments: 21 },
  { image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop", likes: 563, comments: 48 },
  { image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=400&h=400&fit=crop", likes: 329, comments: 27 },
  { image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop", likes: 445, comments: 39 },
  { image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop", likes: 198, comments: 15 },
];

export default function InstagramSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-full px-4 py-2 mb-6">
            <Instagram className="w-4 h-4" />
            <span className="text-sm font-semibold">@ngkderma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
            Real Glow
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500"> Transformations</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">Before & afters, clinic spotlights, and skincare tips from our NGK community.</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
              <img src={post.image} alt={`Post ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white">
                  <Heart className="w-5 h-5 fill-white" /><span className="font-semibold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle className="w-5 h-5 fill-white" /><span className="font-semibold">{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}