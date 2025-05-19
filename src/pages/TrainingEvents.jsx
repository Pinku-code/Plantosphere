// --- FILE: src/pages/TrainingEvents.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";

const upcoming = [
  {
    title: "Food Processing Basics",
    date: "June 15, 2025",
    location: "Lucknow, Uttar Pradesh",
    register: "#"
  },
  {
    title: "Agri Business Bootcamp",
    date: "July 5, 2025",
    location: "Online Webinar",
    register: "#"
  },
];

const past = [
  {
    title: "Farm to Market Workshop",
    image: "/images/event1.jpg",
    feedback: "Very informative session with live demos."
  },
  {
    title: "Spice Export Seminar",
    image: "/images/event2.jpg",
    feedback: "Excellent speakers and networking."
  }
];

export default function TrainingEvents() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-7xl mx-auto mt-14">
        <h2 className="text-3xl font-bold text-center mb-10">Training & Events</h2>

        {/* Upcoming Trainings */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Upcoming Trainings</h3>
          <div className="space-y-6">
            {upcoming.map(({ title, date, location, register }, i) => (
              <div key={i} className="border p-6 rounded-lg shadow flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <h4 className="text-xl font-bold mb-1">{title}</h4>
                  <p className="text-sm text-gray-600">{date} | {location}</p>
                </div>
                <a href={register} className="mt-4 md:mt-0 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Register</a>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Past Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {past.map(({ title, image, feedback }, i) => (
              <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
                <img src={image} alt={title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">{title}</h4>
                  <p className="text-sm text-gray-700 italic">"{feedback}"</p>
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
