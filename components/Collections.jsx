export default function Collections() {
  const items = [
    { name: "Custom Cakes", emoji: "🎂", bg: "bg-[#FFF3DB]" },
    { name: "Snacks", emoji: "🥪", bg: "bg-[#E9F5FF]" },
    { name: "Burgers", emoji: "🍔", bg: "bg-[#F6EAF7]" },
    { name: "Desserts", emoji: "🍩", bg: "bg-[#FDEBE7]" },
  ];

  return (
    <section className="px-12 py-20 ">
      <h2 className="text-4xl font-bold text-center">
        Our Collections
      </h2>

      <p className="text-center text-gray-500 mt-2">
        Explore our wide range of delicious treats
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-12">
        {items.map((i) => (
          <div
            key={i.name}
            className={`${i.bg} rounded-3xl py-10 text-center shadow-md
            hover:-translate-y-1 hover:shadow-lg transition`}
          >
            <div className="text-4xl">{i.emoji}</div>
            <p className="mt-4 font-semibold">{i.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
