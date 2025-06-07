// --- FILE: src/pages/TrainingEvents.jsx ---
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FarmImage from "../assets/Farm.jpg";
import SpiceImage from "../assets/Farm.jpg";
import TrainingImage from "../assets/Farm.jpg";

const allUpcoming = [
  {
    title: "Kitchen Garden Design",
    duration: "1 Week",
    format: "Hybrid",
    date: "June 5, 2025",
    location: "Kolkata, West Bengal",
    register: "#",
    pdf: "#"
  },
  {
    title: "Food Processing Basics",
    duration: "2 Weeks",
    format: "Hybrid",
    date: "July 5, 2025",
    location: "Lucknow, Uttar Pradesh",
    register: "#",
    pdf: "#"
  },
  {
    title: "Agri Export Essentials",
    duration: "3 Days",
    format: "Online",
    date: "August 1, 2025",
    location: "Zoom",
    register: "#",
    pdf: "#"
  }
];

const past = [
  {
    title: "Farm to Market Workshop",
    image: FarmImage,
    feedback: "This training has concluded. Registration time is over."
  },
  {
    title: "Spice Export Seminar",
    image: SpiceImage,
    feedback: "This training has concluded. Registration time is over."
  }
];

export default function TrainingEvents() {
  const [upcoming, setUpcoming] = useState([]);
  const [newPast, setNewPast] = useState(past);

  useEffect(() => {
    const now = new Date();
    const stillOpen = [];
    const newlyPast = [...past];

    allUpcoming.forEach(event => {
      const eventDate = new Date(event.date);
      if (eventDate > now) {
        stillOpen.push(event);
      } else {
        newlyPast.push({
          title: event.title,
          image: TrainingImage,
          feedback: "This training has concluded. Registration time is over."
        });
      }
    });

    setUpcoming(stillOpen);
    setNewPast(newlyPast);
  }, []);

  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-7xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-700 dark:text-green-600 mb-2">
          Build Skills for a Sustainable Tomorrow
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-200 mb-12">
          Affordable, practical programs in agriculture and sustainability.
        </p>

        {/* Upcoming Trainings */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-6">Upcoming Trainings</h3>
          <div className="space-y-6">
            {upcoming.map(({ title, duration, format, date, location, register, pdf }, i) => (
              <div
                key={i}
                className="border border-green-200 bg-green-50 hover:shadow-xl transition-all duration-300 p-6 rounded-lg dark:bg-gray-900 shadow flex flex-col md:flex-row justify-between md:items-center hover:scale-[1.01] hover:border-green-400"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <img
                    src={TrainingImage}
                    alt={title}
                    className=" w-full sm:w-32 h-24 object-cover md:object-contain rounded-md shadow-md hover:shadow-lg transition duration-300"
                  />
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-green-800 dark:text-green-500 transition-colors">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {duration} | {format}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {date} | {location}
                    </p>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex gap-2">
                  <a
                    href={register}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-transform hover:scale-105"
                  >
                    Register
                  </a>
                  <a
                    href={pdf}
                    download
                    className="bg-white border border-green-600 text-green-700 px-4 py-2 rounded hover:bg-green-100 dark:bg-gray-800 dark:text-white transition-transform hover:scale-105"
                  >
                    PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Past Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newPast.map(({ title, image, feedback }, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <img src={image} alt={title} className="w-full h-40 sm:h-56 object-cover transition-transform hover:scale-105 duration-300" />
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2 text-green-800 dark:text-green-600">{title}</h4>
                  <p className="text-sm text-red-500 dark:text-red-500 italic animate-fadeInOut">{feedback}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

// TailwindCSS custom animation (add to your global CSS if not using already)
// 
