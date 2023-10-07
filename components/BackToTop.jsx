import { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <motion.button
          className="fixed bottom-5 right-5 z-50 p-2  dark:bg-gray-600 bg-gray-400 rounded-full shadow-md hover:bg-gray-400"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <BsFillArrowUpCircleFill size={30} style={{ color: 'white' }} />
        </motion.button>
      )}
    </>
  );
};

export default BackToTop;
