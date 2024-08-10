import React from 'react'

function ClickButton() {
  const handle = (a, b) => {
    alert(a + b)
  };
  return (
    <button onClick={() => handle(3, 3)}>Click Me</button>
  )

}

export default ClickButton