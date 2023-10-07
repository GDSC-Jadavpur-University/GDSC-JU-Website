// NotFound.jsx
import React from 'react';
// import astronaut from '/astronaut.svg';
// import saturn from '/saturn.svg';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NotFound = () => {
  const navigate = useRouter();

  const handleRedirection = () => {
    navigate.push('/');
  };
  return (
    <div className="bg-[#24344c] h-screen relative overflow-hidden fontDosis">
      <div id="particles-js" className=" bg-[#24344c] fixed w-full h-full opacity-20"></div>
      <div className="denied__wrapper absolute bg-[#24344c] denied__wrapper h-[390px] left-1/2 max-w-[390px] mx-auto top-[30%] translate-x-[-50%] translate-y-[-50%] w-full">
        <div className="relative">
          <h1 className="text-center text-white font-Dosis text-[100px] mb-0 font-extrabold">404</h1>
          <h3 className="text-center text-white text-base md:text-xl leading-6 max-w-[330px] mx-auto mb-8 font-Dosis font-normal">
            LOST IN
            <span className="relative inline-block">
              &nbsp; SPACE
              <span className="strikeThru"></span>
            </span>
            &nbsp; GDSC? Hmm, looks like that page doesn&apos;t exist.
          </h3>
          <Image
            id="astronaut"
            src="/astronaut.svg"
            alt="Astronaut"
            className="w-[43px] absolute right-20 top-210 animate-spin animation-linear duration-100"
            width={43}
            height={43}
          />
          <Image id="planet" src="/saturn.svg" alt="Planet" className="absolute w-[390px]" width={390} height={390} />
        </div>
      </div>

      <button
        className="bg-transparent text-white py-2 px-0 border border-white rounded-md w-[150px] text-15 text-center mx-auto align-middle block mb-4 mt-25 fontDosis font-normal bottom-0 absolute left-1/2 translate-x-[-50%] translate-y-[-50%]"
        onClick={handleRedirection}
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
