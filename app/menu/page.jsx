"use client";
import { useState } from "react";
import products from "@/data/products";
import MenuCard from "@/components/MenuCard";

const categories = [
  "All",
  "Cakes",
  "Burgers",
  "Sandwiches",
  "Broasted Chicken",
  "Desserts",
  "Bread Omelets",
];

export default function MenuPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <section className="px-12 py-20">
      <h1 className="text-4xl font-bold text-center">Our Menu</h1>
      <p className="text-center text-gray-500 mt-2">
        Freshly prepared for you
      </p>

      {/* CATEGORY PILLS */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border transition
              ${
                active === cat
                  ? "bg-primary text-black font-semibold"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MENU GRID */}
      <div className="grid md:grid-cols-4 gap-8 mt-12">
        {filtered.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
