// src/pages/Products.jsx
import { Link } from "react-router-dom"; // or from 'next/link' in Next.js
import products from "../data/products";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Products() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-7xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-2">
          Sustainable, Healthy, and Innovative
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-100 mb-12">
          Shop our agri-food, wellness, and gardening products online.
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {products.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-4 border-green-100"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <div className="mt-4">
                <h3 className="font-bold text-xl text-green-800 dark:text-green-600">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-200 mb-1">{product.category}</p>
                <p className="text-green-700 dark:text-green-500 font-semibold">{product.price}</p>
                <p className="text-sm mt-2">
                  <strong>Packaging:</strong> {product.packaging}
                </p>
                <button className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
