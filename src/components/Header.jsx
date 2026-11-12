import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition
      ${scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-emerald-800 font-display text-xl font-bold tracking-tight flex items-center gap-2">
          <span>Mind&Muscle</span>
        </a>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <li><a href="#about" className="hover:text-emerald-700 transition">About</a></li>
          <li><a href="#services" className="hover:text-emerald-700 transition">Services</a></li>
          <li><a href="#testimonials" className="hover:text-emerald-700 transition">Testimonials</a></li>
          <li><a href="#resources" className="hover:text-emerald-700 transition">Resources</a></li>
          <li><a href="#contact" className="hover:text-emerald-700 transition">Contact</a></li>
        </ul>
        <a href="#contact" className="hidden md:inline-block bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800 font-medium transition shadow-sm">
          Free Clarity Call
        </a>
      </nav>
    </header>
  );
}
