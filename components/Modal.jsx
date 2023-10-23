'use client';

import React, { useCallback, useRef, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Modal = ({ children }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.push('/gallery');
  }, [router]);
  const handleClick = useCallback(
    (e) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay],
  );

  return (
    <div ref={overlay} className="modal" onClick={handleClick}>
      <button type="button" onClick={onDismiss} className="absolute top-32 right-8 bg-black z-50 p-2 rounded-2xl">
        {/* <div className="bg-black"> */}
        <Image src="/close.svg" width={17} height={17} alt="close" />
        {/* </div> */}
      </button>
      <div ref={wrapper} className="modal_wrapper">
        {children}
      </div>
    </div>
  );
};

export default Modal;
