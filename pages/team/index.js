import React, { useState } from 'react';
import Image from "next/image/";

const TeamsPage = () => {
  const teams = [
    {
      name: 'Core Team',
      folder:'Core Team',
      members: [
        { name: 'Anurag Jha ',designation: 'GDSC Lead', imageSrc: '/TeamImages/Core Team/anurag_jha.jpg' },
        { name: 'Arya Pandit',designation: 'Dev Lead', imageSrc: '/TeamImages/Core Team/ayush_pandit_4WShbLz.jpg' },
        { name: 'Akancha Singh',designation: 'Events Team', imageSrc: '/TeamImages/Core Team/akankcha_singh_vo1kvKT.jpg' },
        { name: 'Upayan De',designation: 'CP/DSA Lead', imageSrc: '/TeamImages/Core Team/upayan_de.jpg' },
        { name: 'Vikash Sangai',designation: 'CP/DSA Co-Lead', imageSrc: '/TeamImages/Core Team/vikash_sangai_UWkdSc0.jpeg' },
        { name: 'Debabrata Mondal', designation: 'Content Lead',imageSrc: '/TeamImages/Core Team/debabrata_mondal.jpg' },
        { name: 'Om Mittal', designation: 'ML Lead',imageSrc: '/TeamImages/Core Team/om_mittal_VFuwfCV.jpg' },
        { name: 'Somoprovo Bhattacharjee',designation: 'Design Lead', imageSrc: '/TeamImages/Core Team/Somoprovo Bhattacharjee.jpeg' },




        

        
   
        

      ],
    },
    {
      name: 'Dev Team',
      folder:'Dev Team',
      members: [
        { name: 'Arka Dutta', imageSrc: '/TeamImages/Dev Team/Arka_Dutta_DevTeam.jpg' },
        { name: 'Ayantik Bhaumik', imageSrc: '/TeamImages/Dev Team/Ayantik_Bhaumik_DevTeam.jpeg' },
        { name: 'Bhavesh Agarwal', imageSrc: '/TeamImages/Dev Team/Bhavesh_Agarwal_DevTeam.jpg' },
        { name: 'Sayan Saha', imageSrc: '/TeamImages/Dev Team/Sayan_Sah_DevTeam.jpg' },
        { name: 'Soumyajit Naskar', imageSrc: '/TeamImages/Dev Team/Soumyajit_Naskar_DevTeam.jpg' },
        { name: 'Subhradeep Bera', imageSrc: '/TeamImages/Dev Team/Subhradeep_Bera_DevTeam.jpg' },
        { name: 'Shubam Pandey', imageSrc: '/TeamImages/Dev Team/Shubham_Pandey_DevTeam.jpg' },
        



      ],
    },
    {
      name: 'ML Team',
      folder:'ML Team',
      members: [
        { name: 'Dipan Mondal', imageSrc: '/TeamImages/ML Team/Dipan_Mondal_ML_Team.jpg' },
        { name: 'Parthiv Sarkar', imageSrc: '/TeamImages/ML Team/Parthiv_Sarkar_ML_Team.jpeg' },
        { name: 'Shakya Majumdar', imageSrc: '/TeamImages/ML Team/Shakya_Majumdar_ML_Team.jpg' },
        { name: 'Sheetali Maity', imageSrc: '/TeamImages/ML Team/Sheetali_Maity_ML_Team.jpg' },
        { name: 'Srijit Das', imageSrc: '/TeamImages/ML Team/Srijit_Das_ML_Team.jpg' },
        { name: 'Srinjoy Dutta', imageSrc: '/TeamImages/ML Team/Srinjoy_Dutta_ML_Team.jpg' },

      ],
    },
    {
      name: 'Events Team',
      folder:'Events Team',
      members: [
        { name: 'Anurag Dey', imageSrc: '/TeamImages/Events Team/Anurag_Dey_Events.png' },
        { name: 'Ayantik Bhaumik', imageSrc: '/TeamImages/Events Team/Ayantik_Bhaumik_Events.jpeg' },
        { name: 'Debanuj Basak', imageSrc: '/TeamImages/Events Team/Debanuj_Basak_Events.png' },
        { name: 'Gaurav Bose ', imageSrc: '/TeamImages/Events Team/Gaurav_Bose_EventsTeam.jpg' },
        { name: 'Piyush Gupta ', imageSrc: '/TeamImages/Events Team/Piyush_Gupta_EventsTeam.jpg' },
        { name: 'Rajat Subhra Chowdury', imageSrc: '/TeamImages/Events Team/Rajat_subhra_chowdhury.jpeg' },
        
        

      ],
    },
    {
      name: 'Design Team',
      folder:'Design Team',
      members: [
        { name: 'Aindree Chatterjee', imageSrc: '/TeamImages/Design Team/Aindree_Chatterjee_Design.jpg' },
        { name: 'Anurag Dey', imageSrc: '/TeamImages/Design Team/Anurag_Dey_Design.png' },
        { name: 'Apurba Nandi', imageSrc: '/TeamImages/Design Team/Apurba_Nandi_Design.jpg' },
        { name: 'Koustav Bhattacharjee', imageSrc: '/TeamImages/Design Team/Koustav_Bhattacharjee_Design.jpg' },
        { name: 'Prama Ray', imageSrc: '/TeamImages/Design Team/Prama_Ray_Design.jpg' },
        { name: 'Saumili Roy ', imageSrc: '/TeamImages/Design Team/Saumili_Roy_Design.png' },
        { name: 'Sayandeep Pramanik', imageSrc: '/TeamImages/Design Team/Sayandeep_Pramanik_Design.jpg' },
        { name: 'Shreyaan Saha', imageSrc: '/TeamImages/Design Team/Shreyaan_Saha_Design.jpg' },
        { name: 'Soumyadeep Kar', imageSrc: '/TeamImages/Design Team/Soumyadeep_Kar_Design.jpg' },

        

      ],
    },
    {
      name: 'Content Team',
      folder:'Content Team',
      members: [
        { name: 'Abhinandan Barua', imageSrc: '/TeamImages/Content Team/Abhinandan_Barua_Content.jpg' },
        { name: 'Arya Pandit', imageSrc: '/TeamImages/Content Team/Arya_Pandit_Content.jpg' },
        { name: 'Spandan_Das', imageSrc: '/TeamImages/Content Team/Spandan_Das_Content.jpeg' },
   
        

      ],
    },
   
    // ... other teams
  ];

  const [activeTeam, setActiveTeam] = useState(teams[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTeamChange = (index) => {
    setActiveTeam(teams[index]);
    setActiveIndex(index);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 flex flex-col items-center">{activeTeam.name}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {activeTeam.members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md text-center transform hover:scale-110 transition"
          >
            <div className="h-36 w-36 mx-auto mt-4 rounded-full overflow-hidden">
              <img
                src={member.imageSrc}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-2">
              <p className="text-lg font-semibold">{member.name}</p>
              {activeTeam.name === 'Core Team' && (
                <p className="text-sm text-gray-500">{member.designation}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        {teams.map((team, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full mx-2 ${
              index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => handleTeamChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
