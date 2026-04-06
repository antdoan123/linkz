import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Contact from "./contact";

const menuCategories = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Caramelized Pork Belly Crispy Rice",
        description: "Braised pork belly, sushi rice, gochujang aioli",
      },
      {
        name: "Crying Tiger Steak Salad",
        description: "Soy-marinated ribeye, watercress, cucumber, fuji apple, fish sauce dressing",
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Five-Spice Braised Short Ribs",
        description: "Slow-braised short ribs with aromatic five-spice sauce",
      },
      {
        name: "Lemongrass Chicken",
        description: "Grilled chicken marinated with lemongrass and Vietnamese spices",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Vietnamese Coffee Tiramisu",
        description: "Fusion twist on classic tiramisu with bold coffee flavor",
      },
      {
        name: "Coconut Pandan Cake",
        description: "Soft, fragrant cake with coconut and pandan layers",
      },
    ],
  },
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* BACK */}
      <div className="max-w-5xl mx-auto px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-8 pt-16 pb-20 text-center">
        <p className="uppercase tracking-[0.25em] text-xs text-gray-400 mb-4">
          Private Chef · Catering · Events
        </p>
        <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
          Mangon Dining
        </h1>
        <div className="w-12 h-px bg-black mx-auto mb-6" />
        <p className="text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
          A curated selection of vibrant Vietnamese-fusion dishes crafted for private events,
          celebrations, and special occasions.
        </p>
        <div className="mt-10">
          <Link href="/contact">
            <button className="px-10 py-3.5 bg-black text-white text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all duration-200 hover:scale-[1.02]">
              Book a Catering
            </button>
          </Link>
        </div>
      </section>

      {/* MENU */}
      <section className="border-t border-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-8">
          {menuCategories.map((cat, catIndex) => (
            <div key={cat.category} className={catIndex !== 0 ? "mt-20" : ""}>

              {/* Category heading */}
              <div className="flex items-center gap-6 mb-10">
                <div className="flex-1 h-px bg-gray-100" />
                <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 shrink-0">
                  {cat.category}
                </h2>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              {/* Dish rows */}
              <div className="flex flex-col divide-y divide-gray-100">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex flex-col md:flex-row md:items-center justify-between gap-3 py-6 hover:bg-neutral-50 px-4 -mx-4 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <h3 className="text-base font-semibold mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className="self-start md:self-center shrink-0 rounded-none border-gray-300 text-gray-400 text-[10px] uppercase tracking-widest group-hover:border-black group-hover:text-black transition-colors"
                    >
                      Signature
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD PHOTOS */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center gap-6 mb-10">
            <div className="flex-1 h-px bg-gray-100" />
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 shrink-0">Gallery</p>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["food1.JPG", "food2.JPG", "food3.JPG"].map((src, i) => (
              <div key={i} className="overflow-hidden aspect-square bg-neutral-100 group">
                <img
                  src={src}
                  alt={`Food photo ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="py-12 border-t border-gray-100 bg-neutral-50">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <p className="text-sm text-gray-500 leading-relaxed">
            Menu is seasonal and subject to change. Custom menus available upon request —
            all dietary restrictions and preferences are accommodated.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-5 text-xs uppercase tracking-widest text-black underline underline-offset-4 hover:text-gray-500 transition-colors"
          >
            Inquire About a Custom Menu
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <Contact />
    </div>
  );
}