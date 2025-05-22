import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "Kitchen Garden Project, Kolkata",
      outcome: "Designed 20 urban gardens, boosting food security.",
      image: "/images/kitchen-garden.jpg",
      quote: "“Now I grow my own vegetables at home — it’s empowering!” – Local Resident",
    },
    {
      title: "SHG Training, Nadia",
      outcome: "Empowered 50 women, increasing income by 30%.",
      image: "/images/shg-training.jpg",
      quote: "“This training helped me launch my food product line.” – SHG Member",
    },
    {
      title: "Solar Irrigation, Purulia",
      outcome: "Supported 15 farmers, reducing costs by 40%.",
      image: "/images/solar-irrigation.jpg",
      quote: "“We now save on electricity and grow more crops.” – Local Farmer",
    },
  ];

  return (
    <>
    <Header />
    <div className="bg-white text-gray-800 mt-14">
      {/* Header */}
      <div className="bg-white py-12 text-center">
        <h1 className="text-4xl font-bold text-green-800">Case Studies</h1>
        <p className="text-lg mt-2 text-green-700">
          Transforming Lives, One Project at a Time
        </p>
      </div>

      {/* Case Studies */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800">{study.title}</h3>
                <p className="mt-2 text-gray-700">{study.outcome}</p>
                <blockquote className="mt-4 italic text-green-600 text-sm border-l-4 pl-4 border-green-500">
                  {study.quote}
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 text-center">
          <a
            href="/case-studies/all"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 mr-4"
          >
            View All Case Studies
          </a>
          <a
            href="/collaborate"
            className="inline-block bg-white text-green-700 border border-green-600 px-6 py-3 rounded hover:bg-green-50"
          >
            Partner with Us
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CaseStudiesPage;
