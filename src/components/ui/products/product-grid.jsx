// src/components/products/product-grid.jsx
import ProductCard from "./product-card";

export default function ProductGrid({ products = [] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
