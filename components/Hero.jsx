"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-12 px-12 py-20 bg-transparent">
      <div>
        <h1 className="text-6xl font-extrabold leading-tight">
          Experience the <br />
          <span className="text-[#FFC107]">Taste of Heaven</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-md">
          Premium custom cakes and snacks made fresh every day.
        </p>

        <div className="flex gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#FFC107] px-6 py-3 rounded-full font-semibold"
          >
            Design Your Cake
          </motion.button>

          <motion.button
            whileHover={{ x: 6 }}
            className="border border-[#FFC107] px-6 py-3 rounded-full"
          >
            Order Snacks →
          </motion.button>
        </div>
      </div>

      {/* Image / cake mock */}
      <div className="h-[400px] rounded-3xl bg-white shadow-lg" />
    </section>
  );
}
