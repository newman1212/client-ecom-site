// src/components/layout/container.jsx
// export default function Container({ children, className = "" }) {
//   return (
//     <div className={`mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 ${className}`}>
//       {children}
//     </div>
//   );
// }



export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
