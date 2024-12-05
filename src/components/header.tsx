"use client";
import React, { useState } from "react";
import {
  FaHome,
  FaBuilding,
  FaPhoneAlt,
  FaRegNewspaper,
  FaChalkboardTeacher,
  FaUserTie,
  FaTimes,
  FaLaptopCode,
  FaBars,
  FaGitAlt,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="text-gray-600 body-font overflow-hidden">
        <div className="container mx-auto flex items-center justify-between p-5 flex-col sm:flex-row">
          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0 flex title-font font-medium items-center text-gray-900 mb-4 sm:mb-0"
          >
            <img
              src="/logoMain.png"
              className="w-[150px] h-[70px] rounded-[15px] shadow-lg"
              alt="Main Logo"
            />
          </a>

          {/* Animated Motto */}
          <div className="flex-grow overflow-hidden mx-4 relative mb-4 sm:mb-0">
            <h2 className="relative overflow-hidden">
              <span className="text-lg font-semibold text-gray-800 animate-scroll-marquee whitespace-nowrap speed: inline-block px-4 sm:px-8 w-full">
                "Empowering Young Minds Through Knowledge, Discipline, and
                Growth for a Brighter Future."
              </span>
            </h2>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex-shrink-0 inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base transition duration-300 ease-in-out"
          >
            {menuOpen ? (
              <FaTimes className="w-6 h-6 transition-transform transform duration-500" />
            ) : (
              <FaBars className="w-6 h-6 transition-transform transform duration-500" />
            )}
            <span className="ml-2 hidden sm:inline">Menu</span>
          </button>
        </div>
      </header>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[275px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Scrolling Title inside the menu */}
        <div className="relative flex items-center py-4 border-b overflow-hidden">
          <h2 className="overflow-hidden">
            <span className="text-lg font-semibold text-gray-800 animate-scroll-left-to-right whitespace-nowrap">
              Science Progress Center
            </span>
          </h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <FaTimes className="w-8 h-8 text-gray-600" />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="mt-8">
          <a
            href="/all-about"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition duration-200 flex items-center space-x-2"
          >
            <FaHome className="w-5 h-5 text-indigo-500" />
            <span>All about us</span>
          </a>
          <a
            href="/main-location"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition duration-200 flex items-center space-x-2"
          >
            <FaGitAlt className="w-5 h-5 text-indigo-500" />
            <span>Main Branch</span>
          </a>
          <a
            href="/all-branches"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition duration-200 flex items-center space-x-2"
          >
            <FaBuilding className="w-5 h-5 text-indigo-500" />
            <span>All branches</span>
          </a>
          <a
            href="/contact-info"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition duration-200 flex items-center space-x-2"
          >
            <FaPhoneAlt className="w-5 h-5 text-indigo-500" />
            <span>Contact info</span>
          </a>
          <a
            href="/recent-results"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition duration-200 flex items-center space-x-2"
          >
            <FaRegNewspaper className="w-5 h-5 text-indigo-500" />
            <span>Recent results</span>
          </a>
          <a
            href="/top-teachers"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition duration-200 flex items-center space-x-2"
          >
            <FaChalkboardTeacher className="w-5 h-5 text-indigo-500" />
            <span>Top teachers</span>
          </a>
          <a
            href="/the-founder"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition duration-200 flex items-center space-x-2"
          >
            <FaUserTie className="w-5 h-5 text-indigo-500" />
            <span>The founder of SPC</span>
          </a>
          <a
            href="/web-developer"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition duration-200 flex items-center space-x-2"
          >
            <FaLaptopCode className="w-5 h-5 text-indigo-500" />
            <span>The developer </span>
          </a>
        </nav>

        {/* Circular Image at the bottom */}
        <div className="flex justify-center mt-auto mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYOr5sVXwSXpG3j1rBp_Hb7IDY60u55dwEw&s"
            alt="Rotating Logo"
            className="w-[200px] h-[200px] rounded-full border-4 border-indigo-500"
            style={{ animation: "spin 3s linear infinite" }}
          />
        </div>

        {/* Close Button */}
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}

      {/* Add this custom CSS to implement scrolling */}
      <style jsx>{`
        .animate-scroll-left-to-right {
          display: inline-block;
          white-space: nowrap;
          animation: scrollLeftToRight 12s linear infinite;
        }

        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
