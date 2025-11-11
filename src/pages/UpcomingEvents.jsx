// src/pages/UpcomingEvents.jsx
import React from "react";
import { Link, useLoaderData } from "react-router";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";

const UpcomingEvents = () => {
  const events = useLoaderData();

  if (!events || events.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-500">No upcoming events found.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-11/12 mx-auto py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">
        Upcoming Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {events.map((event) => (
          <div
            key={event._id}
            className="card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-103 ease-in-out"
          >
            <figure className="h-48 overflow-hidden">
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </figure>

            <div className="card-body p-6">
              <div className="badge bg-green-700 text-white border-none text-xs mb-2">
                {event.type}
              </div>

              <h2 className="card-title text-xl font-semibold text-green-700 line-clamp-1">
                {event.title}
              </h2>

              <p className="text-gray-600 text-sm line-clamp-2">
                {event.description}
              </p>

              <div className="mt-4 space-y-1 text-sm text-gray-500">
                <p className="flex items-center gap-1">
                  <span>
                    <BsCalendar2Date />
                  </span>
                  {format(new Date(event.date), "dd MMM yyyy, h:mm a")}
                </p>
                <p className="flex items-center gap-1">
                  <span>
                    <IoLocationOutline />{" "}
                  </span>
                  {event.location}
                </p>
              </div>

              <div className=" mt-4">
                <Link to={`/event-detail/${event._id}`}>
                  <button className="btn w-full bg-green-700 btn-sm text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default UpcomingEvents;
