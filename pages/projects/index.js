import React from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

function Projects() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="text-center">
          <strong className="text-4xl font-semibold">Projects</strong>
          <p className="text-gray-600 text-lg mt-2 text-center">
            Check out our latest projects and contribute to open source on
            GitHub!
          </p>
        </div>

        <div className="flex justify-center flex-wrap mt-8">
          <div className="flex-1 max-w-xl m-4 border border-gray-300 rounded-lg shadow-md flex items-center p-4">
            <Image
              src="/GDSC Project img.png"
              alt="Hacktoberfest"
              className="w-48 h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">HacktoberFest GDSC JU</h2>
              <p className="text-gray-600 text-lg mt-2">
                Join us in celebrating Hacktoberfest by contributing to our open
                source projects on GitHub!
              </p>
              <div className="text-center mt-4">
                <a
                  href="https://github.com/GDSC-Jadavpur-University/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded border-gray-400 shadow-lg transition-colors duration-300">
                    <span className="flex items-center">
                      <FaGithub className="mr-2" />
                      GitHub
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
