export default function Highlights() {
  const cards = [
    { title: "Product Prototyping", desc: "Helping shape your food innovation" },
    { title: "Branding Support", desc: "We assist with identity and packaging" },
    { title: "Export Guidance", desc: "Expanding your global market access" },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <h3 className="text-2xl font-semibold text-center mb-10">What We Do</h3>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {cards.map(({ title, desc }, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold text-lg mb-2">{title}</h4>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}