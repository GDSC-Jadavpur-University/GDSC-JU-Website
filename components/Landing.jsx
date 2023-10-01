import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Landing() {
  return (
    <div className="px-20 h-[90vh] flex justify-center items-center">
      
      {/* Landing text */}
      <div className="flex justify-center items-center">
        <div className="w-4/5 flex justify-center flex-col">
          <p className="font-semibold text-5xl mb-10">
            DEVELOPER STUDENT CLUBS <br />{" "}
            <strong className="font-bold">Jadavpur University</strong>
          </p>
          <p className="text-1xl">
            The Google Developer Student Club program is a program for
            university students, designed to help them build their technical
            skills and knowledge and ultimately apply these skills practically
            to build solutions and solve real world problems for local
            businesses and communities. <br /> It is open to any student, ranging from
            novice developers who are just starting, to advanced developers who
            want to further improve their skills. It is a space for students to
            learn and collaborate in a peer-to-peer learning environment. The
            GDSC will host events regarding the fields of web development, app
            development, competitive programming, machine learning, DSA and
            more. The aim of the club is to help students to bridge the gap
            between theory and practice, along with this - the students can
            build their professional and personal networks and get access to
            google developer resources. Atanu Nayak. 
          </p>
        </div>

        {/* Landing Image/Animation */}
        <div>
          <Player
            src="https://lottie.host/b7fcc177-9bcd-41d7-bb12-349512dc7a9f/lzngOsKudE.json"
            className="player"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
