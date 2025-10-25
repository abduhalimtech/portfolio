import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abduhalim Abdulhamidov | Laravel Backend Developer",
  description:
    "Backend Developer with 4 years of experience designing and scaling production systems. Specialized in Laravel, Redis, and CI/CD.",
  keywords: "Laravel, PHP, Backend Developer, API, Redis, Docker, DevOps",
  authors: [{ name: "Abduhalim Abdulhamidov" }],
  creator: "Abduhalim Abdulhamidov",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abduhalim.vercel.app",
    title: "Abduhalim Abdulhamidov | Laravel Backend Developer",
    description: "Backend Developer with 4 years of experience designing and scaling production systems.",
    siteName: "Abduhalim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abduhalim Abdulhamidov | Laravel Backend Developer",
    description: "Backend Developer with 4 years of experience designing and scaling production systems.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abduhalim Abdulhamidov",
              url: "https://abduhalim.vercel.app",
              jobTitle: "Laravel Backend Developer",
              description: "Backend Developer with 4 years of experience designing and scaling production systems.",
              sameAs: ["https://github.com/abduhalimtech", "https://linkedin.com/in/abduhalimdev"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
