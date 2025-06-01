// --- FILE: src/pages/Contact.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-3xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-700 dark:text-green-500 mb-2">
          Let’s Grow Together
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-200 mb-10">
          Reach out for inquiries or partnerships.
        </p>

        <form className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number</label>
            <input
              type="tel"
              placeholder="+91-XXXXXXXXXX"
              className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Inquiry Type</label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="">Select...</option>
              <option>Services</option>
              <option>Products</option>
              <option>Journal</option>
              <option>Training</option>
              <option>Collaboration</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            ></textarea>
          </div>

          {/* CAPTCHA placeholder */}
          <div className="flex items-center">
            <input type="checkbox" required className="mr-2" />
            <label className="text-sm text-gray-600 dark:text-gray-200">I'm not a robot (CAPTCHA)</label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="text-center mt-10 text-gray-600 dark:text-gray-200 text-sm space-y-2">
          <p>
            Or email us directly at{" "}
            <a
              href="mailto:connect@plantosphere.in"
              className="text-green-700 font-medium hover:underline"
            >
              connect@plantosphere.in
            </a>
          </p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Address: [City], West Bengal, India</p>
          <p>CIN: [Insert CIN]</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
