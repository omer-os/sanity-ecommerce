import React from "react";
import ProductsGrid from "~/components/custom/grids/products-grid";

export default function Page() {
  return (
    <div className="container py-5">
      <div className="text-3xl">Category Name</div>

      <div className="mt-4">
        <ProductsGrid />
      </div>
    </div>
  );
}
