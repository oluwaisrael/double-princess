type Product = {
  name: string;
  description: string;
  price: string;
  rating: string;
  reviews: number;
  image: string;
  badge?: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi Double Princess Vitafoam Store, I'm interested in the ${product.name}. Is it available?`
  );

  const whatsappUrl = `https://wa.me/2348023128540?text=${whatsappMessage}`;

  return (
    <article className="group min-w-[82vw] snap-start sm:min-w-[320px] lg:min-w-0">
      {/* Product image */}
      <div className="relative aspect-[0.92] overflow-hidden rounded-[1.5rem] bg-[#E8E3DA]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071A30]/25 via-transparent to-transparent" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#0B2340] shadow-sm">
            {product.badge}
          </span>
        )}

        {/* Favourite */}
        <button
          type="button"
          aria-label={`Save ${product.name}`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0B2340] shadow-sm backdrop-blur-sm transition hover:bg-white"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path d="M20.8 8.7c0 5.5-8.8 10.2-8.8 10.2S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.4Z" />
          </svg>
        </button>
      </div>

      {/* Product information */}
      <div className="px-1 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl tracking-tight text-[#0B2340]">
              {product.name}
            </h3>

            <p className="mt-1 max-w-[240px] text-xs leading-5 text-[#0B2340]/50">
              {product.description}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1 text-[11px] font-semibold text-[#0B2340]">
            <span className="text-[#B27D2C]">★</span>
            {product.rating}

            <span className="font-normal text-[#0B2340]/35">
              ({product.reviews})
            </span>
          </div>
        </div>

        {/* Price + WhatsApp */}
        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0B2340]/35">
              From
            </p>

            <p className="mt-0.5 text-lg font-semibold tracking-tight text-[#0B2340]">
              {product.price}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center gap-2 rounded-full bg-[#0B2340] px-5 text-xs font-semibold text-white transition duration-300 hover:bg-[#15395F]"
          >
            Ask about it
            <span className="text-sm">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}