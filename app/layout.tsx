import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Theme from "@/components/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insta Color Picker",
  description:
    "Discover the perfect color for your next design project with our intuitive and powerful color picker tool. Explore a vast palette, create custom color schemes, and seamlessly integrate colors into your workflow. Elevate your designs with precision and creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "container")}>
        <AppRouterCacheProvider>
          <Theme>
            <Navbar />
            {children}
            <Footer />
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
