import React, { useEffect } from 'react';
import Image from 'next/image/';
import Modal from '@/components/Modal';
import { useRouter } from 'next/router';

const ImageModal = () => {
  const router = useRouter();
  let myProp = router.query.myProp;

  return (
    <div>
      <Modal>
        <Image
          src={myProp}
          alt="team"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={800}
          height={800}
          className="rounded-medium"
          objectFit="cover"
        />
      </Modal>
    </div>
  );
};

export default ImageModal;
