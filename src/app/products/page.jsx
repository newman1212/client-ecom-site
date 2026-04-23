"use client";

import { useState } from "react";
import CategoryTopBar from "@/components/shop/CategorySidebar";
import ProductGrid from "@/components/shop/ProductGrid";

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: "all",
    subCategory: null,
  });


 

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-3 md:px-6">

        {/* CATEGORY TOP BAR */}
        <CategoryTopBar
          activeCategory={filters.category}
          activeSubCategory={filters.subCategory}
          onChange={(nextFilters) =>
            setFilters((prev) => ({ ...prev, ...nextFilters }))
          }
        />

        {/* MAIN PRODUCT AREA */}
        <main className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Shop
            </h1>
          </div>

          <ProductGrid filters={filters} />
        </main>

      </div>
    </div>
  );
}
