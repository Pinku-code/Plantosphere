// 








// --- FILE: src/pages/Products.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppleJuice from "../assets/AppleJuice.jpg";
import Atta from "../assets/Atta.jpg";
import Tea from "../assets/DarjlingTea.jpg";
import Turmeric from "../assets/Turmeric.jpg";
import Chili from "../assets/Chilli.jpg";

const products = [
  {
    name: "Ice Apple Juice",
    category: "Food Products",
    price: "₹120",
    image: AppleJuice,
    ingredients: "Ice Apple, Lemon, Cane Sugar",
    benefits: "Hydrating, Rich in nutrients",
    packaging: "250ml glass bottle",
  },
  {
    name: "Multigrain Atta",
    category: "Food Products",
    price: "₹90",
    image: Atta,
    ingredients: "Wheat, Jowar, Bajra, Ragi, Barley",
    benefits: "High in fiber, Good for digestion",
    packaging: "1kg eco-pack",
  },
  {
    name: "Darjeeling Tea",
    category: "Tea",
    price: "₹200",
    image: Tea,
    ingredients: "Darjeeling loose-leaf",
    benefits: "Antioxidant-rich, Refreshing",
    packaging: "100g pouch",
  },
  {
    name: "Organic Turmeric",
    category: "Spices",
    price: "₹60",
    image: Turmeric,
    ingredients: "Dried turmeric root",
    benefits: "Anti-inflammatory, Immunity booster",
    packaging: "200g packet",
  },
  {
    name: "Chili Powder",
    category: "Spices",
    price: "₹50",
    image: Chili,
    ingredients: "Sun-dried red chili",
    benefits: "Spicy, Adds flavor",
    packaging: "100g packet",
  },
];

export default function Products() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-7xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-2">
          Sustainable, Healthy, and Innovative
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Shop our agri-food, wellness, and gardening products online.
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-4  border-green-100"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <div className="mt-4">
                <h3 className="font-bold text-xl text-green-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <p className="text-green-700 font-semibold">{product.price}</p>
                <p className="text-sm mt-2">
                  <strong>Ingredients:</strong> {product.ingredients}
                </p>
                <p className="text-sm">
                  <strong>Benefits:</strong> {product.benefits}
                </p>
                <p className="text-sm mb-2">
                  <strong>Packaging:</strong> {product.packaging}
                </p>
                <button className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
