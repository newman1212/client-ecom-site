// src/lib/products.js
const PRODUCTS = [
  {
    name: "Minimalist Leather Tote",
    slug: "minimalist-leather-tote",
    price: 550,
    category: "Bags",
    image: "",
    featured: true,
  },
  {
    name: "Essential Hoodie",
    slug: "essential-hoodie",
    price: 320,
    category: "Apparel",
    image: "",
    featured: true,
  },
  {
    name: "Wireless Earbuds Pro",
    slug: "wireless-earbuds-pro",
    price: 799,
    category: "Electronics",
    image: "",
    featured: true,
  },
  {
    name: "Smart Desk Lamp",
    slug: "smart-desk-lamp",
    price: 240,
    category: "Home",
    image: "",
    featured: true,
  },
];

export function getAllProducts() {
  return PRODUCTS;
}

export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured);
}

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
