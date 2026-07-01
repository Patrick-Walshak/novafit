"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  function updateQuantity(id: number, size: string, quantity: number) {
    const updated = cart.map((item) =>
      item.id === id && item.size === size ? { ...item, quantity } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function removeItem(id: number, size: string) {
    const updated = cart.filter(
      (item) => !(item.id === id && item.size === size)
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />

      <main className="py-12 px-6 md:px-12 bg-cream min-h-screen">
        <div className="md:mx-32">
          <p className="text-camel text-sm font-semibold uppercase tracking-widest mb-1">
            Your
          </p>
          <h1 className="text-3xl font-serif font-bold text-espresso mb-8">
            Shopping Cart
          </h1>

          {cart.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-cocoa/60 text-lg mb-4">Your cart is empty</p>
              
                <a href="/products"
                className="bg-cocoa text-cream px-6 py-3 rounded-md font-medium hover:bg-espresso transition"
              >
                Continue Shopping
              </a>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="md:col-span-2 flex flex-col gap-4">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="bg-white rounded-xl p-4 flex gap-4 shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-espresso">
                        {item.name}
                      </h4>
                      <p className="text-sm text-cocoa/60 mb-2">
                        Size: {item.size}
                      </p>
                      <p className="font-bold text-espresso">
                        ₦{item.price.toLocaleString()}.99
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="w-7 h-7 rounded border border-sand text-espresso font-bold hover:border-camel transition"
                        >
                          -
                        </button>
                        <span className="text-sm font-semibold text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.quantity + 1)
                          }
                          className="w-7 h-7 rounded border border-sand text-espresso font-bold hover:border-camel transition"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-xs text-red-400 hover:text-red-600 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
                <h3 className="font-serif font-bold text-espresso text-xl mb-6">
                  Order Summary
                </h3>

                <div className="flex justify-between text-sm text-cocoa/70 mb-3">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>₦{total.toLocaleString()}.99</span>
                </div>

                <div className="flex justify-between text-sm text-cocoa/70 mb-3">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>

                <div className="border-t border-sand pt-4 mt-4 flex justify-between font-bold text-espresso">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}.99</span>
                </div>

                
                  <a href="/checkout"
                  className="mt-6 block w-full bg-cocoa text-cream text-center font-semibold py-3 rounded-md hover:bg-espresso transition"
                >
                  Proceed to Checkout
                </a>

                
                  <a href="/products"
                  className="mt-3 block w-full text-center text-sm text-cocoa/60 hover:text-espresso transition"
                >
                  Continue Shopping
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}