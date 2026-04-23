// // src/app/layout.jsx
// import "./globals.css";
// import SiteHeader from "@/components/layout/site-header";
// import SiteFooter from "@/components/layout/site-footer";

// export const metadata = {
//   title: "Nova Commerce",
//   description: "Modern e-commerce experience built with Next.js",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="min-h-full bg-background">
//       <body className="min-h-screen flex flex-col">
//         {/* Header */}
//         <SiteHeader />

//         {/* Page content */}
//         <main className="flex-1 pt-[96px]">{children}</main>


//         {/* Footer */}
//         <SiteFooter />
//       </body>
//     </html>
//   );
// }





// src/app/layout.jsx
import "./globals.css";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

export const metadata = {
  title: "Nova Commerce",
  description: "Modern e-commerce experience built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-full bg-background">
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <SiteHeader />

        {/* Page content */}
        <main className="flex-1 pt-[96px]">
          {children}
        </main>

        {/* Footer */}
        <SiteFooter />
      </body>
    </html>
  );
}

