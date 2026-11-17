"use client";

import { useMemo, useState } from "react";
import { categories, products, type Product } from "../data/catalogue";

const money = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 2 });
const whatsapp = "2348023128540";

function ProductCard({ product }: { product: Product }) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const selected = product.prices[sizeIndex];
  const message = encodeURIComponent(`Hello Double Princess, I would like to order ${product.name}, size ${selected.size}, priced at ${money.format(selected.price)}. Is it available?`);
  return <article className="product-card">
    <div className="product-image"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-category">{product.category}</span></div>
    <div className="product-body"><div className="product-title"><div><h3>{product.name}</h3><p>{product.description}</p></div><span className="product-code">{selected.code ?? "VITA"}</span></div>
      <label className="select-label">Choose size<select value={sizeIndex} onChange={(e) => setSizeIndex(Number(e.target.value))}>{product.prices.map((item, index) => <option key={`${item.size}-${index}`} value={index}>{item.size}</option>)}</select></label>
      <div className="product-footer"><div><small>Price</small><strong>{money.format(selected.price)}</strong></div><a className="order-button" href={`https://wa.me/${whatsapp}?text=${message}`} target="_blank" rel="noreferrer">Order on WhatsApp <span>↗</span></a></div>
    </div>
  </article>;
}

export default function Catalogue() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => products.filter((product) => (active === "All" || product.category === active) && `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(query.toLowerCase())), [active, query]);
  return <section id="catalogue" className="catalogue-section"><div className="catalogue-heading"><div><div className="section-kicker">The comfort catalogue</div><h2>Find your<br /><em>better rest.</em></h2></div><p>Browse the current Vitafoam Comfort Centre price list. Select a size to see its exact VAT-inclusive price.</p></div>
    <div className="catalogue-tools"><div className="filter-row" role="group" aria-label="Filter products">{categories.map((category) => <button key={category} className={active === category ? "active" : ""} onClick={() => setActive(category)}>{category}</button>)}</div><label className="search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" aria-label="Search products" /></label></div>
    <div className="results-note">{filtered.length} products · Prices in Nigerian naira (₦) · 7.5% VAT inclusive</div><div className="product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div>{filtered.length === 0 && <div className="empty-state">No products match that search. Try a broader term or another category.</div>}</section>;
}
