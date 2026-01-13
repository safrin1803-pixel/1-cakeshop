import React from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    initial: "P",
    rating: 5,
    text: "The custom cake I ordered for my daughter's birthday was absolutely stunning! Not only did it look perfect, but it tasted divine too.",
  },
  {
    name: "Rahul Verma",
    role: "Foodie",
    initial: "R",
    rating: 5,
    text: "Best burgers in town! The buns are so fresh and soft. Definitely my go-to spot for evening snacks.",
  },
  {
    name: "Anita Desai",
    role: "Event Planner",
    initial: "A",
    rating: 4,
    text: "Professional service and on-time delivery. The variety of toppings for custom cakes is impressive. Highly recommended!",
    reply: "Thank you Anita! Glad we could help.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          What Our Customers Say
        </h2>
        <p className="mt-2 text-gray-500">
          Don't just take our word for it
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                border-transparent
                rounded-2xl
                p-8
                transition
                hover:border-yellow-400
              "
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 italic leading-relaxed">
                “{item.text}”
              </p>

              {item.reply && (
                <p className="mt-4 text-sm text-gray-800">
                  <span className="font-semibold">Reply:</span>{" "}
                  {item.reply}
                </p>
              )}

              {/* User */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-black font-bold">
                  {item.initial}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


