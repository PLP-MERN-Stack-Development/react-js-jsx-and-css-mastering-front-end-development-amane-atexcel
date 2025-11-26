import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ links = [] }) {
  return (
    <nav className="bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">MySite</h1>

        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-gray-700 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
