import { inter } from '@/app/ui/fonts'

import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata = {
  title: "Justin Z's Profile",
  description: "My personal profile, implemented as a reactive website using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-primary text-xl`} >
        <Navbar />
        {children}
      </body>
    </html >
  );
}
