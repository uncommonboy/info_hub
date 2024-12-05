import React from "react";
import { branches } from "./branchesData";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function AllBranches() {
  return (
    <div className="h-[80vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-white">
      {branches.map((branch) => (
        <section key={branch.id} className="text-gray-600 body-font relative">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">
            {branch.name}
          </h1>
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            {/* Map Section */}
            <div className="lg:w-2/3 md:w-full bg-white rounded-lg overflow-hidden sm:mr-10 p-8 flex items-end relative shadow-lg transition-transform transform hover:scale-105 duration-300">
              {/* Make the map container take full available height */}
              <div className="w-[400px] h-[450px] lg:h-[500px] xl:h-[600px]">
                {" "}
                {/* Adjust this height to make the map bigger */}
                <iframe
                  width="100%"
                  height="100%" // Ensure iframe stretches full container size
                  className="absolute inset-0"
                  frameBorder="0"
                  title={`${branch.name} Map`}
                  src={branch.mapSrc}
                ></iframe>
              </div>
            </div>

            {/* Description Section */}
            <div className="lg:w-1/3 md:w-full bg-white flex flex-col md:ml-auto shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300 mt-8 lg:mt-0">
              <h2 className="text-blue-700 text-2xl font-semibold mb-4">
                About {branch.name}
              </h2>
              <p className="leading-relaxed text-gray-600 mb-6">
                {branch.about}
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {branch.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="flex-col bg-white relative flex flex-wrap py-6 rounded-lg shadow-md">
                {/* Address Section */}
                <div className="lg:w-full px-6">
                  <h2 className="font-semibold text-blue-600 text-xs uppercase tracking-wider">
                    Address
                  </h2>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />
                    <p className="text-lg">{branch.address}</p>
                  </div>
                </div>

                {/* Email Section */}
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="font-semibold text-blue-600 text-xs uppercase tracking-wider">
                    Email
                  </h2>
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="w-5 h-5 text-blue-600" />
                    <a
                      href={`mailto:${branch.email}`}
                      className="text-indigo-500 hover:text-indigo-700 transition-all"
                    >
                      {branch.email}
                    </a>
                  </div>
                  <h2 className="font-semibold text-blue-600 text-xs uppercase tracking-wider mt-4">
                    Phone
                  </h2>
                  <div className="flex items-center space-x-2">
                    <p className="  text-lg">
                      <a className="flex" href={`tel:${branch.phone}`}>
                        {" "}
                        <FaPhoneAlt className="w-5 h-5 text-blue-600" />
                        {branch.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default AllBranches;
