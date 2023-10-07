import React from 'react';
import Image from 'next/image';

function Fields() {
  return (
    <div className="md:px-5 w-[95%] lg:w-[90%] relative mx-auto lg:mt-20 md:mt-[100px]">
      <p className="text-6xl md:text-4xl font-semibold text-center my-5">What We Do</p>

      {/* Web Development */}
      <div className="grid grid-cols-2 mx-auto  grid-col my-5  gap-5 md:grid-cols-1 items-center py-5">
        <div className="w-10/12 ">
          <p className="font-semibold text-6xl text-red-600 md:text-xl lg:mb-5">Development</p>
          <p className="text-lg">
            Development is the process of creating and maintaining software and computer programs. Dev encompasses
            everything from coding, to maintenance to debugging. The open source community is one of the most popular
            &quot;developer&quot; communities
          </p>
        </div>
        <div className="mx-auto">
          <Image src="/webdev-image.png" width={400} height={400} alt="" />
        </div>
      </div>

      {/* DSA AND CP */}
      <div className="grid grid-cols-2 gap-4 my-5 rounded-md shadow-md md:grid-cols-1 md:p-2 items-center py-5 bg-slate-200 dark:bg-slate-800">
        <div className="md:mx-auto">
          <Image src="/dsacp-image.png" width={400} height={400} alt="" />
        </div>
        <div className="w-10/12 ">
          <p className="font-semibold md:text-xl text-6xl text-green-600 lg:mb-5">DSA And CP</p>
          <p className="text-lg dark:text-white">
            DSA (Data Structures and Algorithms) is the study of organizing and manipulating data efficiently to perform
            complex computations Competitive programming is a sport of coding where individuals or teams solve
            algorithmic problems in a timed competition using DSA skills, and quick thinking to solve problems within
            constraints.
          </p>
        </div>
      </div>

      {/* Machine Learning */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-5  items-center py-5">
        <div className="w-10/12">
          <p className="font-semibold text-6xl text-blue-600 md:text-xl lg:mb-5">Machine Learning</p>
          <p className="text-lg">
            Machine learning is a sub domain of artificial intelligence that lets computers learn from data and make
            predictions or decisions for newer datasets. It involves using algorithms to analyze corelations, patterns
            and relationships within datasets. This technology finds applications in diverse fields, from autonomous
            driving to bioinformatics.
          </p>
        </div>
        <div className="mx-auto">
          <Image src="/ml-image.png" width={400} height={400} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Fields;
