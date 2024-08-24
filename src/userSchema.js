// import * as Yup from 'yup';
// import { object, string, number, date, } from 'yup';

// export const userSchema = Yup.object({
//   name: string().min(2, "minimum length 2").required("this field is required"),
//   password: string().matches(
//     /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
//     "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character"
//   )
//     .required("This field is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password')], 'Passwords must match')
//     .required('Confirm Password is required'),


// })
import * as Yup from 'yup'
import { string } from 'yup'
export const userSchema = Yup.object({
  name: string().min(2, "minimum length is 2 character").required("this field is required"),
  email: string().email().required("this field is required"),
  password: string().required("this field is required"),
  confirmPassword: string().oneOf([Yup.ref("password")], "password must match").required("this field is required"),
  gender: string().min(3, "").oneOf([Yup.ref("")], "")

})