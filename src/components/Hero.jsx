import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const FOCUS_WORDS = ["within", "gently", "daily", "softly"];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % FOCUS_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  const intents = [
    { k: "sleep", label: "calmer sleep", text: "Regulate your nervous system to fall—and stay—asleep more easily." },
    { k: "energy", label: "more energy", text: "Build nourishing rituals that refill your cup—without the hustle." },
    { k: "overwhelm", label: "less overwhelm", text: "Simple somatic tools to meet your day with steadier ground." },
  ];
  const [active, setActive] = useState(intents[0]);

  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const xSpring = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.4 });
  const ySpring = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.4 });

  const imgX = useTransform(xSpring, [-0.5, 0.5], [-12, 12]);
  const imgY = useTransform(ySpring, [-0.5, 0.5], [-8, 8]);
  const blobLeftX  = useTransform(xSpring, [-0.5, 0.5], [8, -8]);
  const blobLeftY  = useTransform(ySpring, [-0.5, 0.5], [6, -6]);
  const blobRightX = useTransform(xSpring, [-0.5, 0.5], [-6, 6]);
  const blobRightY = useTransform(ySpring, [-0.5, 0.5], [-4, 4]);
  const rotate = useTransform(xSpring, [-0.5, 0.5], [-3.5, 3.5]);

  function handleMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = (e.clientX - rect.left) / rect.width;
    const my = (e.clientY - rect.top) / rect.height;
    mouseX.set(mx - 0.5);
    mouseY.set(my - 0.5);
  }
  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] pt-32 md:pt-40 overflow-hidden"
    >
      {/* gradient blobs */}
      <motion.div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div style={{ x: blobLeftX, y: blobLeftY }}
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-200 blur-3xl opacity-60" />
        <motion.div style={{ x: blobRightX, y: blobRightY }}
          className="absolute -bottom-12 -right-12 h-96 w-96 rounded-full bg-emerald-200 blur-3xl opacity-50" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200/60 text-emerald-900 text-xs font-semibold tracking-wider uppercase mb-5">
            ✨ Mind&Muscle Coaching
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-emerald-900 leading-snug md:leading-tight">
            Wellness that starts{" "}
            <span className="relative inline-block">
              <motion.span
                key={idx}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent"
              >
                {FOCUS_WORDS[idx]}.
              </motion.span>
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-prose leading-relaxed">
            Gentle, somatic-informed coaching to regulate your nervous system and build rituals that restore — not deplete.
          </p>

          {/* intent chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            {intents.map((it) => (
              <button
                key={it.k}
                onClick={() => setActive(it)}
                className={`px-3 py-1.5 rounded-full border text-sm transition ${
                  active.k === it.k
                    ? "bg-emerald-700 text-white border-emerald-700"
                    : "border-gray-300 hover:border-emerald-600 hover:text-emerald-800"
                }`}
              >
                {it.label}
              </button>
            ))}
          </div>

          <motion.p key={active.k} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
            className="mt-3 text-sm text-gray-600">
            {active.text}
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a href="#contact"
              className="bg-emerald-700 text-white px-6 py-3 rounded-full hover:bg-emerald-800 transition shadow-sm font-medium"
              animate={{ scale: [1, 1.02, 1] }} transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}>
              Book a free clarity call
            </motion.a>
            <a href="#services" className="text-emerald-800 font-medium underline underline-offset-4 hover:text-emerald-900">
              Explore offerings
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="relative" style={{ x: imgX, y: imgY, rotate }}>
          <img src="/images/hero.jpg" alt="Mind&Muscle calm wellness scene" className="w-full rounded-2xl object-cover shadow-md" />
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-xl shadow p-4 border border-gray-100">
            <p className="text-sm text-gray-700 max-w-[16rem]">“I arrived exhausted and left reconnected.” — Maya T.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
