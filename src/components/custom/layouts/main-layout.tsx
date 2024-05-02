import React from "react";
import MainNavbar from "./main-navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNavbar />
      {children}
    </div>
  );
}
