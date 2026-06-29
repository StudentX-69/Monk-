import Footer from "../components/Footer";

export default function HomePage({ setPage }) {
  return (
    <div className="page-enter relative min-h-screen" style={{ background: "var(--pink-bg)" }}>

      {/* Wavy decorative SVG */}
      <svg className="curvy-bg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 C10,20 30,80 100,50" stroke="#fe51a8" fill="transparent" strokeWidth="0.5" />
      </svg>

      <main className="max-w-6xl mx-auto px-6 py-12 relative z-10">

        {/* Hero */}
        <section className="flex flex-wrap-reverse items-center justify-between gap-12 mb-24">

          {/* Text side */}
          <div className="flex-1 min-w-72 max-w-xl space-y-6">
            <div>
              <p className="font-cormorant font-bold leading-tight text-5xl md:text-6xl lg:text-7xl"
                style={{ color: "var(--brown-dark)" }}>
                Crafting the digital home for
              </p>
              <p className="font-cormorant font-bold leading-tight text-5xl md:text-6xl lg:text-7xl pl-0 md:pl-10"
                style={{ color: "var(--brown-dark)" }}>
                the world's finest
              </p>
              <p className="font-cormorant font-bold leading-tight text-6xl md:text-7xl lg:text-8xl pl-0 md:pl-32"
                style={{ color: "var(--brown-dark)" }}>
                dark chocolate
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn-primary text-base px-8 py-3" onClick={() => setPage("collection")}>
                Explore Collection ↗
              </button>
              <button className="btn-outline text-base px-8 py-3" onClick={() => setPage("sample")}>
                Our Story
              </button>
            </div>
          </div>

          {/* Image side */}
          <div className="flex-1 min-w-64 flex justify-center ">
            <img
              src="https://studentx-69.github.io/Cocoa-landing-page/Assests/images/closeup-portrait-young-woman-bright-gold-earrings-white-cap-smiling-holding-bar-chocolate-purple-wall.jpg"
              alt="Woman with chocolate"
              className="w-full max-w-sm rounded-2xl object-cover aspect-[4/5] drop-shadow-2xl "
            />
          </div>
        </section>

        {/* ── Cocoa Banner ── */}
        <section className="text-center mb-24">
          <h2 className="font-dancing text-7xl md:text-9xl text-pink-500 drop-shadow-md mb-8">
            Coco<span className="opacity-80">a</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1511381939415-e44015466834?w=1200&q=80"
              alt="Cacao beans"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="btn-primary text-lg px-10 py-4 flex items-center gap-2 group"
                onClick={() => setPage("collection")}
              >
                See collection
                <span className="inline-block transition-transform group-hover:rotate-45">↗</span>
              </button>
            </div>
          </div>
        </section>

        {/* ── Description ── */}
        <section className="flex flex-wrap items-center justify-between gap-8 bg-white/30 backdrop-blur-sm p-10 md:p-16 rounded-5xl border border-white/50">
          <p className="font-cinzel text-xl md:text-2xl leading-relaxed max-w-xl flex-1"
            style={{ color: "var(--brown-dark)" }}>
            While most "chocolatiers" you see in shops are technically buying their chocolate from large
            suppliers, the "Bean-to-Bar" movement has led to more people becoming both a maker and a
            chocolatier simultaneously.
          </p>
          <button
            className="btn-primary text-xl px-10 py-5 uppercase tracking-widest"
            onClick={() => setPage("collection")}
          >
            Wanna try?
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
