import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Navbar({ fixed }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between h-20 px-11 top-0 z-10 sticky mx-auto bg-transparent backdrop-blur-sm">
      {/* Logo Image */}
      <Link href="/">
        <Image
          src="/gdsc.png"
          width={300}
          height={300}
          alt="logo"
          style={"object-fit:cover; "}
        />
      </Link>
      {/* Nav Links */}
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <Link
                href="/events"
                className="nav-item"
                onClick={() => setIsNavOpen(false)}
              >
                <p className="text-2xl hover:text-gray-400 text-red-400">
                  Events
                </p>
              </Link>
              <Link
                href="/gallery"
                className="nav-item"
                onClick={() => setIsNavOpen(false)}
              >
                <p className="text-2xl hover:text-gray-400 text-blue-400">
                  Gallery
                </p>
              </Link>
              <Link
                href="/projects"
                className="nav-item "
                onClick={() => setIsNavOpen(false)}
              >
                <p className="text-2xl hover:text-gray-400 text-yellow-400">
                  Projects
                </p>
              </Link>
            </ul>
          </div>
        </section>
        <div
          className={
            "justify-between items-center pr-3 w-1/3 hidden space-x-8 lg:flex"
          }
        >
          <Link href="/events" className="nav-item">
            <p className="text-2xl hover:text-gray-400 text-red-400">Events</p>
          </Link>
          <Link href="/gallery" className="nav-item">
            <p className="text-2xl hover:text-gray-400 text-blue-400">
              Gallery
            </p>
          </Link>
          <Link href="/projects" className="nav-item">
            <p className="text-2xl hover:text-gray-400 text-yellow-400">
              Projects
            </p>
          </Link>
          <Link href="/team" className="block">
            <p className="text-2xl hover:text-gray-400 text-green-600">Team</p>
          </Link>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
