function DisplayInput({ handlEvent }) {

  return <>
    <input type="text" placeholder="0" className="display"
      onChange={handlEvent}
    />
  </>

}
export default DisplayInput;