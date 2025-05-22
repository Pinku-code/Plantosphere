import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const JournalPage = () => {
  return (
    <>
    <Header />
    <div className="bg-white text-gray-800 mt-14">
      {/* Header */}
      <div className="bg-white py-12 text-center">
        <h1 className="text-4xl font-bold text-green-800">
          Plantosphere Journal of Agri-Food Innovation
        </h1>
        <p className="text-lg mt-2 text-green-700">
          A peer-reviewed platform for cutting-edge research.
        </p>
      </div>

      {/* Featured Article */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-900">Featured Article</h2>
        <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col md:flex-row items-start gap-6">
          <img
            src="/images/solar-drying.jpg"
            alt="Solar Drying"
            className="w-full md:w-1/3 rounded-md"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-green-800">
              Solar Drying Techniques for Rural Farmers
            </h3>
            <p className="mt-2 text-gray-700">
              Learn how solar drying boosts farmer incomes in rural Bengal by
              preserving produce and reducing waste.
            </p>
            <a
              href="/journal/articles/solar-drying.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Read Full Article
            </a>
          </div>
        </div>
      </div>

      {/* Submission Section */}
      <div className="bg-green-50 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Submit Your Research</h2>
        <p className="text-gray-700 mb-4">
          Submit your article (1,500–2,500 words) in PDF or Word format to be reviewed by our expert editorial board.
        </p>
        <a
          href="/submit"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800"
        >
          Submit Now
        </a>
        <p className="mt-3 text-sm text-green-700 italic">Win ₹5,000 for the best article!</p>
      </div>

      {/* Archive */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-900">Archives</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-green-700">January 2025 Issue</h3>
            <p className="text-sm text-gray-600 mt-1">Includes 5 peer-reviewed articles on agri-entrepreneurship and sustainable farming.</p>
            <a
              href="/journal/issues/january-2025.pdf"
              className="inline-block mt-3 text-green-600 font-medium hover:underline"
            >
              View PDF
            </a>
          </div>
          {/* Add more archive cards here */}
        </div>
      </div>

      {/* Editorial Board */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Editorial Board</h2>
          <p className="text-gray-700 mb-2">
            <strong>Chief Editor:</strong> Ozair Alam
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Associate Editors:</strong> Dr. [Name] (ICAR Scientist), Prof. [Name] (Food Tech Expert)
          </p>
          <p className="text-gray-700">
            <strong>Review Committee:</strong> Experts in agriculture, sustainability, food tech.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default JournalPage;
