// components/Offers.jsx
export default function Offers() {
  return (
    <section className="px-12 py-20 bg-transparent">
      <h2 className="text-4xl font-bold text-center">
        Specials & Offers
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {/* Offer 1 */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-pink-200 to-rose-300 text-gray-900 shadow-lg">
          <h3 className="text-xl font-bold">Summer Splash</h3>
          <p className="text-3xl font-extrabold mt-2">20% OFF</p>
          <p className="mt-4">
            Use code: <b>SUMMER20</b>
          </p>
        </div>

        {/* Offer 2 */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-sky-200 to-blue-300 text-gray-900 shadow-lg">
          <h3 className="text-xl font-bold">Burger Bonanza</h3>
          <p className="text-3xl font-extrabold mt-2">15% OFF</p>
          <p className="mt-4">
            Use code: <b>BURGER15</b>
          </p>
        </div>
      </div>
    </section>
  );
}
