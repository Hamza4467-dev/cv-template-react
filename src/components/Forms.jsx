import React, { useState } from 'react'
let count = 0
function Forms() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  function handleChange(e) {
    let names = e.target.name;
    let values = e.target.value
    if (names === "email") {
      setEmail(values)
    }
    else if (names === "password") {
      setPassword(values)
    }


  }
  function formSubmit(e) {
    e.preventDefault()
    let data = { email, password }
    console.log(data);
  }
  count++
  return (
    <>
      <form onSubmit={formSubmit}>
        <h1>{count}</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"

            value={email}
            name='email'
            onChange={handleChange}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            name='password'
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />

        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    </>
  )
}

export default Forms