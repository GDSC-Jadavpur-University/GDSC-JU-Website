import React from "react";
import Image from "next/image";

function Fields() {
  return (
    <div className="p-20">
      <p className="text-6xl font-semibold text-center">FIELDS WE WORK IN</p>
      {/* Web Development */}
      <div className="flex items-center py-5">
        <div className="w-2/3">
          <p className="font-semibold text-6xl mb-5">Development</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            architecto asperiores dicta saepe totam quas laboriosam voluptates
            facilis ut numquam, vel beatae odit blanditiis ullam qui, cum
            quibusdam atque iure?
          </p>
        </div>
        <div>
          <Image src="/webdev-image.png" width={400} height={400} />
        </div>
      </div>

      {/* DSA AND CP */}
      <div className="flex items-center py-5 bg-gray-100">
        <div>
          <Image src="/dsacp-image.png" width={400} height={400} />
        </div>
        <div className="w-2/3">
          <p className="font-semibold text-6xl mb-5">DSA And CP</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            architecto asperiores dicta saepe totam quas laboriosam voluptates
            facilis ut numquam, vel beatae odit blanditiis ullam qui, cum
            quibusdam atque iure?
          </p>
        </div>
      </div>

      {/* Machine Learning */}
      <div className="flex items-center py-5">
        <div className="w-2/3">
          <p className="font-semibold text-6xl mb-5">Machine Learning</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            architecto asperiores dicta saepe totam quas laboriosam voluptates
            facilis ut numquam, vel beatae odit blanditiis ullam qui, cum
            quibusdam atque iure?
          </p>
        </div>
        <div>
          <Image src="/ml-image.png" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}

export default Fields;
