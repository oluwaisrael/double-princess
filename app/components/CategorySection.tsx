const categories = [
  {
    name: "Mattresses",
    description: "Find your perfect comfort",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Pillows",
    description: "Support for better sleep",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a5f2?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Duvets",
    description: "Softness, warmth & comfort",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Beds & Accessories",
    description: "Complete your bedroom",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
  },
];


export default function CategorySection() {
  return (
    <section className="bg-[#F7F4EE] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#B27D2C]">
                Shop by category
              </p>

              <h2 className="max-w-md font-serif text-3xl leading-tight tracking-[-0.03em] text-[#0B2340] sm:text-4xl">
                Comfort for every kind of rest.
              </h2>
            </div>

            <a
              href="#shop"
              className="hidden shrink-0 text-sm font-semibold text-[#0B2340] underline decoration-[#D7A653] decoration-2 underline-offset-4 sm:block"
            >
              View all
            </a>
          </div>
        </div>

        {/* Mobile horizontal carousel */}
        <div className="mt-10 overflow-hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-8 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-12 [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#shop"
                className="group relative min-w-[78vw] snap-start overflow-hidden rounded-[1.5rem] sm:min-w-[320px] lg:min-w-0"
              >
                {/* Image */}
                <div className="relative aspect-[0.82] overflow-hidden bg-[#DDD8CE]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A30]/90 via-[#071A30]/15 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-2xl tracking-tight">
                          {category.name}
                        </h3>

                        <p className="mt-1 text-xs text-white/65">
                          {category.description}
                        </p>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0B2340] transition duration-300 group-hover:bg-[#D7A653]">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile swipe hint */}
        <div className="mt-2 flex items-center gap-3 px-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#0B2340]/35 sm:px-8 lg:hidden">
          <span className="h-px w-8 bg-[#0B2340]/20" />
          Swipe to explore
        </div>
      </div>
    </section>
  );
}