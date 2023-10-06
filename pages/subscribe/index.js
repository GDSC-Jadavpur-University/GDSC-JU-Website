import Image from 'next/image';
import React, { useState } from 'react';

const styles = {
  subscriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'Arial',
    fontSize: '30px',
    color: 'grey',
    marginTop: '10',
    marginBottom: '5px',
  },
  p: {
    fontFamily: 'Calibri',
    fontSize: '25px',
    color: 'black',
    marginTop: '5px',
  },
  inputContainer: {
    width: '300px',
    borderRadius: '10px',
    textAlign: 'center',
    padding: '5px',
    fontSize: '20px',
    marginTop: '5px',
  },
  button: {
    backgroundColor: 'rgb(0, 136, 255)',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '20px',
    marginBottom: '10px',
  },
  label: {
    backgroundColor: 'rgb(163, 160, 160)',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    padding: '5px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '20px',
  },
  centeredImage: {
    display: 'flex',
    textAlign: 'center',
  },
};

function SubscriptionPage() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <div style={styles.subscriptionContainer}>
      <div style={styles.centeredImage}>
        <Image src="/newsletter.png" width={400} height={300} alt="Your Logo" />
      </div>

      <h2 style={styles.h2}>Subscribe to our Newsletter!</h2>
      <p className="text-gray-100">Get the latest updates delivered to your inbox.</p>
      <div style={styles.inputContainer}>
        <input type="email" id="email" placeholder="youremail@gmail.com" value={email} onChange={handleEmailChange} />
      </div>
      <br />
      <button style={styles.button} onClick={handleSubscribe}>
        Subscribe
      </button>
      <div style={styles.centeredImage}>
        <Image src="/gdsc.png" width={400} height={100} alt="Your Logo" />
      </div>
    </div>
  );
}

export default SubscriptionPage;
