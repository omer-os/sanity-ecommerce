import React from "react";

export default function Page() {
  return (
    <div className="container flex flex-col py-4">
      <div className="flex flex-row">
        <div className="flex w-5/12 gap-4">
          <div className="flex flex-col gap-3">
            <figure className="h-32 w-32 rounded-md bg-gray-200"></figure>
            <figure className="h-32 w-32 rounded-md bg-gray-200"></figure>
            <figure className="h-32 w-32 rounded-md bg-gray-200"></figure>
          </div>
          <figure className="h-full w-full rounded-md bg-gray-200"></figure>
        </div>
        <div className="ml-4 flex-1">
          <div className="text-3xl font-bold">Product Name</div>
          <div className="mt-2 text-xl text-muted-foreground">3,000 IQD</div>
          <div className="mt-4">
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
