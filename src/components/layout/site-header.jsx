// // src/components/layout/site-header.jsx
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import Container from "./container";
// import { useCartStore } from "@/store/cart-store";
// import CartSheet from "./cart-sheet";
// import { Search, X } from "lucide-react";

// export default function SiteHeader() {
//   const [cartOpen, setCartOpen] = useState(false);
//   const [mobileNavOpen, setMobileNavOpen] = useState(false);
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

//   const totalItems = useCartStore((s) => s.getTotalItems());

//   return (
//     <header className="fixed inset-x-0 top-0 z-[60] bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">

//       {/* ANNOUNCEMENT BAR */}
//       <div className="bg-black text-white text-sm py-2 text-center">
//         🚀 Free shipping on orders over GH₵300 — Limited time only!
//       </div>

//       <Container className="flex h-16 items-center justify-between gap-4">

//         {/* LOGO */}
//         <Link href="/" className="text-xl font-bold tracking-tight">
//           Nova<span className="text-gray-400">Shop</span>
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:flex gap-6 text-sm font-medium">
//           <Link href="/products" className="hover:text-black/70">Shop</Link>
//           <Link href="/collections" className="hover:text-black/70">Collections</Link>
//           <Link href="/about" className="hover:text-black/70">About</Link>
//         </nav>

//         {/* DESKTOP SEARCH BAR */}
//         <div className="hidden md:block flex-1 max-w-xs">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />

//             <input
//               type="text"
//               placeholder="Search products..."
//               className="
//                 w-full pl-10 pr-4 py-2 rounded-full 
//                 border border-gray-200 bg-white/70 
//                 shadow-sm focus:bg-white focus:ring-2 focus:ring-black/10 
//                 transition-all duration-200
//               "
//             />
//           </div>
//         </div>

//         {/* CART + MOBILE BUTTONS */}
//         <div className="flex items-center gap-3">

//           {/* MOBILE SEARCH ICON */}
//           <button
//             className="md:hidden p-2 rounded-full hover:bg-gray-100"
//             onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
//           >
//             <Search className="h-5 w-5" />
//           </button>

//           {/* CART BUTTON */}
//           <button
//             onClick={() => setCartOpen(true)}
//             className="relative rounded-full border px-3 py-1 text-sm hover:bg-gray-50"
//           >
//             Cart
//             {totalItems > 0 && (
//               <span className="absolute -right-2 -top-2 text-xs bg-black text-white w-5 h-5 rounded-full flex items-center justify-center">
//                 {totalItems}
//               </span>
//             )}
//           </button>

//           {/* MOBILE NAV TOGGLE */}
//           <button
//             className="md:hidden text-xl"
//             onClick={() => setMobileNavOpen(!mobileNavOpen)}
//           >
//             ☰
//           </button>
//         </div>
//       </Container>

//       {/* --- MOBILE SEARCH FIELD (SLIDE DOWN) --- */}
//       <div
//         className={`
//           md:hidden overflow-hidden transition-all duration-300 
//           ${mobileSearchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}
//         `}
//       >
//         <Container className="py-3">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
//             <button
//               className="absolute right-3 top-1/2 -translate-y-1/2"
//               onClick={() => setMobileSearchOpen(false)}
//             >
//               <X className="h-5 w-5 text-gray-500" />
//             </button>

//             <input
//               type="text"
//               placeholder="Search products..."
//               className="
//                 w-full pl-10 pr-10 py-2 rounded-full 
//                 border border-gray-200 bg-white
//                 shadow-sm focus:ring-2 focus:ring-black/10 
//                 transition-all
//               "
//             />
//           </div>
//         </Container>
//       </div>

//       {/* MOBILE NAV */}
//       {mobileNavOpen && (
//         <div className="md:hidden border-t bg-white">
//           <Container className="py-3 flex flex-col gap-3">
//             <Link href="/products" onClick={() => setMobileNavOpen(false)}>Shop</Link>
//             <Link href="/collections" onClick={() => setMobileNavOpen(false)}>Collections</Link>
//             <Link href="/about" onClick={() => setMobileNavOpen(false)}>About</Link>
//           </Container>
//         </div>
//       )}

//       {/* CART SHEET */}
//       <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} />
//     </header>
//   );
// }






"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./container";
import { useCartStore } from "@/store/cart-store";
import CartSheet from "./cart-sheet";
import { Search, X } from "lucide-react";

export default function SiteHeader() {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const totalItems = useCartStore((s) => s.getTotalItems());

  return (
    <header className="fixed inset-x-0 top-0 z-[60] bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">

      {/* ANNOUNCEMENT BAR */}
      <div className="bg-black text-white text-sm py-2 text-center">
        🚀 Free shipping on orders over GH₵300 — Limited time only!
      </div>

      {/* MAIN NAV BAR */}
      <Container className="flex h-16 items-center justify-between gap-4 relative">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Nova<span className="text-gray-400">Shop</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/products" className="hover:text-black/70">Shop</Link>
          <Link href="/collections" className="hover:text-black/70">Collections</Link>
          <Link href="/about" className="hover:text-black/70">About</Link>
        </nav>

        {/* DESKTOP SEARCH */}
        <div className="hidden md:block flex-1 max-w-xs">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="
                w-full pl-10 pr-4 py-2 rounded-full
                border border-gray-200 bg-white/70
                shadow-sm focus:bg-white focus:ring-2 focus:ring-black/10
                transition
              "
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">

          {/* MOBILE SEARCH ICON */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMobileSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </button>

          {/* CART */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative rounded-full border px-3 py-1 text-sm hover:bg-gray-50"
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 text-xs bg-black text-white w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* MOBILE NAV */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE SEARCH OVERLAY (NO LAYOUT SHIFT) */}
        {mobileSearchOpen && (
          <div className="md:hidden absolute inset-x-0 top-full bg-white border-b shadow-sm z-[70]">
            <Container className="py-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setMobileSearchOpen(false)}
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="
                    w-full pl-10 pr-10 py-2 rounded-full
                    border border-gray-200 bg-white
                    shadow-sm focus:ring-2 focus:ring-black/10
                  "
                />
              </div>
            </Container>
          </div>
        )}
      </Container>

      {/* MOBILE NAV MENU */}
      {mobileNavOpen && (
        <div className="md:hidden border-t bg-white">
          <Container className="py-3 flex flex-col gap-3">
            <Link href="/products" onClick={() => setMobileNavOpen(false)}>Shop</Link>
            <Link href="/collections" onClick={() => setMobileNavOpen(false)}>Collections</Link>
            <Link href="/about" onClick={() => setMobileNavOpen(false)}>About</Link>
          </Container>
        </div>
      )}

      {/* CART SHEET */}
      <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}

