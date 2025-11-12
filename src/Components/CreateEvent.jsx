import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

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

export default function CreateEvent() {
  const { user } = use(AuthContext);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
    if (errors.date) setErrors((prev) => ({ ...prev, date: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.type) newErrors.type = "Please select an event type";
    if (!formData.thumbnail.trim())
      newErrors.thumbnail = "Thumbnail URL is required";
    else if (
      !/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(formData.thumbnail)
    )
      newErrors.thumbnail = "Valid image URL required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.date) newErrors.date = "Event date is required";
    else if (formData.date < new Date().setHours(0, 0, 0, 0))
      newErrors.date = "Date must be in the future";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const payload = {
      ...formData,
      date: formData.date.toISOString(),
      creatorEmail: user?.email || "anonymous@example.com",
    };

    console.log("Sending to backend:", payload); // ডিবাগ

    try {
      const res = await fetch(`http://localhost:3000/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Event created successfully!");
        setFormData({
          title: "",
          description: "",
          type: "",
          thumbnail: "",
          location: "",
          date: null,
        });
      } else {
        toast.error(data.message || "Failed to create event");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Create New Event
        </h1>
        <p className="text-gray-600 mb-2">
          Fill in the details to create an environmental event
        </p>
        <p className="text-gray-600 mb-8 italic">
          This event will be created by:{" "}
          <span className="font-semibold text-green-700"> {user.email} </span>
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

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl"
            }`}
          >
            {loading ? "Creating..." : "Create Event"}
          </button>
        </form>
      </div>
    </div>
  );
}
