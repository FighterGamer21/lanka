import { useState } from "react";

type MenuItem = { name: string; price: string; tag?: "veg" | "nonveg" | "drink" };
type Category = { id: string; label: string; note?: string; items: MenuItem[] };

const categories: Category[] = [
  {
    id: "thakali",
    label: "Thakali Khana Set",
    note: "Our signature — served on traditional brass thalis",
    items: [
      { name: "Veg Khana Set", price: "Rs. 250", tag: "veg" },
      { name: "Chicken Khana Set", price: "Rs. 350", tag: "nonveg" },
      { name: "Mutton Khana Set", price: "Rs. 450", tag: "nonveg" },
      { name: "Veg Dhido Set", price: "Rs. 350", tag: "veg" },
      { name: "Chicken Dhido Set", price: "Rs. 500", tag: "nonveg" },
      { name: "Mutton Dhido Set", price: "Rs. 600", tag: "nonveg" },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    items: [
      { name: "Plain / Toast Omelet", price: "Rs. 100 / 150" },
      { name: "Masala Omelet", price: "Rs. 120" },
      { name: "Cheese Omelet", price: "Rs. 180" },
      { name: "Boiled Egg (2 pcs)", price: "Rs. 80" },
      { name: "Poached / Fried Egg", price: "Rs. 130" },
      { name: "Scrambled Egg", price: "Rs. 180" },
      { name: "Plain Toast", price: "Rs. 60" },
      { name: "Butter Jam Toast", price: "Rs. 130" },
      { name: "Cheese / French Toast", price: "Rs. 180" },
      { name: "Aalu Paratha (per pc)", price: "Rs. 100" },
      { name: "Indian Breakfast Set", price: "Rs. 500" },
      { name: "Continental Breakfast", price: "Rs. 550" },
    ],
  },
  {
    id: "curry",
    label: "Curry, Rice & Roti",
    items: [
      { name: "Mixed Veg Curry", price: "Rs. 150", tag: "veg" },
      { name: "Chicken Curry", price: "Rs. 250", tag: "nonveg" },
      { name: "Mutton Curry", price: "Rs. 300", tag: "nonveg" },
      { name: "Mushroom Curry", price: "Rs. 180", tag: "veg" },
      { name: "Paneer Curry", price: "Rs. 250", tag: "veg" },
      { name: "Plain Rice", price: "Rs. 100" },
      { name: "Jeera Rice", price: "Rs. 150" },
      { name: "Roti (per pc)", price: "Rs. 20" },
    ],
  },
  {
    id: "soup",
    label: "Soup",
    items: [
      { name: "Veg Soup", price: "Rs. 150", tag: "veg" },
      { name: "Mushroom Soup", price: "Rs. 180", tag: "veg" },
      { name: "Chicken Soup", price: "Rs. 200", tag: "nonveg" },
      { name: "Hot & Sour Soup", price: "Rs. 250" },
    ],
  },
  {
    id: "veg-snacks",
    label: "Veg Snacks",
    items: [
      { name: "Aalu Sadheko", price: "Rs. 150", tag: "veg" },
      { name: "Aalu Jeera", price: "Rs. 170", tag: "veg" },
      { name: "Mustang Aalu", price: "Rs. 220", tag: "veg" },
      { name: "French Fries", price: "Rs. 170", tag: "veg" },
      { name: "Chips Chilly", price: "Rs. 220", tag: "veg" },
      { name: "Wai Wai Sadheko", price: "Rs. 100", tag: "veg" },
      { name: "Green Salad", price: "Rs. 150", tag: "veg" },
      { name: "Nepali Salad", price: "Rs. 180", tag: "veg" },
      { name: "Fruit Salad", price: "Rs. 300", tag: "veg" },
      { name: "Dry Papad", price: "Rs. 100", tag: "veg" },
      { name: "Masala Papad", price: "Rs. 120", tag: "veg" },
      { name: "Peanut Sadheko", price: "Rs. 150", tag: "veg" },
      { name: "Bhatmas Sadheko", price: "Rs. 150", tag: "veg" },
      { name: "Mushroom Pakauda", price: "Rs. 170", tag: "veg" },
      { name: "Veg Pakauda", price: "Rs. 150", tag: "veg" },
      { name: "Paneer Pakauda", price: "Rs. 250", tag: "veg" },
      { name: "Mushroom Chilly", price: "Rs. 220", tag: "veg" },
      { name: "Paneer Chilly", price: "Rs. 280", tag: "veg" },
      { name: "Veg Fry", price: "Rs. 150", tag: "veg" },
      { name: "Kaju Fry", price: "Rs. 400", tag: "veg" },
      { name: "Aalu Tareko", price: "Rs. 200", tag: "veg" },
    ],
  },
  {
    id: "nonveg-snacks",
    label: "Non-Veg Snacks",
    items: [
      { name: "Chicken Fry", price: "Rs. 330", tag: "nonveg" },
      { name: "Chicken Roast", price: "Rs. 350", tag: "nonveg" },
      { name: "Chicken Sadheko", price: "Rs. 350", tag: "nonveg" },
      { name: "Chicken Sekuwa", price: "Rs. 350", tag: "nonveg" },
      { name: "Chicken Chilly", price: "Rs. 350", tag: "nonveg" },
      { name: "Chicken Boil", price: "Rs. 300", tag: "nonveg" },
      { name: "Chicken Chhoila", price: "Rs. 350", tag: "nonveg" },
      { name: "Chicken Drumstick", price: "Rs. 350", tag: "nonveg" },
      { name: "Chicken Leg Piece", price: "Rs. 420", tag: "nonveg" },
      { name: "Mutton Fry", price: "Rs. 500", tag: "nonveg" },
      { name: "Mutton Chilly", price: "Rs. 480", tag: "nonveg" },
      { name: "Mutton Boil", price: "Rs. 400", tag: "nonveg" },
      { name: "Buff Sekuwa", price: "Rs. 250", tag: "nonveg" },
      { name: "Buff Chhoila", price: "Rs. 250", tag: "nonveg" },
      { name: "Buff Chilly", price: "Rs. 270", tag: "nonveg" },
      { name: "Pork Sekuwa", price: "Rs. 400", tag: "nonveg" },
      { name: "Pork Chilly", price: "Rs. 450", tag: "nonveg" },
      { name: "Pork Gravy", price: "Rs. 400", tag: "nonveg" },
      { name: "Sausage Boil / Fry / Chilly", price: "Rs. 200 – 250", tag: "nonveg" },
    ],
  },
  {
    id: "burger-pizza",
    label: "Burger & Pizza",
    items: [
      { name: "Veg Burger", price: "Rs. 150", tag: "veg" },
      { name: "Chicken Burger", price: "Rs. 220", tag: "nonveg" },
      { name: "Crunchy Burger", price: "Rs. 250", tag: "nonveg" },
      { name: "Cheese Burger", price: "Rs. 200" },
      { name: "Veg Pizza", price: "Rs. 400", tag: "veg" },
      { name: "Chicken Pizza", price: "Rs. 500", tag: "nonveg" },
      { name: "Cheese Pizza", price: "Rs. 500" },
      { name: "Mixed Pizza", price: "Rs. 600" },
      { name: "Mushroom Pizza", price: "Rs. 450", tag: "veg" },
    ],
  },
  {
    id: "biryani-sandwich",
    label: "Biryani & Sandwich",
    items: [
      { name: "Veg Biryani", price: "Rs. 250", tag: "veg" },
      { name: "Chicken Biryani", price: "Rs. 350", tag: "nonveg" },
      { name: "Egg Biryani", price: "Rs. 300" },
      { name: "Veg Sandwich", price: "Rs. 170", tag: "veg" },
      { name: "Chicken Sandwich", price: "Rs. 200", tag: "nonveg" },
      { name: "Cheese Sandwich", price: "Rs. 200" },
      { name: "Club Sandwich", price: "Rs. 500" },
      { name: "Egg Sandwich", price: "Rs. 180" },
    ],
  },
  {
    id: "hot-bev",
    label: "Hot Beverages",
    items: [
      { name: "Milk Tea", price: "Rs. 50", tag: "drink" },
      { name: "Black Tea", price: "Rs. 30", tag: "drink" },
      { name: "Lemon Tea", price: "Rs. 40", tag: "drink" },
      { name: "Hot Lemon", price: "Rs. 80", tag: "drink" },
      { name: "Hot Lemon with Honey", price: "Rs. 150", tag: "drink" },
      { name: "Hot Milk", price: "Rs. 80", tag: "drink" },
      { name: "Hot Chocolate", price: "Rs. 150", tag: "drink" },
      { name: "Milk Coffee", price: "Rs. 100", tag: "drink" },
      { name: "Black Coffee", price: "Rs. 70", tag: "drink" },
    ],
  },
  {
    id: "cold-bev",
    label: "Cold Beverages",
    items: [
      { name: "Coke / Fanta / Sprite", price: "Rs. 80", tag: "drink" },
      { name: "Dew / Slice / Pepsi", price: "Rs. 80", tag: "drink" },
      { name: "Mineral Water", price: "Rs. 30", tag: "drink" },
      { name: "Red Bull", price: "Rs. 200", tag: "drink" },
      { name: "Xtreme", price: "Rs. 220", tag: "drink" },
      { name: "Milk Shake", price: "Rs. 100", tag: "drink" },
      { name: "Chocolate Milk Shake", price: "Rs. 170", tag: "drink" },
      { name: "Banana Milk Shake", price: "Rs. 180", tag: "drink" },
      { name: "Banana Lassi", price: "Rs. 150", tag: "drink" },
      { name: "Sweet Lassi", price: "Rs. 120", tag: "drink" },
      { name: "Plain Lassi", price: "Rs. 100", tag: "drink" },
      { name: "Mixed Fruit Lassi", price: "Rs. 250", tag: "drink" },
      { name: "Badam Juice", price: "Rs. 150", tag: "drink" },
      { name: "Real Juice (per glass)", price: "Rs. 150", tag: "drink" },
    ],
  },
];

const tagStyles: Record<string, string> = {
  veg: "bg-leaf/15 text-leaf border-leaf/40",
  nonveg: "bg-crimson/15 text-crimson border-crimson/40",
  drink: "bg-saffron/15 text-saffron border-saffron/40",
};

export function StructuredMenu() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-smooth ${
              active === c.id
                ? "bg-gradient-warm text-primary-foreground border-transparent shadow-warm"
                : "bg-surface text-cream/80 border-gold hover:border-accent hover:text-accent"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Items panel */}
      <div className="max-w-5xl mx-auto bg-gradient-surface rounded-3xl shadow-deep border border-gold p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />
        <div className="relative">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-[10px] uppercase tracking-[0.3em] font-semibold mb-3">
              Menu
            </div>
            <h3 className="font-display text-3xl lg:text-4xl text-cream">{current.label}</h3>
            {current.note && <p className="text-sm text-cream/60 mt-2">{current.note}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {current.items.map((item) => (
              <div
                key={item.name}
                className="flex items-baseline gap-3 border-b border-dashed border-cream/15 pb-3 group"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  {item.tag && (
                    <span
                      className={`hidden sm:inline-block h-2.5 w-2.5 rounded-full ${
                        item.tag === "veg"
                          ? "bg-leaf"
                          : item.tag === "nonveg"
                            ? "bg-crimson"
                            : "bg-saffron"
                      }`}
                      aria-label={item.tag}
                    />
                  )}
                  <span className="font-medium text-cream truncate group-hover:text-accent transition-smooth">
                    {item.name}
                  </span>
                  {item.tag && (
                    <span
                      className={`sm:hidden text-[10px] uppercase px-1.5 py-0.5 rounded border ${tagStyles[item.tag]}`}
                    >
                      {item.tag === "nonveg" ? "non-veg" : item.tag}
                    </span>
                  )}
                </div>
                <div className="flex-1 border-b border-dotted border-cream/15 mx-1 hidden sm:block" />
                <span className="font-semibold text-accent whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-cream/60">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-leaf" /> Veg
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-crimson" /> Non-Veg
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-saffron" /> Beverage
            </span>
            <span>· Prices in NPR, taxes may apply</span>
          </div>
        </div>
      </div>
    </div>
  );
}
