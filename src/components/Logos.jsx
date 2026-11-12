const items = [
  { src: "/images/logo1.png", name: "Well+Good" },
  { src: "/images/logo2.jpeg", name: "Mindfulness IRL" },
  { src: "/images/logo3.webp", name: "Balance Mag" },
  { src: "/images/logo4.webp", name: "Gaia Holistic" },
  { src: "/images/logo5.webp", name: "CKP Wellness" },
];

export default function Logos() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-600 text-sm mb-10 uppercase tracking-wide">
          As featured in
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center">
          {items.map((it) => (
            <div
              key={it.name}
              className="opacity-85 hover:opacity-100 transition"
            >
              {it.src ? (
                <img
                  src={it.src}
                  alt={it.name}
                  className="h-20 md:h-24 object-contain"
                />
              ) : (
                <span className="text-gray-500 text-lg">{it.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
