import React, { useState } from 'react';
import ChildComponent from './Child';

function ParentComponent() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Counter Value in Parent: {counter}</h2>
      <ChildComponent onIncrement={handleIncrement} />
    </div>
  );
}

export default ParentComponent;
