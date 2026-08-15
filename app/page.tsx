import CategorySection from "./components/CategorySection";
import Bestsellers from "./components/Bestsellers";
import TrustSection from "./components/TrustSection";
import StoreSection from "./components/StoreSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#0B2340]">
      {/* Navigation */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Mobile menu */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md md:hidden"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center md:static md:translate-x-0">
            <p className="font-serif text-xl font-semibold tracking-tight text-white">
              Double Princess
            </p>
            <p className="-mt-1 text-[8px] font-semibold uppercase tracking-[0.28em] text-[#D7A653]">
              Multidimensional Outlet
            </p>
          </div>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#shop"
              className="text-sm font-medium text-white/90 transition hover:text-[#D7A653]"
            >
              Shop
            </a>
            <a
              href="#why-us"
              className="text-sm font-medium text-white/90 transition hover:text-[#D7A653]"
            >
              Why Us
            </a>
            <a
              href="#store"
              className="text-sm font-medium text-white/90 transition hover:text-[#D7A653]"
            >
              Visit Store
            </a>
          </div>

          {/* Cart */}
          <button
            type="button"
            aria-label="View enquiry"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 1.9-1.4L21 8H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#0B2340] sm:min-h-[780px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=85')",
          }}
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-[#071A30]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A30]/65 via-transparent to-[#071A30]/90" />

        {/* Hero content */}
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-5 pb-12 sm:px-8 sm:pb-16 lg:min-h-[780px] lg:items-center lg:px-12">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D7A653]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E7C47C]">
                Your trusted Vitafoam wholesale Distributor
              </span>
            </div>

            <h1 className="font-serif text-[3.7rem] font-medium leading-[0.92] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
              Better sleep.
              <br />
              <span className="text-[#D7A653]">Better living.</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-white/75 sm:text-lg">
              Authentic Vitafoam mattresses and bedding, carefully selected
              to help you sleep comfortably and wake up better.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#shop"
                className="flex h-14 items-center justify-center rounded-full bg-[#D7A653] px-7 text-sm font-semibold text-[#0B2340] transition duration-300 hover:bg-[#E7C47C]"
              >
                Shop mattresses
                <span className="ml-3 text-lg">→</span>
              </a>

              <a
                href="#store"
                className="flex h-14 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20"
              >
                Visit our store
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-7 right-6 hidden items-center gap-3 text-white/50 sm:flex">
          <span className="text-[9px] uppercase tracking-[0.3em]">
            Explore
          </span>
          <span className="h-px w-10 bg-white/30" />
        </div>
      </section>

      {/* Intro */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#B27D2C]">
              Sleep starts here
            </p>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-[#0B2340] sm:text-5xl">
              Everything you need for a more comfortable night.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#0B2340]/60">
              From everyday comfort to premium support, find genuine
              Vitafoam products for you, your family and your home.
            </p>
          </div>
        </div>
      </section>
      <CategorySection />
    <Bestsellers />
    <TrustSection />
    <StoreSection />
    {/* Coming next */}
      <section id="shop" className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0B2340] p-8 text-white sm:p-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D7A653]">
            Coming next
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Our mattresses
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
            We&apos;re building the collection next — with real products,
            sizes, prices and an easy WhatsApp enquiry flow.
          </p>
        </div>
      </section>
    <Footer />

    
      {/* Mobile WhatsApp CTA */}
      <a
        href="https://wa.me/2348023128540?text=Hi%20Double-Princess%20Multidimensional%20Outlet%2C%20I%27d%20i%20want%20to%20get%20a%20___."
        className="fixed inset-x-4 bottom-4 z-50 flex h-14 items-center justify-center rounded-full bg-[#0B2340] text-sm font-semibold text-white shadow-2xl shadow-black/20 md:hidden"
      >
        <span className="mr-2">◉</span>
        Chat with us on WhatsApp
      </a>
    </main>
  );
}