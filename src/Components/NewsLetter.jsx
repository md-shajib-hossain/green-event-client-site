import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 relative overflow-hidden">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1920')] bg-cover bg-center mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side – Emotional Text */}
            <div className="text-white">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Don't Miss the Next
                <span className="block text-yellow-300">Big Change</span>
              </h2>

              <p className="text-xl md:text-2xl text-green-50 mb-8 leading-relaxed">
                Get instant updates about upcoming beach cleanups, tree
                plantations, river rescues, and urgent environmental actions in
                your city — before spots fill up!
              </p>

              <div className="space-y-5 text-lg text-green-100">
                <div className="flex items-center gap-4">
                  <svg
                    className="w-8 h-8 text-yellow-300 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2l3.09 6.26L20 9.27l-5 4.87 1.18 6.88L10 17.77l-6.18 3.25L5 14.14 0 9.27l6.91-1.01L10 2z" />
                  </svg>
                  <span>
                    New events in Dhaka, Chittagong, Sylhet, Cox’s Bazar & more
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    className="w-8 h-8 text-yellow-300 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2l3.09 6.26L20 9.27l-5 4.87 1.18 6.88L10 17.77l-6.18 3.25L5 14.14 0 9.27l6.91-1.01L10 2z" />
                  </svg>
                  <span>Last-minute volunteer opportunities</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    className="w-8 h-8 text-yellow-300 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2l3.09 6.26L20 9.27l-5 4.87 1.18 6.88L10 17.77l-6.18 3.25L5 14.14 0 9.27l6.91-1.01L10 2z" />
                  </svg>
                  <span>Real stories from volunteers like you</span>
                </div>
              </div>

              <p className="mt-10 text-2xl font-semibold text-yellow-200">
                Already 50,000+ volunteers are with us
              </p>
            </div>

            {/* Right Side – Subscription Form (Glassmorphism Card) */}
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 lg:p-12 border border-white/40">
              <h3 className="text-4xl font-bold bg-linear-to-r from-green-600 to-teal-800 text-transparent bg-clip-text mb-4">
                Join Bangladesh’s Green Movement
              </h3>
              <p className="text-lg text-gray-600 mb-10">
                Be the first to know when your city needs you
              </p>

              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all text-lg placeholder-gray-500"
                />

                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all text-lg placeholder-gray-500"
                />

                <select className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all text-lg text-gray-700">
                  <option>Select Your City</option>
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Sylhet</option>
                  <option>Khulna</option>
                  <option>Rajshahi</option>
                  <option>Barisal</option>
                  <option>Cox's Bazar</option>
                  <option>Others</option>
                </select>

                <button className="w-full py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xl font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3">
                  <span>Yes, Keep Me Updated!</span>
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-center text-sm text-gray-500 mt-8 font-medium">
                Zero spam • Unsubscribe anytime • Your privacy is 100% safe
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <svg
            className="w-40 h-40 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 22l10-7 10 7z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 rotate-90">
          <svg
            className="w-48 h-48 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 22l10-7 10 7z" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
