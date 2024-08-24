import React from 'react';
import { firstName } from '../App.jsx';

function PropsDrilling() {
  return (
    <>
      <firstName.Consumer>
        {(item) => {
          return (
            <div>
              Context value: {item}
            </div>
          );
        }}
      </firstName.Consumer>
    </>
  );
}

export default PropsDrilling;
