import React, { useState } from 'react'

function CalculatorApp() {
  const [input, setInput] = useState([])

  function getVlaue(e) {

    setInput(input.concat(e.target.value).toString());
  }
  return (
    <>
      <div className="calculator">
        <input
          className="calculator-screen"


          type="text"
          value={input}
        />
        <div className="calculator-keys">
          <button
            className="operator"
            type="button"
            value="+"
            onClick={getVlaue}
          >
            +
          </button>
          <button
            className="operator"
            type="button"
            value="-"
            onClick={getVlaue}
          >
            -
          </button>
          <button
            className="operator"
            type="button"
            value="*"
            onClick={getVlaue}
          >
            ×
          </button>
          <button
            className="operator"
            type="button"
            value="/"
            onClick={getVlaue}
          >
            ÷
          </button>
          <button
            type="button"
            value="7"
            onClick={getVlaue}
          >
            7
          </button>
          <button
            type="button"
            value="8"
            onClick={getVlaue}
          >
            8
          </button>
          <button
            type="button"
            value="9"
          >
            9
          </button>
          <button
            type="button"
            value="4"
          >
            4
          </button>
          <button
            type="button"
            value="5"
          >
            5
          </button>
          <button
            type="button"
            value="6"
          >
            6
          </button>
          <button
            type="button"
            value="1"
          >
            1
          </button>
          <button
            type="button"
            value="2"
          >
            2
          </button>
          <button
            type="button"
            value="3"
          >
            3
          </button>
          <button
            type="button"
            value="0"
          >
            0
          </button>
          <button
            className="decimal"
            type="button"
            value="."
          >
            .
          </button>
          <button
            className="all-clear"
            type="button"
            value="all-clear"
          >
            AC
          </button>
          <button
            className="equal-sign operator"
            type="button"
            value="="
          >
            =
          </button>
        </div>
      </div>
    </>
  )
}

export default CalculatorApp