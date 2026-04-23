"use client";

import Link from "next/link";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

export default function ProductCard({
  slug,
  name,
  price,
  image,
}) {
  const cart = useCartStore((s) => s.cart);
  const addToCart = useCartStore((s) => s.addToCart);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  const cartItem = cart.find((item) => item.slug === slug);
  const quantity = cartItem?.quantity || 0;

  return (
    <article
      className="
        group relative bg-white rounded-2xl border
        overflow-hidden transition-all duration-300
        hover:shadow-lg hover:-translate-y-0.5
      "
    >
      {/* CLICKABLE OVERLAY */}
      <Link
        href={`/products/${slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${name}`}
      />

      {/* IMAGE */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* CTA (ABOVE LINK) */}
        <div
          className="
            absolute bottom-3 left-1/2 -translate-x-1/2
            opacity-0 translate-y-3
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
            z-20
          "
        >
          {quantity === 0 ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                addToCart({ slug, name, price, image });
              }}
              className="
                flex items-center gap-2
                bg-black text-white text-xs font-medium
                px-4 py-2 rounded-full
                hover:bg-black/90
              "
            >
              <ShoppingCart className="w-4 h-4" />
              Add to cart
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-white border rounded-full px-2 py-1 shadow-sm">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  updateQuantity(slug, quantity - 1);
                }}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>

              <span className="min-w-[20px] text-center text-sm font-medium">
                {quantity}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  updateQuantity(slug, quantity + 1);
                }}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-1 relative z-20">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {name}
        </h3>

        <p className="text-sm font-semibold text-gray-800">
          GH₵ {price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}
