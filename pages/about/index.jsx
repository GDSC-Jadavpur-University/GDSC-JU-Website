import { useState } from 'react';
function About() {
  const MapData = [
    {
      name: 'Jadavpur University',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58978.26034265126!2d88.29519464863284!3d22.498882200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271237f28abe9%3A0xd047bab0c8bfb11c!2sJadavpur%20University!5e0!3m2!1sen!2sin!4v1696339207561!5m2!1sen!2sin',
    },
    {
      name: 'Jadavpur University , Salt Lake Campus',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4897894597025!2d88.40846367836448!3d22.56077758056876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743203255595%3A0x9c37b30c00660fab!2sJadavpur%20University%2C%20Salt%20Lake%20Campus!5e0!3m2!1sen!2sin!4v1696339381635!5m2!1sen!2sin',
    },
  ];
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };
  return (
    <div className="flex flex-col items-center mx-8 sm:mx-20">
      <h1 className="font-bold my-5 text-4xl">About</h1>
      <div>
        <p className="text-center">
          The Google Developer Student Club of Jadavpur University, JU. The Google Developer Student Club program is a
          program for university students, designed to help them build their technical skills and knowledge and
          ultimately apply these skills practically to build solutions and solve real world problems for local
          businesses and communities. It is open to any student, ranging from novice developers who are just starting,
          to advanced developers who want to further improve their skills. It is a space for students to learn and
          collaborate in a peer-to-peer learning environment. The GDSC will host events regarding the fields of web
          development, app development, competitive programming, machine learning, DSA and more. The aim of the club is
          to help students to bridge the gap between theory and practice, along with this - the students can build their
          professional and personal networks and get access to google developer resources.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center my-5 w-screen">
        {MapData.map((data) => (
          <div className="sm:w-1/2 w-screen" key={data.name}>
            <h1 className="font-bold my-5 w-full text-xl sm:text-2xl text-center mx-auto">{data.name}</h1>
            <div className="flex w-screen sm:w-auto justify-center relative">
              {!iframeLoaded && <div className="animate-pulse w-full h-full bg-gray-500"></div>}

              <iframe
                className="h-80 sm:w-96 sm:h-96 rounded-lg shadow-xl"
                src={data.src}
                onLoad={handleIframeLoad}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
