const testimonials = [
  {
    name: "Walshak P.",
    location: "London, UK",
    initial: "B",
    text: "The hoodie I ordered fit perfectly and the fabric quality is incredible. NovaFit has earned a lifelong customer.",
  },
  {
    name: "Wallex Patrick.",
    location: "New York, USA",
    initial: "P",
    text: "Found exactly the streetwear style I'd been hunting for. Fast shipping and the quality matched the photos exactly.",
  },
  {
    name: "Mr KC.",
    location: "Paris, France",
    initial: "L",
    text: "As someone who's picky about fit and fabric, NovaFit is my secret weapon. Honest sizing, great quality, brilliant support.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-espresso py-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <p className="text-camel text-sm font-semibold uppercase tracking-widest mb-2">
          Testimonials
        </p>
        <h3 className="text-3xl md:text-4xl font-serif text-cream">
          Our Customers Love Us
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:mx-32">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-cocoa/40 border border-cocoa rounded-xl p-6"
          >
            <div className="text-camel mb-3">★★★★★</div>

            <p className="text-cream/90 text-sm leading-relaxed mb-6">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-camel text-espresso flex items-center justify-center font-semibold text-sm">
                {t.initial}
              </div>
              <div>
                <p className="text-cream font-semibold text-sm">{t.name}</p>
                <p className="text-sand text-xs">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}