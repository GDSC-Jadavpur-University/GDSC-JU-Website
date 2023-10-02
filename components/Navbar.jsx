



import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'; // Import React useState hook

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // State to track menu visibility

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-20 px-11 top-0 z-10 sticky mx-auto bg-gray-100 backdrop-blur-sm">
      {/* Logo Image */}
      <Link href="/">
        {/* Replace the source and alt text with your logo */}
        <Image src="/gdsc.png" width={400} height={300} alt="Your Logo" />
      </Link>

<<<<<<< HEAD
      {/* Display horizontal menu on large screens */}
      <div className="hidden lg:flex lg:justify-start items-center w-1/3 space-x-4">
=======
      {/* Nav Links */}
      <div className="flex justify-between items-center w-1/3 md:hidden">
>>>>>>> 92d57c1d322eb1435d7fb77ff55c973b13620dd2
        <Link href="/events">
          {/* Replace the link text and colors with your data */}
          <p className="text-2xl hover:text-gray-400 text-red-400">Events</p>
        </Link>
        <Link href="/gallery">
          {/* Replace the link text and colors with your data */}
          <p className="text-2xl hover:text-gray-400 text-blue-400">Gallery</p>
        </Link>
        <Link href="/projects">
          {/* Replace the link text and colors with your data */}
          <p className="text-2xl hover:text-gray-400 text-yellow-400">Projects</p>
        </Link>
        <Link href="/team">
          {/* Replace the link text and colors with your data */}
          <p className="text-2xl hover:text-gray-400 text-green-600">Team</p>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden block text-2xl text-gray-600 hover:text-gray-400 focus:outline-none"
        onClick={toggleMenu} // Call toggleMenu on button click
      >
        <svg
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Collapsible Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="py-2">
            <li>
              <Link href="/events">
                {/* Replace the link text with your data */}
                <p className="text-2xl hover:text-gray-400 text-red-400">Events</p>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                {/* Replace the link text with your data */}
                <p className="text-2xl hover:text-gray-400 text-blue-400">Gallery</p>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                {/* Replace the link text with your data */}
                <p className="text-2xl hover:text-gray-400 text-yellow-400">Projects</p>
              </Link>
            </li>
            <li>
              <Link href="/team">
                {/* Replace the link text with your data */}
                <p className="text-2xl hover:text-gray-400 text-green-600">Team</p>
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

