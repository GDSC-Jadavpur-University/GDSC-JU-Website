import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image/';
import { motion } from 'framer-motion';
function Gallery() {
  const teams = [
    { imageSrc: '/Gallery/Copy of EXTENDED CORE TEAM.png' },
    { imageSrc: '/Gallery/Copy of CORE TEAM.png' },
    { imageSrc: '/Gallery/Copy of Copy of IMG_1771.png' },
    { imageSrc: '/Gallery/Copy of IMG-20230927-WA0187.jpg' },
    { imageSrc: '/Gallery/Copy of Photo from Aindree.jpg' },
    { imageSrc: '/Gallery/Copy of Siddharth.png' },
    { imageSrc: '/Gallery/Copy of Copy of Copy of Copy of DSCN1310.jpg' },
    {
      imageSrc: '/Gallery/Copy of Copy of Copy of Copy of IMG_0204_edited.jpg',
    },
    { imageSrc: '/Gallery/Copy of Copy of Copy of DSCN1288.JPG.png' },
    { imageSrc: '/Gallery/Copy of Copy of Copy of IMG_0221_edited.jpg' },
    { imageSrc: '/Gallery/Copy of Copy of Copy of DSCN1311.jpg' },
  ];
  const [image, setImage] = useState(null);
  function openModal(imageSrc) {
    setImage(imageSrc);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-wrap justify-center items-center max-w-4xl">
        {teams.map((team, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center m-4 shadow-2xl rounded-medium"
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
            <Link href={`/imageModal?myProp=${team.imageSrc}`}>
              <div className={' relative'}>
                <Image
                  src={team.imageSrc}
                  alt="team"
                  width={300}
                  height={300}
                  className="rounded-medium"
                  objectFit="cover"
                />
                {/* <button
                  className={'float-right bottom-2 right-2 bg-slate-300 p-0.5 rounded absolute'}
                  onClick={() => openModal(team.imageSrc)}
                >
                  <FaMagnifyingGlassPlus size={'0.8em'} style={{ fill: 'black' }} />
                </button> */}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
