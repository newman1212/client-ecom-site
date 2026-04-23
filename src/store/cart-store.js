import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],

  // ✅ Add item
  addToCart: (product) => {
    const cart = get().cart;
    const existing = cart.find((item) => item.slug === product.slug);
    if (existing) {
      set({
        cart: cart.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },

  // ✅ Remove item
  removeFromCart: (slug) =>
    set({ cart: get().cart.filter((item) => item.slug !== slug) }),

  // ✅ Update quantity
  updateQuantity: (slug, quantity) => {
    if (quantity <= 0) {
      set({ cart: get().cart.filter((item) => item.slug !== slug) });
    } else {
      set({
        cart: get().cart.map((item) =>
          item.slug === slug ? { ...item, quantity } : item
        ),
      });
    }
  },

  // ✅ Clear all
  clearCart: () => set({ cart: [] }),

  // ✅ Derived values
 getTotalItems: () => get().cart.length, // 👈 DISTINCT PRODUCTS
  getTotalQuantity: () =>
    get().cart.reduce((acc, cur) => acc + cur.quantity, 0), // optional
  getTotalPrice: () =>
    get().cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
}));