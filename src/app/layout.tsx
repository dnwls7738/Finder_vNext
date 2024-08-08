import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import Footer from "../components/footer";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "에스테틱샵 찾기",
  description: "퓨라셀을 사용하는 에스테틱샵을 찾아보세요",
  icons: {
    icon: "/next.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
