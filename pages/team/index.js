import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const TeamsPage = () => {
  const teams = [
    {
      name: 'Core Team',
      folder: 'Core Team',
      members: [
        {
          name: 'Anurag Jha ',
          designation: 'GDSC Lead',
          imageSrc: '/TeamImages/Core Team/anurag_jha.jpg',
          linkedin: 'https://www.linkedin.com/in/anurag-jha-600967225/',
        },
        {
          name: 'Ayush Pandit',
          designation: 'Dev Lead',
          imageSrc: '/TeamImages/Core Team/ayush_pandit_4WShbLz.jpg',
          linkedin: 'https://www.linkedin.com/in/ayushpanditmoto/',
        },
        {
          name: 'Atanu Nayak',
          designation: 'Dev Lead',
          imageSrc: '/TeamImages/Core Team/Atanu Nayak.jpeg',
          linkedin: 'https://www.linkedin.com/in/atanu-nayak-profile/',
        },
        {
          name: 'Akancha Singh',
          designation: 'Events Lead',
          imageSrc: '/TeamImages/Core Team/akankcha_singh_vo1kvKT.jpg',
          linkedin: 'https://www.linkedin.com/in/akankcha-singh-604382228/',
        },
        {
          name: 'Jyotishman Sarkar',
          designation: 'Events Lead',
          imageSrc: '/TeamImages/Core Team/Jyotisman _Sarkar.jpeg',
          linkedin: 'https://www.linkedin.com/in/jyotishman-sarkar-423510258/',
        },
        {
          name: 'Upayan De',
          designation: 'CP/DSA Lead',
          imageSrc: '/TeamImages/Core Team/upayan_de.jpg',
          linkedin: 'https://www.linkedin.com/in/upayan-de-81545a222/',
        },
        {
          name: 'Vikash Sangai',
          designation: 'CP/DSA Lead',
          imageSrc: '/TeamImages/Core Team/vikash_sangai_UWkdSc0.jpeg',
          linkedin: 'https://www.linkedin.com/in/vikash-sangai/',
        },
        {
          name: 'Anupam Ghosh',
          designation: 'CP/DSA Lead',
          imageSrc: '/TeamImages/Core Team/Anupam_Ghosh.jpeg',
          linkedin: 'https://www.linkedin.com/in/anupam--ghosh/',
        },
        {
          name: 'Debabrata Mondal',
          designation: 'Content Lead',
          imageSrc: '/TeamImages/Core Team/debabrata_mondal.jpg',
          linkedin: 'https://www.linkedin.com/in/0xdebabrata/',
        },
        {
          name: 'Siddharth Banerjee',
          designation: 'Content Lead',
          imageSrc: '/TeamImages/Core Team/Siddharth_Banerjee.jpg',
          linkedin: 'https://www.linkedin.com/in/siddharth-sibidine-banerjee/',
        },
        {
          name: 'Om Mittal',
          designation: 'ML Lead',
          imageSrc: '/TeamImages/Core Team/Om_Mittal.jpeg',
          linkedin: 'https://www.linkedin.com/in/om-mittal/',
        },
        {
          name: 'Aryan Paul',
          designation: 'ML Lead',
          imageSrc: '/TeamImages/Core Team/Aryan Paul.jpeg',
          linkedin: 'https://www.linkedin.com/in/aryan-paul-b67887218/',
        },
        {
          name: 'Somoprovo Bhattacharjee',
          designation: 'Design Lead',
          imageSrc: '/TeamImages/Core Team/Somoprovo_Bhattacharjee.jpeg',
          linkedin: 'https://www.linkedin.com/in/somoprovo-bhattacharjee/',
        },
        {
          name: 'Arin Ray',
          designation: 'Design Lead',
          imageSrc: '/TeamImages/Core Team/ArinRay.jpeg',
          linkedin: 'https://www.linkedin.com/in/arin-ray-36bb9923a/',
        },
      ],
    },
    {
      name: 'Dev Team',
      folder: 'Dev Team',
      members: [
        {
          name: 'Aditya Mayukh Som',
          imageSrc: '/TeamImages/Dev Team/aditya_mayukh.jpg',
          linkedin: 'https://www.linkedin.com/in/adityamayukhsom/',
        },
        {
          name: 'Arka Dutta',
          imageSrc: '/TeamImages/Dev Team/Arka_Dutta_DevTeam.jpg',
          linkedin: 'https://www.linkedin.com/in/arka-dutta-282b22287/',
        },

        {
          name: 'Ayantik Bhaumik',
          imageSrc: '/TeamImages/Dev Team/Ayantik_Bhaumik_DevTeam.jpeg',
          linkedin: 'https://www.linkedin.com/in/ayantik-bhaumik/',
        },
        {
          name: 'Bhavesh Agarwal',
          imageSrc: '/TeamImages/Dev Team/Bhavesh_Agarwal_DevTeam.jpg',
          linkedin: 'https://www.linkedin.com/in/bhavesh-agrawal-6a88b824b/',
        },
        {
          name: 'Sayan Kumar Sah',
          imageSrc: '/TeamImages/Dev Team/Sayan_Sah_DevTeam.jpg',
          linkedin: 'https://www.linkedin.com/in/sayan-sah-3a6529212/',
        },
        {
          name: 'Soumyajit Naskar',
          imageSrc: '/TeamImages/Dev Team/Soumyajit_Naskar_DevTeam.jpg',
          linkedin: 'https://www.linkedin.com/in/algomaniac/',
        },
        {
          name: 'Subhradeep Bera',
          imageSrc: '/TeamImages/Dev Team/Subhradeep_Bera_DevTeam.jpg',
          linkedin: 'https://www.linkedin.com/in/subhradeep-bera/',
        },
        {
          name: 'Shubham Pandey',
          imageSrc: '/TeamImages/Dev Team/Shubham_Pandey_DevTeam.jpg',
          linkedin: 'https://www.linkedin.com/in/shubham-pandey-69a325233/',
        },
      ],
    },
    {
      name: 'ML Team',
      folder: 'ML Team',
      members: [
        {
          name: 'Parthiv Sarkar',
          imageSrc: '/TeamImages/ML Team/Parthiv_Sarkar_ML_Team.jpeg',
          linkedin: 'https://www.linkedin.com/in/parthiv-sarkar-19414b204/',
        },
        {
          name: 'Shakya Majumdar',
          imageSrc: '/TeamImages/ML Team/Shakya_Majumdar_ML_Team.jpg',
          linkedin: '',
        },
        {
          name: 'Sheetali Maity',
          imageSrc: '/TeamImages/ML Team/Sheetali_Maity_ML_Team.jpg',
          linkedin: 'Sheetali Maity',
        },
        {
          name: 'Soumyadipto Pal',
          imageSrc: '/TeamImages/ML Team/Soumyadipto_Pal_ML_Team.jpg',
          linkedin: 'https://www.linkedin.com/in/soumyadipto-pal-53018b25a/',
        },
        {
          name: 'Srijit Das',
          imageSrc: '/TeamImages/ML Team/Srijit_Das_ML_Team.jpg',
          linkedin: 'https://www.linkedin.com/in/srijit-das-538593212/',
        },
        {
          name: 'Srinjoy Dutta',
          imageSrc: '/TeamImages/ML Team/Srinjoy_Dutta_ML_Team.jpg',
          linkedin: 'https://www.linkedin.com/in/srinjoy-dutta-797817224/',
        },
        {
          name: 'Dipan Mondal',
          imageSrc: '/TeamImages/ML Team/Dipan_Mondal_ML_Team.jpg',
          linkedin: 'https://www.linkedin.com/in/dipan-mondal-799ab6258/',
        },
      ],
    },
    {
      name: 'Events Team',
      folder: 'Events Team',
      members: [
        {
          name: 'Anurag Dey',
          imageSrc: '/TeamImages/Events Team/Anurag_Dey_Events.png',
          linkedin: 'https://www.linkedin.com/in/anurag-dey-jube26/',
        },
        {
          name: 'Ayantik Bhaumik',
          imageSrc: '/TeamImages/Events Team/Ayantik_Bhaumik_Events.jpeg',
          linkedin: 'https://www.linkedin.com/in/ayantik-bhaumik/',
        },
        {
          name: 'Debanuj Basak',
          imageSrc: '/TeamImages/Events Team/Debanuj_Basak_Events.png',
          linkedin: 'https://www.linkedin.com/in/debanuj-basak/',
        },
        {
          name: 'Gaurav Bose ',
          imageSrc: '/TeamImages/Events Team/Gaurav_Bose_EventsTeam.jpg',
          linkedin: 'https://www.linkedin.com/in/gaurav-bose-a7a199200/',
        },

        {
          name: 'Piyush Gupta ',
          imageSrc: '/TeamImages/Events Team/Piyush_Gupta_EventsTeam.jpg',
          linkedin: 'https://www.linkedin.com/in/piyush-gupta-370979257/',
        },
        {
          name: 'Rajat Subhra Chowdhury',
          imageSrc: '/TeamImages/Events Team/Rajat_subhra_chowdhury.jpeg',
          linkedin: 'https://www.linkedin.com/in/rajat-subhra-chowdhury-4aa20a26b/',
        },
      ],
    },
    {
      name: 'Design Team',
      folder: 'Design Team',
      members: [
        {
          name: 'Aindree Chatterjee',
          imageSrc: '/TeamImages/Design Team/Aindree_Chatterjee_Design.jpg',
          linkedin: 'https://www.linkedin.com/in/aindree-chatterjee-b93279201/',
        },
        {
          name: 'Anurag Dey',
          imageSrc: '/TeamImages/Design Team/Anurag_Dey_Design.png',
          linkedin: 'https://www.linkedin.com/in/anurag-dey-jube26/',
        },
        {
          name: 'Apurba Nandi',
          imageSrc: '/TeamImages/Design Team/Apurba_Nandi_Design.jpg',
          linkedin: 'https://www.linkedin.com/in/apurbanandi/',
        },
        {
          name: 'Koustav Bhattacharjee',
          imageSrc: '/TeamImages/Design Team/Koustav_Bhattacharjee_Design.jpg',
          linkedin: 'https://www.linkedin.com/in/itskoustavbh786/',
        },
        {
          name: 'Prama Ray',
          imageSrc: '/TeamImages/Design Team/Prama_Ray_Design.jpg',
          linkedin: 'https://www.linkedin.com/in/pramaray/',
        },
        {
          name: 'Saumili Roy ',
          imageSrc: '/TeamImages/Design Team/Saumili_Roy_Design.png',
          linkedin: 'https://www.linkedin.com/in/saumili-roy-4a65351ba/',
        },
        {
          name: 'Sayandeep Pramanik',
          imageSrc: '/TeamImages/Design Team/Sayandeep_Pramanik_Design.jpg',
          linkedin: 'https://www.linkedin.com/in/itzsayandeep/',
        },
        {
          name: 'Shreyaan Saha',
          imageSrc: '/TeamImages/Design Team/Shreyaan_Saha_Design.jpg',
          linkedin: 'https://www.linkedin.com/in/shreyaan-saha-30b3321ba/',
        },
        {
          name: 'Soumyadeep Kar',
          imageSrc: '/TeamImages/Design Team/Soumyadeep_Kar_Design.jpg',
          linkedin: 'https://www.linkedin.com/in/soumyadeep-kar-8791ba267/',
        },
      ],
    },
    {
      name: 'Content Team',
      folder: 'Content Team',
      members: [
        {
          name: 'Abhinandan Barua',
          imageSrc: '/TeamImages/Content Team/Abhinandan_Barua_Content.jpg',
          linkedin: 'https://www.linkedin.com/in/abhinandan-barua/',
        },
        {
          name: 'Arya Pandit',
          imageSrc: '/TeamImages/Content Team/Arya_Pandit_Content.jpg',
          linkedin: 'https://www.linkedin.com/in/arya-pandit-146023250/',
        },
        {
          name: 'Spandan_Das',
          imageSrc: '/TeamImages/Content Team/Spandan_Das_Content.jpeg',
          linkedin: 'https://www.linkedin.com/in/spandan-das-907573248/',
        },
      ],
    },
  ];

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center py-6">
          <div className="flex flex-wrap justify-center">
            {teams.map((team, index) => (
              <div key={index} className="flex flex-col items-center justify-center py-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{team.name}</h1>
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
          linkedin={member.linkedin}
        />
      ))}
    </>
  );
};

const TeamMember = ({ name, designation, imageSrc, linkedin, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center m-4"
      initial={{ opacity: 0, y: 50, scale: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.1,
        type: 'spring',
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
          style={{ objectFit: 'cover' }}
        />
      </div>
      <motion.p
        className="text-gray-800 font-semibold dark:text-white"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          type: 'spring',
          stiffness: 110,
          delay: 0.1 * index,
        }}
      >
        {name}
      </motion.p>
      <p className="text-gray-600 dark:text-white">{designation}</p>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={25} className="text-black dark:text-white" />
      </a>
    </motion.div>
  );
};

export default TeamsPage;
