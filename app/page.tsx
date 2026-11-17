import Catalogue from "./components/Catalogue";

const whatsapp = "2348023128540";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Double Princess home"><span className="brand-mark">DP</span><span><strong>Double Princess</strong><small>Vitafoam comfort centre</small></span></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#catalogue">Shop mattresses</a><a href="#why-us">Why Double Princess</a><a href="#visit">Visit us</a></nav>
        <a className="header-cta" href={`https://wa.me/${whatsapp}?text=Hello%20Double%20Princess%2C%20I%27d%20like%20help%20choosing%20a%20mattress.`} target="_blank" rel="noreferrer">WhatsApp us <span>↗</span></a>
      </header>
      <section id="top" className="hero"><div className="hero-copy"><p className="eyebrow">Idimu, Lagos · Genuine Vitafoam products</p><h1>Better rest begins with the right <em>comfort.</em></h1><p className="hero-lede">Explore the Vitafoam comfort range, compare sizes and prices, then order directly from Double Princess on WhatsApp.</p><div className="hero-actions"><a className="button button-gold" href="#catalogue">Browse the price list <span>↓</span></a><a className="text-link light" href="#visit">Find our store <span>↗</span></a></div><div className="hero-note"><span>✓</span> Prices include 7.5% VAT · Effective 30 March 2026</div></div><div className="hero-visual" aria-hidden="true"><div className="hero-sun" /><div className="hero-card hero-card-back" /><div className="hero-card hero-card-front"><span>VITAFOAM</span><b>Sleep<br />well.</b></div><div className="hero-shadow" /></div></section>
      <section className="intro-strip" aria-label="Store promise"><div><span>01</span><strong>Authentic range</strong><p>Official Vitafoam products from the supplied price list.</p></div><div><span>02</span><strong>Personal guidance</strong><p>Tell us your size and comfort preference; we’ll help.</p></div><div><span>03</span><strong>Simple ordering</strong><p>Choose your product, then order in one WhatsApp message.</p></div></section>
      <Catalogue />
      <section id="why-us" className="trust-section"><div className="section-kicker">Why Double Princess</div><div className="trust-grid"><div><h2>Comfort made<br /><em>personal.</em></h2></div><div><p>Buying a mattress is a considered choice. We make it easier to compare genuine Vitafoam options, understand the differences between collections and choose with confidence.</p><a className="text-link" href={`https://wa.me/${whatsapp}?text=Hello%20Double%20Princess%2C%20I%27d%20like%20help%20choosing%20the%20right%20Vitafoam%20product.`} target="_blank" rel="noreferrer">Talk to a comfort guide <span>↗</span></a></div></div></section>
      <section id="visit" className="visit-section"><div className="visit-card"><div><div className="section-kicker">Visit the showroom</div><h2>See the difference<br /><em>for yourself.</em></h2><p>Double Princess Multidimensional Outlet<br />69, Idimu Egbeda Road, opposite GTBank,<br />Idimu, Lagos, Nigeria.</p><div className="visit-meta"><span>Mon – Sat</span><strong>8:00 AM – 6:00 PM</strong></div><a className="button button-navy" href="https://www.google.com/maps/search/?api=1&query=69+Idimu+Egbeda+Road,+Opposite+GTBank,+Idimu,+Lagos" target="_blank" rel="noreferrer">Get directions <span>↗</span></a></div><div className="visit-art" aria-hidden="true"><div className="window-line" /><div className="plant" /><div className="chair" /></div></div></section>
      <footer className="footer"><div className="footer-brand"><span className="brand-mark">DP</span><div><strong>Double Princess</strong><small>Multidimensional Outlet</small></div></div><div><p>Genuine Vitafoam comfort for every kind of rest.</p><a href={`tel:+${whatsapp}`}>0802 312 8540</a></div><div className="footer-bottom">© {new Date().getFullYear()} Double Princess · Idimu, Lagos</div></footer>
      <a className="floating-wa" href={`https://wa.me/${whatsapp}?text=Hello%20Double%20Princess%2C%20I%27d%20like%20to%20make%20an%20enquiry.`} target="_blank" rel="noreferrer" aria-label="Chat with Double Princess on WhatsApp">◔ <span>Chat on WhatsApp</span></a>
    </main>
  );
}
