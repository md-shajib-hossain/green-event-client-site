import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const ManageEvents = () => {
  const { user } = use(AuthContext);
  const [myEvents, setMyEvents] = useState([]);
  const navigate = useNavigate();
  // console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:3000/manage-event?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyEvents(data);
      });
  }, [user.email]);
  // console.log(myEvents);

  const handleUpdateEvent = () => {
    navigate("/update-event");
    // console.log(myEvents);
  };
  return (
    <>
      <section className="w-11/12 mx-auto my-10">
        <h1 className="text-center  font-bold text-xl md:text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-800 ">
          {" "}
          Manage Events:(0{myEvents.length})
        </h1>
        <p className="text-end mr-20 italic text-sm text-yellow-400 mb-20">
          (Events are sorted by near date)
        </p>
        <div className="card card-side bg-base-100  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10  w-11/12 mx-auto">
          {myEvents.map((event) => (
            <motion.div
              key={event._id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative "
            >
              {/* Gradient Glow Background (Feature Section এর মতো) */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl blur-lg opacity-30 
                   transition duration-700"
              />

              {/* Main Card */}
              <div
                className="relative h-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-green-100 
                  shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 
                  flex flex-col"
              >
                {/* Thumbnail */}
                <div className="mb-6 -mt-16 mx-auto w-full max-w-sm">
                  <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50">
                    <img
                      src={event.thumbnail || "/placeholder-event.jpg"}
                      alt={event.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className="px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-full shadow-lg">
                    {event.type}
                  </span>
                  <span className="px-4 py-2 bg-yellow-400 text-black text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                    Joined
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-green-700 transition-colors">
                  {event.title}
                </h3>
                <div>
                  <p className="text-md font-semibold my-4">
                    Description:
                    <span className="text-md font-normal ">
                      {" "}
                      {event.description}{" "}
                    </span>
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={handleUpdateEvent}
                  className="mt-auto w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold 
                 rounded-2xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 
                 transition-all duration-300 shadow-xl"
                >
                  Update Event →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ManageEvents;
