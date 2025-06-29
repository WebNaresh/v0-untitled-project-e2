import Chatbot from "@/components/Chatbot";
import FloatingCallButton from "@/components/floating-call-button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import QueryProvider from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { UIProvider } from "@/contexts/ui-context";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title:
    "StartBusiness - Company Registration,MCA,GST,Income Tax Services,Trademark",
  description:
    "Platform for company registration, trademark filing, GST registration, GST filing and income tax filing in India. Simplify your compliance and tax filing.",
  keywords:
    "best online company registration,best CA firm in India,Best CA firm in Pune,Best ca frim near me,company registration,startup registration,private limited company registration,limited company registration,gst,business registration, startup, trademark, GST, FSSAI, compliance, legal services, India, Pune, online incorporation, business consultant, MSME, LLP, private limited, ngo registration, tax filing, business support",
  authors: [{ name: "StartBusiness", url: "https://startbusiness.co.in" }],
  creator: "StartBusiness",
  publisher: "StartBusiness",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "StartBusiness - Business Registration, Compliance & Legal Services in India",
    description:
      "Professional company registration, trademark, GST, FSSAI, compliance, and legal services for startups and businesses in India. Fast, affordable, and expert support.",
    url: "https://www.startbusiness.co.in",
    siteName: "StartBusiness",
    images: [
      {
        url: "/hero_og.png",
        width: 1200,
        height: 630,
        alt: "StartBusiness - Business Registration & Compliance Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "StartBusiness - Business Registration, Compliance & Legal Services in India",
    description:
      "Professional company registration, trademark, GST, FSSAI, compliance, and legal services for startups and businesses in India. Fast, affordable, and expert support.",
    images: ["/hero_og.png"],
    creator: "@startbusinessin",
    site: "@startbusinessin",
  },
  metadataBase: new URL("https://startbusiness.co.in"),
  alternates: {
    canonical: "https://www.startbusiness.co.in",
    languages: {
      "en-IN": "https://startbusiness.co.in",
    },
  },
  category: "Business, Legal, Consulting, Startup",
  applicationName: "StartBusiness",
  generator: "Next.js, Vercel",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Start Business" />
        <meta
          name="google-site-verification"
          content="VjHph2u3tld04cEok8zvpPBA-TEtxikvfvGo7hW-NBE"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2T86HZSNGB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2T86HZSNGB');
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Analytics />
          <QueryProvider>
            <div className="relative min-h-screen flex flex-col">
              <UIProvider>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
                <FloatingCallButton />
                <Chatbot />
              </UIProvider>
            </div>
          </QueryProvider>
          <Toaster position="top-center" expand={true} richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
