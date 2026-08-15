export default function StoreSection() {
  return (
    <section id="contact" className="bg-[#F7F4EE] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[2rem] bg-[#E8E1D5]">
          <div className="grid lg:grid-cols-2">
            {/* Store image */}
            <div className="relative min-h-[420px] lg:min-h-[620px]">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=85"
                alt="Mum's Vitafoam Store"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071A30]/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                <span className="inline-flex rounded-full bg-white/90 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#0B2340] backdrop-blur-sm">
                  Come see us
                </span>
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B27D2C]">
                Visit our store
              </p>

              <h2 className="mt-4 max-w-md font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-[#0B2340] sm:text-5xl">
                See the comfort
                <br />
                <span className="text-[#B27D2C]">for yourself.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#0B2340]/55">
                Choosing the right mattress is easier when you can see and feel
                the difference. Visit our showroom, explore authentic Vitafoam
                products and get guidance tailored to your comfort needs.
              </p>

              {/* Store details */}
              <div className="mt-10 space-y-6 border-t border-[#0B2340]/10 pt-7">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0B2340]/35">
                    Location
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#0B2340]">
                    Double Princess Multidimensional Output
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#0B2340]/50">
                    69, idimu egbeda road, Opposite Gtbank, idimu lagos, Nigeria
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0B2340]/35">
                    Opening hours
                  </p>

                  <div className="mt-2 flex justify-between gap-4 text-xs">
                    <span className="text-[#0B2340]/50">
                      Monday – Saturday
                    </span>

                    <span className="font-semibold text-[#0B2340]">
                      8:00 AM – 6:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/2348023128540?text=Hi%20Mum's%20Vitafoam%20Store%2C%20I'd%20like%20to%20visit%20your%20store."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#0B2340] px-6 text-xs font-bold text-white transition hover:bg-[#15395F]"
                >
                  Chat on WhatsApp
                  <span>↗</span>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=69+Idimu+Egbeda+Road,+Opposite+GTBank,+Idimu,+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-full border border-[#0B2340]/15 px-6 text-xs font-bold text-[#0B2340] transition hover:bg-white"
                >
                  Get directions
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}