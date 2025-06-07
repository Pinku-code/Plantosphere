import { useParams } from "react-router-dom";
import products from "../data/products";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product)
    return <p className="text-center text-lg mt-20 text-red-500">Product not found</p>;

  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-6xl mx-auto mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Product Image */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-5">
            <h2 className="text-4xl font-bold text-green-800 dark:text-green-500">
              {product.name}
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-300">{product.category}</p>

            <p className="text-3xl font-semibold text-green-700 dark:text-green-400">
              {product.price}
            </p>

            <p className="text-base text-gray-700 dark:text-gray-200">
              {product.description}
            </p>

            <ul className="text-sm space-y-1 text-gray-800 dark:text-gray-300">
              <li>
                <span className="font-semibold">Ingredients:</span> {product.ingredients}
              </li>
              <li>
                <span className="font-semibold">Benefits:</span> {product.benefits}
              </li>
              <li>
                <span className="font-semibold">Packaging:</span> {product.packaging}
              </li>
            </ul>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md text-lg transition w-full">
                Add to Cart
              </button>

              <a
                href="/products"
                className="text-green-700 dark:text-green-400 text-base font-medium underline text-center hover:text-green-800 transition"
              >
                ← Back to Products
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
