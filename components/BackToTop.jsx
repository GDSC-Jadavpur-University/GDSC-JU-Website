import { useEffect, useState } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div
        className={`fixed bottom-16 right-10 ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="h-10 w-10 lg:h-16 lg:w-16 bg-black hover:bg-slate-500 hover:-translate-y-2 transition-all ease-in delay-75 rounded-xl p-3 lg:p-4 shadow-md shadow-[rgba(0,0,0,0.35)]"
        >
          <svg
            className="h-full w-full"
            data-name="1-Arrow Up"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="#fff"
            stroke="white"
            strokeWidth={1}
          >
            <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default BackToTop;
