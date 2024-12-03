import React from "react";

function All_branches() {
  return (
    <div className="h-[80vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-white">
      {/* Section for Dunyo Branch */}
      <section className="text-gray-600 body-font relative">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">Dunyo Branch</h1>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-8 flex items-end relative shadow-lg transition-transform transform hover:scale-105 duration-300">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6021.744788283549!2d71.6362372!3d41.0061661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4bf7f1550acf%3A0x3610f07e7a59697c!2sDunyo%20O%27quv%20markazi!5e0!3m2!1sru!2s!4v1733230893493!5m2!1sru!2s"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded-lg shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="font-semibold text-blue-600 text-xs uppercase tracking-wider">Address</h2>
                <p className="text-lg">Uzbekistan, Namangan, Islam Karimov Street, 2A</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-semibold text-blue-600 text-xs uppercase tracking-wider">Email</h2>
                <a href="mailto:scienceprogres@email.com" className="text-indigo-500 hover:text-indigo-700 transition-all">
                  scienceprogres@email.com
                </a>
                <h2 className="font-semibold text-blue-600 text-xs uppercase tracking-wider mt-4">Phone</h2>
                <p className="text-lg">+99893911822500</p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto md:py-8 mt-8 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-blue-700 text-2xl font-semibold mb-4">About Dunyo Branch</h2>
            <p className="leading-relaxed text-gray-600 mb-6">
              The Dunyo Branch, located in the heart of Uzbekistan, fosters educational growth with modern facilities.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Modern classrooms equipped with advanced technology.</li>
              <li>Expert staff committed to delivering high-quality education.</li>
              <li>Conveniently accessible location with ample facilities.</li>
              <li>A focus on academic and professional development.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section for Progress Branch */}
      <section className="text-gray-600 body-font relative">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">Progress Branch</h1>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-8 flex items-end relative shadow-lg transition-transform transform hover:scale-105 duration-300">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2461.93842589837!2d71.63349241426357!3d41.00380695056908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4bb87ef79b51%3A0xdf7b6ec7e20fa766!2sScience%20Progress%20center%20(National%20branch)!5e0!3m2!1sru!2s!4v1733234549810!5m2!1sru!2s"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded-lg shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="font-semibold text-blue-600 text-xs uppercase tracking-wider">Address</h2>
                <p className="text-lg">Uzbekistan, Namangan, Islam Karimov Street, near Lada servis</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-semibold text-blue-600 text-xs uppercase tracking-wider">Email</h2>
                <a href="mailto:scienceprogres@email.com" className="text-indigo-500 hover:text-indigo-700 transition-all">
                  scienceprogres@email.com
                </a>
                <h2 className="font-semibold text-blue-600 text-xs uppercase tracking-wider mt-4">Phone</h2>
                <p className="text-lg">+998912930808</p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto md:py-8 mt-8 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-blue-700 text-2xl font-semibold mb-4">About Progress Branch</h2>
            <p className="leading-relaxed text-gray-600 mb-6">
              The Progress Branch provides an innovative learning environment with modern facilities and a focus on student growth.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>State-of-the-art classrooms.</li>
              <li>Expert instructors dedicated to high-quality education.</li>
              <li>Convenient location with excellent amenities.</li>
              <li>Focus on holistic student development.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section for Isfarhon Branch */}
      <section className="text-gray-600 body-font relative">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">Isfarhon Branch</h1>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-8 flex items-end relative shadow-lg transition-transform transform hover:scale-105 duration-300">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486.64168050288885!2d71.6706106451152!3d40.99470686784951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4dc4ef6aeff3%3A0x561935ce40009624!2sSpc%20isfarxon%20branch%20(%20science%20progress%20centre)!5e0!3m2!1sru!2s!4v1733234992576!5m2!1sru!2s"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded-lg shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="font-semibold text-blue-600 text-xs uppercase tracking-wider">Address</h2>
                <p className="text-lg">Uzbekistan, Isfarhon, located near central market</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-semibold text-blue-600 text-xs uppercase tracking-wider">Email</h2>
                <a href="mailto:scienceprogres@email.com" className="text-indigo-500 hover:text-indigo-700 transition-all">
                  scienceprogres@email.com
                </a>
                <h2 className="font-semibold text-blue-600 text-xs uppercase tracking-wider mt-4">Phone</h2>
                <p className="text-lg">+998912930808</p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto md:py-8 mt-8 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-blue-700 text-2xl font-semibold mb-4">About Isfarhon Branch</h2>
            <p className="leading-relaxed text-gray-600 mb-6">
              The Isfarhon Branch offers state-of-the-art facilities for comprehensive education, dedicated to fostering academic growth.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Modern, well-equipped classrooms.</li>
              <li>Qualified educators focused on high-quality learning.</li>
              <li>Prime location for easy accessibility.</li>
              <li>Holistic approach to student development.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default All_branches;
