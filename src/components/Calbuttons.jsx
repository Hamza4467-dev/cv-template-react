import DisplayInput from "./DisplayInput";

function Calbuttons() {
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];


  const handleItems = (item) => {
    console.log(`this number is ${item}`)
  }

  return <>




    {
      buttons.map((item) => (
        <button class=" btn btn-outline-dark"
          onClick={() => handleItems(item)}
        > {item}</button >
      ))
    }



    <div class="row mt-3">
      <button class="col-12 btn btn-danger">Clear</button>
    </div>
  </>

}
export default Calbuttons;