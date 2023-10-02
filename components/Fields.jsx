import React from "react";
import Image from "next/image";

function Fields() {
  return (
    <div className="p-20 relative mx-auto">
      <p className="text-6xl font-semibold text-center">FIELDS WE WORK IN</p>
      {/* Web Development */}
      <div className="grid grid-cols-2 items-center py-5">
        <div className="w-10/12">
          <p className="font-semibold text-6xl mb-5">Development</p>
          <p>
            Development is the process of creating and maintaining software
            and computer programs. Dev encompasses everything from coding, to
            maintenance to debugging. The open source community is one of the 
            most popular "developer" communities
            
          </p>
        </div>
        <div>
          <Image src="/webdev-image.png" width={400} height={400}  alt=""/>
        </div>
      </div>

      {/* DSA AND CP */}
      <div className="grid grid-cols-2 items-center py-5 bg-gray-100">
        <div>
          <Image src="/dsacp-image.png" width={400} height={400}  alt=""/>
        </div>
        <div className="w-10/12">
          <p className="font-semibold text-6xl mb-5">DSA And CP</p>
          <p>
            DSA (Data Structures and Algorithms) is the study of organizing
            and manipulating data efficiently to perform complex computations
            Competitive programming is a sport of coding where individuals or
            teams solve algorithmic problems in a timed competition using DSA 
            skills, and quick thinking to solve problems within constraints. 
          </p>
        </div>
      </div>

      {/* Machine Learning */}
      <div className="grid grid-cols-2 items-center py-5">
        <div className="w-10/12">
          <p className="font-semibold text-6xl mb-5">Machine Learning</p>
          <p>
            Machine learning is a sub domain of artificial intelligence that lets
            computers learn from data and make predictions or decisions for newer 
            datasets. It involves using algorithms to analyze corelations, patterns
            and relationships within datasets. This technology finds applications 
            in diverse fields, from autonomous driving to bioinformatics.         
          </p>
        </div>
        <div>
          <Image src="/ml-image.png" width={400} height={400} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Fields;
