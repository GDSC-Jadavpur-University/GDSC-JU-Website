import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Landing from '@/components/Landing';
import Fields from "@/components/Fields";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={quicksand.style}>
      <Navbar />
      <Landing />
      <Fields />
      <Footer />
    </div>
  );
}
