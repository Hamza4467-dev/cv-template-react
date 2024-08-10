function Random({ listItem, times }) {

  return (<>

    <p className="d-inline">{listItem}</p>
    <br />
    dATE: {times.toLocaleDateString()} <br />
    time:{times.toDateString()}
  </>

  )
}
export default Random;