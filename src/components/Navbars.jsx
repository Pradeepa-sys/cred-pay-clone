import { useEffect } from "react";
import { useState } from "react";
import NeoPOPBtn from "./NeoPOPBtn";

/* ─── Navbar ─────────────────────────────────────────── */
const Navbars = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-400 ${
      scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.05]" : ""
    }`}>
      <span className="font-display text-2xl font-extrabold tracking-tight bg-gradient-to-r from-amber-200 to-amber-600 bg-clip-text text-transparent">
        CRED
      </span>
      <div className="flex items-center gap-10">
        {["Products", "Stories", "Members", "Careers"].map(n => (
          <a
            key={n}
            href="#"
            className="hidden md:block text-stone-500 text-sm tracking-wider font-sans hover:text-amber-400 transition-colors duration-200"
          >
            {n}
          </a>
        ))}
        <NeoPOPBtn primary>Get App</NeoPOPBtn>
      </div>
    </nav>
  );
};
export default Navbars;