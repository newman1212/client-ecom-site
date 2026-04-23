// src/lib/mockProducts.js

// src/lib/mockProducts.js

export const mockProducts = [
  {
    _id: "1",
    slug: "classic-white-tshirt",
    name: "Classic White T-Shirt",
    price: 120,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    parentCategory: "clothing",
    category: "men",
  },
  {
    _id: "2",
    slug: "black-oversized-hoodie",
    name: "Black Oversized Hoodie",
    price: 260,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3c89",
    parentCategory: "clothing",
    category: "hoodies",
  },
  {
    _id: "3",
    slug: "summer-floral-dress",
    name: "Summer Floral Dress",
    price: 320,
    image: "https://images.unsplash.com/photo-1520975918313-46e6d09479da",
    parentCategory: "clothing",
    category: "women",
  },
  {
    _id: "4",
    slug: "running-sneakers",
    name: "Running Sneakers",
    price: 420,
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a6f88",
    parentCategory: "shoes",
    category: "sneakers",
  },
  {
    _id: "5",
    slug: "vintage-leather-boots",
    name: "Vintage Leather Boots",
    price: 500,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
    parentCategory: "shoes",
    category: "boots",
  },
  {
    _id: "6",
    slug: "minimalist-backpack",
    name: "Minimalist Backpack",
    price: 240,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    parentCategory: "accessories",
    category: "bags",
  },
  {
    _id: "7",
    slug: "smart-fitness-watch",
    name: "Smart Fitness Watch",
    price: 780,
    image: "https://images.unsplash.com/photo-1511732351661-5a81f9520a94",
    parentCategory: "tech",
    category: "wearables",
  },
];


/* ------------------------------------------------------------------ */
/* HELPERS — future-proof (API / DB compatible)                        */
/* ------------------------------------------------------------------ */

export function getAllProducts() {
  return mockProducts;
}

export function getProductBySlug(slug) {
  return mockProducts.find((product) => product.slug === slug);
}

export function getProductsByCategory(category, subCategory) {
  return mockProducts.filter((product) => {
    if (category && category !== "all" && product.category !== category) {
      return false;
    }

    if (subCategory && product.subCategory !== subCategory) {
      return false;
    }

    return true;
  });
}
