import Layout from "../components/layout/layout";
import AuthProvider from "../context/AuthContext";

import { Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";
import PlayerProvider from "../context/PlayerContext";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={manrope.className}>
      <AuthProvider>
        <PlayerProvider>
          <Layout>
            <Component {...pageProps} />
            <Toaster />
          </Layout>
        </PlayerProvider>
      </AuthProvider>
    </main>
  );
}
