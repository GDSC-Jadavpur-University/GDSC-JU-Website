import React from "react";

function About() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin:"50px 20px"}}>
      <h1 style={{ fontWeight: "bold", fontSize: "36px", marginBottom: "20px" }}>About</h1>
      <p style={{ textAlign: "center",  marginBottom:"20px"}}>The Google Developer Student Club of Jadavpur University, JU. 

The Google Developer Student Club program is a program for university students, designed to help them build their technical skills and knowledge and ultimately apply these skills practically to build solutions and solve real world problems for local businesses and communities.

It is open to any student, ranging from novice developers who are just starting, to advanced developers who want to further improve their skills. It is a space for students to learn and collaborate in a peer-to-peer learning environment. The GDSC will host events regarding the fields of web development, app development, competitive programming, machine learning, DSA and more. The aim of the club is to help students to bridge the gap between theory and practice, along with this - the students can build their professional and personal networks and get access to google developer resources.</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ border: "1px solid black", width: "320px", height: "200px", padding: "10px", margin: "10px", borderRadius: "10px" }}>
          <div>
            <h2>Jadavpur University</h2>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58978.26034265126!2d88.29519464863284!3d22.498882200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271237f28abe9%3A0xd047bab0c8bfb11c!2sJadavpur%20University!5e0!3m2!1sen!2sin!4v1696339207561!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div style={{ border: "1px solid black", width: "320px", height: "200px", padding: "10px", margin: "10px", borderRadius: "10px" }}>
          <div>
            <h2>Jadavpur University , Salt Lake Campus</h2>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4897894597025!2d88.40846367836448!3d22.56077758056876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743203255595%3A0x9c37b30c00660fab!2sJadavpur%20University%2C%20Salt%20Lake%20Campus!5e0!3m2!1sen!2sin!4v1696339381635!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;