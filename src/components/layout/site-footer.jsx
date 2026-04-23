// src/components/layout/site-footer.jsx
import Container from "./container";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white py-10 mt-10">
      <Container className="flex flex-col md:flex-row justify-between gap-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} NovaShop. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </Container>
    </footer>
  );
}
