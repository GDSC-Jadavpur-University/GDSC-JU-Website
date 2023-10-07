import React from 'react';
import Image from 'next/image';
function Resource() {
  return (
    <div className="md:px-5 w-[95%] lg:w-[90%] relative mx-auto lg:mt-20 md:mt-[100px]">
      <p className="text-6xl md:text-4xl font-semibold text-center my-5">Roadmaps for Beginners</p>

      {/* Web Development */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-5  items-center py-5">
        <div className="w-10/12 ">
          <p className="font-semibold text-6xl text-red-600 md:text-xl lg:mb-5">Development</p>
          <p className="text-lg">

            To learn frontend, follow{" "}
            <a
              className="text-rose-700 dark:text-red-400 underline decoration-rose-200 decoration-dotted"
              href="https://roadmap.sh/frontend"
              target="_blank"
            >
              {" "}
              this roadmap
            </a>
          </p>
          <p className="text-lg">
            To learn backend, follow{" "}
            <a
              className="text-rose-700 dark:text-red-400 underline decoration-rose-200 decoration-dotted"
              href="https://roadmap.sh/backend"
              target="_blank"
            >
              {" "}
              this roadmap
            </a>
          </p>
          <p className="text-lg">
            To learn UX design, follow{" "}
            <a
              className="text-rose-700 dark:text-red-400 underline decoration-rose-200 decoration-dotted"
              href="https://roadmap.sh/ux-design"
              target="_blank"
            >
              {" "}
              this roadmap
            </a>

          </p>
        </div>
        <div className="mx-auto">
          <Image src="/webdev-image.png" width={400} height={400} alt="" />
        </div>
      </div>

      {/* DSA AND CP */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-5  items-center py-5 bg-slate-200 dark:bg-slate-800">
        <div className="md:mx-auto">
          <Image src="/dsacp-image.png" width={400} height={400} alt="" />
        </div>
        <div className="w-10/12 ">
          <p className="font-semibold md:text-xl text-6xl text-green-600 lg:mb-5">DSA And CP</p>
          <p className="text-lg">

            To learn C++, follow{" "}
            <a
              className="text-green-600 dark:text-green-400 underline decoration-green-500 decoration-dotted"
              href="https://roadmap.sh/cpp"
              target="_blank"
            >
              {" "}
              this roadmap
            </a>
          </p>
          <p className="text-lg">
            To learn DSA, follow{" "}
            <a
              className="text-green-600 dark:text-green-400 underline decoration-green-500 decoration-dotted"
              href="https://roadmap.sh/computer-science"
              target="_blank"
            >
              {" "}
              this roadmap
            </a>
          </p>
          <p className="text-lg">
            To learn CP, follow{" "}
            <a
              className="text-green-600 dark:text-green-400 underline decoration-green-500 decoration-dotted"
              href="https://codeforces.com/blog/entry/65133"
              target="_blank"
            >
              {" "}
              this roadmap
            </a>{" "}

          </p>
        </div>
      </div>

      {/* Machine Learning */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-5  items-center py-10">
        <div className="w-10/12">
          <p className="font-semibold text-6xl text-blue-600 md:text-xl lg:mb-5">Machine Learning</p>
          <p className="text-lg">

            To learn Python, follow{" "}
            <span className="text-blue-600 dark:text-blue-300 underline decoration-blue-300 decoration-dotted">
              {" "}
              <a href="https://roadmap.sh/python" target="_blank">
                {" "}
                this roadmap
              </a>{" "}
            </span>
          </p>
          <p className="text-lg">
            To learn AI/ML, follow{" "}
            <span className="text-blue-600 dark:text-blue-300 underline decoration-blue-300 decoration-dotted">
              {" "}
              <a href="https://roadmap.sh/ai-data-scientist" target="_blank">
                {" "}

                this roadmap
              </a>
            </span>
          </p>
          <p className="text-lg">

            To learn Prompt Engineering, follow{" "}
            <a
              href="https://roadmap.sh/prompt-engineering"
              target="_blank"
              className="text-blue-600 dark:text-blue-300 underline decoration-blue-300 decoration-dotted"
            >
              {" "}
              this roadmap
            </a>

          </p>
        </div>
        <div className="mx-auto">
          <Image src="/ml-image.png" width={400} height={400} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Resource;
