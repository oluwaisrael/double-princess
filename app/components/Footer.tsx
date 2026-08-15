const shopLinks = [
  { label: "Mattresses", href: "#shop" },
  { label: "Pillows", href: "#shop" },
  { label: "Duvets", href: "#shop" },
  { label: "Beds & Accessories", href: "#shop" },
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#shop" },
  { label: "Why Us", href: "#why-us" },
  { label: "Visit Store", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071A30] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-24 lg:px-12">
        {/* Brand statement */}
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D7A653]">
            Mum&apos;s Vitafoam Store
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
            Better sleep starts
            <br />
            <span className="text-[#D7A653]">with the right comfort.</span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
            Your trusted destination for genuine Vitafoam products and
            personalised comfort in Lagos.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/2348023128540?text=Hi%20Mum's%20Vitafoam%20Store%2C%20I'd%20like%20to%20make%20an%20enquiry."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-[#D7A653] px-6 text-xs font-bold text-[#0B2340] transition hover:bg-[#E4BC72]"
        >
          Chat with us on WhatsApp
          <span>↗</span>
        </a>

        {/* Links */}
        <div className="mt-20 grid grid-cols-2 gap-12 border-t border-white/10 pt-10 sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
              Shop
            </p>

            <div className="mt-5 space-y-4">
              {shopLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-white/60 transition hover:text-[#D7A653]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
              Explore
            </p>

            <div className="mt-5 space-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-white/60 transition hover:text-[#D7A653]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
              Visit us
            </p>

            <div className="mt-5">
              <p className="text-sm font-medium text-white">
                Double Princess
              </p>

              <p className="mt-2 text-xs leading-6 text-white/45">
                69, Idimu Egbeda Road,
                <br />
                Opposite GTBank,
                <br />
                Idimu, Lagos, Nigeria.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=69+Idimu+Egbeda+Road,+Opposite+GTBank,+Idimu,+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs font-semibold text-[#D7A653] underline underline-offset-4"
              >
                Get directions →
              </a>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
              Contact
            </p>

            <div className="mt-5 space-y-4">
              <a
                href="tel:+2348023128540"
                className="block text-sm text-white/60 transition hover:text-[#D7A653]"
              >
                0802 312 8540
              </a>

              <a
                href="https://wa.me/2348023128540"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/60 transition hover:text-[#D7A653]"
              >
                WhatsApp
              </a>

              <div className="pt-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                  Opening hours
                </p>

                <p className="mt-2 text-xs text-white/45">
                  Mon – Sat · 8:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-white/30">
            © {new Date().getFullYear()} Mum&apos;s Vitafoam Store. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D7A653]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Genuine Vitafoam retailer
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}