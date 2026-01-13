// components/MenuCard.jsx
import { motion } from "framer-motion";

export default function MenuCard({ item }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }}
      className="p-4 rounded-2xl bg-white shadow hover:border-primary border">
      
      <div className="h-40 bg-gray-100 rounded-xl mb-4" />

      <h3 className="font-bold">{item.name}</h3>
      <p className="text-gray-500 text-sm">{item.desc}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="font-bold">₹{item.price}</span>
        <button className="bg-primary w-10 h-10 rounded-full text-xl">+</button>
      </div>
    </motion.div>
  );
}
