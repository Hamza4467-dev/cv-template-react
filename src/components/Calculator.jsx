import React, { useState } from 'react'

function Calculator() {
  const [data, setData] = useState("")
  const cal = (e) => {
    setData(data.concat(e.target.value)) //contact 33
  }
  const equal = () => {
    setData(eval(data).toString())
  }
  const ac = () => {
    setData('')
  }
  return (
    <>

      <div class="calc-body">


        <div class="calc-screen">
          <div id="calc-operation">
            <input type="text" placeholder='0' value={data} />
          </div>


        </div>


        <div className="calc-button-row">
          <button className="ac" value="AC" onClick={ac}>AC</button>
          <button className="opt" value="±" onClick={cal}>&#43;&#47;&#8722;</button>
          <button className="opt" value="%" onClick={cal}>&#37;</button>
          <button className="opt" value="/" onClick={cal}>&#247;</button>
          <button value="7" onClick={cal}>7</button>
          <button value="8" onClick={cal} >8</button>
          <button value="9" onClick={cal}>9</button>
          <button className="opt" value="*" onClick={cal}>&#215;</button>
          <button value="4" onClick={cal}>4</button>
          <button value="5" onClick={cal}>5</button>
          <button value="6" onClick={cal}>6</button>
          <button className="opt" value="-" onClick={cal}>&#8722;</button>
          <button value="1" onClick={cal}>1</button>
          <button value="2" onClick={cal} >2</button>
          <button value="3" onClick={cal}>3</button>
          <button className="opt" value="+" onClick={cal}>&#43;</button>
          <button value="0" onClick={cal}>0</button>
          <button value="." onClick={cal}>.</button>
          <button value="⌫" onClick={cal}>&#9003;</button>
          <button className="opt" value="=" onClick={equal}>&#61;</button>
        </div>
      </div>
    </>
  )
}

export default Calculator