import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const QUOTES = [
  {
    text: "Mind&Muscle sessions helped me feel safe in my body again. Gentle yet powerful.",
    name: "Claire R.",
    role: "Creative Producer",
    location: "Melbourne",
    rating: 5,
    avatar: "/images/avatars/claire.jpg",
  },
  {
    text: "I arrived exhausted and left with rituals that actually fit my life and physical energy.",
    name: "Maya T.",
    role: "Founder",
    location: "Singapore",
    rating: 5,
    avatar: "/images/avatars/maya.jpg",
  },
  {
    text: "Grounded, practical, and deeply empowering. I’m finally consistent with my body.",
    name: "Anita K.",
    role: "Product Manager",
    location: "Jakarta",
    rating: 5,
    avatar: "/images/avatars/anita.jpg",
  },
  {
    text: "The integration of somatic grounding and mental clarity is pure medicine. I feel resourced.",
    name: "Lea P.",
    role: "Photographer",
    location: "Bali",
    rating: 5,
    avatar: "/images/avatars/lea.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % QUOTES.length);
  const prev = () => setIndex((i) => (i - 1 + QUOTES.length) % QUOTES.length);
  const goTo = (i) => setIndex(i);

  // autoplay
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 4500);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  // keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const active = QUOTES[index];

  return (
    <section id="testimonials" className="scroll-mt-24 py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-4xl text-emerald-900">Kind words</h2>
          <p className="text-gray-700 mt-2">Stories from clients finding steadier ground with Mind&Muscle.</p>
        </div>

        {/* Slider */}
        <div
          className="mt-12 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="bg-rose-50 rounded-2xl p-8 shadow-sm"
                aria-live="polite"
              >
                {/* rating */}
                <div className="flex gap-1 mb-3" aria-label={`${active.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < active.rating ? "text-emerald-700" : "text-emerald-200"}`}
                      fill={i < active.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>

                {/* quote */}
                <blockquote className="text-gray-800 text-lg leading-relaxed">
                  “{active.text}”
                </blockquote>

                {/* author */}
                <figcaption className="mt-6 flex items-center gap-4">
                  <img
                    src={active.avatar || "/images/avatars/placeholder.jpg"}
                    alt={active.name}
                    className="h-12 w-12 rounded-full object-cover border"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-emerald-900 font-medium">{active.name}</div>
                    <div className="text-xs text-gray-600">
                      {active.role} • {active.location}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="absolute inset-x-0 -bottom-12 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full border bg-white hover:bg-gray-50 p-2 shadow-sm"
            >
              <ChevronLeft className="h-5 w-5 text-emerald-800" />
            </button>
            <div className="flex gap-2">
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition ${
                    i === index ? "bg-emerald-700 w-6" : "bg-emerald-200 w-2.5 hover:bg-emerald-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full border bg-white hover:bg-gray-50 p-2 shadow-sm"
            >
              <ChevronRight className="h-5 w-5 text-emerald-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
