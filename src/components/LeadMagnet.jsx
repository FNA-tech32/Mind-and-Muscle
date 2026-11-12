import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function LeadMagnet() {
  return (
    <section id="resources" className="scroll-mt-24 py-28 bg-gradient-to-b from-white to-rose-50/60">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-4xl text-emerald-900"
        >
          Your path to calmer days starts here
        </motion.h3>
        <p className="mt-3 text-gray-700 md:text-lg">
          Get your free mini-guide:{" "}
          <span className="font-semibold text-emerald-900">
            “Mind&Muscle: Nervous System Reset in 5 Minutes”
          </span>
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10 max-w-2xl mx-auto text-left"
        >
          {/* cover / icon */}
          <div className="flex items-center gap-3 mb-6">
            <Mail className="h-6 w-6 text-emerald-700" />
            <h4 className="text-lg font-semibold text-emerald-900">
              Instant download via email
            </h4>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! Your Mind&Muscle mini-guide is on its way to your inbox.");
            }}
            className="grid gap-4 sm:grid-cols-[1fr_auto]"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-600 outline-none transition text-sm"
            />
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="bg-emerald-700 text-white px-6 py-3 rounded-xl hover:bg-emerald-800 transition font-medium text-sm shadow-sm"
            >
              Get the guide
            </motion.button>
          </form>

          {/* trust signal */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-2">
              <img
                src="/images/avatars/claire.jpg"
                alt="Claire"
                className="h-7 w-7 rounded-full border object-cover"
              />
              <img
                src="/images/avatars/maya.jpg"
                alt="Maya"
                className="h-7 w-7 rounded-full border object-cover"
              />
              <img
                src="/images/avatars/anita.jpg"
                alt="Anita"
                className="h-7 w-7 rounded-full border object-cover"
              />
            </div>
            <p className="text-xs text-gray-600">
              Join 150+ clients calming their nervous systems with Mind&Muscle 🌿
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
