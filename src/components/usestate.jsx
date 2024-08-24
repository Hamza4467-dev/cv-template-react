import React from 'react'
import { useState } from 'react'

function usestate() {
  const [current, update] = useState(0);
  const incre = () => {
    update(current + 1)
  }
  const decre = () => {

    // current=current <0? 0 : current;
    // if (current.value < 0) current = 0;
    // value = value < 0 ? 0 : value;

    if (current > 0) {
      update(current - 1)
    } else {
      update = 0;
    }
  }
  return (
    <div>
      <h1>{current}</h1>
      <button onClick={incre}>increment</button>
      <button onClick={decre}>decrement</button>
    </div>
  )
}

export default usestate