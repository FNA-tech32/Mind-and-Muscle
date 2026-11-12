import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, HeartHandshake, Leaf, Sparkles, BadgeCheck } from "lucide-react";

// small counter component (animates when in view)
function Counter({ to = 100, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const base = useMotionValue(0);
  const spring = useSpring(base, { stiffness: 90, damping: 18 });

  useEffect(() => {
    if (inView) base.set(to);
  }, [inView, to, base]);

  const value = useTransform(spring, (v) => Math.round(v));
  const [text, setText] = useState("0");

  useEffect(() => {
    const unsub = value.on("change", (v) => setText(String(v)));
    return () => unsub();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}

export default function About() {
  const points = [
    "Nervous-system-first approach to recovery & strength",
    "Sustainable somatic habits over relentless hustle",
    "Bridging mental resilience with embodied physical vitality",
    "Compassionate, evidence-informed accountability",
  ];

  const [tab, setTab] = useState("approach");
  const tabs = useMemo(
    () => [
      { key: "approach", label: "Approach" },
      { key: "credentials", label: "Credentials & Pillars" },
    ],
    []
  );

  return (
    <section id="about" className="scroll-mt-24 py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: layered portrait with floating badges */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* subtle blurred blob behind image */}
          <div className="absolute -z-10 -top-10 -left-10 h-36 w-36 rounded-full bg-rose-200 blur-3xl opacity-60" />
          <div className="absolute -z-10 bottom-0 -right-10 h-48 w-48 rounded-full bg-emerald-200 blur-3xl opacity-50" />

          <img
            src="/images/sienna.jpg"
            alt="Mind&Muscle Coaching"
            className="w-full h-[520px] object-cover rounded-3xl shadow-lg"
          />

          {/* floating badges */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-2xl shadow p-4"
          >
            <div className="text-sm text-gray-700">
              <span className="font-semibold text-emerald-800">
                <Counter to={250} />+
              </span>{" "}
              sessions guided
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="absolute top-6 -right-6 bg-white/90 backdrop-blur rounded-2xl shadow px-4 py-3 flex items-center gap-2"
          >
            <BadgeCheck className="h-5 w-5 text-emerald-700" />
            <span className="text-sm text-gray-700">ICF & Somatic Certified</span>
          </motion.div>
        </motion.div>

        {/* RIGHT: heading, tabs, content, method */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-3">
            About the Method
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-emerald-900">
            About Mind&Muscle
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed md:text-lg">
            At <strong>Mind&Muscle</strong>, we unite nervous system regulation with physical vitality. We guide individuals away from burnout and overwhelm, rebuilding sustainable rituals through breathwork, somatic awareness, and mindful strength.
          </p>

          {/* tabs */}
          <div className="mt-6 inline-flex rounded-full border border-gray-200 bg-white p-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-4 py-1.5 text-sm rounded-full transition ${
                  tab === t.key
                    ? "bg-emerald-700 text-white"
                    : "text-gray-700 hover:text-emerald-800"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* panel content */}
          {tab === "approach" ? (
            <motion.div
              key="approach"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-6"
            >
              <ul className="space-y-3">
                {points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{p}</span>
                  </li>
                ))}
              </ul>

              {/* mini method row */}
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="bg-rose-50 rounded-xl p-4">
                  <HeartHandshake className="h-6 w-6 text-emerald-700" />
                  <h4 className="mt-2 font-semibold text-emerald-900">Attune</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Safety first: breath, interoception & mindful awareness.
                  </p>
                </div>
                <div className="bg-rose-50 rounded-xl p-4">
                  <Leaf className="h-6 w-6 text-emerald-700" />
                  <h4 className="mt-2 font-semibold text-emerald-900">Regulate</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Somatic nervous system tools to down-shift stress.
                  </p>
                </div>
                <div className="bg-rose-50 rounded-xl p-4">
                  <Sparkles className="h-6 w-6 text-emerald-700" />
                  <h4 className="mt-2 font-semibold text-emerald-900">Strengthen</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Embodied rituals and daily strength practices that endure.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="credentials"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-6"
            >
              <ul className="space-y-2 text-gray-800">
                <li>• Certified Wellness & Somatic Coaching (ICF-aligned curriculum)</li>
                <li>• Nervous-system informed physiological stress regulation</li>
                <li>• Trauma-aware body mechanics and movement facilitation</li>
                <li>• Over 250+ guided client sessions globally across 12+ countries</li>
              </ul>

              {/* stats bar */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center bg-white rounded-xl border p-4">
                  <div className="text-2xl font-semibold text-emerald-800">
                    <Counter to={6} />+
                  </div>
                  <div className="text-xs text-gray-500 mt-1">years coaching</div>
                </div>
                <div className="text-center bg-white rounded-xl border p-4">
                  <div className="text-2xl font-semibold text-emerald-800">
                    <Counter to={250} />+
                  </div>
                  <div className="text-xs text-gray-500 mt-1">sessions guided</div>
                </div>
                <div className="text-center bg-white rounded-xl border p-4">
                  <div className="text-2xl font-semibold text-emerald-800">
                    <Counter to={12} />+
                  </div>
                  <div className="text-xs text-gray-500 mt-1">countries served</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* secondary CTA */}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-full hover:bg-emerald-800 transition font-medium shadow-sm"
            >
              Book a free clarity call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
