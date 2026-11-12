export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-lg font-bold text-emerald-900">Mind&Muscle</span>
          <p className="text-sm text-gray-500 mt-1">
            Bridging nervous system regulation, mental clarity, and physical strength.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
          <a href="mailto:contact@mindandmuscle.com" className="hover:text-emerald-700 transition">
            contact@mindandmuscle.com
          </a>
          <span>•</span>
          <a href="tel:+15552345678" className="hover:text-emerald-700 transition">
            +1 (555) 234-5678
          </a>
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Mind&Muscle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
