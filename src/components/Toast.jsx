export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="toast-enter fixed bottom-7 right-7 z-50 font-raleway font-semibold text-white rounded-xl px-6 py-3 shadow-xl"
      style={{ background: "#1a0a00" }}>
      {message}
    </div>
  );
}
