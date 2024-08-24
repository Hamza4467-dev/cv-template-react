import { string } from "yup"
import * as Yup from 'yup'

export const usersSchema = Yup.object({
  password: Yup.string().min(2, "ali characterless h").max(20).required("this field is required"),
  email: Yup.string().email().matches(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/, "email not valid").required("this field is required"),
  confirmPassword: Yup.string().required().oneOf([Yup.ref("password")])
})


