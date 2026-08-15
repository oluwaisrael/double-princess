import ProductCard from "./ProductCard";

const products = [
  {
    name: "Vitafoam Royal Luxury",
    description: "Premium comfort with exceptional support for deeper sleep.",
    price: "₦285,000",
    rating: "4.8",
    reviews: 128,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Vitafoam Supreme Comfort",
    description: "Balanced softness and support for everyday comfort.",
    price: "₦235,000",
    rating: "4.6",
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Vitafoam Orthopaedic Classic",
    description: "Firm support designed for a more comfortable night's rest.",
    price: "₦210,000",
    rating: "4.5",
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Vitafoam Child Deluxe",
    description: "Comfortable support designed especially for growing bodies.",
    price: "₦165,000",
    rating: "4.7",
    reviews: 51,
    badge: "For Kids",
    image:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Bestsellers() {
  return (
    <section className="bg-[#F7F4EE] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex items-end justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#B27D2C]">
              Bestsellers
            </p>

            <h2 className="font-serif text-3xl leading-tight tracking-[-0.03em] text-[#0B2340] sm:text-4xl">
              Our most-loved
              <br className="sm:hidden" /> comforts.
            </h2>
          </div>

          <a
            href="#shop"
            className="hidden shrink-0 text-sm font-semibold text-[#0B2340] underline decoration-[#D7A653] decoration-2 underline-offset-4 sm:block"
          >
            Shop all
          </a>
        </div>

        {/* Products */}
        <div className="mt-10 overflow-hidden">
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 [scrollbar-width:none] sm:px-8 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-12 [&::-webkit-scrollbar]:hidden">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>

        {/* Mobile indicator */}
        <div className="mt-1 flex items-center justify-between px-5 sm:px-8 lg:hidden">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-6 rounded-full bg-[#0B2340]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B2340]/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B2340]/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B2340]/15" />
          </div>

          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#0B2340]/30">
            Swipe to explore
          </span>
        </div>
      </div>
    </section>
  );
}