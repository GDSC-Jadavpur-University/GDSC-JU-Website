import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Fields from "@/components/Fields";
import Layout from "@/layout/Layout";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={quicksand.style}>
      <Landing />
      <Fields />
    </div>
  );
}
