// --- FILE: src/pages/Services.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    title: "Food Processing",
    description: "We provide expertise and support in setting up small and medium-scale food processing units."
  },
  {
    title: "Product Prototyping",
    description: "Helping entrepreneurs test and develop new food products with the right ingredients, packaging, and shelf-life."
  },
  {
    title: "Branding & Packaging Solutions",
    description: "Design services, labeling, and eco-friendly packaging solutions that elevate your product identity."
  },
  {
    title: "Agri-Consultancy",
    description: "Expert advice on crop planning, organic farming, sustainable agriculture practices, and policy compliance."
  },
  {
    title: "Market Linkages",
    description: "Connecting producers with distributors, retail chains, and online platforms to expand reach."
  },
  {
    title: "Export Guidance",
    description: "Advisory on regulatory compliance, export documentation, and market access strategies."
  },
  {
    title: "Seed Production Support",
    description: "Support in certified seed multiplication, storage, and distribution."
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-7xl mx-auto mt-14">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {services.map(({ title, description }, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-green-700">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
