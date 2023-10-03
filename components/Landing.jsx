import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Landing() {
  return (
    <div className="md:px-5 w-[95%] lg:w-[90%] relative mx-auto lg:mt-20 md:mt-[100px]">
      {/* Landing text */}
      <div className="flex justify-center items-center">
        <div className="w-4/5 flex justify-center flex-col">
          <p className="font-semibold text-5xl md:text-3xl mb-10 md:mb-5 leading-[4.8rem] ">
            <strong className="font-bold">
              <span className="text-red-400">Ja</span>
              <span className="text-blue-400">da</span>
              <span className="text-yellow-400">vp</span>
              <span className="text-green-600">ur</span>
              &nbsp; University
            </strong>

            <br />
            <span className="text-gray-500 font-normal">
              Google Developer Student Club
            </span>
          </p>

          <p className="w-4/5 text-gray-500 text-lg md:text-base leading-[2.4rem]">
            Google Developer Student Clubs are university based community groups
            for students interested in Google developer technologies. Students
            from all undergraduate or graduate programs with an interest in
            growing as a developer are welcome. By joining a GDSC, students grow
            their knowledge in a peer-to-peer learning environment and build
            solutions for local businesses and their community.
          </p>

          <div className="w-4/5 flex justify-start items-center mt-10">
            <a href="https://gdsc.community.dev/jadavpur-university-kolkata/" target="_blank">
              <button className="bg-red-400 text-white px-5 py-2 rounded-lg font-semibold text-lg">
              Join Us
              </button>
            </a>
            <a href="https://developers.google.com/community/gdsc" target="_blank">
              <button className="bg-gray-200 text-gray-600 px-5 py-2 rounded-lg font-semibold text-lg ml-5">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div>
          <Player
            src="https://lottie.host/b7fcc177-9bcd-41d7-bb12-349512dc7a9f/lzngOsKudE.json"
            className="player md:hidden"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
