import Landing from '@/components/Landing';
import Fields from '@/components/Fields';
import Head from 'next/head';
import FAQS from '@/components/FAQS';
export default function Home() {
  return (
    <>
      <Head>
        <title>GDSC Jadavpur University</title>
        <meta
          name="description"
          content="Join the Google Developer Student Club Program to supercharge your technical skills and make a real impact! Open to all students, from beginners to experts, our club offers peer-to-peer learning, exciting events in web development, app development, competitive programming, machine learning, and more. Bridge the gap between theory and practice, grow your network, and access Google developer resources with us."
        />
      </Head>
      <div>
        <Landing />
        <Fields />
        <FAQS/>
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    </>
  );
}
