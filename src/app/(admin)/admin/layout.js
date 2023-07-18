import "../../globals.css";
import { Inter } from "next/font/google";

import Providers from "@/app/Providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prosonic - Admin pannel",
  description: "Generated by create next app", // <---------------------
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}