import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/footer";
import QuickActions from "@/components/topNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kojo Herbie",
  description: "Generated by create next app",
  icons: {
    icon: "./icon.ico",
    sizes: "50x50",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QuickActions />
             <BottomNav /> {children}
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
