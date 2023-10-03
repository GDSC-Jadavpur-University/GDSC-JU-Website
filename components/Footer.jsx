import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { ThemeSwitcher } from "./ThemeSwitcher";

function Footer() {
  const socials = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/googlefordevs",
      icon: <FaFacebook />,
      hoverColor: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/googledevs",
      icon: <FaTwitter />,
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/googledevelopers",
      icon: <FaYoutube />,
      hoverColor: "hover:text-red-600",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/gdsc_ju/",
      icon: <FaInstagram />,
      hoverColor: "hover:text-purple-600",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/gdsc-jadavpur-university/",
      icon: <FaLinkedin />,
      hoverColor: "hover:text-blue-800",
    },
    {
      name: "Github",
      link: "https://github.com/GDSC-Jadavpur-University",
      icon: <FaGithub />,
      hoverColor: "hover:text-black",
    },
  ];

  const footerData = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Team",
      link: "/team",
    },
  ];

  return (
    <footer className="w-full bg-gray-100 py-8">
      {/* Row with links */}
      <div className="w-full flex flex-col sm:flex-row justify-center">
        <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-1/2">
          {footerData.map((item, index) => (
            <Link href={item.link} key={index}>
              <p className="text-gray-600 text-xl font-semibold hover:text-gray-400 mx-4 my-2">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      {/*  */}

      <div className="w-full container mx-auto px-8">
        <h5 className="text-xl text-center font-bold mb-2 sm:text-center xl:justify-center">

          Stay connected
        </h5>
        <div className="flex justify-center xl:justify-center">
          {socials.map((social, index) => (
            <a
              href={social.link}
              key={index}
              className={`text-gray-600 ${social.hoverColor} text-3xl mr-4`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-end mr-20">
        <ThemeSwitcher />
      </div>
    </footer>
  );
}

export default Footer;
