import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Marquee } from "../components/magicui/marquee";
import logo from "../assets/sitelogo.png";
import logo1 from "../assets/discover.png";
import logo2 from "../assets/conversation.png";
import logo3 from "../assets/processed-food.png";
import logo4 from "../assets/CISH.png";
const collaborators = [
  { src: logo, alt: "ICAR" },
  { src: logo1, alt: "IIT" },
  { src: logo2, alt: "Partner 1" },
  { src: logo3, alt: "Partner 2" },
  { src: logo4, alt: "Partner 3" },
];

const CollaboratePage = () => {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-800 dark:bg-black dark:text-gray-200 mt-14">
        {/* Header */}
        <div className="bg-white dark:bg-black flex flex-col justify-center items-center py-12 text-center">
          <h1 className="text-4xl font-bold text-green-800 dark:text-green-500">
            Collaborate with Us
          </h1>
          <p className="text-lg mt-2 text-green-700 dark:text-gray-200">
            Partner for a Sustainable Future
          </p>

          <div className="relative mt-4 bg-green-50 dark:bg-gray-900 py-6 md:py-4 rounded-xl px-4">
            <div className="w-full max-w-full md:max-w-4xl mx-auto overflow-hidden rounded-lg">
              <Marquee pauseOnHover className="[--duration:17s]">
                <div className="flex items-center gap-8 md:gap-12 px-2">
                  {collaborators.map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-13 md:h-16 lg:h-20 object-contain hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
              </Marquee>
            </div>
          </div>


        </div>

        {/* Opportunities */}
        <div className="max-w-5xl mx-auto px-6 py-4">
          <h2 className="text-2xl font-semibold text-green-800 dark:text-green-600 mb-6 text-center">
            Collaboration Opportunities
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Carbon Credit Consulting",
                desc: "Help farmers and businesses monetize sustainable practices through carbon markets, including certification and market access.",
              },
              {
                title: "Academia",
                desc: "Engage in research, internships, and curriculum design with our team of experts and collaborators like ICAR-CISH and IIT Kharagpur.",
              },
              {
                title: "NGOs / FPOs",
                desc: "Collaborate on training programs, field outreach, and agri-based livelihood projects.",
              },
              {
                title: "Businesses",
                desc: "Partner with us for bulk agri supply, export consulting, sustainable packaging, and project implementation.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-bold text-green-700">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-green-50 dark:bg-gray-900 py-12 px-6 text-center">
          <h2 className="text-2xl font-semibold text-green-800 dark:text-green-500 mb-4">
            How to Collaborate
          </h2>
          <p className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            Submit your proposal through our online form. We’ll review it within
            7 working days and reach out for the next steps.
          </p>
          <a
            href="/collaborate/form"
            className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800"
          >
            Submit Proposal
          </a>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center py-12 px-6">
          <p className="text-lg text-gray-800 dark:text-green-600 mb-6">
            Have an idea or initiative in mind? Let’s innovate and grow
            together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 border border-green-700 text-md font-bold text-white px-6 py-3 rounded hover:bg-green-50"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollaboratePage;
