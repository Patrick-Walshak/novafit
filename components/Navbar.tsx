export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-cream">
      <h1 className="text-xl font-bold tracking-wide text-espresso">
        NOVAFIT
      </h1>

      <div className="hidden md:flex gap-8 text-sm font-medium text-espresso">
        <a href="/" className="border-b-2 border-espresso pb-1">Home</a>
        <a href="/products">Shop</a>
        <a href="/products?sort=new">New Arrivals</a>
        <a href="/products?category=men">Men</a>
        <a href="/products?category=women">Women</a>
        <a href="/products?category=accessories">Accessories</a>
      </div>

      <div className="flex gap-5 items-center text-espresso">
        <a href="/search" aria-label="Search">🔍</a>
        <a href="/login" aria-label="Account">👤</a>
        <a href="/wishlist" aria-label="Wishlist">♡</a>
        <a href="/cart" aria-label="Cart">🛒</a>
      </div>
    </nav>
  );
}