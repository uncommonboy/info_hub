"use client";
import React from "react";
import { useState } from "react";

import {
  FaCode,
  FaGlobe,
  FaLanguage,
  FaBriefcase,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function DeveloperProfile() {
  const [isDeveloper1, setIsDeveloper1] = useState(true);

  const toggleImage = () => {
    setIsDeveloper1((prev) => !prev);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-5 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-6 text-center">
        Meet the Developer
      </h1>

      {/* Profile Section */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-start w-full lg:w-2/3 bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* Left Side: Profile Photo */}
        <div className="flex justify-center mb-6 lg:mb-0">
          {/* Developer Image Section */}
          <div
            className="w-40 h-40 rounded-full bg-gray-700 flex items-center justify-center text-6xl text-gray-500 transform hover:scale-110 transition-transform duration-300 ease-in-out"
            onClick={toggleImage} // Toggle image when clicked
          >
            <img
              className="w-40 h-40 rounded-full object-cover"
              src={isDeveloper1 ? "/developer1.png" : "/developer2.png"}
              alt="Developer"
            />
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="lg:w-2/3 px-6">
          <h2 className="text-3xl font-semibold mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            Asilbek Abduagfforov
          </h2>
          <p className="text-gray-400 mb-6">
            I am a software developer with over 2 years of experience. My
            journey is defined by a passion for learning and a dedication to
            building exceptional digital solutions. I am fluent in English and
            have a working knowledge of Russian, Turkish, and Japanese.
          </p>

          {/* Skills and Languages */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center bg-gray-700 p-4 rounded-lg w-full md:w-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <FaBriefcase className="text-blue-500 text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Experience</h3>
                <p className="text-gray-400">
                  2+ years in software development
                </p>
              </div>
            </div>
            <div className="flex items-center bg-gray-700 p-4 rounded-lg w-full md:w-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <FaLanguage className="text-yellow-500 text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Languages</h3>
                <p className="text-gray-400">
                  English (fluent), Russian, Turkish, Japanese
                </p>
              </div>
            </div>
            <div className="flex items-center bg-gray-700 p-4 rounded-lg w-full md:w-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <FaGlobe className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Adaptability</h3>
                <p className="text-gray-400">
                  Fast learner, culturally diverse
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg w-full lg:w-2/3 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">
          Contact Information
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex items-center text-lg text-gray-300 mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <a className="flex" href="tel:+998935095306">
              <FaPhoneAlt className="text-green-500 mr-4" />
              <p>(+998)93 509 53 06</p>
            </a>
          </div>
          <div className="flex sm:flex-row items-start text-lg text-gray-300 mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaEnvelope className="text-blue-500 mr-4" />
            <a
              href="mailto:abdugafforovasilbek206@gmail.com"
              className="text-blue-400 hover:text-blue-600 break-words"
            >
              asilbek206@gmail.com
            </a>
          </div>

          <div className="flex items-center text-lg text-gray-300 mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaMapMarkerAlt className="text-red-500 mr-4" />
            <p>Location: Namangan, Uzbekistan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeveloperProfile;
