import React from "react";

function All_about() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
          style={{
            backgroundImage: "url('/main-branch.webp')", // Set the uploaded image as the background
            backgroundSize: "cover", // Ensure it covers the entire background
            backgroundPosition: "center", // Position the background at the center
            backgroundAttachment: "fixed", // Optional: makes the background fixed during scroll
          }}
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* Scrollable Container for Description */}
            <div
              className="description-container max-h-[500px] overflow-y-scroll p-8 bg-white bg-opacity-70 shadow-lg rounded-lg w-full"
              style={{
                // The description container has a white, slightly opaque background
                backdropFilter: "blur(8px)", // Optional: creates a blur effect behind the text
              }}
            >
              <h1 className="font-semibold text-3xl text-gray-900 mb-4">
                Welcome to SPC Science Progress Center
              </h1>
              <p className="text-lg mb-4">
                Where ambition meets opportunity, and dreams of studying abroad
                become reality. With over 20 years of experience in guiding
                students through their academic journeys, SPC has earned its
                reputation as one of the top educational institutions in
                Uzbekistan.
              </p>
              <h2 className="font-semibold text-2xl text-gray-800 mt-6">
                Proudly Leading the Way in Namangan and Beyond
              </h2>
              <p className="text-lg mb-4">
                Ranked #1 in Namangan, SPC Science Progress Center is a true
                leader in academic excellence. Year after year, our students
                achieve top scores in their exams, opening doors to world-class
                educational institutions abroad. This success isn’t by
                chance—it's the result of our relentless dedication to providing
                high-quality education.
              </p>
              <h2 className="font-semibold text-2xl text-gray-800 mt-6">
                Learn from the Best
              </h2>
              <p className="text-lg mb-4">
                We are home to the highest number of CELTA-certified teachers in
                Namangan, each bringing expertise, passion, and a deep
                understanding of the English language. Our teachers don't just
                teach—they inspire, motivate, and guide students every step of
                the way.
              </p>
              <h2 className="font-semibold text-2xl text-gray-800 mt-6">
                Spanning the Country, Connecting Dreams
              </h2>
              <p className="text-lg mb-4">
                SPC isn’t just a name—it's a movement. With 12 branches spread
                across Uzbekistan, including Progress, Dunyo, Isfarxon,
                Mirodistric, Kidz, Kosonsoy, Toshbuloq, Chust, Yangiqorgon, and
                more, we bring top-tier education to every corner of the
                country.
              </p>
              <h2 className="font-semibold text-2xl text-gray-800 mt-6">
                Unlock Your Full Potential with SPC
              </h2>
              <p className="text-lg mb-4">
                At SPC Science Progress Center, we don’t just focus on passing
                exams—we focus on unlocking your full potential. Our mission is
                simple: to help you succeed academically and confidently take
                the first step toward a bright future abroad.
              </p>
              <p className="text-lg">
                Join the thousands of students who have trusted SPC Science
                Progress Center to help them achieve their academic dreams.
                We're here to guide you every step of the way. Let’s make your
                success story our next chapter.
              </p>
            </div>
            <a href="/contact-info" className=" inline-flex items-center">
              <a
                href="/contact-info"
                className="inline-flex justify-end w-full"
              >
                <button className="mt-2 inline-flex items-center px-6 py-3 bg-blue-600 text-white border-2 border-blue-600 rounded-full hover:bg-white hover:text-blue-600 hover:border-blue-600 transition duration-300">
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </a>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default All_about;
