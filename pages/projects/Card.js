import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

function Card(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 px-2 py-2">
      <Image
        src={props.image}
        alt={props.title}
        className="rounded-t-lg w-full"
        width={300}
        height={180}
        objectFit="cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-500 text-base">{props.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={props.link}
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          <FaGithub className="inline-block mr-2" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default Card;
