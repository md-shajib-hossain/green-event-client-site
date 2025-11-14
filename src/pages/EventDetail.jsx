import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { SlLocationPin } from "react-icons/sl";
import { CalendarHeart } from "lucide-react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const EventDetail = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

  //   console.log(event);

  // for routes and data fecth by id
  useEffect(() => {
    fetch(`https://green-event-server-site.vercel.app/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data.result))
      .catch((err) => console.log(err));
  }, [id]);
  //   console.log(event);

  // handle join event er function
  const handleJoinEvent = async () => {
    if (!user) {
      toast.error("Please Log In to Join the Event!");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch(
        `https://green-event-server-site.vercel.app/joined-events`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            eventId: id,
            userEmail: user.email,
            thumbnail: event.thumbnail,
            type: event.type,
            title: event.title,
            date: event.date,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Network error");
      console.log(err.message);
    }
  };

  //
  return (
    <>
      <div className="min-h-screen dark:bg-gray-800 bg-green-50 py-12 px-4 ">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-green-700 hover:text-green-800 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Events
          </button>

          <div className="bg-white dark:bg-gray-800 dark:border-green-600 dark:border-2 rounded-2xl shadow-xl overflow-hidden">
            <div className="h-96 overflow-hidden">
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <div className="badge badge-lg bg-green-600 hover:bg-green-700  text-white mb-4">
                {event.type}
              </div>

              <h1 className="text-4xl font-bold dark:text-gray-200 text-gray-800 mb-4">
                {event.title}
              </h1>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <CalendarHeart></CalendarHeart>
                  <span className="font-medium ">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <SlLocationPin size={18} />
                  <span className="font-medium">{event.location}</span>
                </div>
              </div>
              <div className="prose max-w-none mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 dark:text-gray-300">
                  About this Event
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap dark:text-gray-300">
                  {event.description}
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-300">
                <span>Created by:</span>
                <span className="font-medium text-green-700 dark:text-green-500">
                  {event.creatorEmail}
                </span>
              </div>
              <div className="flex gap-4 mt-8">
                <button
                  onClick={handleJoinEvent}
                  className={`btn flex-1 transition  text-white             
                    bg-green-600 hover:bg-green-700 cursor-pointer             
                  `}
                >
                  Join
                </button>
                <button className="btn border border-green-600  hover:bg-green-700 flex-1">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
