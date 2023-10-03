import React, { useState } from "react";
import Image from "next/image/";

const TeamsPage = () => {
  const teams = [
    {
      name: "Core Team",
      folder: "Core Team",
      members: [
        {
          name: "Anurag Jha ",
          designation: "GDSC Lead",
          imageSrc: "/TeamImages/Core Team/anurag_jha.jpg",
        },
        {
          name: "Arya Pandit",
          designation: "Dev Lead",
          imageSrc: "/TeamImages/Core Team/ayush_pandit_4WShbLz.jpg",
        },
        {
          name: "Akancha Singh",
          designation: "Events Team",
          imageSrc: "/TeamImages/Core Team/akankcha_singh_vo1kvKT.jpg",
        },
        {
          name: "Upayan De",
          designation: "CP/DSA Lead",
          imageSrc: "/TeamImages/Core Team/upayan_de.jpg",
        },
        {
          name: "Vikash Sangai",
          designation: "CP/DSA Co-Lead",
          imageSrc: "/TeamImages/Core Team/vikash_sangai_UWkdSc0.jpeg",
        },
        {
          name: "Debabrata Mondal",
          designation: "Content Lead",
          imageSrc: "/TeamImages/Core Team/debabrata_mondal.jpg",
        },
        {
          name: "Om Mittal",
          designation: "ML Lead",
          imageSrc: "/TeamImages/Core Team/om_mittal_VFuwfCV.jpg",
        },
        {
          name: "Somoprovo Bhattacharjee",
          designation: "Design Lead",
          imageSrc: "/TeamImages/Core Team/Somoprovo Bhattacharjee.jpeg",
        },
      ],
    },
    {
      name: "Dev Team",
      folder: "Dev Team",
      members: [
        {
          name: "Arka Dutta",
          imageSrc: "/TeamImages/Dev Team/Arka_Dutta_DevTeam.jpg",
        },
        {
          name: "Ayantik Bhaumik",
          imageSrc: "/TeamImages/Dev Team/Ayantik_Bhaumik_DevTeam.jpeg",
        },
        {
          name: "Bhavesh Agarwal",
          imageSrc: "/TeamImages/Dev Team/Bhavesh_Agarwal_DevTeam.jpg",
        },
        {
          name: "Sayan Saha",
          imageSrc: "/TeamImages/Dev Team/Sayan_Sah_DevTeam.jpg",
        },
        {
          name: "Soumyajit Naskar",
          imageSrc: "/TeamImages/Dev Team/Soumyajit_Naskar_DevTeam.jpg",
        },
        {
          name: "Subhradeep Bera",
          imageSrc: "/TeamImages/Dev Team/Subhradeep_Bera_DevTeam.jpg",
        },
        {
          name: "Shubam Pandey",
          imageSrc: "/TeamImages/Dev Team/Shubham_Pandey_DevTeam.jpg",
        },
      ],
    },
    {
      name: "ML Team",
      folder: "ML Team",
      members: [
        {
          name: "Dipan Mondal",
          imageSrc: "/TeamImages/ML Team/Dipan_Mondal_ML_Team.jpg",
        },
        {
          name: "Parthiv Sarkar",
          imageSrc: "/TeamImages/ML Team/Parthiv_Sarkar_ML_Team.jpeg",
        },
        {
          name: "Shakya Majumdar",
          imageSrc: "/TeamImages/ML Team/Shakya_Majumdar_ML_Team.jpg",
        },
        {
          name: "Sheetali Maity",
          imageSrc: "/TeamImages/ML Team/Sheetali_Maity_ML_Team.jpg",
        },
        {
          name: "Srijit Das",
          imageSrc: "/TeamImages/ML Team/Srijit_Das_ML_Team.jpg",
        },
        {
          name: "Srinjoy Dutta",
          imageSrc: "/TeamImages/ML Team/Srinjoy_Dutta_ML_Team.jpg",
        },
      ],
    },
    {
      name: "Events Team",
      folder: "Events Team",
      members: [
        {
          name: "Anurag Dey",
          imageSrc: "/TeamImages/Events Team/Anurag_Dey_Events.png",
        },
        {
          name: "Ayantik Bhaumik",
          imageSrc: "/TeamImages/Events Team/Ayantik_Bhaumik_Events.jpeg",
        },
        {
          name: "Debanuj Basak",
          imageSrc: "/TeamImages/Events Team/Debanuj_Basak_Events.png",
        },
        {
          name: "Gaurav Bose ",
          imageSrc: "/TeamImages/Events Team/Gaurav_Bose_EventsTeam.jpg",
        },
        {
          name: "Piyush Gupta ",
          imageSrc: "/TeamImages/Events Team/Piyush_Gupta_EventsTeam.jpg",
        },
        {
          name: "Rajat Subhra Chowdury",
          imageSrc: "/TeamImages/Events Team/Rajat_subhra_chowdhury.jpeg",
        },
      ],
    },
    {
      name: "Design Team",
      folder: "Design Team",
      members: [
        {
          name: "Aindree Chatterjee",
          imageSrc: "/TeamImages/Design Team/Aindree_Chatterjee_Design.jpg",
        },
        {
          name: "Anurag Dey",
          imageSrc: "/TeamImages/Design Team/Anurag_Dey_Design.png",
        },
        {
          name: "Apurba Nandi",
          imageSrc: "/TeamImages/Design Team/Apurba_Nandi_Design.jpg",
        },
        {
          name: "Koustav Bhattacharjee",
          imageSrc: "/TeamImages/Design Team/Koustav_Bhattacharjee_Design.jpg",
        },
        {
          name: "Prama Ray",
          imageSrc: "/TeamImages/Design Team/Prama_Ray_Design.jpg",
        },
        {
          name: "Saumili Roy ",
          imageSrc: "/TeamImages/Design Team/Saumili_Roy_Design.png",
        },
        {
          name: "Sayandeep Pramanik",
          imageSrc: "/TeamImages/Design Team/Sayandeep_Pramanik_Design.jpg",
        },
        {
          name: "Shreyaan Saha",
          imageSrc: "/TeamImages/Design Team/Shreyaan_Saha_Design.jpg",
        },
        {
          name: "Soumyadeep Kar",
          imageSrc: "/TeamImages/Design Team/Soumyadeep_Kar_Design.jpg",
        },
      ],
    },
    {
      name: "Content Team",
      folder: "Content Team",
      members: [
        {
          name: "Abhinandan Barua",
          imageSrc: "/TeamImages/Content Team/Abhinandan_Barua_Content.jpg",
        },
        {
          name: "Arya Pandit",
          imageSrc: "/TeamImages/Content Team/Arya_Pandit_Content.jpg",
        },
        {
          name: "Spandan_Das",
          imageSrc: "/TeamImages/Content Team/Spandan_Das_Content.jpeg",
        },
      ],
    },
  ];

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center py-5">
          <div className="flex flex-wrap justify-center">
            {teams.map((team, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <h1 className="text-3xl font-bold text-gray-800">
                  {team.name}
                </h1>
                <div className="flex flex-wrap justify-center">
                  <TeamGroup team={team} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const TeamGroup = ({ team }) => {
  return (
    <>
      {team.members.map((member, index) => (
        <TeamMember
          key={index}
          name={member.name}
          designation={member.designation}
          imageSrc={member.imageSrc}
        />
      ))}
    </>
  );
};

const TeamMember = ({ name, designation, imageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <div className="w-40 h-40 relative">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <p className="text-gray-800 font-semibold">{name}</p>
      <p className="text-gray-600">{designation}</p>
    </div>
  );
};

export default TeamsPage;
