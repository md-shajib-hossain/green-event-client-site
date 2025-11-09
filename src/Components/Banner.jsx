// src/components/Banner.jsx
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-tr bg-green-900 from-teal-100 ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -1050 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="mb-4 inline-block">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Eco-Friendly Events
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Let's Make <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-800">
                Earth Greener
              </span>
            </h1>

            <p className="text-lg text-white mb-6 max-w-md">
              Join local cleanup, tree plantation, and donation events. Be the
              change!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/upcoming-events"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg text-center"
              >
                Explore Events
              </motion.a>

              <motion.a
                href="/create-event"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-600 text-green-600 hover:bg-white  font-semibold px-6 py-3 rounded-lg text-center"
              >
                Create Event
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">2.5K+</div>
                <div className="text-sm text-white">Volunteers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">1.2K+</div>
                <div className="text-sm text-white">Trees</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">85+</div>
                <div className="text-sm text-white">Events</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="flex justify-center h-full w-full"
          >
            <motion.img
              src="https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg"
              alt="Tree Plantation Event"
              className="rounded-lg shadow-2xl w-full"
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
