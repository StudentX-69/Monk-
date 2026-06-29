import { useState } from "react";

const DEFAULT_ITEM = {
  id: 0,
  name: "Lavender Dark Chocolate Jelly",
  price: 4.5,
  img: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=600&q=80",
  desc: "Elevate your pantry with our signature Dark Chocolate Lavender Jelly. Crafted in small batches, this jelly transforms the ordinary into the extraordinary. Bold 70% dark chocolate notes with a clean, botanical finish.",
};

export default function CartPage({ product, addToCartGlobal }) {
  const item = product || DEFAULT_ITEM;

  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const updateQty = (delta) => setQty((q) => Math.max(1, q + delta));
  const total = (qty * item.price).toFixed(2);

  const handleAdd = () => {
    addToCartGlobal(qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      className="page-enter min-h-screen"
      style={{ background: "var(--blue-bg)" }}
    >
      <section className="flex flex-wrap justify-center items-center gap-12 px-6 md:px-16 py-16">

        {/* Product Image */}
        <img
          src={item.img}
          alt={item.name}
          className="object-cover rounded-2xl shadow-2xl flex-shrink-0"
          style={{ height: "clamp(260px,40vw,400px)", width: "clamp(220px,34vw,340px)" }}
        />

        {/* Details Card */}
        <div
          className="bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-5 w-full max-w-md"
        >
          <h1
            className="font-cinzel font-extrabold leading-tight"
            style={{ fontSize: "clamp(1.1rem,3vw,1.6rem)", color: "var(--brown)" }}
          >
            {item.name}
          </h1>

          <p className="font-raleway font-semibold text-sm" style={{ color: "var(--brown)" }}>
            Bold flavours with a clean, botanical finish.
          </p>

          <p className="font-raleway text-sm leading-relaxed text-gray-500">
            {item.desc}
          </p>

          {/* Qty + Price Row */}
          <div className="flex items-center gap-4 mt-2">
            {/* Qty controls */}
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => updateQty(-1)}
                className="h-10 w-10 bg-gray-50 hover:bg-gray-200 border-none text-xl cursor-pointer transition-colors"
              >
                −
              </button>
              <input
                type="number"
                value={qty}
                min={1}
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                className="h-10 w-12 text-center border-x border-gray-200 outline-none text-base"
              />
              <button
                onClick={() => updateQty(1)}
                className="h-10 w-10 bg-gray-50 hover:bg-gray-200 border-none text-xl cursor-pointer transition-colors"
              >
                +
              </button>
            </div>

            {/* Price */}
            <span
              className="font-cinzel text-3xl font-bold ml-auto"
              style={{ color: "var(--brown)" }}
            >
              ${total}
            </span>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            className="w-full py-4 rounded-xl font-cinzel font-bold text-base border-none cursor-pointer transition-all duration-200"
            style={{
              background: added ? "#90ee90" : "var(--blue-bg)",
              color: "var(--brown)",
            }}
          >
            {added ? "Added! ✓" : "Add to cart"}
          </button>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-white/20 py-6 px-6 text-center">
        <p className="font-serif opacity-60">© Monk.co</p>
      </footer>
    </div>
  );
}
