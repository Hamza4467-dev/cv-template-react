function CalFun({ onButton }) {
  const buttons = [
    'C', '7', '8', '9', ' / ',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];

  return <>
    {buttons.map((items) => (
      <button className="btn btn-primary"

        onClick={() => onButton(items)}
      >{items}</button>
    ))}
  </>

}
export default CalFun;