import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Clock, MapPin, ShieldCheck, Phone, PhoneCall, CheckCircle2 } from "lucide-react";

export default function Contact() {
  // Primary Contact Details
  const primaryEmail = "contact@mindandmuscle.com";
  const primaryPhone = "+1 (555) 234-5678";
  const whatsappNumber = "15552345678";

  // Alternative Contact Details
  const alternativeEmail = "support@mindandmuscle.com";
  const alternativePhone = "+1 (555) 876-5432";

  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;

    // Honeypot for bots
    if (f.website.value) return;

    const name = f.name.value.trim();
    const from = f.email.value.trim();
    const altContact = f.altContact.value.trim();
    const prefMethod = f.prefMethod.value;
    const topic = f.topic.value;
    const message = f.message.value.trim();

    // Basic validation
    if (!name || !from || !message) return;
    if (!/^\S+@\S+\.\S+$/.test(from)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    // Mailto composed to primary with alternative email CC'd
    const subject = encodeURIComponent(`[${topic}] Mind&Muscle Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Primary Email: ${from}\n` +
      `Alternative Contact/Phone: ${altContact || "None provided"}\n` +
      `Preferred Contact Method: ${prefMethod}\n` +
      `Topic: ${topic}\n\n` +
      `Message:\n${message}\n`
    );
    const mailtoUrl = `mailto:${primaryEmail}?cc=${alternativeEmail}&subject=${subject}&body=${body}`;

    // WhatsApp prefilled message
    const waText = encodeURIComponent(
      `Hi Mind&Muscle! I'm ${name}.\nTopic: ${topic}\nPreferred Contact: ${prefMethod}\n${message}\n(Email: ${from}${altContact ? ` | Alt: ${altContact}` : ""})`
    );
    const waUrl = `https://wa.me/${whatsappNumber}?text=${waText}`;

    if (prefMethod === "WhatsApp") {
      window.open(waUrl, "_blank", "noreferrer");
    } else {
      window.location.href = mailtoUrl;
    }

    setTimeout(() => {
      setSent(true);
      setSubmitting(false);
    }, 400);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-28 bg-rose-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-2">
                Connect With Us
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-emerald-900">
                Let’s talk Mind&Muscle
              </h2>
              <p className="mt-3 text-gray-700">
                Ready to restore your baseline and build resilient rituals? Send a note and our team will get back to you promptly.
              </p>

              <div aria-live="polite">
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 px-4 py-3 text-sm flex items-start gap-2"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Thank you! Your message request is prepared.</p>
                      <p className="text-xs text-emerald-800 mt-1">
                        If your email client didn't open automatically, feel free to use our primary or alternative contact details on the right.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-emerald-600 outline-none text-sm transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-emerald-600 outline-none text-sm transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="altContact" className="block text-sm font-medium text-gray-700 mb-1">
                      Alternative Contact / Phone <span className="text-xs text-gray-400">(Optional)</span>
                    </label>
                    <input
                      id="altContact"
                      name="altContact"
                      type="text"
                      placeholder="+1 (555) 000-0000"
                      className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-emerald-600 outline-none text-sm transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="prefMethod" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Response Method
                    </label>
                    <select
                      id="prefMethod"
                      name="prefMethod"
                      defaultValue="Email"
                      className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 bg-white focus:ring-2 focus:ring-emerald-600 outline-none text-sm transition"
                    >
                      <option value="Email">Email (Primary)</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone Call">Direct Phone Call</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 bg-white focus:ring-2 focus:ring-emerald-600 outline-none text-sm transition"
                    defaultValue="Free Clarity Call"
                  >
                    <option>Free Clarity Call</option>
                    <option>1:1 Mind&Muscle Coaching</option>
                    <option>4-Week Nervous System Reset</option>
                    <option>8-Week Deepen Program</option>
                    <option>Corporate / Group Sessions</option>
                    <option>General Support / Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us what you're experiencing and how Mind&Muscle can support your journey..."
                    className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-emerald-600 outline-none text-sm transition"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`bg-emerald-700 text-white font-medium px-7 py-3 rounded-full hover:bg-emerald-800 transition shadow-sm ${
                      submitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {submitting ? "Sending…" : "Send Inquiry"}
                  </button>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 hover:bg-gray-50 text-sm font-medium text-gray-700 transition"
                    aria-label="Direct WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-700" /> WhatsApp
                  </a>
                </div>

                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                  Your information is private and never shared. No spam.
                </p>
              </form>
            </div>

            {/* Right: Contact Information & Alternative Details */}
            <motion.aside
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-emerald-100 p-6 md:p-8 bg-emerald-50/40 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-emerald-900 font-display">
                  Get in Touch
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Have questions or need quick assistance? Reach out through any of our primary or alternative channels below.
                </p>

                {/* Primary Contacts */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                    Primary Contact
                  </h4>
                  <div className="grid gap-2.5 text-sm">
                    <a
                      href={`mailto:${primaryEmail}`}
                      className="inline-flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm hover:border-emerald-300 transition group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-100/70 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Primary Email</div>
                        <div className="text-emerald-950 font-semibold">{primaryEmail}</div>
                      </div>
                    </a>

                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm hover:border-emerald-300 transition group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-100/70 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">WhatsApp Direct</div>
                        <div className="text-emerald-950 font-semibold">{primaryPhone}</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Alternative Contact Details */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                    Alternative Contact Details
                  </h4>
                  <div className="grid gap-2.5 text-sm">
                    <a
                      href={`mailto:${alternativeEmail}`}
                      className="inline-flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm hover:border-emerald-300 transition group"
                    >
                      <div className="p-2 rounded-lg bg-rose-100 text-rose-800 group-hover:bg-emerald-700 group-hover:text-white transition">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Alternative / Support Email</div>
                        <div className="text-emerald-950 font-semibold">{alternativeEmail}</div>
                      </div>
                    </a>

                    <a
                      href={`tel:${alternativePhone.replace(/[^0-9+]/g, "")}`}
                      className="inline-flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm hover:border-emerald-300 transition group"
                    >
                      <div className="p-2 rounded-lg bg-rose-100 text-rose-800 group-hover:bg-emerald-700 group-hover:text-white transition">
                        <PhoneCall className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Alternative Phone Line</div>
                        <div className="text-emerald-950 font-semibold">{alternativePhone}</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Operations & Location info */}
                <div className="mt-6 pt-5 border-t border-emerald-100 grid gap-3 text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-emerald-700 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-emerald-950">Office Hours & Response</div>
                      <div className="text-xs text-gray-600 mt-0.5">Mon – Fri: 9:00 AM – 6:00 PM EST (Response within 24h)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-emerald-700 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-emerald-950">Location & Availability</div>
                      <div className="text-xs text-gray-600 mt-0.5">Online Zoom consultations worldwide & select studio sessions</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-100/60">
                <p className="text-xs text-gray-500">
                  All consultations and messages are strictly confidential. Mind&Muscle is committed to your privacy and wellbeing.
                </p>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
