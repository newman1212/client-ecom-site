"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CATEGORIES = [
  { name: "All", slug: "all", children: [] },

  {
    name: "Clothing",
    slug: "clothing",
    children: ["Men", "Women", "Kids", "Hoodies", "T-Shirts", "Jackets"],
  },
  {
    name: "Shoes",
    slug: "shoes",
    children: ["Sneakers", "Boots", "Sandals", "Running Shoes"],
  },
  {
    name: "Accessories",
    slug: "accessories",
    children: ["Bags", "Watches", "Glasses", "Hats", "Jewelry"],
  },
  {
    name: "Tech",
    slug: "tech",
    children: ["Audio", "Wearables", "Smart Home", "Gaming"],
  },
  {
    name: "Beauty",
    slug: "beauty",
    children: ["Skincare", "Haircare", "Fragrance"],
  },
  {
    name: "Home",
    slug: "home",
    children: ["Kitchen", "Decor", "Lighting", "Furniture"],
  },
];

export default function CategoryTopBar({
  activeCategory,
  activeSubCategory,
  onChange,
}) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleCategoryClick = (cat) => {
    const hasChildren = cat.children.length > 0;

    onChange({
      category: cat.slug,
      subCategory: null,
    });

    if (hasChildren) {
      setOpenDropdown((prev) => (prev === cat.slug ? null : cat.slug));
    } else {
      setOpenDropdown(null);
    }
  };

  const handleSubCategoryClick = (catSlug, sub) => {
    onChange({
      category: catSlug,
      subCategory: sub,
    });
    setOpenDropdown(null);
  };

  return (
    <div className="bg-white border-b shadow-sm py-3 sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-4 mt-1">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.slug;
            const hasChildren = cat.children.length > 0;
            const isOpen = openDropdown === cat.slug;

            return (
              <div key={cat.slug} className="relative">
                {/* CATEGORY BUTTON */}
                <button
                  onClick={() => handleCategoryClick(cat)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {cat.name}

                  {hasChildren && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* DROPDOWN */}
                {isOpen && hasChildren && (
                  <div className="absolute left-0 mt-2 w-44 bg-white border rounded-xl shadow-lg p-2 space-y-1 z-50">
                    {cat.children.map((sub) => (
                      <button
                        key={sub}
                        onClick={() =>
                          handleSubCategoryClick(cat.slug, sub)
                        }
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition
                          ${
                            activeSubCategory === sub
                              ? "bg-black text-white"
                              : "hover:bg-gray-100"
                          }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
