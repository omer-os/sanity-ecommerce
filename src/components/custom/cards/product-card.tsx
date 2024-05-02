import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

export default function ProductCard() {
  return (
    <Link href={`/products/1`}>
      <Card>
        <CardHeader className="p-0">
          <figure className="h-64 w-full rounded-t-md bg-gray-200"></figure>
        </CardHeader>
        <CardContent>
          <div className="pt-4 text-xl font-bold">Product Name</div>
          <div className="text-muted-foreground">3,000 IQD</div>
        </CardContent>
      </Card>
    </Link>
  );
}
