import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 px-11 top-0 z-10 sticky mx-auto bg-transparent backdrop-blur-sm">
      {/* Logo Image */}
      <Link href="/">
        <Image src="/gdsc.png" width={400} height={300} alt="logo"/>
      </Link>

      {/* Nav Links */}
      <div className="flex justify-between items-center w-1/3 md:hidden">
        <Link href="/events">
          <p className="text-2xl hover:text-gray-400 text-red-400">Events</p>
        </Link>
        <Link href="/gallery">
          <p className="text-2xl hover:text-gray-400 text-blue-400">Gallery</p>
        </Link>
        <Link href="/projects">
          <p className="text-2xl hover:text-gray-400 text-yellow-400">Projects</p>
        </Link>
        <Link href="/team">
          <p className="text-2xl hover:text-gray-400 text-green-600">Team</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
