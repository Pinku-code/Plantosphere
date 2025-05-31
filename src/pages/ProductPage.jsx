import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center mt-20">Product not found.</div>;
  }

  return (
    <>
      <Header />
      <Helmet>
        <title>{product.name} | Plantosphere</title>
      </Helmet>
      <section className="py-16 px-6 max-w-4xl mx-auto mt-14">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded"
          />
          <div>
            <h2 className="text-3xl font-bold text-green-800">{product.name}</h2>
            <p className="text-green-600 font-semibold text-xl mb-2">
              {product.price}
            </p>
            <p className="text-sm mb-1">
              <strong>Ingredients:</strong> {product.ingredients}
            </p>
            <p className="text-sm mb-1">
              <strong>Benefits:</strong> {product.benefits}
            </p>
            <p className="text-sm mb-4">
              <strong>Packaging:</strong> {product.packaging}
            </p>
            <button
              className="snipcart-add-item w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              data-item-id={product.id.toString()}
              data-item-name={product.name}
              data-item-price={product.price}
              data-item-url={`https://plantosphere.vercel.app/`}
              data-item-description={product.benefits}
              data-item-image={product.image}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
