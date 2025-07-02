import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Contact from "./contact";

const menuCategories = [
  {
    category: "Appetizers",
    items: [
      { name: "Vietnamese Fresh Spring Rolls", description: "Shrimp, pork, vermicelli, fresh herbs, peanut sauce" },
      { name: "Garlic Butter Shrimp Skewers", description: "Grilled shrimp glazed with garlic butter and fresh herbs" },
    ],
  },
  {
    category: "Main Courses",
    items: [
      { name: "Five-Spice Braised Short Ribs", description: "Slow-braised short ribs with aromatic five-spice sauce" },
      { name: "Lemongrass Chicken", description: "Grilled chicken marinated with lemongrass and Vietnamese spices" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Vietnamese Coffee Tiramisu", description: "Fusion twist on classic tiramisu with bold coffee flavor" },
      { name: "Coconut Pandan Cake", description: "Soft, fragrant cake with coconut and pandan layers" },
    ],
  },
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-white text-black font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto"></div>
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="text-sm">
              ← Back to Home
            </Button>
          </Link>
        </div>

      {/* HERO SECTION */}
      <section className="text-center py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-serif mb-4">Mangon Dining Catering Menu</h1>
          <p className="uppercase tracking-widest text-sm text-gray-500">
            Vietnamese-Fusion Private Chef & Catering
          </p>
          <p className="text-lg text-gray-700 mt-6 max-w-xl mx-auto">
            Offering a curated selection of vibrant, flavorful dishes perfect for private events, celebrations, and special occasions.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button className="uppercase bg-black text-white hover:bg-neutral-800 px-8 py-3 tracking-wider rounded-none">
                Book a Catering
              </Button>
            </Link>
          </div>
        </div>
      </section>

{/* MENU SECTION */}
<section className="bg-neutral-50 py-16">
  <div className="max-w-7xl mx-auto px-4">
    {menuCategories.map((category) => (
      <div key={category.category} className="mb-12">
        <h2 className="text-3xl font-serif mb-8 text-center">{category.category}</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {category.items.map((item) => (
            <Card key={item.name} className="w-full sm:w-[300px] border border-gray-200 hover:border-opacity-50 transition-all duration-200 hover:shadow-md">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <Badge variant="secondary" className="mt-4">Signature Dish</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


      {/* CONTACT SECTION */}
      <Contact />
    </div>
  );
}
