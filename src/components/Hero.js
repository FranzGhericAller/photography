"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <img
        src="/hero-img.jpg" 
        alt="Photography Hero"
        className="absolute w-full h-full object-cover"
      />
      <div className="hero-overlay absolute w-full h-full"></div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-white text-6xl font-extrabold text-center"
      >
        Turning Ordinary Moments Into Masterpieces.
      </motion.h1>
    </section>
  );
}
