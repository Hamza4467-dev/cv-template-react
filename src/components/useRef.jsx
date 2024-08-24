import React, { useEffect, useState, useRef } from 'react';

function useRefs() {
  const [input, setInput] = useState("")
  // const [count, setCount] = useState(0)
  const showValue = useRef(0)





  // const counterValue = useRef(0);
  function changev(e) {
    setInput(e.target.value)
    // showValue.current = showValue.current + 1
    // showValue.current.style.backgroundColor = "red"

  }
  useEffect(() => {
    // setCount(count + 1)
    // showValue.current = showValue.current + 1

  },)

  function show() {
    // showValue.current.style.display = "block"
    // showValue.current = showValue.current + 1
  }
  function hide() {
    // showValue.current.style.display = "none"
  }
  return (

    <>
      {/* <input type="text" value={input} ref={showValue} onChange={changev} /> */}
      {/* <h1>{count}</h1> */}
      {/* <h2>{showValue.current}</h2> */}

      {/* <button onClick={show}> show</button>
      <button onClick={hide}> hide</button> */}
      {/* <p ref={showValue}>hello</p> */}
      <p>{showValue.current}</p>

    </>

  )
}

export default useRefs