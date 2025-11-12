import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const UpdateEvent = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [myEvents, setMyEvents] = useState({});
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    thumbnail: "",
    location: "",
    date: null,
  });

  const [errors, setErrors] = useState({});

  const eventTypes = [
    "Cleanup",
    "Plantation",
    "Donation",
    "Awareness Campaign",
    "Recycling Drive",
    "Tree Planting",
    "Beach Cleanup",
    "Community Service",
  ];

  // Fetch event data
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`http://localhost:3000/update-event/${id}`);
        const data = await res.json();

        if (res.ok && data.result) {
          const event = data.result;

          setMyEvents(event);

          // Populate form with existing data
          setFormData({
            title: event.title || "",
            description: event.description || "",
            type: event.type || "",
            thumbnail: event.thumbnail || "",
            location: event.location || "",
            date: event.date ? new Date(event.date) : null,
          });
        } else {
          toast.error("Event not found");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        toast.error("Failed to load event");
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
    if (errors.date) setErrors((prev) => ({ ...prev, date: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      date: formData.date ? formData.date.toISOString() : null,
      creatorEmail: user?.email || "anonymous@example.com",
    };

    try {
      const res = await fetch(`http://localhost:3000/events/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Event updated successfully!");
      } else {
        toast.error(data.message || "Failed to update event");
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Update Event</h1>
        <p className="text-gray-600 mb-2">
          Fill in the details to update the event
        </p>
        <p className="text-gray-600 mb-8 italic">
          This event is created by:{" "}
          <span className="font-semibold text-green-700">
            {user?.email || "Loading..."}
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Event Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter event title"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition resize-none ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Describe your event"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description}</p>
            )}
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Event Type <span className="text-red-500">*</span>
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition bg-white ${
                errors.type ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select event type</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.type && (
              <p className="text-red-500 text-xs mt-1">{errors.type}</p>
            )}
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Thumbnail Image URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition ${
                errors.thumbnail ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="https://example.com/image.jpg"
            />
            {errors.thumbnail && (
              <p className="text-red-500 text-xs mt-1">{errors.thumbnail}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition ${
                errors.location ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter event location"
            />
            {errors.location && (
              <p className="text-red-500 text-xs mt-1">{errors.location}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Event Date <span className="text-red-500">*</span>
            </label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              minDate={new Date()}
              showTimeSelect
              timeFormat="h:mm aa"
              timeIntervals={15}
              dateFormat="dd MMM yyyy, h:mm aa"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition ${
                errors.date ? "border-red-500" : "border-gray-300"
              }`}
              placeholderText="Select a future date and time"
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl"
            }`}
          >
            {loading ? "Updating..." : "Update Event"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEvent;
