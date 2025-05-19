// --- FILE: src/pages/About.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-6xl mx-auto mt-14">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Plantosphere is a forward-thinking agri-tech company focused on transforming the food and agriculture ecosystem through innovation, sustainability, and farmer empowerment. We started with the mission to bridge gaps in food processing, consultancy, and market access for small and medium agribusinesses.
        </p>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Mission</h3>
          <p className="text-gray-700 mb-6">To empower farmers and entrepreneurs with cutting-edge food processing, training, and consultancy solutions that ensure growth and sustainability.</p>

          <h3 className="text-2xl font-semibold mb-4">Vision</h3>
          <p className="text-gray-700 mb-6">To be the most trusted partner in India's agri-value chain, building a future where innovation meets tradition.</p>

          <h3 className="text-2xl font-semibold mb-4">Objectives</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Offer expert agri-consultancy services across India</li>
            <li>Provide training and capacity building programs</li>
            <li>Develop innovative food products and prototypes</li>
            <li>Establish market linkages and export pathways</li>
          </ul>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">Our Journey</h3>
          <ul className="space-y-4 border-l-2 border-green-600 pl-4">
            <li>
              <p className="font-medium">2021 - Foundation of Plantosphere</p>
              <p className="text-sm text-gray-600">Initiated with the goal of bridging gaps in food processing support and market access.</p>
            </li>
            <li>
              <p className="font-medium">2022 - First Product Line Launch</p>
              <p className="text-sm text-gray-600">Launched Ice Apple Juice and turmeric-based health products.</p>
            </li>
            <li>
              <p className="font-medium">2023 - Training Division Established</p>
              <p className="text-sm text-gray-600">Introduced hands-on workshops and agri-entrepreneur programs.</p>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
