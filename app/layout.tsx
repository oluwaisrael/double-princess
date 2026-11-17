import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Double Princess | Genuine Vitafoam Comfort in Lagos",
  description: "Browse genuine Vitafoam mattresses, pillows and comfort products from Double Princess in Idimu, Lagos. Compare VAT-inclusive prices and order on WhatsApp.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
