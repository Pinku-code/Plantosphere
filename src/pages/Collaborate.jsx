import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const CollaboratePage = () => {
  return (
    <>
    <Header />
    <div className="bg-white text-gray-800 mt-14">
      {/* Header */}
      <div className="bg-white py-12 text-center">
        <h1 className="text-4xl font-bold text-green-800">Collaborate with Us</h1>
        <p className="text-lg mt-2 text-green-700">
          Partner for a Sustainable Future
        </p>
      </div>

      {/* Opportunities */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">
          Collaboration Opportunities
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-green-700">Carbon Credit Consulting</h3>
            <p className="text-gray-700">
              Help farmers and businesses monetize sustainable practices through carbon markets, including certification and market access.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-green-700">Academia</h3>
            <p className="text-gray-700">
              Engage in research, internships, and curriculum design with our team of experts and collaborators like ICAR-CISH and IIT Kharagpur.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-green-700">NGOs / FPOs</h3>
            <p className="text-gray-700">
              Collaborate on training programs, field outreach, and agri-based livelihood projects.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-green-700">Businesses</h3>
            <p className="text-gray-700">
              Partner with us for bulk agri supply, export consulting, sustainable packaging, and project implementation.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-green-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">How to Collaborate</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Submit your proposal through our online form. We’ll review it within 7 working days and reach out for the next steps.
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
        <p className="text-lg text-gray-800 mb-6">
          Have an idea or initiative in mind? Let’s innovate and grow together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white border border-green-700 text-green-700 px-6 py-3 rounded hover:bg-green-50"
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
