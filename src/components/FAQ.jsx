import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Mind&Muscle's somatic-informed approach?",
    a: "We bridge nervous system regulation with physical vitality. Using evidence-based breathwork, interoception, and somatic practices, we help you release chronic tension, regulate fight-or-flight states, and build sustainable physical and mental capacity."
  },
  {
    q: "Do you offer single clarity sessions or multi-week programs?",
    a: "Both. We offer 60-minute Clarity Reset sessions as well as structured 4-week and 8-week immersion programs for deeper, lasting behavioral and physical integration."
  },
  {
    q: "Can we work together online from anywhere?",
    a: "Yes. All 1:1 sessions are conducted globally via HD Zoom, supplemented with asynchronous voice notes, personalized ritual plans, and check-ins between calls."
  },
  {
    q: "How do I reach out if I have questions before booking?",
    a: "You can submit an inquiry through our contact form, write directly to our primary email (contact@mindandmuscle.com) or alternative support email (support@mindandmuscle.com), or ping us on WhatsApp."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-2">
            Common Questions
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-emerald-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to know about working with Mind&Muscle.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden transition shadow-sm hover:border-emerald-200">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-white hover:bg-gray-50/50 transition"
              >
                <span className="font-medium text-emerald-950 md:text-lg">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-emerald-700 transition-transform duration-200 flex-shrink-0 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4 bg-rose-50/20">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
