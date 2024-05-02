import React from "react";
import CategoriesFlex from "~/components/custom/flex/categories-flex";
import ProductsGrid from "~/components/custom/grids/products-grid";

export default function Page() {
  return (
    <div className="container py-4">
      <CategoriesFlex />

      <div className="flex flex-col gap-3">
        <h1 className="text-lg">Products</h1>
        <ProductsGrid />
      </div>
    </div>
  );
}
