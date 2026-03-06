import React from "react";
import { motion } from "framer-motion";
import { Star, ShoppingBag } from "lucide-react";

const products = [
  {
    name: "Radiance Glow Serum",
    price: "₹1,299",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    tag: "Bestseller",
    tagColor: "bg-pink-500",
  },
  {
    name: "Hydra Bloom Moisturizer",
    price: "₹999",
    rating: 4.8,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    tag: "New",
    tagColor: "bg-green-500",
  },
  {
    name: "Rose Petal Face Wash",
    price: "₹699",
    rating: 4.7,
    reviews: 214,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    tag: "Popular",
    tagColor: "bg-purple-500",
  },
  {
    name: "Vitamin C Brightening Kit",
    price: "₹2,499",
    rating: 4.9,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    tag: "Premium",
    tagColor: "bg-amber-500",
  },
  {
    name: "Night Repair Cream",
    price: "₹1,499",
    rating: 4.8,
    reviews: 163,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4a38691?w=400&h=400&fit=crop",
    tag: "Trending",
    tagColor: "bg-rose-500",
  },
  {
    name: "Herbal Lip Balm Set",
    price: "₹499",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    tag: "Value Pack",
    tagColor: "bg-teal-500",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/20 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-pink-500 uppercase">Our Collection</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500"> Products</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Handpicked skincare essentials crafted with love and the finest natural ingredients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Tag */}
                  <span className={`absolute top-4 left-4 ${product.tagColor} text-white text-xs font-semibold px-3 py-1.5 rounded-full`}>
                    {product.tag}
                  </span>

                  {/* Quick add */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <ShoppingBag className="w-5 h-5 text-pink-600" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-pink-600">{product.price}</p>
                    <button className="text-sm font-semibold text-pink-600 hover:text-pink-700 transition-colors">
                      View Details →
                    </button>
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