import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Separator } from "../components/ui/separator";

const JournalPage = () => {
  return (
    <>
    <Header />
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-300 mt-14">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 dark:text-gray-300 py-12 text-center">
        <h1 className="text-4xl font-bold text-green-800 dark:text-green-600">
          Plantosphere Journal of Agri-Food Innovation
        </h1>
        
        <p className="text-lg mt-2 text-green-700 dark:text-gray-300">
          A peer-reviewed platform for cutting-edge research.
        </p>
      </div>

      <Separator/>

      {/* Featured Article */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-600">Featured Article</h2>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col md:flex-row items-start gap-6">
          <img
            src="/images/solar-drying.jpg"
            alt="Solar Drying"
            className="w-full md:w-1/3 rounded-md"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-500">
              Solar Drying Techniques for Rural Farmers
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
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
<Separator/>
      {/* Submission Section */}
      <div className="bg-green-50 dark:bg-gray-800 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-green-800 dark:text-green-500 mb-4">Submit Your Research</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
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
<Separator/>
      {/* Archive */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-500">Archives</h2>
        <div className="grid md:grid-cols-2 gap-6 ">
          <div className="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-green-700 dark:text-green-500">January 2025 Issue</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Includes 5 peer-reviewed articles on agri-entrepreneurship and sustainable farming.</p>
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
      <Separator/>
      {/* Editorial Board */}
      <div className="bg-gray-100 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-green-900 dark:text-green-500 mb-4">Editorial Board</h2>
          <p className="text-gray-700 dark:text-gray-100 mb-2">
            <strong className="text-blue-300">Chief Editor:</strong> Ozair Alam
          </p>
          <p className="text-gray-700 dark:text-gray-100 mb-2">
            <strong className="text-blue-300">Associate Editors:</strong> Dr. [Name] (ICAR Scientist), Prof. [Name] (Food Tech Expert)
          </p>
          <p className="text-gray-700 dark:text-gray-100">
            <strong className="text-blue-300">Review Committee:</strong> Experts in agriculture, sustainability, food tech.
          </p>
        </div>
      </div>
    </div>
    <Separator/>
    <Footer />
    </>
  );
};

export default JournalPage;
