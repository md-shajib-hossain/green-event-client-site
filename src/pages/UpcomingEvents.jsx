// src/pages/UpcomingEvents.jsx
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import notFound from "../assets/not_found.png";
import Loader from "../Components/Loader";

const UpcomingEvents = () => {
  const data = useLoaderData();
  const [events, setEvents] = useState(data);
  // const [searchEvents, setSearchEvent] = useState(data);
  const [selectedType, setSelectedType] = useState("All");
  const [searchText, setSearchText] = useState("");

  const [loading, setLoading] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setSearchText(search);
    console.log(searchText);
  };
  useEffect(() => {
    if (searchText) {
      fetch(
        `https://green-event-server-site.vercel.app/search?search=${searchText}`
      )
        .then((res) => res.json())
        .then((data) => {
          setEvents(data);
          console.log(events);
          setLoading(false);
        });
    } else if (selectedType) {
      fetch(
        `https://green-event-server-site.vercel.app/filter?filter=${selectedType}`
      )
        .then((res) => res.json())
        .then((data) => {
          setEvents(data);
          setLoading(false);
        });
    }
    //
    else {
      fetch("https://green-event-server-site.vercel.app/events")
        .then((res) => res.json())
        .then((data) => {
          setEvents(data);
          console.log(events);
          setLoading(false);
        });
    }
  }, [searchText, selectedType]);

  //
  if (loading) {
    return <Loader></Loader>;
  }

  //
  const handleError = () => {
    setSelectedType("");
    setSearchText("");
    setLoading(false);
  };

  if (!events || events.length === 0) {
    return (
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-center mb-15 text-green-700 mt-10">
          Upcoming Events
        </h1>
        <div>
          <img src={notFound} alt="" />
        </div>

        <button
          onClick={handleError}
          className="btn px-5 my-10 rounded-full bg-green-600 text-white"
        >
          See All Events
        </button>
      </div>
    );
  }

  const eventTypes = [
    "All",
    "Cleanup",
    "Plantation",
    "Donation",
    "Awareness Campaign",
    "Recycling Drive",
    "Tree Planting",
    "Beach Cleanup",
    "Community Service",
  ];

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-11/12 mx-auto py-12 "
      >
        <h1 className="text-4xl font-bold text-center mb-15 text-green-700">
          Upcoming Events
        </h1>
        <div className="flex items-center flex-col md:flex-row md:justify-between ">
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-start gap-1 mb-5 md:mb-10 "
          >
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
          <section>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-6 py-2 mb-10 border-2 border-green-600 rounded-full bg-white dark:bg-gray-800 text-green-700 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type === "All" ? "All Types" : type}
                </option>
              ))}
            </select>
          </section>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {events.map((event) => (
            <div
              key={event._id}
              className="card bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-103 ease-in-out"
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
                    <button className="btn w-full  bg-green-700 rounded-full btn-sm text-white">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default UpcomingEvents;
