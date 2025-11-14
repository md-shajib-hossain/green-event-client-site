import React from "react";

const Gallery = () => {
  return (
    <div>
      <section className="py-20 bg-green-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Moments That Matter
            </h2>
            <p className="dark:text-gray-300  text-xl text-gray-700 max-w-3xl mx-auto">
              Real people. Real actions. Real change across Bangladesh.
            </p>
          </div>

          {/* all photo starts here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Photo 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.K1k6RxxoPOJVTaFVpDsCgwHaEK?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Beach Cleanup in Cox's Bazar"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">
                    Cox's Bazar Beach Cleanup
                  </h3>
                  <p className="text-sm opacity-90">
                    450 volunteers • 2.5 tons of plastic removed
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.WDrvMc2SxYWwM6l8pHQqsgHaEO?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Tree Plantation Drive"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Sylhet Hill Plantation</h3>
                  <p className="text-sm opacity-90">
                    10,000 saplings planted in one day
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.P4FpkZxVJVqM8eCJqsFLSwHaE-?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Youth Climate Rally"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">
                    Dhaka Youth Climate Rally
                  </h3>
                  <p className="text-sm opacity-90">
                    15,000 students united for climate action
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://i.ytimg.com/vi/Xs8K8rSpUp4/maxresdefault.jpg"
                alt="River Cleanup"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Buriganga River Revival</h3>
                  <p className="text-sm opacity-90">
                    300 volunteers • 8 hours of cleaning
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 5 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.uShYlVgiqTJlOUit8vc_owHaEe?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="School Awareness Program"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">School Eco-Education</h3>
                  <p className="text-sm opacity-90">
                    Teaching the next generation
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 6 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://th.bing.com/th/id/R.d79c68dab2a114ce8ccdd8a4ff829f6a?rik=i1CM2MSNNPSsRg&riu=http%3a%2f%2fwww.guardian.co.tt%2fimage-3.2790132.117157.20200907012127.deba960fcc&ehk=2vLrzxqxfYAdLYzuUYPk7NfcPJi3kdm9f5jv3MR7MJk%3d&risl=&pid=ImgRaw&r=0"
                alt="Community Recycling"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">
                    Community Recycling Drive
                  </h3>
                  <p className="text-sm opacity-90">
                    Turning waste into opportunity
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 7 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.NFdxtJZ8z9BF9X6Pje_ZqQHaE8?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Mangrove Restoration"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">
                    Sundarbans Mangrove Project
                  </h3>
                  <p className="text-sm opacity-90">
                    Protecting our natural shield
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 8 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://tse1.explicit.bing.net/th/id/OIP._P1ICjxHHUxUbEzJ_R4kwwHaEL?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Victory Celebration"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">
                    Victory of Collective Action
                  </h3>
                  <p className="text-sm opacity-90">Because together, we win</p>
                </div>
              </div>
            </div>
            {/* photo 9 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.h5WjJxONoIkU9l4Cuqyq5AHaEp?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Plastic Free Campus"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Plastic-Free Campus</h3>
                  <p className="text-sm opacity-90">
                    Students leading the change
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://www.orphans-of-uganda.org/wp-content/uploads/2023/11/signal-2023-08-03-06-55-54-376-1.jpg"
                alt="Women in Action"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Food to an orphanage</h3>
                  <p className="text-sm opacity-90">
                    Food donation programme in Chittagong
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=1000&fit=crop"
                alt="Children Planting Trees"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Future in Small Hands</h3>
                  <p className="text-sm opacity-90">Children planting hope</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.MGLPbn46BAz3Al3L6k3NegHaEK?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="United We Stand"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">United for BD people</h3>
                  <p className="text-sm opacity-90">
                    Bangladesh's green revolution
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Be Part of This Movement
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
