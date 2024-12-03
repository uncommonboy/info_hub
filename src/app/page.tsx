"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundImage: "url('/main-branch.webp')", // Apply background image
        backgroundSize: "cover", // Ensure the image covers the entire area
        backgroundPosition: "center", // Center the background image
        backgroundAttachment: "fixed", // Optional: This will make the background stay fixed when scrolling
      }}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="text-white body-font relative"> {/* Set text color to white */}
          {/* Adding a blur overlay */}
          <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg z-0"></div> {/* Overlay with blur effect */}

          <div className="container px-5 py-24 mx-auto flex flex-col relative z-10">
            <div className="lg:w-9/5 mx-auto">
              <div className="rounded-lg">
                {/* The image is now set as the background */}
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div>
                    <img className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400" src="/logoMain.png" alt="" />
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-white text-lg">
                      Science Progress Center
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p className="text-white text-base">
                      "Guiding Ambitious Minds Towards Global Success, One Step at a Time."
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-white text-lg mb-4">
                    With over 20 years of experience in guiding students toward
                    success, SPC Science Progress Center has empowered more than
                    500 students to pursue their academic dreams abroad. Our
                    center specializes in providing expert coaching and training
                    for prestigious exams like SAT, IELTS, and CEFR, preparing
                    students to excel in their international education journey.
                    We understand that every student is unique, which is why we
                    offer personalized support tailored to each individual's
                    strengths and goals. At SPC Science Progress Center, we
                    don't just prepare you for exams—we prepare you for success
                    in a global academic environment. Join us, and let us help
                    you unlock your full potential and take the first step
                    toward an exciting future abroad.
                  </p>
                  <a href="/all-about" className="text-indigo-500 inline-flex items-center">
                   <b>
                   Learn More
                   </b>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
