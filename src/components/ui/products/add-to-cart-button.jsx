"use client";

import { ShoppingCart, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

export default function AddToCartButton({ product }) {
  const { slug, name, price, image } = product;

  const cart = useCartStore((s) => s.cart);
  const addToCart = useCartStore((s) => s.addToCart);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  // 🔑 same logic as ProductCard
  const cartItem = cart.find((item) => item.slug === slug);
  const quantity = cartItem?.quantity || 0;

  if (quantity === 0) {
    return (
      <button
        onClick={() =>
          addToCart({
            slug,
            name,
            price,
            image,
          })
        }
        className="
          flex items-center gap-2
          bg-black text-white
          px-6 py-3 rounded-full
          text-sm font-medium
          hover:bg-black/90
        "
      >
        <ShoppingCart className="w-4 h-4" />
        Add to cart
      </button>
    );
  }

  return (
    <div
      className="
        inline-flex items-center gap-3
        bg-white border rounded-full
        px-3 py-2 shadow-sm
      "
    >
      <button
        onClick={() => updateQuantity(slug, quantity - 1)}
        className="p-1 rounded-full hover:bg-gray-100"
      >
        <Minus className="w-4 h-4" />
      </button>

      <span className="min-w-[24px] text-center font-medium">
        {quantity}
      </span>

      <button
        onClick={() => updateQuantity(slug, quantity + 1)}
        className="p-1 rounded-full hover:bg-gray-100"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
