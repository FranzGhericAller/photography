"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const images = ["/img1.JPG", "/img2.JPG", "/img3.JPG", "/img4.JPG", "/img5.JPG", "/img6.JPG"];


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="p-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-6 dark:text-white">
        Featured Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            className="rounded-lg shadow-lg w-full h-72 object-cover cursor-pointer gallery-item"
            onClick={() => setSelectedImage(src)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} className="max-w-full max-h-full rounded-lg" />
        </div>
      )}
    </section>
  );
}
