import React from "react";

function Footer() {
  return (
    <footer className="bg-white m-4">
        <hr className=" border-grey-600 sm:mx-auto lg:my-3" />

        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/#" className="flex items-center mb-4 sm:mb-0">
                    <img src="./gdsc.png" className="h-8 mr-3" alt="GDSC Logo" />
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Contact Us</a>
                    </li>
            
                </ul>
            </div>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">GDSC JU™</a>. All Rights Reserved.</span>
        </div>
    </footer>
    
    
  );
}

export default Footer;
