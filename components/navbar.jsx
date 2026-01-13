"use client";
import { ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const linkClass = (p) =>
    `pb-1 transition ${
      path === p
        ? "border-b-2 border-[#FFC107] text-black font-semibold"
        : "hover:text-black"
    }`;

  return (
    <nav
      className="flex items-center justify-between px-12 py-4
      bg-[#FFF9E6]/90 backdrop-blur-md
      sticky top-0 z-50 shadow-sm"
    >
      <h1 className="text-xl font-extrabold tracking-tight">
        🎂 1+ Cake Shop
      </h1>

      <div className="flex gap-8 text-gray-600">
        <Link href="/" className={linkClass("/")}>Home</Link>
        <Link href="/menu" className={linkClass("/menu")}>Menu</Link>
        <span className="hover:text-black cursor-pointer">Custom Cake</span>
        <span className="hover:text-black cursor-pointer">About</span>
      </div>

      <div className="flex gap-4">
        <ShoppingBag className="text-gray-700 hover:text-black transition" />
        <User className="text-gray-700 hover:text-black transition" />
      </div>
    </nav>
  );
}
