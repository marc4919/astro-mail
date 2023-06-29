import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmailComponent = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get('https://randomuser.me/api/')
        .then(res => {
          setEmail(res.data.results[0].email);
        });
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <p>{email}</p>
    </>
  );
};

export default EmailComponent;