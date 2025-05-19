// --- FILE: src/pages/Blog.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";

const articles = [
  {
    title: "Sustainable Farming Techniques for 2025",
    summary: "Explore modern and sustainable practices improving soil health and productivity.",
    author: "Dr. R. Kumar",
    date: "April 10, 2025",
    image: "/images/blog1.jpg",
  },
  {
    title: "Farmer Success: The Mangopreneur of UP",
    summary: "How one farmer scaled mango exports through innovation.",
    author: "Meera Sharma",
    date: "March 21, 2025",
    image: "/images/blog2.jpg",
  },
  {
    title: "Exporting Spices: What You Need to Know",
    summary: "Regulations and tips for taking Indian spices global.",
    author: "Export India",
    date: "February 28, 2025",
    image: "/images/blog3.jpg",
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-7xl mx-auto mt-14">
        <h2 className="text-3xl font-bold text-center mb-12">Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map(({ title, summary, author, date, image }, i) => (
            <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img src={image} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-700 mb-3">{summary}</p>
                <div className="text-xs text-gray-500">By {author} — {date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
