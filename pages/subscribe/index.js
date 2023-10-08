import Image from 'next/image';
import React, { useState } from 'react';

// const styles = {
//   subscriptionContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     textAlign: 'center',
//   },
//   h2: {
//     fontSize: '30px',
//     fontWeight: 'bold',
//     color: 'grey',
//     marginTop: '10',
//     marginBottom: '5px',
//   },
//   p: {
//     fontSize: '25px',
//     color: 'black',
//     marginTop: '5px',
//   },
//   inputContainer: {
//     width: '300px',
//     borderRadius: '10px',
//     textAlign: 'center',
//     padding: '5px',
//     fontSize: '20px',
//     marginTop: '5px',
//   },
//   button: {
//     backgroundColor: 'rgb(0, 136, 255)',
//     border: 'none',
//     borderRadius: '20px',
//     cursor: 'pointer',
//     color: 'white',
//     padding: '10px 20px',
//     textAlign: 'center',
//     textDecoration: 'none',
//     display: 'inline-block',
//     fontSize: '20px',
//     marginBottom: '10px',
//   },
//   label: {
//     backgroundColor: 'rgb(163, 160, 160)',
//     border: 'none',
//     borderRadius: '10px',
//     color: 'white',
//     padding: '5px 10px',
//     textAlign: 'center',
//     textDecoration: 'none',
//     display: 'inline-block',
//     fontSize: '20px',
//   },
//   centeredImage: {
//     display: 'flex',
//     textAlign: 'center',
//   },
// };

function SubscriptionPage() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    // <div style={styles.subscriptionContainer}>
    //   <div style={styles.centeredImage}>
    //     <Image src="/newsletter.png" width={400} height={300} alt="Your Logo" />
    //   </div>

    //   <h2 style={styles.h2}>Subscribe to our Newsletter!</h2>
    //   <p className="text-gray-400">Get the latest updates delivered to your inbox.</p>
    //   <div style={styles.inputContainer}>
    //     <input type="email" id="email" placeholder="youremail@gmail.com" value={email} onChange={handleEmailChange} />
    //   </div>
    //   <br />
    //   <button style={styles.button} onClick={handleSubscribe}>
    //     Subscribe
    //   </button>
    //   <div style={styles.centeredImage}>
    //     <Image src="/gdsc.png" width={400} height={100} alt="Your Logo" />
    //   </div>
    // </div>

    <div className="relative -top-6 h-fit md2:h-screen lg:h-screen flex flex-col lg:flex-row my-8">
      <div className="left__container w-full lg:w-1/2 h-fit md2:h-1/3 xl:h-full flex justify-center items-center lg:border-r">
        <Image src="/newsletter.png" width={400} height={300} alt="Your Logo" />
      </div>

      <div className="right__container w-full lg:w-1/2 h-fit md2:h-1/3 xl:h-full flex justify-center items-center lg:border-l">
        <div className="flex flex-col items-center gap-8 w-full px-8">
          <div className="flex flex-col gap-1">
            <h1 className="relative font-bold text-gray-500 text-4xl text-center">Subscribe to our Newsletter!</h1>
            <p className="relative text-gray-500 text-center">Get the latest updates delivered to your inbox.</p>
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-2/3">
            <input
              type="email"
              id="email"
              placeholder="youremail@gmail.com"
              value={email}
              onChange={handleEmailChange}
              className="relative bg-gray-100 rounded-lg w-full text-center h-12 focus:outline-slate-400"
            />
            <button
              className="relative w-full bg-sky-500 text-center px-2 py-3 text-white rounded-xl hover:bg-sky-400 transition duration-500"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
          <Image src="/gdsc.png" width={440} height={140} alt="Your Logo" />
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPage;
