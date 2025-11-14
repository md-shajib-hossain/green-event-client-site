import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/AuthContext";

const CreateEvent = () => {
  const { user } = use(AuthContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    thumbnail: "",
    location: "",
    date: null,
    creatorEmail: null,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      eventDate: date,
    }));
    if (errors.eventDate) {
      setErrors((prev) => ({ ...prev, eventDate: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.eventType) {
      newErrors.eventType = "Please select an event type";
    }

    if (!formData.thumbnailUrl.trim()) {
      newErrors.thumbnailUrl = "Thumbnail URL is required";
    } else if (!isValidUrl(formData.thumbnailUrl)) {
      newErrors.thumbnailUrl = "Please enter a valid URL";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.eventDate) {
      newErrors.eventDate = "Event date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Event created successfully!");
      setFormData({
        title: "",
        description: "",
        eventType: "",
        thumbnailUrl: "",
        location: "",
        eventDate: null,
        creatorEmail: user.email,
      });
    }

    fetch("https://green-event-server-site.vercel.app/events", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Create New Event
        </h1>
        <p className="text-gray-600 mb-8">
          Fill in the details to create an environmental event
        </p>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Event Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition`}
              placeholder="Enter event title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-3 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none`}
              placeholder="Describe your event"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="eventType"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Event Type *
            </label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.eventType ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition bg-white`}
            >
              <option value="">Select event type</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.eventType && (
              <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="thumbnailUrl"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Thumbnail Image URL *
            </label>
            <input
              type="text"
              id="thumbnailUrl"
              name="thumbnailUrl"
              value={formData.thumbnailUrl}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.thumbnailUrl ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition`}
              placeholder="https://example.com/image.jpg"
            />
            {errors.thumbnailUrl && (
              <p className="text-red-500 text-sm mt-1">{errors.thumbnailUrl}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Location *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.location ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition`}
              placeholder="Enter event location"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="eventDate"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Event Date *
            </label>
            <DatePicker
              selected={formData.eventDate}
              onChange={handleDateChange}
              minDate={new Date()}
              dateFormat="MMMM d, yyyy"
              className={`w-full px-4 py-3 border ${
                errors.eventDate ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition`}
              placeholderText="Select event date"
            />
            {errors.eventDate && (
              <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-green-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateEvent;

//
// import React, { use, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import DatePicker from "react-datepicker";

// const CreateEvent = () => {
//   const { user } = use(AuthContext);
//   //   console.log(user);
//   const [formInfo, setFormInfo] = useState({});

//   const eventTypes = [
//     "Cleanup",
//     "Plantation",
//     "Donation",
//     "Awareness Campaign",
//     "Recycling Drive",
//     "Tree Planting",
//     "Beach Cleanup",
//     "Community Service",
//   ];
//   //
//   const handleDateChange = (date) => {
//     setFormInfo((prev) => ({
//       ...prev,
//       eventDate: date,
//     }));
//   };

//   //
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       title: e.target.title.value,
//       description: e.target.description.value,
//       type: e.target.eventType.value,
//       thumbnail: e.target.thumbnailUrl.value,
//       location: e.target.location.value,
//       date: e.target.date.value,
//       creatorEmail: user.email,
//     };
//     fetch("https://green-event-server-site.vercel.app/events", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     setFormInfo(formData);

//     console.log(formInfo);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
//       <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">
//           Create New Event
//         </h1>
//         <p className="text-gray-600 mb-8">
//           Fill in the details to create an environmental event
//         </p>

//         <div className="space-y-6">
//           <div>
//             <label
//               htmlFor="title"
//               className="block text-sm font-semibold text-gray-700 mb-2"
//             >
//               Event Title *
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               className={`w-full px-4 py-3 border

//                    rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition`}
//               placeholder="Enter event title"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="description"
//               className="block text-sm font-semibold text-gray-700 mb-2"
//             >
//               Description *
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               //   value={formData.description}
//               //   onChange={handleChange}
//               rows="4"
//               className={`w-full px-4 py-3 border
//                      border-gray-300
//                    rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none`}
//               placeholder="Describe your event"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="eventType"
//               className="block text-sm font-semibold text-gray-700 mb-2"
//             >
//               Event Type *
//             </label>
//             <select
//               id="eventType"
//               name="eventType"
//               className={`w-full px-4 py-3 border  border-gray-300
//                rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition bg-white`}
//             >
//               <option value="">Select event type</option>
//               {eventTypes.map((type) => (
//                 <option key={type} value={type}>
//                   {type}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label
//               htmlFor="thumbnailUrl"
//               className="block text-sm font-semibold text-gray-700 mb-2"
//             >
//               Thumbnail Image URL *
//             </label>
//             <input
//               type="text"
//               id="thumbnailUrl"
//               name="thumbnailUrl"
//               className={`w-full px-4 py-3 border border-gray-300
//               } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition`}
//               placeholder="https://example.com/image.jpg"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="location"
//               className="block text-sm font-semibold text-gray-700 mb-2"
//             >
//               Location *
//             </label>
//             <input
//               type="text"
//               id="location"
//               name="location"
//               className={`w-full px-4 py-3 border border-gray-300
//               } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition`}
//               placeholder="Enter event location"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="eventDate"
//               className="block text-sm font-semibold text-gray-700 mb-2"
//             >
//               Event Date *
//             </label>
//             <DatePicker
//               selected={formInfo.eventDate}
//               onChange={handleDateChange}
//               minDate={new Date()}
//               dateFormat="MMMM d, yyyy"
//               className={`w-full px-4 py-3 border border-gray-300
//                            rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition`}
//               placeholderText="Select event date"
//             />
//           </div>

//           <button
//             onClick={handleSubmit}
//             className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-green-700 transition duration-300 shadow-lg hover:shadow-xl"
//           >
//             Create Event
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateEvent;
