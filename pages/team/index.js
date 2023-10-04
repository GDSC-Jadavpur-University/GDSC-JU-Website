import React, { useState } from "react";
import Image from "next/image/";
import { motion } from "framer-motion";

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
          name: "Ayush Pandit",
          designation: "Dev Lead",
          imageSrc: "/TeamImages/Core Team/ayush_pandit_4WShbLz.jpg",
        },
        {
          name: "Atanu Nayak",
          designation: "Dev Lead",
          imageSrc: "/TeamImages/Core Team/Atanu Nayak.jpeg",
        },
        {
          name: "Akancha Singh",
          designation: "Events Lead",
          imageSrc: "/TeamImages/Core Team/akankcha_singh_vo1kvKT.jpg",
        },
        {
          name: "Jyotishman Sarkar",
          designation: "Events Lead",
          imageSrc: "/TeamImages/Core Team/Jyotisman _Sarkar.jpeg",
        },
        {
          name: "Upayan De",
          designation: "CP/DSA Lead",
          imageSrc: "/TeamImages/Core Team/upayan_de.jpg",
        },
        {
          name: "Vikash Sangai",
          designation: "CP/DSA Lead",
          imageSrc: "/TeamImages/Core Team/vikash_sangai_UWkdSc0.jpeg",
        },
        {
          name: "Anupam Ghosh",
          designation: "CP/DSA Lead",
          imageSrc: "/TeamImages/Core Team/Anupam_Ghosh.jpeg",
        },
        {
          name: "Debabrata Mondal",
          designation: "Content Lead",
          imageSrc: "/TeamImages/Core Team/debabrata_mondal.jpg",
        },
        {
          name: "Siddharth Banerjee",
          designation: "Content Lead",
          imageSrc: "/TeamImages/Core Team/Siddharth_Banerjee.jpg",
        },
        {
          name: "Om Mittal",
          designation: "ML Lead",
          imageSrc: "/TeamImages/Core Team/Om_Mittal.jpeg",
        },
        {
          name: "Aryan Paul",
          designation: "ML Lead",
          imageSrc: "/TeamImages/Core Team/Aryan Paul.jpeg",
        },
        {
          name: "Somoprovo Bhattacharjee",
          designation: "Design Lead",
          imageSrc: "/TeamImages/Core Team/Somoprovo_Bhattacharjee.jpeg",
        },
        {
          name: "Arin Roy",
          designation: "Design Lead",
          imageSrc: "/TeamImages/Core Team/ArinRay.jpeg",
        },
      ],
    },
    {
      name: "Dev Team",
      folder: "Dev Team",
      members: [
        {
          name: "Aditya Mayukh Som",
          imageSrc: "/TeamImages/Dev Team/aditya_mayukh.jpg",
        },
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
          name: "Sayan Kumar Sah",
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
          name: "Soumyadipto Pal",
          imageSrc: "/TeamImages/ML Team/Soumyadipto_Pal_ML_Team.jpg",
        },
        {
          name: "Srijit Das",
          imageSrc: "/TeamImages/ML Team/Srijit_Das_ML_Team.jpg",
        },
        {
          name: "Srinjoy Dutta",
          imageSrc: "/TeamImages/ML Team/Srinjoy_Dutta_ML_Team.jpg",
        },
        {
          name: "Dipan Mondal",
          imageSrc: "/TeamImages/ML Team/Dipan_Mondal_ML_Team.jpg",
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
        {
          name: "Tarpan Roy",
          imageSrc: "/TeamImages/Events Team/Tarpan_Roy_Eventsteam.jpg",
        },{
          name: "Surjayan Kar",
          imageSrc: "/TeamImages/Events Team/Surjayan_Kar_EventsTeam.jpg",
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
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
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
          index={index}
          name={member.name}
          designation={member.designation}
          imageSrc={member.imageSrc}
        />
      ))}
    </>
  );
};

const TeamMember = ({ name, designation, imageSrc, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center m-4"
      initial={{ opacity: 0, y: 50, scale: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.1,
        type: "spring",
        stiffness: 110,
        delay: 0.1 * index,
      }}
    >
      <div className="w-40 h-40 relative">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          className="rounded-full shadow-2xl object-cover"
          objectFit="cover"
        />
      </div>
      <motion.p
        className="text-gray-800 font-semibold dark:text-white"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 110,
          delay: 0.1 * index,
        }}
      >
        {name}
      </motion.p>
      <p className="text-gray-600 dark:text-white">{designation}</p>
    </motion.div>
  );
};

export default TeamsPage;
