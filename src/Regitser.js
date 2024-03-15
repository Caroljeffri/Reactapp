import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, useFormik } from 'formik';
import  * as yup from "yup";
import { Link } from 'react-router-dom';


export default function Regitser() {
    const RegistervalidationSchema = yup.object({
        username:yup.string().required(),
        email:yup.string().required().email(),
        password:yup.string().required()
    });
    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:RegistervalidationSchema,
    
        onSubmit:async (values) => {
           console.log(values);
        }
    
    })

  return (
    <form className='addForm' onSubmit={formik.handleSubmit}>
    <h1>REGISTER</h1>
    <TextField id="outlined-basic" label="username" variant="outlined" value={formik.values.username} onChange={formik.handleChange} name="username" onBlur={formik.handleBlur} error={formik.touched.username && formik.errors.username} helperText={formik.touched.username && formik.errors.username ? formik.errors.username : null}
    />
    <TextField id="outlined-basic" label="email" variant="outlined" value={formik.values.email} onChange={formik.handleChange} name="email" onBlur={formik.handleBlur} error={formik.touched.email && formik.errors.email} helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
    />
    <TextField id="outlined-basic" label="password" variant="outlined" value={formik.values.password} onChange={formik.handleChange} name="password" onBlur={formik.handleBlur} error={formik.touched.password && formik.errors.password} helperText={formik.touched.password&& formik.errors.password ? formik.errors.password : null}
    />
    <Button variant="outlined" type='submit' >Click</Button>
    <h4>Already have account? Click here <Link to="/">Login</Link></h4>
    </form>
  )
}
