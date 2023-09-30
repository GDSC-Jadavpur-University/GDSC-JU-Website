import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="h-[10vh] bg-white border-black border-b-2 flex items-center justify-between px-20 sticky top-0 z-50">
      {/* Logo Image */}
      <Image
        src="/gdsc.png"
        width={400}
        height={300}
      />

      {/* Nav Links */}
      <div className='flex justify-between items-center w-1/3'>
      <Link href="/">
        <p className="text-2xl hover:text-gray-400">Events</p>
      </Link>
      <Link href="/">
        <p className="text-2xl hover:text-gray-400">Gallery</p>
      </Link>
      <Link href="/">
        <p className="text-2xl hover:text-gray-400">Projects</p>
      </Link>
      <Link href="/">
        <p className="text-2xl hover:text-gray-400">Team</p>
      </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
