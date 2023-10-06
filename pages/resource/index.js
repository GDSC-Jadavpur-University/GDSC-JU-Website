import React from 'react';
import Image from 'next/image';
function Resource() {
  return (
    <div className="md:px-5 w-[95%] lg:w-[90%] relative mx-auto lg:mt-20 md:mt-[100px]">
      <p className="text-6xl md:text-4xl font-semibold text-center my-5">Roadmaps for Beginners</p>

      {/* Web Development */}
      <div className="grid grid-cols-2 mx-auto  grid-col my-5  gap-5 md:grid-cols-1 items-center py-5">
        <div className="w-10/12 ">
          <p className="font-semibold text-6xl text-red-600 md:text-xl lg:mb-5">Development</p>
          <p className="text-lg">
            To learn frontend, follow{' '}
            <span className="text-rose-700 underline decoration-rose-200 decoration-dotted hover:text-zinc-600">
              {' '}
              <a href="https://roadmap.sh/frontend" target="_blank">
                {' '}
                this roadmap
              </a>
            </span>
          </p>
          <p className="text-lg">
            To learn backend, follow{' '}
            <span className="text-rose-700 underline decoration-rose-200 decoration-dotted hover:text-zinc-600">
              <a href="https://roadmap.sh/backend" target="_blank">
                {' '}
                this roadmap
              </a>
            </span>
          </p>
          <p className="text-lg">
            To learn UX design, follow{' '}
            <span className="text-rose-700 underline decoration-rose-200 decoration-dotted hover:text-zinc-600">
              {' '}
              <a href="https://roadmap.sh/ux-design" target="_blank">
                {' '}
                this roadmap
              </a>
            </span>
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
          <p className="text-lg">
            To learn C++, follow{' '}
            <span className="text-lime-950 underline decoration-lime-500 decoration-dotted hover:text-zinc-600">
              {' '}
              <a href="https://roadmap.sh/cpp" target="_blank">
                {' '}
                this roadmap
              </a>
            </span>
          </p>
          <p className="text-lg">
            To learn DSA, follow{' '}
            <span className="text-lime-950 underline decoration-lime-500 decoration-dotted hover:text-zinc-600">
              {' '}
              <a href="https://roadmap.sh/computer-science" target="_blank">
                {' '}
                this roadmap
              </a>
            </span>
          </p>
          <p className="text-lg">
            To learn CP, follow{' '}
            <span className="text-lime-950 underline decoration-lime-500 decoration-dotted hover:text-zinc-600">
              {' '}
              <a href="https://codeforces.com/blog/entry/65133" target="_blank">
                {' '}
                this roadmap
              </a>{' '}
            </span>
          </p>
        </div>
      </div>

      {/* Machine Learning */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-5  items-center py-5">
        <div className="w-10/12">
          <p className="font-semibold text-6xl text-blue-600 md:text-xl lg:mb-5">Machine Learning</p>
          <p className="text-lg">
            To learn Python, follow{' '}
            <span className="text-sky-800 underline decoration-sky-200 decoration-dotted hover:text-zinc-600">
              {' '}
              <a href="https://roadmap.sh/python" target="_blank">
                {' '}
                this roadmap
              </a>{' '}
            </span>
          </p>
          <p className="text-lg">
            To learn AI/ML, follow{' '}
            <span className="text-sky-800 underline decoration-sky-200 decoration-dotted hover:text-zinc-600">
              {' '}
              <a href="https://roadmap.sh/ai-data-scientist" target="_blank">
                {' '}
                this roadmap
              </a>
            </span>
          </p>
          <p className="text-lg">
            To learn Prompt Engineering, follow{' '}
            <span className="text-sky-800 underline decoration-sky-200 decoration-dotted hover:text-zinc-600">
              {' '}
              <a href="https://roadmap.sh/prompt-engineering" target="_blank">
                {' '}
                this roadmap
              </a>
            </span>
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
