import React from "react";

const FeatureSection = () => {
  return (
    <div className="">
      <section className=" bg-green-50 dark:bg-gray-800 py-20 overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4 dark:bg-gray-800">
          {/* Heading */}
          <div className="text-center mb-16 dark:bg-gray-800">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Together We Can Save Bangladesh
            </h2>
            <p className="dark:text-gray-300  text-xl text-gray-700 max-w-3xl mx-auto">
              It doesn't take big actions to save the environment — just one
              click, one hand, one heart
            </p>
          </div>

          {/* Features Grid - All cards same height & width */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* Feature 1 */}
            <div className="relative group ">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-70 transition duration-700"></div>
              <div className="dark:bg-gray-800 relative h-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-green-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col">
                <div className="w-16  h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0">
                  <svg
                    className="w-9 h-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold dark:text-gray-200 text-gray-800 mb-3">
                  Local Events Nearby
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                  Beach cleanups in Cox’s Bazar, tree plantations in Sylhet,
                  recycling drives in Dhaka — discover events happening near you
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-70 transition duration-700"></div>
              <div className="dark:bg-gray-800 relative h-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col">
                <div className=" w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0">
                  <svg
                    className="w-9 h-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="dark:text-gray-200 text-2xl font-bold text-gray-800 mb-3">
                  One-Click Join
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                  No forms, no hassle — just tap "Join Event" and you're
                  officially part of the movement!
                </p>
                București
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-70 transition duration-700"></div>
              <div className="dark:bg-gray-800 relative h-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0">
                  <svg
                    className="w-9 h-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="dark:text-gray-200 text-2xl font-bold text-gray-800 mb-3">
                  Track Your Impact
                </h3>
                <p className="dark:text-gray-300  text-gray-600 leading-relaxed flex-grow">
                  See how many trees you've planted, how much plastic you've
                  removed — your real contribution at a glance
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-70 transition duration-700"></div>
              <div className="dark:bg-gray-800  relative h-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-cyan-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0">
                  <svg
                    className="w-9 h-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-4m-6 0H5"
                    />
                  </svg>
                </div>
                <h3 className="dark:text-gray-200 text-2xl font-bold text-gray-800 mb-3">
                  Become an Organizer
                </h3>
                <p className="dark:text-gray-300  text-gray-600 leading-relaxed flex-grow">
                  Want to clean your local beach? Plant trees? Collect
                  donations? Create your own event in minutes
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-lime-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-70 transition duration-700"></div>
              <div className="dark:bg-gray-800 relative h-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-green-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-lime-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0">
                  <svg
                    className="w-9 h-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="dark:text-gray-200 text-2xl font-bold text-gray-800 mb-3">
                  Join 100K+ Volunteers
                </h3>
                <p className="dark:text-gray-300  text-gray-600 leading-relaxed flex-grow">
                  Be part of Bangladesh's largest youth-led environmental
                  movement
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-70 transition duration-700"></div>
              <div className="dark:bg-gray-800 relative h-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-amber-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0">
                  <svg
                    className="w-9 h-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="dark:text-gray-200 text-2xl font-bold text-gray-800 mb-3">
                  100% Free Forever
                </h3>
                <p className="dark:text-gray-300   text-gray-600 leading-relaxed flex-grow">
                  No fees, no subscription, no hidden costs — saving the planet
                  is open to everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
