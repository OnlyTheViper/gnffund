import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GN Fund — Capital for a better future",
  description:
    "GN Fund backs community-led ideas with patient capital, practical support, and a long-term perspective.",
}

export const viewport: Viewport = {
  themeColor: "#f5f5f0",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
