import React, { createContext } from 'react'

function ContextApiComponent() {
  const user = createContext()
  const SomeContext = createContext()
  // createContext  , providers ,cunsumer
  return (

    <>
      <div>ContextApiComponent</div>
    </>
  )
}

export default ContextApiComponent