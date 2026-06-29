import products from "../data/products";

export default function CollectionPage({ setPage, setSelectedProduct }) {
  const handleSelect = (product) => {
    setSelectedProduct(product);
    setPage("cart");
  };

  return (
    <div
      className=" page-enter min-h-screen"
      style={{ background: "linear-gradient(135deg, var(--pink-bg) 0%, rgba(230,215,245,0.98) 100%)" }}
    >
      <div className="flex flex-col relative overflow-visible">
        {/* Brown wave (bottom half) */}
        <div
          className="mx-auto w-[94%] h-72 mt-10 rounded-3xl"
          style={{
            background: "rgb(98, 56, 23)",
            clipPath:
              "polygon(0% 50%, 5% 56%, 10% 62%, 15% 66%, 20% 69%, 25% 70%, 30% 69%, 35% 66%, 40% 62%, 45% 56%, 50% 50%, 55% 44%, 60% 38%, 65% 34%, 70% 31%, 75% 30%, 80% 31%, 85% 34%, 90% 38%, 95% 44%, 100% 50%, 100% 100%, 0% 100%)",
          }}
        />
        {/* Tan wave (top half, shadow) */}
        <div
          className="mx-auto w-[94%] h-80 p-5 rounded-3xl -mt-72 relative"
          style={{
            background: "rgb(201, 179, 162)",
            clipPath:
              "polygon(0% 50%, 5% 56%, 10% 62%, 15% 66%, 20% 69%, 25% 70%, 30% 69%, 35% 66%, 40% 62%, 45% 56%, 50% 50%, 55% 44%, 60% 38%, 65% 34%, 70% 31%, 75% 30%, 80% 31%, 85% 34%, 90% 38%, 95% 44%, 100% 50%, 100% 0%, 0% 0%)",
            zIndex: -1,
          }}
        />

        {/* Floating chocolate image */}
        <div className="flex justify-end pr-[8%]   absolute top-8 p-5 left-[75%] z-10">
          <img
            src="https://studentx-69.github.io/Cocoa-landing-page/Assests/images/chocolate4.png"
            alt="Artisanal chocolate bar"
            className="h-64 w-60  object-cover rounded-3xl shadow-2xl"
          />
        </div>

        {/* Quote text */}
        <div className="ml-[10%] pt-6 pb-0 max-w-xl  absolute top-5 left-0 md:w-1/2  z-10">
          <p className="font-dancing text-2xl  leading-relaxed md:text-2xl  " style={{ color: "var(--brown-dark)" }}>
            <strong className="block mb-1">Chocolat Noir Pur Artisanal</strong> — Simple, pur et réalisé à la perfection.
            Our hand-crafted dark chocolates celebrate the raw elegance of premium cacao. No additives,
            no compromises.
          </p>
        </div>
      </div>

      {/* ── Scroll Arrow ── */}
      <div className="flex justify-center py-10">
        <div className="arrow-bounce" />
      </div>

      {/* ── Product Grid ── */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2
          className="font-cinzel text-3xl font-bold text-center mb-12"
          style={{ color: "var(--brown-dark)" }}
        >
          Our Collection
        </h2>

        <div className="grid gap-7"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
          {products.map((p) => (
            <div key={p.id} className="product-card" onClick={() => handleSelect(p)}>
              <img
                src={p.img}
                alt={p.name}
                className="w-full object-cover scale-105"
                style={{ height: 260, borderRadius: "12px 12px 0 0" }}
              />
              <div className="w-full text-center px-5 py-5 flex flex-col items-center gap-2">
                <p className="font-cinzel font-semibold text-base" style={{ color: "var(--brown)" }}>
                  {p.name}
                </p>
                <p className="font-raleway text-sm text-gray-500 leading-snug">{p.desc}</p>
                <p className="font-cinzel font-bold text-base" style={{ color: "#d63031" }}>
                  ${p.price.toFixed(2)}
                </p>
                <button
                  className="btn-primary text-sm px-5 py-2 mt-1"
                  style={{ background: "var(--purple-card)" }}
                  onClick={(e) => { e.stopPropagation(); handleSelect(p); }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-black/10 bg-white/20 py-6 px-6 text-center">
        <p className="font-serif opacity-60">© Monk.co</p>
      </footer>
    </div>
  );
}
