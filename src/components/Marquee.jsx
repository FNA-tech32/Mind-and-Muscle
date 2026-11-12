import { Heart, Leaf, Sparkles } from "lucide-react";

export default function Pillars() {
  const items = [
    { Icon: Heart, title: "Compassion", text: "Always rooted in care and kindness." },
    { Icon: Leaf, title: "Sustainability", text: "Habits and rituals that last." },
    { Icon: Sparkles, title: "Transformation", text: "Gentle shifts that add up to deep change." },
  ];

  return (
    <section className="py-16 bg-rose-50">
      <div className="max-w-5xl mx-auto px-6 grid gap-8 md:grid-cols-3 text-center">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <item.Icon className="h-8 w-8 text-emerald-700 mb-3" />
            <h3 className="font-semibold text-emerald-900">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

