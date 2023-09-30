import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={quicksand.style}>
      <Navbar />
      <Footer />
    </div>
  );
}
