import React from "react";
import {
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaTelegramPlane,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-12">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">
        Contact Us & Social Media
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Instagram */}
        <div className="flex flex-col items-center text-center">
          <FaInstagram className="text-5xl text-blue-700 mb-4 hover:text-blue-900 transition-all" />
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Instagram
          </h2>
          <p className="text-gray-600 mb-4">
            Follow us on Instagram for the latest updates, educational content,
            and inspiration.
          </p>
          <a
            href="https://www.instagram.com/science_progresscenter/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-lg font-medium hover:text-blue-700 transition-all"
          >
            Visit Instagram
          </a>
        </div>

        {/* Gmail */}
        <div className="flex flex-col items-center text-center">
          <FaEnvelope className="text-5xl text-blue-700 mb-4 hover:text-blue-900 transition-all" />
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Gmail</h2>
          <p className="text-gray-600 mb-4">
            Reach out to us via email for inquiries, collaborations, or support.
          </p>
          <a
            href="mailto:scienceprogres@email.com"
            className="text-blue-500 text-lg font-medium hover:text-blue-700 transition-all"
          >
            Send an Email
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center">
          <FaPhoneAlt className="text-5xl text-blue-700 mb-4 hover:text-blue-900 transition-all" />
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Phone</h2>
          <p className="text-gray-600 mb-4">
            Call us directly for immediate assistance or any urgent matters.
          </p>
          <a
            href="tel:+99893911822500"
            className="text-blue-500 text-lg font-medium hover:text-blue-700 transition-all"
          >
            Call Now
          </a>
        </div>

        {/* Twitter */}
        <div className="flex flex-col items-center text-center">
          <FaTwitter className="text-5xl text-blue-700 mb-4 hover:text-blue-900 transition-all" />
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Twitter</h2>
          <p className="text-gray-600 mb-4">
            Follow us on Twitter for quick updates, news, and live discussions.
          </p>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-lg font-medium hover:text-blue-700 transition-all"
          >
            Follow on Twitter
          </a>
        </div>

        {/* Telegram */}
        <div className="flex flex-col items-center text-center">
          <FaTelegramPlane className="text-5xl text-blue-700 mb-4 hover:text-blue-900 transition-all" />
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Telegram</h2>
          <p className="text-gray-600 mb-4">
            Join our Telegram group for real-time updates, chats, and
            collaboration.
          </p>
          <a
            href="https://t.me/spcgroupinternational/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-lg font-medium hover:text-blue-700 transition-all"
          >
            Join on Telegram
          </a>
        </div>

        {/* Facebook */}
        <div className="flex flex-col items-center text-center">
          <FaFacebookF className="text-5xl text-blue-700 mb-4 hover:text-blue-900 transition-all" />
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Facebook</h2>
          <p className="text-gray-600 mb-4">
            Connect with us on Facebook for events, updates, and educational
            content.
          </p>
          <a
            href="https://www.facebook.com/scienceprogresscentre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-lg font-medium hover:text-blue-700 transition-all"
          >
            Visit Facebook
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col items-center text-center">
          <FaLinkedinIn className="text-5xl text-blue-700 mb-4 hover:text-blue-900 transition-all" />
          <h2 className="text-xl font-semibold text-blue-600 mb-2">LinkedIn</h2>
          <p className="text-gray-600 mb-4">
            Follow our LinkedIn page for professional updates, partnerships, and
            networking.
          </p>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-lg font-medium hover:text-blue-700 transition-all"
          >
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
