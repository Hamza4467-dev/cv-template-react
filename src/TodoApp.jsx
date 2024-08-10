import Random from "./Random";
function TodoApp() {
  let username = "hamza";
  let date = "2/3/2019"


  return <div>






    <div className="row">
      <div className="col-4">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="enter a name" />
        </div>
      </div>
      <div className="col-4">
        <div className="form-group">
          <input type="date" className="form-control" placeholder="enter a date" />
        </div>
      </div>
      <div className="col-4">

        <button className="btn btn-large btn-primary">ADD</button>

      </div>
    </div>


    <div className="row">
      <div className="col-4">
        {username}
      </div>
      <div className="col-4">
        {date}
      </div>
      <div className="col-4">
        <button className="btn btn-large btn-danger">ADD</button>
      </div>
    </div>
  </div>
}
export default TodoApp;