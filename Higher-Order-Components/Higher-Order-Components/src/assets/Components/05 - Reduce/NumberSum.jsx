import React from 'react';

const NumberSum = () => {
  const numbers = [1, 2, 3, 4, 5];

  const sum = numbers.reduce((acc, cur) => acc + cur, 0);

  return (
    <div>
      <h1>Number Sum</h1>
      <p>Sum of Numbers: {sum}</p>
    </div>
  );
};

export default NumberSum;
