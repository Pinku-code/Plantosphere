// --- FILE: src/pages/Services.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react"; // Optional: Replace with custom SVG

const services = [
  {
    title: "Urban Gardening",
    description:
      "Designing and maintaining sustainable kitchen gardens in urban spaces.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "Includes training, soil testing, and native plant selection services tailored for homes and communities.",
  },
  {
    title: "Organic Products",
    description:
      "Access to curated organic supplies for home, farm, and lifestyle.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "Get soil enhancers, fertilizers, pest repellents, and health boosters certified for organic standards.",
  },
  {
    title: "Kitchen Garden Design",
    description:
      "Custom urban/rural gardens, including vertical and hydroponic systems.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "From terrace gardens to hydroponics, we tailor installations and guide you in growing your own organic food.",
  },
  {
    title: "Landscaping & Urban Greening",
    description: "Sustainable designs for homes, offices, and public spaces.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "We blend aesthetics with sustainability for lawns, vertical walls, parks, and commercial properties.",
  },
  {
    title: "Agri-Tourism",
    description:
      "Farm tours and hands-on workshops showcasing sustainable practices and local culture.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "Host or attend farm stays, food trails, and cultivation workshops that foster eco-awareness.",
  },
  {
    title: "Agri Input Supply",
    description:
      "Providing seeds, organic fertilizers, and bio-pesticides to promote healthy farming.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "We ensure quality-certified input supply chains to smallholder farmers and urban growers alike.",
  },
  {
    title: "Food Processing Consulting",
    description:
      "Expertise in drying, preservation, and sustainable packaging techniques.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "Our experts guide your value-addition journey from raw produce to market-ready packaged goods.",
  },
  {
    title: "Bulk Raw Material Supply",
    description:
      "Supply of jute, maize, chilies, and spices for domestic/export markets.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "Sourcing and logistics support for certified, traceable raw materials in bulk.",
  },
  {
    title: "Export-Import Advisory",
    description:
      "Support with FSSAI/APEDA certifications, logistics, and global market access.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "We help agri-entrepreneurs navigate licenses, connect with overseas buyers, and scale.",
  },
  {
    title: "Renewable Energy Solutions",
    description:
      "Solar-powered tools and irrigation systems for sustainable agriculture.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "Deploy solar pumps, bio-digesters, and smart energy tools for off-grid farming.",
  },
  {
    title: "Sustainable Packaging Consulting",
    description:
      "Eco-friendly and biodegradable packaging solutions for food products.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "Transition from plastic to compostable packs with our design and sourcing partners.",
  },
  {
    title: "Government Project Consultancy",
    description:
      "Support for agriculture and food sector grants and government-backed initiatives.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "We draft DPRs, coordinate schemes (PMFME, MIDH, FPO), and ensure compliance.",
  },
  {
    title: "Event & Workshop Planning",
    description:
      "Organizing agri summits, hands-on trainings, and sustainability conferences.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "Full-cycle event management from concept to execution for eco-events and learning hubs.",
  },
  {
    title: "Custom Reports & Research",
    description:
      "Agro-climatic studies, feasibility reports, and market insights for data-driven planning.",
    image: "../../src/assets/AppleJuice.jpg",
    moreInfo:
      "We generate reliable reports for banks, policymakers, and agribusinesses.",
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState(null);
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-7xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-700 dark:text-green-500 mb-2">
          End-to-End Agri-Food & Sustainability Solutions
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-200 mb-12">
          From farm to market, we drive growth with innovative services.
        </p>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {services.map(({ title, description, image, moreInfo }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white dark:bg-gray-900 border-l-4 border-green-600 dark:border-green-500 p-6 rounded-2xl shadow-lg hover:shadow-green-400 transition duration-300 overflow-hidden"
            >
              {/* Leafy Image */}
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-md mb-4 shadow-md"
              />

              {/* Title */}
              <motion.h3
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-xl font-bold text-green-800 dark:text-green-400 mb-2 flex items-center gap-2"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <Leaf className="w-5 h-5 text-green-600 dark:text-green-400" />
                </motion.span>
                {title}
              </motion.h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-2">
                {description}
              </p>

              {/* More Info Toggle */}
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="text-green-700 dark:text-green-400 text-sm underline hover:text-green-900 dark:hover:text-lime-100 mb-2"
              >
                {expanded === i ? "Hide Details" : "View More"}
              </button>

              {/* Expanded Info */}
              {expanded === i && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-600 dark:text-gray-300 text-sm mt-2"
                >
                  {moreInfo}
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Floating WhatsApp Icon */}
          <a
            href="https://wa.me/919905016380" // Replace with your actual number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300"
            aria-label="Chat with us on WhatsApp"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M16 0C7.2 0 .1 7.1.1 15.9c0 3.2.9 6.1 2.5 8.7L0 32l7.7-2.5c2.5 1.3 5.3 2.1 8.3 2.1 8.8 0 15.9-7.1 15.9-16C32 7.1 24.9 0 16 0zm0 29.1c-2.5 0-4.8-.7-6.8-1.8l-.5-.3-4.6 1.5 1.5-4.5-.3-.5c-1.3-2-2-4.3-2-6.6C3.3 8.2 8.9 2.6 16 2.6c7.1 0 12.7 5.6 12.7 12.6 0 7-5.6 12.6-12.7 12.6zm7.1-9.5c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.7-.2-1 .2s-1.1 1.2-1.3 1.4c-.2.2-.5.2-.9 0s-1.7-.6-3.2-2c-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.8.2-.3.1-.6 0-.9-.1-.3-1-2.4-1.3-3.2-.3-.8-.6-.7-.8-.7h-.7c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 3c0 1.8 1.2 3.5 1.4 3.7.2.2 2.4 3.7 5.8 5.1 3.4 1.4 3.4.9 4 .9.6 0 2-1 2.2-1.5.2-.5.2-1 .1-1.1 0-.1-.4-.2-.8-.4z" />
            </svg>

          </a>
          
        </div>
      </section>
      <Footer />
    </>
  );
}
