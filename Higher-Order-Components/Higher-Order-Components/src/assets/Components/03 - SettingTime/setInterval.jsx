import React, { useEffect } from 'react';

const IntervalExample = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Hello, this message is printed every second');
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 
  return (
    <div>
      <h1>Interval Example</h1>
      <p>Check the console for the message.</p>
    </div>
  );
};

export default IntervalExample;
