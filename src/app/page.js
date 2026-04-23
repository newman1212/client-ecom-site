// src/app/page.jsx
import Container from "@/components/layout/container";
import ProductGrid from "@/components/ui/products/product-grid";
import { getFeaturedProducts } from "@/lib/models/products";

export default function HomePage() {
  const products = getFeaturedProducts();

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs mb-4">
              ✨ New drop this week
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Elevate your style. Shop premium, sustainably crafted products.
            </h1>
            <p className="text-gray-500 mb-6">
              Curated collections, fast delivery, secure payments. Built for
              modern brands and growing businesses.
            </p>
            <div className="flex gap-4">
              <a
                href="/products"
                className="bg-black text-white px-5 py-2 rounded-md text-sm font-medium"
              >
                Shop now
              </a>
              <a
                href="/collections"
                className="text-sm font-medium hover:underline"
              >
                View collections →
              </a>
            </div>
            <div className="mt-6 flex gap-6 text-xs text-gray-500">
              <p>✔ 14-day returns</p>
              <p>✔ Secured checkout</p>
              <p>✔ Trusted by 2K+ buyers</p>
            </div>
          </div>
          <div className="h-72 bg-white rounded-2xl border shadow-sm flex items-center justify-center text-gray-300">
            {/* later: replace with product collage */}
            Product showcase
          </div>
        </Container>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-12">
        <Container>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold tracking-tight">
              Featured products
            </h2>
            <a href="/products" className="text-sm text-gray-500 hover:underline">
              View all
            </a>
          </div>
          <ProductGrid products={products} />
        </Container>
      </section>
    </>
  );
}
