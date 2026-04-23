import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/mockProducts";
import AddToCartButton from "@/components/ui/products/add-to-cart-button";

export default async function ProductPage({ params }) {
  // ✅ unwrap params (REQUIRED in App Router)
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      
      {/* IMAGE */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* DETAILS */}
      <div>
        <h1 className="text-2xl font-semibold">{product.name}</h1>

        <p className="text-xl font-medium mt-2">
          GH₵ {product.price.toFixed(2)}
        </p>

        <p className="text-sm text-gray-600 mt-4">
          {product.description}
        </p>

        <div className="mt-6">
          <AddToCartButton product={product} />
        </div>

        <div className="mt-8 border-t pt-4 text-sm text-gray-500">
          Category: {product.category}
        </div>
      </div>
    </div>
  );
}
