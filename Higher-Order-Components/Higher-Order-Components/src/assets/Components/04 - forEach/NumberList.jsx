import React from 'react';

const NumberList = () => {
  const numbers = [1, 2, 3, 4, 5];

  numbers.forEach(num => {
    console.log(num);
  });

  return (
    <div>
      <h1>Number List</h1>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
