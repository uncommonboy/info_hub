"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

function StudentAchievements() {
  // Updated data for 14 student achievements
  const students = [
    {
      name: "Muhammadjanov Shohruh",
      description:
        "Achieved an IELTS score of 8.5, participated in multiple international competitions, and currently pursuing studies at a top university.",
      score: 7.5,
      image: "/result1-7.5.png",
    },
    {
      name: "Isakov Olimjon",
      description:
        "Received a 7.0 in IELTS, winner of several regional science fairs, and currently a research assistant in linguistics.",
      score: 7.0,
      image: "/result2-7.png",
    },
    {
      name: "Sugdiona Isroilova",
      description:
        "IELTS score of 8.0, published an article in an international magazine, and recognized for his academic excellence in high school.",
      score: 8.0,
      image: "/result3-8.png",
    },
    {
      name: "Shamsiddinov Sayfullo",
      description:
        "Scored 7.0 on the IELTS, attended a prestigious international academic program, and is known for her leadership in student organizations.",
      score: 7.0,
      image: "/result4-7.png",
    },
    {
      name: "Muhammedov Azizbek",
      description:
        "IELTS score of 7.0, excelled in regional debate competitions, and involved in student outreach programs.",
      score: 7.0,
      image: "/result5-7.png",
    },
    {
      name: "Abdullayeva Sarvinoz",
      description:
        "Achieved a perfect IELTS score of 7.0, winner of multiple international coding competitions, and a full-time software engineering student.",
      score: 7.0,
      image: "/result6-7.png",
    },
    {
      name: "Nurmatjon Botirjanov",
      description:
        "Scored 7.5 on the IELTS, winner of national music competitions, and currently pursuing a degree in music composition.",
      score: 7.5,
      image: "/result7-7.5.png",
    },
    {
      name: "Azimova Nazirakhon",
      description:
        "IELTS score of 7.5, presented research on climate change at an international conference, and currently studying environmental science.",
      score: 7.5,
      image: "/result8-7.5.png",
    },
    {
      name: "Akramov Ozodbek",
      description:
        "Scored 8.0 on the IELTS, known for his volunteer work in local communities, and now studying social work at a prestigious university.",
      score: 8.0,
      image: "/result9-8.png",
    },
    {
      name: "Isabella Garcia",
      description:
        "Achieved an 7.5 IELTS score, top performer in national essay writing contests, and now a published author and student of literature.",
      score: 7.5,
      image: "/result10-7.5.png",
    },
    {
      name: "Islombek Dedaboyev",
      description:
        "Scored 7.5 on the IELTS, national champion in chess, and studying artificial intelligence and machine learning.",
      score: 7.5,
      image: "/result11-7.5.png",
    },
    {
      name: "Karolina Babinova",
      description:
        "IELTS score of 7.5, completed internships at top law firms, and now pursuing law at a top-tier institution.",
      score: 7.5,
      image: "/result12-7.5.png",
    },
    {
      name: "Zoirjon Zokirjanov",
      description:
        "Achieved an 7.5 IELTS score, recognized for his outstanding performance in robotics competitions, and pursuing an engineering degree.",
      score: 7.5,
      image: "/result13-7.5.png",
    },
    {
      name: "Mohina Turgunpolatova",
      description:
        "Scored 7 on the IELTS, awarded for excellence in community outreach programs, and studying human rights law.",
      score: 7,
      image: "/ressult14-7.png",
    },
  ];

  return (
    <div>
      <section className="container px-5 py-24 mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {students.map((student, index) => (
            <motion.div
              key={index}
              className="h-full bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col max-w-xs mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image at the Top */}
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-48 object-cover rounded-t-md mb-4"
              />

              <div className="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>

                <p className="leading-relaxed mb-6">
                  Congratulations to <strong>{student.name}</strong> for
                  achieving a remarkable IELTS score of{" "}
                  <span className="text-red-500 font-bold">
                    {student.score}
                  </span>
                  ! His/Her dedication and hard work reflect in this outstanding
                  achievement.
                </p>
              </div>

              <div className="flex items-center mt-4">
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    {student.name}
                  </span>
                  <span className="text-gray-500 text-sm">IELTS Achiever</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default StudentAchievements;
