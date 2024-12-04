'use client'
import React, { useState } from "react";

function Top_teachers() {
  // Data for teachers
  const teachers = [
    {
      name: "Temurbek Rakhimjanov",
      description:
        "IELTS score of 8.0, CELTA certified, with over 12 years of experience in teaching. He specializes in advanced language skills.",
      images: [
        "/Temur-Ielts.png",
        "/Temur-Celta.png",
      ],
    },
    {
      name: "Musayev Bekhzod",
      description:
        "Achieved an IELTS score of 7.5, CELTA certified, and has 6 years of experience mentoring students for their exams.",
      images: [
        "/Musayev-Ielts.png",
        "/Musayev-Celta.png",
      ],
    },
    {
      name: "Sugdiona Isroilova",
      description:
        "IELTS score of 7.0, CELTA certified, with 4+ years of experience in preparing students for international exams.",
      images: [
        "/Sugdiona-Ielts.png",
        "/Sugdiona-Celta.png",
      ],
    },
    {
      name: "Shamsiddinov Sayfullo",
      description:
        "IELTS score of 7.0, CELTA certified, dedicated to creating innovative learning methods over his 5-year teaching career.",
      images: [
        "https://dummyimage.com/400x400/000/fff&text=Sayfullo+1",
        "https://dummyimage.com/400x400/000/fff&text=Sayfullo+2",
      ],
    },
    {
      name: "Nodirbek Karimov",
      description:
        "IELTS score of 8.0, CELTA certified, with a strong passion for helping students achieve their goals in language learning.",
      images: [
        "https://dummyimage.com/400x400/000/fff&text=Nodirbek+1",
        "https://dummyimage.com/400x400/000/fff&text=Nodirbek+2",
      ],
    },
  ];

  // State for the current image of each teacher
  const [currentImages, setCurrentImages] = useState(
    Array(teachers.length).fill(0)
  );

  // Function to toggle the image for a specific teacher
  const toggleImage = (index: number) => {
    setCurrentImages((prev) =>
      prev.map((img, i) => {
        const totalImages = teachers[index].images.length;
        return i === index && totalImages > 1 ? (img + 1) % totalImages : img;
      })
    );
  };
  

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="lg:w-4/5 mx-auto flex flex-wrap mb-12 border-b pb-8"
            >
              {/* Left: Images with toggle buttons */}
              <div className="lg:w-1/2 w-full flex flex-col items-center">
                <img
                  alt={teacher.name}
                  className="lg:w-full w-3/4 lg:h-auto object-cover object-center rounded aspect-[4/3]"
                  src={teacher.images[currentImages[index]]}
                />
                <div className="flex mt-4">
                  {/* <button
                    onClick={() => toggleImage(index)}
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    aria-label={`Toggle certificate image for ${teacher.name}`}
                  >
                    Other Certificate
                  </button> */}
                </div>
              </div>

              {/* Right: Description */}
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  SPC TOP TEACHER
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                  {teacher.name}
                </h1>
                <p className="leading-relaxed mb-4">{teacher.description}</p>
                <div className="flex items-center space-x-4 mt-4">
                  <button className="text-white bg-blue-500 py-2 px-6 rounded hover:bg-blue-600">
                    Learn More
                  </button>
                  <button
                    onClick={() => toggleImage(index)}
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Other Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Top_teachers;
