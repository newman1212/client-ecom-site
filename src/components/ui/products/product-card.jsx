// src/components/products/product-card.jsx
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group border rounded-lg overflow-hidden bg-white hover:shadow-sm transition"
    >
      <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-300 text-xs">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          "Image"
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium group-hover:text-black/80">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-2">{product.category}</p>
        <p className="text-base font-semibold">GH₵ {product.price}</p>
      </div>
    </Link>
  );
}
