import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

export default function ProductCard() {
  return (
    <Link href={`/products/1`}>
      <Card>
        <CardHeader className="p-0">
          <figure className="h-64 w-full rounded-t-md">
            <img
              src="https://storefront.saleor.io/_next/image?url=https%3A%2F%2Fstorefront1.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fsaleor-pauls-blanace-420-1_thumbnail_1024.webp&w=750&q=75"
              alt=""
              className="h-full w-full object-contain"
            />
          </figure>
        </CardHeader>
        <CardContent>
          <div className="pt-4 text-xl font-bold">Product Name</div>
          <div className="text-muted-foreground">3,000 IQD</div>
        </CardContent>
      </Card>
    </Link>
  );
}
