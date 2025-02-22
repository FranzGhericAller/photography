"use client";

export default function Contact() {
  return (
    <section className="p-10 bg-white dark:bg-black text-center">
      <h2 className="text-4xl font-bold dark:text-white">Get in Touch</h2>
      <form className="max-w-lg mx-auto mt-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded dark:bg-gray-800 dark:text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded dark:bg-gray-800 dark:text-white"
        />
        <button className="w-full bg-black text-white py-3 rounded dark:bg-gray-800">
          Send Message
        </button>
      </form>
    </section>
  );
}
