import Link from "next/link";
import React from "react";

export default function MainNavbar() {
  return (
    <div className="sticky left-0 top-0 z-50 border-b bg-background">
      <nav className="container flex h-14 items-center justify-between border-b">
        <Link href={"/"} className="text-xl font-bold">
          Acme Store
        </Link>
      </nav>
    </div>
  );
}
