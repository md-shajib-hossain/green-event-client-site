// src/pages/UpcomingEvents.jsx
import React from "react";
import { useLoaderData } from "react-router";
import { format } from "date-fns";
import { motion } from "framer-motion";

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
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-11/12 mx-auto py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">
        Upcoming Events
      </h1>

      {/* ৩ কলাম গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {events.map((event) => (
          <div
            key={event._id}
            className="card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-103 ease-in-out"
          >
            {/* Thumbnail */}
            <figure className="h-48 overflow-hidden">
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Card Body */}
            <div className="card-body p-6">
              {/* Event Type Badge */}
              <div className="badge bg-green-700 text-white border-none text-xs mb-2">
                {event.type}
              </div>

              {/* Title */}
              <h2 className="card-title text-xl font-semibold text-green-700 line-clamp-1">
                {event.title}
              </h2>

              {/* Description (Short) */}
              <p className="text-gray-600 text-sm line-clamp-2">
                {event.description}
              </p>

              {/* Date & Location */}
              <div className="mt-4 space-y-1 text-sm text-gray-500">
                <p className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {format(new Date(event.date), "dd MMM yyyy, h:mm a")}
                </p>
                <p className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {event.location}
                </p>
              </div>

              {/* Action Button */}
              <div className="card-actions justify-end mt-4">
                <button className="btn w-full bg-green-700 btn-sm text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default UpcomingEvents;
