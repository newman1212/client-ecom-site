"use client";

import { useMemo } from "react";
import Link from "next/link";
import { X, Truck, BadgePercent, ShieldCheck } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { getAllProducts } from "@/lib/models/products";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

/**
 * Fresh Modern Cart Sheet
 * - Portal-backed (shadcn Sheet) so it never pushes layout
 * - Zustand store for cart state
 * - Responsive: mobile = full screen, desktop = right panel
 * - Desktop footer: Row1 = Subtotal (left) + Clear cart (right), Row2 = Checkout full width
 * - Includes: single visible close button, free-shipping progress, compact rows, recommendations
 */

const FREE_SHIP_THRESHOLD = 300;

export default function CartSheet({ open, onClose }) {
  // Zustand selectors
  const cart = useCartStore((s) => s.cart);
  const addToCart = useCartStore((s) => s.addToCart);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const clearCart = useCartStore((s) => s.clearCart);
  const totalPrice = useCartStore((s) => s.getTotalPrice());

  // derived values
const itemsCount = useMemo(() => cart.length, [cart]);

  // lightweight recommendations (fallback safe)
  const recommendations = useMemo(() => {
    try {
      const all = getAllProducts();
      const inCart = new Set(cart.map((i) => i.slug));
      return all.filter((p) => !inCart.has(p.slug)).slice(0, 3);
    } catch {
      return [];
    }
  }, [cart]);

  const remaining = Math.max(0, FREE_SHIP_THRESHOLD - totalPrice);
  const progress = Math.min(100, Math.round((totalPrice / FREE_SHIP_THRESHOLD) * 100));

  return (
    <Sheet open={open} onOpenChange={(v) => (!v ? onClose() : null)}>
      <SheetContent
        side="right"
        className="z-[70] w-full sm:max-w-md h-full p-0 flex flex-col bg-white shadow-xl"
      >
        {/* HEADER */}
        <SheetHeader className="flex items-center justify-between p-4 border-b">
          <div>
            <SheetTitle className="text-lg font-semibold">Cart</SheetTitle>
            <p className="text-xs text-gray-500 mt-0.5">
              {itemsCount} item{itemsCount !== 1 ? "s" : ""}
            </p>
          </div>

          {/* single visible, accessible close button */}
          <SheetClose
            aria-label="Close cart"
            className="rounded-full p-2 bg-black text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <X className="h-4 w-4" />
          </SheetClose>
        </SheetHeader>

        {/* FREE SHIPPING PROGRESS */}
        <div className="px-4 pt-3 pb-3 border-b">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Truck className="h-4 w-4 text-gray-600" />
              {remaining > 0 ? (
                <span>
                  GH₵ <strong>{remaining.toFixed(2)}</strong> to free shipping
                </span>
              ) : (
                <span className="text-emerald-600 font-medium">Free shipping unlocked 🎉</span>
              )}
            </div>
            <div className="text-[11px] text-gray-500 hidden sm:block">Threshold GH₵{FREE_SHIP_THRESHOLD}</div>
          </div>

          <div className="mt-2 h-2 w-full rounded bg-gray-100 overflow-hidden">
            <div
              className="h-full bg-black transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* ITEM LIST */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm text-gray-500">Your cart is empty.</p>
              <Link
                href="/products"
                onClick={onClose}
                className="mt-3 inline-block text-sm font-medium text-black underline"
              >
                Continue shopping →
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.slug} className="flex gap-3 items-start">
                <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                      Image
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.name}</p>

                  <div className="mt-1 flex items-center justify-between gap-3">
                    <p className="text-xs text-gray-500">GH₵ {item.price.toFixed(2)}</p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                        className="px-2 py-0.5 border rounded text-sm hover:bg-gray-100"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>

                      <span className="text-sm tabular-nums px-1">{item.quantity}</span>

                      <button
                        onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                        className="px-2 py-0.5 border rounded text-sm hover:bg-gray-100"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <button
                      onClick={() => removeFromCart(item.slug)}
                      className="text-xs text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                    <p className="text-xs text-gray-500">GH₵ {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Recommendations */}
          {cart.length > 0 && recommendations.length > 0 && (
            <div className="mt-2">
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <BadgePercent className="h-4 w-4 text-gray-600" />
                <span className="font-medium">You might like</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {recommendations.map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => addToCart(p)}
                    className="flex flex-col items-start gap-2 text-left border rounded-md p-2 hover:shadow-sm"
                  >
                    <div className="w-full aspect-square bg-gray-100 rounded overflow-hidden">
                      {p.image ? (
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">Image</div>
                      )}
                    </div>
                    <p className="text-xs font-medium line-clamp-1">{p.name}</p>
                    <p className="text-xs text-gray-500">GH₵ {p.price.toFixed(2)}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* FOOTER — Row1: subtotal + clear | Row2: checkout full width */}
        {/* ---------- Paste this block in place of your current SheetFooter ---------- */}
<SheetFooter className="border-t p-4 bg-white md:sticky md:bottom-0">
  <div className="max-w-full">
    {/* Row 1 on desktop: subtotal (left) + clear (right).
        On mobile this row shows subtotal only; clear button is moved below. */}
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-start gap-4">
        <div>
          <div className="text-sm font-medium">Subtotal</div>
          <div className="text-sm font-semibold tabular-nums">GH₵ {totalPrice.toFixed(2)}</div>
        </div>

        {/* trust note - visible only on desktop */}
        <div className="hidden md:flex items-center text-xs text-gray-500">
          Secure checkout • 14-day returns
        </div>
      </div>

      {/* Clear button: visible on desktop (right side of row 1) */}
      <div className="hidden md:flex md:items-center">
        <button
          onClick={clearCart}
          className="px-3 py-2 border rounded text-sm text-red-600 hover:bg-red-50 md:min-w-[120px]"
        >
          Clear cart
        </button>
      </div>
    </div>

    {/* Row 2: Checkout (full width). On mobile Clear button appears below this. */}
    <div className="mt-3 grid gap-2">
      {/* Checkout - full width; prominent */}
      <SheetClose asChild>
        <button className="w-full bg-black text-white py-3 rounded text-sm font-semibold hover:bg-black/90">
          Checkout
        </button>
      </SheetClose>

      {/* Clear button for mobile (shown only on small screens) */}
      <div className="md:hidden">
        <button
          onClick={clearCart}
          className="w-full px-3 py-2 border rounded text-sm text-red-600 hover:bg-red-50"
        >
          Clear cart
        </button>
      </div>
    </div>
  </div>
</SheetFooter>
{/* ------------------------------------------------------------------------- */}

      </SheetContent>
    </Sheet>
  );
}
