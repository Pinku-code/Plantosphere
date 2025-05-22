// 









// --- FILE: src/pages/Services.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    title: "Kitchen Garden Design",
    description: "Custom urban/rural gardens, including vertical and hydroponic systems.",
  },
  {
    title: "Landscaping & Urban Greening",
    description: "Sustainable designs for homes, offices, and public spaces.",
  },
  {
    title: "Agri-Tourism",
    description: "Farm tours and hands-on workshops showcasing sustainable practices and local culture.",
  },
  {
    title: "Agri Input Supply",
    description: "Providing seeds, organic fertilizers, and bio-pesticides to promote healthy farming.",
  },
  {
    title: "Food Processing Consulting",
    description: "Expertise in drying, preservation, and sustainable packaging techniques.",
  },
  {
    title: "Bulk Raw Material Supply",
    description: "Supply of jute, maize, chilies, and spices for domestic/export markets.",
  },
  {
    title: "Export-Import Advisory",
    description: "Support with FSSAI/APEDA certifications, logistics, and global market access.",
  },
  {
    title: "Renewable Energy Solutions",
    description: "Solar-powered tools and irrigation systems for sustainable agriculture.",
  },
  {
    title: "Sustainable Packaging Consulting",
    description: "Eco-friendly and biodegradable packaging solutions for food products.",
  },
  {
    title: "Government Project Consultancy",
    description: "Support for agriculture and food sector grants and government-backed initiatives.",
  },
  {
    title: "Event & Workshop Planning",
    description: "Organizing agri summits, hands-on trainings, and sustainability conferences.",
  },
  {
    title: "Custom Reports & Research",
    description: "Agro-climatic studies, feasibility reports, and market insights for data-driven planning.",
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-7xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-2">
          End-to-End Agri-Food & Sustainability Solutions
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          From farm to market, we drive growth with innovative services.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {services.map(({ title, description }, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl border-l-4 border-green-600 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-800">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
