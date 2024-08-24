import React from 'react'
import { useFormik, validateYupSchema } from 'formik'; //1
import { userSchema } from '../userSchema';
function FormikForms() {
  const formik = useFormik({

    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: userSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();

    },
  });
  console.log("formik", formik)
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" className='form-control'
          name='name' //3
          value={formik.values.name} //4
          onChange={formik.handleChange} //5
          onBlur={formik.handleBlur}
        />
        <p>{formik.errors.name}</p>

        <input type="text" className='form-control'
          name='password' //3
          value={formik.values.password} //4
          onChange={formik.handleChange} //5
          onBlur={formik.handleBlur}
        />
        <p>{formik.errors.password}</p>
        <input type="text" className='form-control'
          name='confirmPassword' //3
          value={formik.values.confirmPassword} //4
          onChange={formik.handleChange} //5
          onBlur={formik.handleBlur}
        />
        <p>{formik.errors.confirmPassword}</p>
        <button type='submit'>submit</button>
      </form>

    </>
  )
}

export default FormikForms