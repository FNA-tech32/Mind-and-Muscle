import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, HeartHandshake, Sparkles, Clock, Check, Star } from "lucide-react";

const PACKAGES = [
  {
    key: "clarity",
    title: "Clarity Session",
    tagline: "A focused reset",
    price: "$95",
    duration: "60 mins",
    Icon: HeartHandshake,
    popular: false,
    bullets: [
      "Gentle intake + intention setting",
      "Breath + somatic regulation tools",
      "Personal ritual to take home",
    ],
    details:
      "Perfect if you’re testing the waters or need a tune-up before a busy season. Includes a follow-up email with notes + resources.",
  },
  {
    key: "reset",
    title: "4-Week Nervous System Reset",
    tagline: "Restore your baseline",
    price: "$320",
    duration: "4 x 60 mins",
    Icon: Leaf,
    popular: true,
    bullets: [
      "Weekly 1:1 coaching (Zoom)",
      "Tailored nervous-system plan",
      "Between-session check-ins",
      "Guided breath + gentle homework",
    ],
    details:
      "A month of consistent support to unwind stress cycles. We’ll build sustainable rituals that fit your actual life, not your ideal one.",
  },
  {
    key: "deepen",
    title: "8-Week Deepen",
    tagline: "Integrate & evolve",
    price: "$600",
    duration: "8 x 60 mins",
    Icon: Sparkles,
    popular: false,
    bullets: [
      "Bi-weekly themes + practices",
      "Custom ritual design toolkit",
      "Voice note support (Mon–Fri)",
      "Progress review + integration",
    ],
    details:
      "Go beyond coping into genuine capacity-building. Ideal if you want lasting change with compassionate accountability.",
  },
];

export default function Services() {
  const [openKey, setOpenKey] = useState(null);

  return (
    <section id="services" className="scroll-mt-24 relative py-28 bg-gradient-to-b from-rose-50 to-white">
     
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-48 w-[36rem] rounded-full bg-emerald-100/50 blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 text-emerald-800/90 text-xs font-medium tracking-wider uppercase">
            <Clock className="h-4 w-4" /> Book what fits your season
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-emerald-900 mt-2">
            Offerings
          </h2>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
            Gentle containers designed for clarity, regulation, and sustainable change.
          </p>
        </div>

        
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map(({ key, title, tagline, price, duration, Icon, bullets, details, popular }, i) => {
            const isOpen = openKey === key;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl bg-white shadow-sm hover:shadow-md ring-1 ${
                  popular ? "ring-emerald-200" : "ring-gray-100"
                }`}
              >
                {/* Popular badge */}
                {popular && (
                  <div className="absolute -top-3 left-4 inline-flex items-center gap-1 rounded-full bg-emerald-700 text-white px-3 py-1 text-xs shadow">
                    <Star className="h-3.5 w-3.5" /> Most loved
                  </div>
                )}

                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="h-7 w-7 text-emerald-700" />
                      <div>
                        <h3 className="text-lg font-semibold text-emerald-900">{title}</h3>
                        <p className="text-xs text-gray-600">{tagline}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold text-emerald-800">{price}</div>
                      <div className="text-xs text-gray-500">{duration}</div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-emerald-700 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                 
                  <div className="mt-6 flex flex-col sm:flex-row gap-2">
                    <a
                      href="#contact"
                      className={`flex-1 text-center rounded-full px-4 py-2.5 text-sm font-medium transition
                        ${popular ? "bg-emerald-700 text-white hover:bg-emerald-800" : "bg-emerald-600 text-white hover:bg-emerald-700"}`}
                    >
                      Book this
                    </a>
                    <button
                      onClick={() => setOpenKey(isOpen ? null : key)}
                      className="flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-sm hover:bg-gray-50"
                    >
                      {isOpen ? "Hide details" : "More details"}
                    </button>
                  </div>

                  
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">{details}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        
        <div className="mt-10 text-center text-xs text-gray-500">
          Sliding-scale available for limited spots. Sessions run on Zoom unless otherwise arranged.
        </div>
      </div>
    </section>
  );
}
