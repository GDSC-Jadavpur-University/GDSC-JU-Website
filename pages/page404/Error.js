import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import imagee from './404.svg';
const Error = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Image src={imagee} alt="404" width={500} height={500} />
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-4xl font-bold">Page Not Found</h2>
        <Link href="/">
          <a className="px-4 py-2 mt-4 text-white bg-gray-800 rounded hover:bg-gray-700">Back to Home</a>
        </Link>
      </div>
    </>
  );
};

export default Error;
