"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarRating from "@/components/StarRating";

const allProducts = [
  {
    id: 1,
    name: "Plaid Vintage",
    description: "Plaid vintage short sleeve shirt with frontal pocket. Made from 100% premium cotton, this shirt brings a timeless look with a modern fit. Perfect for casual outings or layering.",
    price: 23800,
    category: "T-Shirts",
    rating: 4.5,
    reviews: 1619,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://i.pinimg.com/736x/b9/89/0a/b9890a356c9cd33a0dca2048c47e1b31.jpg",
  },
  {
    id: 2,
    name: "Denim Vintage Shirt",
    description: "Denim vintage long sleeve shirt with a relaxed fit. A wardrobe staple that pairs well with anything from joggers to chinos.",
    price: 34900,
    category: "Shirts",
    rating: 4,
    reviews: 843,
    sizes: ["S", "M", "L", "XL"],
    image: "https://i.pinimg.com/736x/65/3a/e1/653ae1fab9aa3f38cfbca680ac701788.jpg",
  },
  {
    id: 3,
    name: "Croc Vintage Shirt",
    description: "Multi-coloured vintage shirt with crocodile skin design. Bold, eye-catching, and made for those who want to stand out.",
    price: 33000,
    category: "Shirts",
    rating: 4.5,
    reviews: 512,
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://i.pinimg.com/736x/3e/59/dc/3e59dc1df59067513237369548119c46.jpg",
  },
  {
    id: 4,
    name: "Stocky Vintage Shirt",
    description: "Stock multi-coloured patch vintage shirt for men and women. A conversation starter with its unique patchwork design.",
    price: 35500,
    category: "Shirts",
    rating: 3.5,
    reviews: 298,
    sizes: ["S", "M", "L", "XL"],
    image: "https://i.pinimg.com/736x/54/4f/57/544f5722335445d68f54d76f5b73de0e.jpg",
  },
  {
    id: 5,
    name: "Cargo Street Shirt",
    description: "Bold cargo style street shirt for everyday wear. Features utility pockets and a relaxed silhouette.",
    price: 28000,
    category: "Shirts",
    rating: 4,
    reviews: 401,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://i.pinimg.com/736x/83/9f/61/839f61f294ab63658eb735c6614609c9.jpg",
  },
  {
    id: 6,
    name: "Urban Classic Tee",
    description: "Clean urban style classic tee for all occasions. Soft fabric, great fit, and a minimalist design you can wear anywhere.",
    price: 18000,
    category: "T-Shirts",
    rating: 5,
    reviews: 776,
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://i.pinimg.com/736x/88/22/6a/88226a36ab59af3e5bb48fae52eb7593.jpg",
  },
  {
    id: 7,
    name: "Retro Print Shirt",
    description: "Retro inspired print shirt with bold patterns. Vintage vibes with a contemporary cut.",
    price: 31000,
    category: "Shirts",
    rating: 4.5,
    reviews: 334,
    sizes: ["S", "M", "L", "XL"],
    image: "https://i.pinimg.com/736x/f1/5b/be/f15bbe9085e970a8971330d9a2b9e47d.jpg",
  },
  {
    id: 8,
    name: "Nova Essentials Tee",
    description: "Everyday essential tee, soft and comfortable. The go-to shirt for any casual occasion.",
    price: 15000,
    category: "T-Shirts",
    rating: 3.5,
    reviews: 189,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "https://i.pinimg.com/736x/7a/00/e6/7a00e6c6dc9332baf752e2cdf5f4ae1c.jpg",
  },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-cream">
          <div className="text-center">
            <p className="text-2xl font-bold text-espresso mb-2">
              Product not found
            </p>
            <a href="/products" className="text-camel underline text-sm">
              Back to Products
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  function handleAddToCart() {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    // TODO: connect to real cart API once backend is ready
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingIndex = cart.findIndex(
      (item: any) => item.id === product.id && item.size === selectedSize
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ ...product, size: selectedSize, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div>
      <Navbar />

      <main className="py-12 px-6 md:px-12 bg-cream min-h-screen">
        <div className="md:mx-32">
          {/* Breadcrumb */}
          <p className="text-sm text-cocoa/60 mb-8">
            <a href="/" className="hover:text-espresso">Home</a>
            {" / "}
            <a href="/products" className="hover:text-espresso">Products</a>
            {" / "}
            <span className="text-espresso">{product.name}</span>
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-xl"
              />
            </div>

            {/* Right - Details */}
            <div className="flex flex-col justify-center">
              <p className="text-camel text-xs font-semibold uppercase tracking-widest mb-2">
                NovaFit
              </p>
              <h1 className="text-3xl font-serif font-bold text-espresso mb-2">
                {product.name}
              </h1>

              <StarRating rating={product.rating} reviews={product.reviews} />

              <p className="text-2xl font-bold text-espresso mt-4 mb-4">
                ₦{product.price.toLocaleString()}.99
              </p>

              <p className="text-cocoa/70 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Size selector */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-espresso mb-2">
                  Select Size
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-md border text-sm font-medium transition ${
                        selectedSize === size
                          ? "bg-espresso text-cream border-espresso"
                          : "bg-white border-sand text-espresso hover:border-camel"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity selector */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-espresso mb-2">
                  Quantity
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 rounded-md border border-sand bg-white text-espresso font-bold hover:border-camel transition"
                  >
                    -
                  </button>
                  <span className="text-espresso font-semibold w-6 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-9 rounded-md border border-sand bg-white text-espresso font-bold hover:border-camel transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart button */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-md font-semibold text-sm transition ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-cocoa text-cream hover:bg-espresso"
                }`}
              >
                {added ? "✓ Added to Cart!" : "Add to Cart"}
              </button>

              
                <a href="/cart"
                className="mt-3 w-full py-4 rounded-md font-semibold text-sm border border-espresso text-espresso text-center hover:bg-espresso hover:text-cream transition block"
              >
                View Cart
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}