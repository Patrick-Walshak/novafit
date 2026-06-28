const products = [
  {
    id: 1,
    name: "Plaid Vintage",
    description: "Plaid vintage short sleeve shirt with frontal pocket",
    price: 23800,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
  },
  {
    id: 2,
    name: "Denim Vintage Shirt",
    description: "Denim vintage long sleeve shirt",
    price: 34900,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },
  {
    id: 3,
    name: "Croc Vintage Shirt",
    description: "Multi-coloured vintage shirt with crocodile skin design",
    price: 33000,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
  },
  {
    id: 4,
    name: "Stocky Vintage Shirt",
    description: "Stock multi-coloured patch vintage shirt for men and women",
    price: 35500,
    image:
      "https://images.unsplash.com/photo-1602810316693-3667c854239a?w=500",
  },
];

export default function NewArrivals() {
  return (
    <section className="py-16 px-6 md:px-12 bg-cream">
      <div className="md:mx-32 flex items-end justify-between mb-10">
        <div>
          <p className="text-camel text-sm font-semibold uppercase tracking-widest mb-1">
            New Arrivals
          </p>
          <h3 className="text-3xl font-serif font-bold text-espresso">
            Recently Sourced
          </h3>
        </div>
        
          <a href="/products"
          className="text-cocoa text-sm font-medium hover:text-espresso transition"
        >
          View All &rarr;
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:mx-32">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-camel uppercase tracking-wide mb-1">
                NovaFit
              </p>
              <h4 className="font-semibold text-espresso mb-1">
                {product.name}
              </h4>
              <p className="text-sm text-cocoa/70 mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-espresso">
                  ₦{product.price.toLocaleString()}.99
                </span>
                <button className="bg-cocoa text-cream text-xs font-medium px-3 py-2 rounded-md hover:bg-espresso transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}