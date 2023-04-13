import Layout from "../components/layout/layout";
import AuthProvider from "../context/AuthContext";

import { Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={manrope.className}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
          <Toaster />
        </Layout>
      </AuthProvider>
    </main>
  );
}
