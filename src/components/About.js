"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-10 bg-gray-100 dark:bg-gray-900">
      {/* Image Section */}
      <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-10">
        <Image
          src="/img-me3.jpg" // Change this to your actual file name
          alt="Your Name"
          width={320}
          height={320}
          className="object-cover"
        />
      </div>

      {/* About Me Text */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-4xl font-bold dark:text-white">About Me</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          "Photography isn't just about capturing images—it's about capturing emotions, stories, and the beauty in every fleeting moment."
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Hi, I’m Franz Gheric Aller, a passionate photographer dedicated to turning ordinary moments into timeless works of art. My approach is simple: to create photographs that feel real, intimate, and unforgettable.
        </p>
      </div>
    </section>
  );
}
