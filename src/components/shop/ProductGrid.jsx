"use client";

import { useMemo } from "react";
import { mockProducts } from "@/lib/mockProducts";
import ProductCard from "./ProductCard";

export default function ProductGrid({ filters}) {

  const {category,subCategory} = filters;

   console.log(category,"this is category inside prod grid")
   
const filteredProducts = useMemo(() => {
  // Show everything
  if (category === "all") return mockProducts;

  return mockProducts.filter((product) => {
    // Must match top-level category
    if (product.parentCategory !== category) return false;

    // If no subcategory selected, show all under parent
    if (!subCategory) return true;

    // Must match selected subcategory
    return product.category === subCategory;
  });
}, [category, subCategory]);


  if (filteredProducts.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500 text-sm">
        No products found in this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((p) => (
        <ProductCard
          key={p.slug}
          slug={p.slug}
          name={p.name}
          price={p.price}
          image={p.image}
        />
      ))}
    </div>
  );
}
