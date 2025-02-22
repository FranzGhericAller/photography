"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="flex justify-between items-center p-5 bg-white dark:bg-gray-900 shadow-md">
      {/* Branding - "Opus Creations" with Default Font */}
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-wide">
       Portfolio
      </h1>

      {/* Dark/Light Mode Toggle */}
      <button
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {mounted && (theme === "dark" ? "🌞" : "🌙")}
      </button>
    </nav>
  );
}
