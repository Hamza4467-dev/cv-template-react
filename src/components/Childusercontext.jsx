import React, { useContext } from 'react'
import { firstName, lastName } from '../App'
function Childusercontext() {
  const { name, lastName } = useContext(firstName, lastName)

  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>lname:{lastName}</h1>
    </div>
  )
}

export default Childusercontext