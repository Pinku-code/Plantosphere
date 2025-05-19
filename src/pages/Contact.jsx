// --- FILE: src/pages/Contact.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-3xl mx-auto mt-14">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center mt-10 text-gray-600 text-sm">
          Or email us directly at{" "}
          <a
            href="mailto:contact@plantosphere.org"
            className="text-indigo-600 hover:underline"
          >
            contact@plantosphere.org
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
