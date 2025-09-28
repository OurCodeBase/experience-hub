import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { Suspense } from "react"
import Loading from "@/components/loading"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "hαrsh vαirαgi - Software Engineer",
  description: "Experience Hub of hαrsh vαirαgi, a Software Engineer",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<Loading />}>
            <Analytics/>
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
            <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} hαrsh vαirαgi. All rights reserved.
            </footer>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
