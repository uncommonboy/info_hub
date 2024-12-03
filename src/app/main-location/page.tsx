"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaMapMarkerAlt } from "react-icons/fa"; // For Google Maps icon
import { FaTaxi } from "react-icons/fa"; // For Yandex Taxi icon

function Main_location() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    toast.success("Your feedback has been sent!");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d763.8152461648277!2d71.63687032485413!3d41.006371398812675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4bf7f1550acf%3A0x3610f07e7a59697c!2sDunyo%20O&#39;quv%20markazi!5e0!3m2!1sru!2s!4v1733068658887!5m2!1sru!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

      <div className="container px-5 py-24 mx-auto flex relative z-10">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Your Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Provide us with your thoughts. Your feedback is very important to
            us.
          </p>
          <form>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="flex space-x-5 mt-4">
              <button
                type="button"
                onClick={handleButtonClick}
                className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg mb-4"
              >
                Send
              </button>
            </div>
          </form>

          <div className="flex space-x-4">
            {/* Button to Google Maps */}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-sm flex items-center"
            >
              <FaMapMarkerAlt className="w-4 h-4 mr-2" />
              {/* Text will be hidden below 350px */}
              <span className="hidden xs:inline sm:inline">Google Maps</span>
            </a>

            {/* Button to Yandex Taxi */}
            <a
              href="https://taxi.yandex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-sm flex items-center"
            >
              <FaTaxi className="w-4 h-4 mr-2" />
              {/* Text will be hidden below 350px */}
              <span className="hidden xs:inline sm:inline">Yandex Taxi</span>
            </a>
          </div>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </section>
  );
}

export default Main_location;
