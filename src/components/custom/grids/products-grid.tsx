import React from "react";
import ProductCard from "../cards/product-card";

export default function ProductsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
