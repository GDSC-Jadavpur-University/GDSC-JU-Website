import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeSwitcher } from './ThemeSwitcher';

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
      name: 'About',
      link: '/about',
      color: 'text-green-600',
      hoverColor: 'text-green-900',
    },
    {
      name: 'Events',
      link: '/events',
      color: 'text-red-400',
      hoverColor: 'text-red-900',
    },
    {
      name: 'Gallery',
      link: '/gallery',
      color: 'text-blue-400',
      hoverColor: 'text-blue-900',
    },
    {
      name: 'Projects',
      link: '/projects',
      color: 'text-yellow-400',
      hoverColor: 'text-yellow-900',
    },
    {
      name: 'Team',
      link: '/team',
      color: 'text-green-600',
    },
    {
      name: 'Subscribe',
      link: '/subscribe',
      color: 'text-red-400',
      hoverColor: 'text-red-900',
    },
    {
      name: 'Resource',
      link: '/resource',
      color: 'text-blue-400',
      hoverColor: 'text-blue-900',
    },
  ];

  return (
    <div className="flex lg:flex-row items-center justify-between border-b h-auto lg:h-20 px-5 py-5 top-0 z-10 sticky mx-auto bg-transparent backdrop-blur-sm">
      {/* LOGO */}
      <Link href="/">
        <Image src="/gdsc.png" width={400} height={300} alt="Your Logo" />
      </Link>
      {/* NAV LINKS */}
      <div className="hidden lg:flex lg:justify-center items-center w-full">
        <div className="hidden lg:flex lg:justify-start items-center gap-5">
          {NavData.map((item, index) => (
            <Link href={item.link} key={index}>
              <p
                className={`text-xl font-semibold hover:${item.hoverColor}
                hover:underline
                transform scale-100 hover:scale-110 transition-transform   transition:ease ${item.color}`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      {/* THEME SWITCHER */}
      {/* <div className="hidden lg:flex lg:justify-end items-center w-1/3 space-x-4"> */}
      <div className="flex justify-center items-center w-1/3 space-x-4">
        <ThemeSwitcher />
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className={`text-3xl text-gray-600 ${isMenuOpen ? 'hidden' : 'flex'} `} />
          ) : (
            <FaBars className="text-3xl text-gray-600" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div
          className={`lg:hidden flex flex-col items-center justify-center w-full h-screen bg-gray-800 bg-opacity-90 fixed top-0 left-0 z-50`}
        >
          {NavData.map((item, index) => (
            <Link href={item.link} key={index} className="w-full flex justify-center items-center p-10">
              <p className={`text-xl font-semibold hover:text-gray-400 ${item.color}`} onClick={closeMenu}>
                {item.name}
              </p>
            </Link>
          ))}
          {/* close button */}
          <button onClick={toggleMenu} className="absolute top-0 right-0 pr-10 pt-10">
            <FaTimes className="text-3xl text-white" />
          </button>
        </div>
      )}
    </div>
  );
};
export default Navbar;
