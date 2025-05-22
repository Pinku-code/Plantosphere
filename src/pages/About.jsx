// // --- FILE: src/pages/About.jsx ---
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// export default function About() {
//   return (
//     <>
//       <Header />
//       <section className="py-16 px-6 max-w-6xl mx-auto mt-14">
//         <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           Plantosphere is a forward-thinking agri-tech company focused on transforming the food and agriculture ecosystem through innovation, sustainability, and farmer empowerment. We started with the mission to bridge gaps in food processing, consultancy, and market access for small and medium agribusinesses.
//         </p>
//         <div className="mt-12">
//           <h3 className="text-2xl font-semibold mb-4">Mission</h3>
//           <p className="text-gray-700 mb-6">To empower farmers and entrepreneurs with cutting-edge food processing, training, and consultancy solutions that ensure growth and sustainability.</p>

//           <h3 className="text-2xl font-semibold mb-4">Vision</h3>
//           <p className="text-gray-700 mb-6">To be the most trusted partner in India's agri-value chain, building a future where innovation meets tradition.</p>

//           <h3 className="text-2xl font-semibold mb-4">Objectives</h3>
//           <ul className="list-disc list-inside text-gray-700">
//             <li>Offer expert agri-consultancy services across India</li>
//             <li>Provide training and capacity building programs</li>
//             <li>Develop innovative food products and prototypes</li>
//             <li>Establish market linkages and export pathways</li>
//           </ul>
//         </div>

//         <div className="mt-16">
//           <h3 className="text-2xl font-semibold mb-4">Our Journey</h3>
//           <ul className="space-y-4 border-l-2 border-green-600 pl-4">
//             <li>
//               <p className="font-medium">2021 - Foundation of Plantosphere</p>
//               <p className="text-sm text-gray-600">Initiated with the goal of bridging gaps in food processing support and market access.</p>
//             </li>
//             <li>
//               <p className="font-medium">2022 - First Product Line Launch</p>
//               <p className="text-sm text-gray-600">Launched Ice Apple Juice and turmeric-based health products.</p>
//             </li>
//             <li>
//               <p className="font-medium">2023 - Training Division Established</p>
//               <p className="text-sm text-gray-600">Introduced hands-on workshops and agri-entrepreneur programs.</p>
//             </li>
//           </ul>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }














// --- FILE: src/pages/About.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-6xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
          Pioneering Sustainable Agri-Food Systems
        </h2>
        <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Plantosphere Pvt. Ltd. blends innovation and community empowerment.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-2">Overview</h3>
            <p className="text-gray-700 leading-relaxed">
              Plantosphere Private Limited is a registered agribusiness startup revolutionizing India’s agriculture and food processing sectors. We combine innovation, research, and community engagement to deliver sustainable solutions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-2">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Empower farmers, entrepreneurs, and communities through technology, knowledge, and market access.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-2">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              A sustainable agri-food ecosystem driven by innovation and inclusivity.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Core Domains</h3>
            <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li>Food Processing & Value Addition</li>
              <li>Sustainable Agriculture & Kitchen Garden Design</li>
              <li>Landscaping & Urban Greening</li>
              <li>Renewable Energy Solutions</li>
              <li>Sustainable Packaging & Health Supplements</li>
              <li>E-Commerce for Kitchen Garden Kits & Organic Products</li>
              <li>Carbon Credit Consulting</li>
              <li>Agri-Tourism (Farm Tours & Workshops)</li>
              <li>Research & Journal Publication</li>
              <li>Vocational Training & Online Certifications</li>
              <li>Export-Import & Bulk Raw Material Supply</li>
              <li>Government Project Consultancy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-2">Incubation Note</h3>
            <p className="text-gray-700">
              Plantosphere collaborates with incubators like ICAR-CISH and IIT Kharagpur for R&D and funding but is not an incubator itself.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Journey</h3>
            <ul className="space-y-4 border-l-2 border-green-600 pl-4">
              <li>
                <p className="font-medium text-green-900">2021 - Foundation of Plantosphere</p>
                <p className="text-sm text-gray-600">
                  Initiated with the goal of bridging gaps in food processing support and market access.
                </p>
              </li>
              <li>
                <p className="font-medium text-green-900">2022 - First Product Line Launch</p>
                <p className="text-sm text-gray-600">
                  Launched Ice Apple Juice and turmeric-based health products.
                </p>
              </li>
              <li>
                <p className="font-medium text-green-900">2023 - Training Division Established</p>
                <p className="text-sm text-gray-600">
                  Introduced hands-on workshops and agri-entrepreneur programs.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
