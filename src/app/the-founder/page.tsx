"use client";
import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUserAlt,
  FaUserTie,
} from "react-icons/fa";

function FounderProfile() {
  const certificates = [
    "/Isroil1(7).png",
    "/Isroil1(1).png",
    "/Isroil1(3).png",
    "/Isroil1(4).png",
    "/Isroil1(5).png",
    "/Isroil1(6).png",
    "/Isroil1(2).png",
    "/Isroil1(8).png",
  ];

  const [currentCert, setCurrentCert] = useState(0);

  const nextCert = () => {
    setCurrentCert((prev) => (prev + 1) % certificates.length);
  };

  const prevCert = () => {
    setCurrentCert((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-wrap items-center justify-center bg-gray-100 py-10">
      {/* Left Side: Certificates Carousel */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-5">
        <div className="relative w-full max-w-md h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
          <img
            src={certificates[currentCert]}
            alt="Certificate"
            className="w-full h-full object-contain"
          />
          <button
            onClick={prevCert}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-blue-500 text-white rounded-full px-3 py-2 shadow-lg hover:bg-blue-600"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextCert}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-500 text-white rounded-full px-3 py-2 shadow-lg hover:bg-blue-600"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>
        <p className="text-center mt-4 text-gray-700">
          A collection of pictures that showcase excellence and global impact.
        </p>
      </div>

      {/* Right Side: Founder Information */}
      <div className="w-full lg:w-1/2 px-5 py-5">
        <h1 className="text-4xl font-bold text-blue-500 mb-4 flex items-center">
          <FaUserTie className="mr-3 w-8 h-8" />
          Meet Our Founder
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Isroil Nizamboyev
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Born on August 30, 1980, Isroil Nizamboyev has built an inspiring
          legacy since founding our learning center in 2002. Under his visionary
          leadership, it has grown to include **over 12 branches**, two private
          schools, and other ventures.
        </p>
        <div className="flex gap-5 flex-col md:flex-row justify-between">
          {/* Education Information */}
          <div className="md:w-1/2 bg-blue-100 p-4 rounded-lg shadow-md mb-4 md:mb-0 hover:shadow-xl transition-shadow duration-300 gap-5">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              Educational Excellence
            </h3>
            <p className="text-gray-700">
              With numerous certifications and a passion for education, Isroil
              has cultivated a system that produces results. His methods have
              led to countless SAT, CEFR, and IELTS successes.
            </p>
          </div>

          {/* Travel Information */}
          <div className="md:w-1/2 bg-green-100 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 gap-5">
            <h3 className="text-xl font-semibold text-green-500 mb-2">
              A Global Explorer
            </h3>
            <p className="text-gray-700">
              Isroil's travels include the USA, UK, China, Japan, and several
              European countries, bringing diverse perspectives and experiences
              to his teaching philosophy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderProfile;
