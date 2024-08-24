import React from 'react'
import { useFormik } from 'formik';
import { usersSchema } from './usersSchema';
function Login() {
  const login = useFormik({
    initialValues: {
      email: "", password: "", confirmPassword: ""
    },
    validationSchema: usersSchema,

    onSubmit: (value) => {
      console.log(value)
    }

  })
  console.log(login)
  return (
    <>
      <form onSubmit={login.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name='email' value={login.values.email}
            onChange={login.handleChange}

          />
        </div>
        <p>{login.errors.email}</p>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control"
            name='password' value={login.values.password}
            onChange={login.handleChange}

          />
        </div>
        <p>{login.errors.password}</p>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">confirmPassword</label>
          <input type="password" className="form-control"
            name='confirmPassword' value={login.values.confirmPassword}
            onChange={login.handleChange}
          />
        </div>
        <p>{login.errors.confirmPassword}</p>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Login