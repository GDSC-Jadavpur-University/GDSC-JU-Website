import React from 'react';

function CenterLayout({ children }) {
  return (
    <>
      <div className="flex w-screen justify-center items-center p-5 md:p-10">{children}</div>
    </>
  );
}

export default CenterLayout;
