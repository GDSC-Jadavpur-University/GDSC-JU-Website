import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={quicksand.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
