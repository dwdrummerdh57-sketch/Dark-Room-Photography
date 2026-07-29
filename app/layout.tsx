import type { Metadata } from "next";
import "./globals.css";

const title = "Dark Room | Houston Real Estate Photography";
const description = "Standout real estate photography, video, drone, and listing media from Dark Room Photography in Houston.";

export const metadata: Metadata = {
  metadataBase: new URL("https://darkroomremedia.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dark Room — Listings That Hit Different" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
