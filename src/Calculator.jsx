import { useState } from "react";
import Calbuttons from "./components/Calbuttons";
import DisplayInput from "./components/DisplayInput";

function Calculator() {
  const [items, setItems] = useState('helo world')

  const handlEvent = (event) => {
    console.log(event.target.value)
    setItems(event.target.value);

  }
  return <div>
    <div class="container mt-5">
      <div class="row ">
        <div class="col-12 ">
          <div class="card">
            <div class="card-body">
              <DisplayInput handlEvent={handlEvent}></DisplayInput>
              <p>{items}</p>
              <Calbuttons></Calbuttons>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
}
export default Calculator;