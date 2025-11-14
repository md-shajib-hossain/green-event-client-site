import React from "react";
import img from "../assets/sheikh_Ahmadullah.jpeg";
const TopContributor = () => {
  return (
    <div>
      <section className="py-20 dark:bg-gray-800 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Our Top Contributor
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            The organization that has made the biggest impact in making all our
            events successful
          </p>

          <div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto 
                    border border-green-100 hover:shadow-3xl transition-shadow duration-500"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div
                className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 md:p-12 
                        flex items-center justify-center"
              >
                <img
                  src={img}
                  alt="Sheikh Ahmadullah"
                  className="h-full w-full  rounded-2xl object-contain drop-shadow-2xl 
                       hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Side - Details */}
              <div className="p-10 md:p-16 dark:bg-gray-800 text-left space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                    ASSunnah Foundation
                  </h3>
                  <p className="text-xl text-green-600 font-semibold">
                    Founder & Chief Patron
                  </p>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="dark:text-gray-300">
                    <span className="text-green-600 font-bold">
                      ASSunnah Foundation
                    </span>{" "}
                    is one of the leading charitable organizations in
                    Bangladesh, making outstanding contributions in education,
                    healthcare, and social welfare.
                  </p>
                  <p className="dark:text-gray-300">
                    For the past 5 years, they have been our biggest sponsor in
                    every Green Event, tree plantation drive, environmental
                    awareness campaign, and educational seminar.
                  </p>
                  <p className="text-green-700 font-medium">
                    With their generous support, we have planted{" "}
                    <span className="font-bold">50,000+</span> trees and raised
                    environmental awareness among{" "}
                    <span className="font-bold">10,000+</span> people.
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href="https://assunnahfoundation.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-green-600 text-white font-bold 
                         px-8 py-4 rounded-full hover:bg-green-700 transition 
                         shadow-lg hover:shadow-xl"
                  >
                    Visit ASSunnah Foundation
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="mt-12 text-center">
            <p className="text-2xl italic text-green-700 font-medium">
              “This green journey would not have been possible without their
              support. Thank you, ASSunnah Foundation.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopContributor;
