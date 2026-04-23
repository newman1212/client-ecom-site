"use client";

export default function FilterSortBar() {
  return (
    <div className="flex items-center justify-between bg-white shadow p-4 rounded-lg mb-4">
      <p className="font-medium text-gray-700">Showing Results</p>

      <select className="border rounded-lg px-3 py-2 text-sm">
        <option value="default">Sort By: Default</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}
