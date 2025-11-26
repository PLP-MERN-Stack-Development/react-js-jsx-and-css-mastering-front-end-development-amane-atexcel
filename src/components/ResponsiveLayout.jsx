import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ResponsiveLayout() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-800">
        <h1 className="text-xl font-bold">Responsive UI</h1>

        <button
          onClick={toggleTheme}
          className="
            px-4 py-2 rounded-lg
            bg-gray-200 dark:bg-gray-700
            hover:bg-gray-300 dark:hover:bg-gray-600
            transition-all duration-300
          "
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>

      {/* Responsive Grid */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Responsive Grid</h2>

        <div className="
          grid gap-4 
          grid-cols-1    /* mobile */
          sm:grid-cols-2 /* small tablets */
          md:grid-cols-3 /* tablets */
          lg:grid-cols-4 /* desktops */
        ">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="
                bg-white dark:bg-gray-800 p-4 rounded-xl shadow
                transform transition-all duration-300
                hover:scale-105 hover:shadow-lg
                animate-fadeIn
              "
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <h3 className="font-bold text-lg">Card {i + 1}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Responsive content block
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
