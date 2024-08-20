import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ["latin"] });

const kd = ['MSEB internship certificate', 'online internship', 'internpro', 'codsoft', 'internpe', 'free internship certificate', 'learn and earn', 'forage', 'virtual internship', 'project based internship'];

export const metadata: Metadata = {

  title: { default:"InternPro An Internship Platform", 
    template: "%s - InternPro",
  },
  description: "An internship platform, that give MSEB Register Company Intenship Certificate at Major Domain",
  keywords: kd,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
