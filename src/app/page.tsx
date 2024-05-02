import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import StHeroCarousel from "~/components/custom/carousels/st-hero-carousel";
import ProductsGrid from "~/components/custom/grids/products-grid";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export default function Page() {
  return (
    <div className="container py-4">
      <StHeroCarousel
        images={[
          "https://store.accretence.com/_next/image?url=https%3A%2F%2Fmarketplace.canva.com%2FEAFOMzwkPtk%2F1%2F0%2F1600w%2Fcanva-chic-website-homepage-fashion-collage-banner-QtOtaBX5FCE.jpg&w=2048&q=75",
          "https://store.accretence.com/_next/image?url=https%3A%2F%2Fglobaltv.es%2Fwp-content%2Fuploads%2F2022%2F10%2Fbang-olufsen-salon.webp&w=2048&q=75",
          "https://store.accretence.com/_next/image?url=https%3A%2F%2Fmarketplace.canva.com%2FEAFhXw50O8Q%2F1%2F0%2F1600w%2Fcanva-beige-minimalist-fashion-collection-photo-collage-banner-VTuOcmKhSd4.jpg&w=2048&q=75",
        ]}
      />

      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Lasest Drops</h1>

          <Link href="/categories/1">
            <Button variant={"ghost"}>
              View More
              <ChevronRight size={16} />
            </Button>
          </Link>
        </div>
        <ProductsGrid />
      </div>
      <Separator className="mb-2 mt-6" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">More Types</h1>

          <Link href="/categories/1">
            <Button variant={"ghost"}>
              View More
              <ChevronRight size={16} />
            </Button>
          </Link>
        </div>
        <ProductsGrid />
      </div>
    </div>
  );
}
