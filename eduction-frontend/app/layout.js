import { Aladin } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/providers/Providers";
const aladin = Aladin({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Education",
  description: "Keep your education up to date with the latest courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={aladin.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
