import { Disclaimer } from "@/components/disclaimer/disclaimer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalStyles } from "./styles/global";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urban.co - A new concept about style.",
  description: "An e-commerce site template.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body className={inter.className}>
        <ToastContainer style={{fontWeight: "600"}}/>
        <Disclaimer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
