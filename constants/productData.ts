// Centralised product & category seed data for the app.
// Uses a single icon family: Ionicons (from @expo/vector-icons)
// Keep datasets small & easily swappable.

// -------- Types --------
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // price in INR (₹) – treat as display value (no paise)
  image: string; // remote image URL or local asset (require)
  unit?: string; // optional (e.g. "500g", "1L")
  frequentlyBought: boolean; // randomly assigned for now
};

export type Category = {
  id: string;
  label: string;
  icon: string; // Ionicons name
  themeColor?: string; // optional accent color for UI chips / backgrounds
  products: Product[];
};

// -------- Category + Product Data --------
// NOTE: Local product images not added yet – using lightweight Unsplash placeholders.
// Replace URLs with `require("@/assets/images/xyz.png")` if/when you add local images.

export const CATEGORIES: Category[] = [
  {
    id: "fruits",
    label: "Fruits",
    icon: "nutrition",
    themeColor: "#F97316",
    products: [
      {
        id: "apple-royal-gala",
        name: "Royal Gala Apples",
        description: "Crisp, mildly sweet apples – perfect for snacking.",
        price: 120,
        unit: "4 pcs (~500g)",
        image:
          "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: true,
      },
      {
        id: "banana-robusta",
        name: "Bananas (Robusta)",
        description: "Energy rich ripe bananas, natural potassium boost.",
        price: 55,
        unit: "6 pcs (~650g)",
        image:
          "https://images.unsplash.com/photo-1574226516831-e1dff420e43e?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: false,
      },
      {
        id: "blueberries-imported",
        name: "Blueberries",
        description: "Antioxidant rich, sweet-tart berries.",
        price: 210,
        unit: "125g box",
        image:
          "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: false,
      },
    ],
  },
  {
    id: "vegetables",
    label: "Vegetables",
    icon: "leaf",
    themeColor: "#22C55E",
    products: [
      {
        id: "tomato-hybrid",
        name: "Tomatoes (Hybrid)",
        description: "Juicy red hybrid tomatoes for everyday cooking.",
        price: 35,
        unit: "500g",
        image:
          "https://images.unsplash.com/photo-1582281298056-0209d3493d87?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: false,
      },
      {
        id: "potato-fresh",
        name: "Potatoes",
        description: "Firm fresh potatoes – multipurpose staple.",
        price: 29,
        unit: "1kg",
        image:
          "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: true,
      },
      {
        id: "spinach-bunch",
        name: "Spinach Bunch",
        description: "Iron-rich leafy greens – rinse & sauté.",
        price: 25,
        unit: "1 bunch (~180g)",
        image:
          "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: false,
      },
    ],
  },
  {
    id: "dairy",
    label: "Dairy",
    icon: "ice-cream",
    themeColor: "#3B82F6",
    products: [
      {
        id: "milk-toned",
        name: "Toned Milk",
        description: "Fresh pasteurised toned milk – daily nutrition.",
        price: 56,
        unit: "1L pack",
        image:
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: true,
      },
      {
        id: "curd-fresh",
        name: "Fresh Curd",
        description: "Thick cultured curd – probiotic rich.",
        price: 40,
        unit: "400g tub",
        image:
          "https://images.unsplash.com/photo-1600166898405-da9535204840?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: false,
      },
      {
        id: "cheese-slices",
        name: "Cheese Slices",
        description: "Mild processed cheese slices – melts evenly.",
        price: 125,
        unit: "10 slices (200g)",
        image:
          "https://images.unsplash.com/photo-1603046891744-56b8fe9c67a6?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: false,
      },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    icon: "cafe",
    themeColor: "#8B5CF6",
    products: [
      {
        id: "coffee-instant",
        name: "Instant Coffee",
        description: "Aromatic freeze-dried coffee granules.",
        price: 320,
        unit: "100g jar",
        image:
          "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: false,
      },
      {
        id: "green-tea-bags",
        name: "Green Tea Bags",
        description: "Light antioxidant-rich green tea infusion.",
        price: 160,
        unit: "25 bags",
        image:
          "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: true,
      },
      {
        id: "coconut-water",
        name: "Natural Coconut Water",
        description: "Hydrating and naturally sweet.",
        price: 55,
        unit: "200ml tetra",
        image:
          "https://images.unsplash.com/photo-1622050950848-e04b8b5224cf?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: false,
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    icon: "fast-food",
    themeColor: "#EC4899",
    products: [
      {
        id: "nacho-chips",
        name: "Nacho Corn Chips",
        description: "Crispy lightly salted corn tortilla chips.",
        price: 85,
        unit: "150g pack",
        image:
          "https://images.unsplash.com/photo-1601924582971-b557a5817c4b?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: false,
      },
      {
        id: "protein-bar-choco",
        name: "Protein Choco Bar",
        description: "High protein bar with dark chocolate coating.",
        price: 99,
        unit: "50g",
        image:
          "https://images.unsplash.com/photo-1614707267537-3d85b40c1226?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: true,
      },
      {
        id: "roasted-almonds",
        name: "Roasted Almonds",
        description: "Crunchy lightly salted premium almonds.",
        price: 210,
        unit: "100g pouch",
        image:
          "https://images.unsplash.com/photo-1606756790138-261f08bfe6b9?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: false,
      },
    ],
  },
  {
    id: "bakery",
    label: "Bakery",
    icon: "egg",
    themeColor: "#F59E0B",
    products: [
      {
        id: "bread-wholewheat",
        name: "Whole Wheat Bread",
        description: "Soft high-fibre brown sandwich loaf.",
        price: 55,
        unit: "400g loaf",
        image:
          "https://images.unsplash.com/photo-1608198093002-ad4e005484b2?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: true,
      },
      {
        id: "croissant-butter",
        name: "Butter Croissant",
        description: "Flaky, airy, golden layered pastry.",
        price: 65,
        unit: "1 pc",
        image:
          "https://images.unsplash.com/photo-1548940740-204726a19be3?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: false,
      },
      {
        id: "cookies-chocochip",
        name: "Choco Chip Cookies",
        description: "Buttery cookies loaded with dark chips.",
        price: 110,
        unit: "200g box",
        image:
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&auto=format&fit=crop&q=60",
        frequentlyBought: false,
      },
    ],
  },
];

// Grid-friendly lightweight projection (e.g. top feature grid / horizontal scroll)
export const FEATURE_CATEGORIES = CATEGORIES.slice(0, 6).map(
  ({ id, label, icon, themeColor }) => ({ id, label, icon, themeColor })
);
