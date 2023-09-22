import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.onIncrement}>Increment Counter</button>
    </div>
  );
}

export default ChildComponent;
