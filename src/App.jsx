import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import CartPage from "./pages/CartPage";
import SamplePage from "./pages/SamplePage";

export default function App() {
  const [page, setPage] = useState("home");
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState(null);

  const navigate = (p) => {
    setPage(p);
    if (p !== "cart") setSelectedProduct(null);
  };

  const addToCartGlobal = (qty) => {
    setCartCount((c) => c + qty);
    setToast(`${qty} item${qty > 1 ? "s" : ""} added to cart!`);
  };

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <>
      <Navbar page={page} setPage={navigate} cartCount={cartCount} />
      {page === "home"       && <HomePage setPage={navigate} />}
      {page === "collection" && <CollectionPage setPage={navigate} setSelectedProduct={setSelectedProduct} />}
      {page === "cart"       && <CartPage product={selectedProduct} addToCartGlobal={addToCartGlobal} />}
      {page === "sample"     && <SamplePage setPage={navigate} />}
      <Toast message={toast} />
    </>
  );
}
