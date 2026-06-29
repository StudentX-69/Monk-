import { useState } from "react";

const navLinks = [
  { key: "home",       label: "Home" },
  { key: "collection", label: "Shop" },
  { key: "sample",     label: "About" },
];

export default function Navbar({ page, setPage, cartCount }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = (key) => {
    setPage(key);
    setSidebarOpen(false);
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          style={{ animation: "fadeIn 0.2s" }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar Panel ── */}
      {sidebarOpen && (
        <aside className="sidebar-slide fixed left-0 top-0 h-full w-64 bg-white shadow-2xl z-50 p-7 flex flex-col">
          <button
            onClick={() => setSidebarOpen(false)}
            className="self-end text-2xl text-brown leading-none bg-transparent border-none cursor-pointer"
            aria-label="Close sidebar"
          >
            ✕
          </button>
          <h2 className="font-cinzel text-2xl mt-8 mb-6" style={{ color: "var(--brown-dark)" }}>
            Monk
          </h2>
          <nav className="flex flex-col gap-5">
            {navLinks.map((l) => (
              <button
                key={l.key}
                className={`nav-link text-left text-base ${page === l.key ? "active" : ""}`}
                onClick={() => navigate(l.key)}
              >
                {l.label}
              </button>
            ))}
          </nav>
        </aside>
      )}

      <header className="relative z-10 flex items-center justify-between flex-wrap gap-4 px-6 md:px-10 py-4 bg-white/10 backdrop-blur-sm">
        {/* Hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="bg-transparent border-none cursor-pointer text-2xl leading-none"
          style={{ color: "var(--brown)" }}
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Brand Logo */}
        <h1
          className="font-cinzel text-4xl md:text-5xl cursor-pointer tracking-wide"
          style={{ color: "var(--brown-dark)" }}
          onClick={() => navigate("home")}
        >
          Monk
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((l) => (
            <button
              key={l.key}
              className={`nav-link ${page === l.key ? "active" : ""}`}
              onClick={() => navigate(l.key)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Cart button */}
        <button className="btn-primary text-sm md:text-base" onClick={() => navigate("cart")}>
          Cart ({cartCount})
        </button>
      </header>
    </>
  );
}
