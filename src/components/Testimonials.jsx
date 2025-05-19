export default function Testimonials() {
  const testimonials = [
    { quote: "Amazing support for our farming startup.", author: "S. Patel" },
    { quote: "Helped us scale our food product to market.", author: "M. Iyer" },
  ];
  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-2xl font-semibold mb-10">What Our Clients Say</h3>
      <div className="flex flex-col md:flex-row gap-6 justify-center max-w-5xl mx-auto">
        {testimonials.map(({ quote, author }, i) => (
          <div key={i} className="bg-green-50 p-6 rounded-lg shadow text-left w-full md:w-1/2">
            <p className="italic">"{quote}"</p>
            <p className="mt-4 font-semibold">- {author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}