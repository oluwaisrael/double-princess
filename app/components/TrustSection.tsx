const trustPoints = [
  {
    number: "01",
    title: "Authentic products",
    text: "Shop with confidence knowing you're getting genuine Vitafoam products.",
  },
  {
    number: "02",
    title: "Personal guidance",
    text: "Not sure what you need? We'll help you choose the right comfort for you.",
  },
  {
    number: "03",
    title: "A real store",
    text: "Visit us in person, see our products and speak with someone who cares.",
  },
  {
    number: "04",
    title: "Easy ordering",
    text: "Find what you love and message us directly on WhatsApp to order.",
  },
];

export default function TrustSection() {
  return (
    <section className="overflow-hidden bg-[#0B2340] text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        {/* Intro */}
        <div className="max-w-3xl">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#D7A653]">
            Why shop with Mum&apos;s?
          </p>

          <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Comfort you can
            <br />
            <span className="text-[#D7A653]">trust.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            We believe buying a mattress should feel personal. Whether you
            already know what you want or need a little guidance, we&apos;re
            here to help you find your perfect fit.
          </p>
        </div>

        {/* Trust points */}
        <div className="mt-16 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.number}
              className="border-b border-white/10 py-8 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#D7A653]">
                {point.number}
              </span>

              <h3 className="mt-5 font-serif text-xl tracking-tight">
                {point.title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-white/45">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-14 flex flex-col gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-serif text-xl">
              Need help choosing?
            </p>

            <p className="mt-1 text-xs text-white/45">
              Talk to us directly. We&apos;re happy to help.
            </p>
          </div>

          <a
            href="https://wa.me/2348023128540?text=Hi%Double-Princess%20Multidimensional20Store%2C%20I%27d%20like%20some%20help%20choosing%20a%20mattress."
            className="flex h-12 items-center justify-center gap-3 rounded-full bg-[#D7A653] px-6 text-xs font-bold text-[#0B2340] transition hover:bg-[#E4BC72]"
          >
            Chat with us on WhatsApp
            <span className="text-base">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}