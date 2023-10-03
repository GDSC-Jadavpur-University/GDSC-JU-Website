import React from "react";
import Image from "next/image/";
import { motion } from "framer-motion";

function Gallery() {
  const teams = [
    { imageSrc: "/Copy of EXTENDED CORE TEAM.png" },
    { imageSrc: "/Copy of CORE TEAM.png" },
    { imageSrc: "/Copy of Copy of IMG_1771.png" },
    { imageSrc: "/Copy of IMG-20230927-WA0187.jpg" },
    { imageSrc: "/Copy of Photo from Aindree.jpg" },
    { imageSrc: "/Copy of Siddharth.png" },
    { imageSrc: "/Copy of Copy of Copy of Copy of DSCN1310.jpg" },
    { imageSrc: "/Copy of Copy of Copy of Copy of IMG_0204_edited.jpg" },
    { imageSrc: "/Copy of Copy of Copy of DSCN1288.JPG.png" },
    { imageSrc: "/Copy of Copy of Copy of IMG_0221_edited.jpg" },
    { imageSrc: "/Copy of Copy of Copy of DSCN1311.jpg" },
  ];

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
              type: "spring",
              stiffness: 110,
              delay: 0.1 * index,
            }}
          >
            <Image
              src={team.imageSrc}
              alt="team"
              width={300}
              height={300}
              className="rounded-medium"
              objectFit="cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
