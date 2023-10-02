import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const NavData = [
    {
      name: "Events",
      link: "/events",
      color: "text-red-400",
    },
    {
      name: "Gallery",
      link: "/gallery",
      color: "text-blue-400",
    },
    {
      name: "Projects",
      link: "/projects",
      color: "text-yellow-400",
    },
    {
      name: "Team",
      link: "/team",
      color: "text-green-600",
    },
  ];

  return (
    <div className="flex lg:flex-row items-center justify-between border-b h-auto lg:h-20 px-5 py-5 top-0 z-10 sticky mx-auto bg-transparent backdrop-blur-sm">
      <Link href="/">
        <Image src="/gdsc.png" width={400} height={300} alt="Your Logo" />
      </Link>
      <div className="hidden lg:flex lg:justify-start items-center w-1/3 space-x-4">
        {NavData.map((item, index) => (
          <Link href={item.link} key={index}>
            <p
              className={`text-xl font-semibold hover:text-gray-400 ${item.color}`}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-3xl text-gray-600" />
          ) : (
            <FaBars className="text-3xl text-gray-600" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center justify-center w-full h-screen bg-gray-800 bg-opacity-90 fixed top-0 left-0 z-50">
          {NavData.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              onClick={closeMenu}
              className="w-full flex justify-center items-center p-10"
            >
              <p
                className={`text-xl font-semibold hover:text-gray-400 ${item.color}`}
                onClick={closeMenu}
              >
                {item.name}
              </p>
            </Link>
          ))}
          {/* close button */}
          <button onClick={closeMenu}>
            <FaTimes className="text-3xl text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
