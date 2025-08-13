import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SBTS Security - Enterprise Cybersecurity Services",
  description: "U.S.-headquartered MSSP with 25+ years delivering managed SOC, DevSecOps, compliance, staffing, and cyber insurance services globally.",
  keywords: "cybersecurity, MSSP, managed security, SOC, DevSecOps, compliance, cyber insurance, threat intelligence",
  authors: [{ name: "SBTS Security" }],
  openGraph: {
    title: "SBTS Security - Enterprise Cybersecurity Services",
    description: "U.S.-headquartered MSSP with 25+ years delivering managed SOC, DevSecOps, compliance, staffing, and cyber insurance services globally.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
