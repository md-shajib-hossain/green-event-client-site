// src/pages/UpcomingEvents.jsx
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import notFound from "../assets/not_found.png";

const UpcomingEvents = () => {
  const events = useLoaderData();
  const [searchEvents, setSearchEvent] = useState(events);

  if (!events || events.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-500">No upcoming events found.</p>
      </div>
    );
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);

    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchEvent(data);
      });
  };

  if (!searchEvents || searchEvents.length === 0) {
    return (
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-center mb-15 text-green-700 mt-10">
          Upcoming Events
        </h1>
        <div>
          <img src={notFound} alt="" />
        </div>

        <button
          onClick={() => setSearchEvent(events)}
          className="btn px-5 my-10 rounded-full bg-green-600 text-white"
        >
          Upcoming Events
        </button>
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
      <h1 className="text-4xl font-bold text-center mb-15 text-green-700">
        Upcoming Events
      </h1>
      <form onSubmit={handleSearch} className="flex justify-start gap-1 mb-10 ">
        <label className="input rounded-full border-2 border-green-600">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn rounded-full  bg-green-600 px-10 text-white">
          Go
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {searchEvents.map((event) => (
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
