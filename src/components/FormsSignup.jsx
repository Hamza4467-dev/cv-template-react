import React from 'react'
import { useFormik } from 'formik'
import { userSchema } from "../userSchema"


function FormsSignup() {
  const signUp = useFormik({
    initialValues: {
      name: "", email: "", password: "", confirmPassword: ""
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })
  console.log(signUp);
  return (
    <>
      <form onSubmit={signUp.handleSubmit}>
        <input type="text" placeholder='enter a username'

          name='name'
          value={signUp.values.name}
          onChange={signUp.handleChange}
        />
        <p>{signUp.errors.name}</p>
        <input type="text" placeholder='enter a email'

          name='email'
          value={signUp.values.email}
          onChange={signUp.handleChange}
        />
        <p>{signUp.errors.email}</p>
        <input type="text" placeholder='enter a password'

          name='password'
          value={signUp.values.password}
          onChange={signUp.handleChange}
        />
        <p>{signUp.errors.password}</p>
        <input type="text" placeholder='enter a confirmPassword'

          name='confirmPassword'
          value={signUp.values.confirmPassword}
          onChange={signUp.handleChange}
        />
        <p>{signUp.errors.confirmPassword}</p>
        <button type='submit'>Signup</button>


      </form>
    </>
  )
}

export default FormsSignup