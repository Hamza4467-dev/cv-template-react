import React, { useState } from 'react'

function ClickButton() {


  const [count, setCount] = useState(0)
  const [input, setInput] = useState()
  const [items, setItems] = useState([])
  const [data, setData] = useState([])

  function display(e) {
    setData(data.concat(e.target.value).toString())


  }

  function cal() {
    setData(eval(data).toString())
  }
  function getValue() {
    setItems([...items, input]);
    setInput('')


  }
  function get() {

  }
  function equal() {
    setData(eval(data).toString())
  }



  function increment() {
    setCount(count + 1)
  }
  function decrement() {

    if (count <= 0) {
      return

    }
    else
      setCount(count - 1)
  }

  return (
    <>

      <ul>

        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <input type="text" value={data} />
      <input type="text" value={input} placeholder='enter' onChange={get} />
      <button onClick={getValue}> get value</button>
      <button value="2" onClick={display}>2</button>
      <button value="3" onClick={display}>3</button >
      <button className="opt" value="+" onClick={display}>&#43;</button>
      <button className="opt" value="=" onClick={equal}>&#61;</button>
      {/* <button className='btn btn-primary' onClick={increment}>increment</button>
      <button className='btn btn-danger' onClick={decrement}>decrement</button> */}
    </>
  )

}

export default ClickButton