import { Search, User, Heart, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="px-12 py-4 bg-cream font-serif">
        <div className="flex items-center justify-between mx-32">
        <h1 className="text-4xl font-extrabold tracking-wide text-espresso">
            NOVAFIT
        </h1>

        <div className="hidden md:flex gap-8 text-xl font-extrabold text-espresso">
            <a href="/" className="border-b-2 border-espresso pb-1">Home</a>
            <a href="/products">Shop</a>
            <a href="/products?sort=new">New Arrivals</a>
            <a href="/products?category=men">Men</a>
            <a href="/products?category=women">Women</a>
            <a href="/products?category=accessories">Accessories</a>
        </div>

        <div className="flex gap-5 items-center text-espresso">
            <Search size={30} className="cursor-pointer" />
            <a href="/login" className="text-sm  bg-[#6E473B] text-white px-6 py-3 rounded-md font-bold">Login</a>
            <a href="/register" className="text-sm  bg-[#6E473B] text-white px-6 py-3 rounded-md font-bold">Register</a>
            <a href="/cart">
            <ShoppingCart size={30} className="cursor-pointer" />
            </a>
        </div>
      </div>
    </nav>
  );
}