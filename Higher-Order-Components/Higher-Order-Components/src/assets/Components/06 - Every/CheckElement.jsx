import React from 'react';

const CheckElements = () => {
  const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
  const areAllStr = names.every((name) => typeof name === 'string'); // Are all strings?

  const bools = [true, true, true, true];
  const areAllTrue = bools.every((b) => b === true); // Are all true?

  return (
    <div>
      <h1>Check Elements</h1>
      <p>Are all elements in 'names' strings? {areAllStr.toString()}</p>
      <p>Are all elements in 'bools' true? {areAllTrue.toString()}</p>
    </div>
  );
};

export default CheckElements;
