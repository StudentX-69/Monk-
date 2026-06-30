import Footer from "../components/Footer";

const HoverImg = ({ src, alt, className, style }) => (
  <img
    src={src}
    alt={alt}
    className={`rounded-[2.5rem] object-cover transition-all duration-300 cursor-default ${className ?? ""}`}
    style={style}
    loading="lazy"
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(0.94)";
      e.currentTarget.style.filter = "grayscale(60%)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.filter = "none";
    }}
  />
);

const QuoteCard = ({ children, style }) => (
  <div
    className="font-raleway text-base leading-7 rounded-2xl p-7 border border-black/15"
    style={{ color: "rgb(40,22,9)", backdropFilter: "blur(8px)", ...style }}
  >
    {children}
  </div>
);

export default function SamplePage({ setPage }) {
  return (
    <div
      className="page-enter min-h-screen"
      style={{
        background: "linear-gradient(160deg, var(--pink-bg) 0%, rgba(245,235,255,0.97) 100%)",
      }}
    >
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-0">

        {/* Block 1 */}
        <div className="relative mb-16">
          <div className="flex justify-end">
            <HoverImg
              src="https://plus.unsplash.com/premium_photo-1754337633089-110795080c67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNob2NvbGF0ZXMlMjBoYW5kJTIwY3JhZnRlZCUyMHJpY2glMjBmaW5pc2h8ZW58MHx8MHx8fDA%3D"
              alt="Premium chocolate box"
              loading="lazy"
              style={{
                height: 360, width: 350,
                filter: "drop-shadow(8px 8px 14px rgba(0,0,0,0.18))",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 max-w-md"
            style={{ zIndex: 2 }}>
            <QuoteCard style={{ background: "rgba(179,179,179,0.42)" }}>
              Beyond being perfectly hand crafted, our chocolates are made with a dedication to
              perfection that you can see in the fine details and taste in the rich finish.
            </QuoteCard>
          </div>
        </div>

        {/* Block 2 */}
        <div className="relative mb-16">
          <div className="flex justify-start">
            <HoverImg
              src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Artisan chocolatier at work"
              loading="lazy"
              style={{
                height: 360, width: 320,
                filter: "drop-shadow(8px 8px 14px rgba(39,39,39,0.3))",
              }}
            />
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 max-w-md"
            style={{ zIndex: 2 }}>
            <QuoteCard style={{ background: "rgba(181,173,165,0.55)" }}>
              A masterclass in chocolate. Our sample box brings together Monk's most iconic shapes and
              flavors, hand-finished with a dedication to perfection you can taste in every bite.
              Find your favorites, then come back for more.
            </QuoteCard>
          </div>
        </div>

        {/* Block 3: brand statement */}
        <div className="text-center py-12 space-y-6">
          <h2 className="font-dancing text-5xl md:text-7xl" style={{ color: "var(--brown-dark)" }}>
            Bean to Bar
          </h2>
          <p
            className="font-cinzel text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--brown)" }}
          >
            Every bar starts with a single origin cacao pod. We source, ferment, roast, and refine
            in-house — so you taste the terroir, not a factory formula.
          </p>
          <button
            className="btn-primary text-base px-10 py-4 mt-4"
            onClick={() => setPage("collection")}
          >
            Explore Collection
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
