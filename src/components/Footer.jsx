export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/20 mt-12 py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-3">
        <p className="italic opacity-75 font-serif">© 2026 Monk.co</p>
        <div className="flex gap-6 opacity-60 text-sm">
          <a href="https://github.com/StudentX-69" target="_blank" rel="noreferrer"
            className="hover:opacity-100 transition-opacity no-underline text-inherit">
            Github
          </a>
          <a href="https://x.com/Abhaynirmalkar1" target="_blank" rel="noreferrer"
            className="hover:opacity-100 transition-opacity no-underline text-inherit">
            Twitter
          </a>
          <span className="cursor-pointer hover:opacity-100 transition-opacity">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
