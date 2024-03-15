import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import  * as yup from "yup";


export default function EditMovie() {
    const {id}=useParams();
    const [movie, SetMovie]= useState(false);
    const navigate = useNavigate();

    
    
    useEffect(() => {
        fetch(`https://65f16b82034bdbecc7627070.mockapi.io/movie/${id}`,{
            method:"GET"
        })
        .then((data) =>data.json())
          .then((mv)=> SetMovie(mv));
    }, []);
  
  return (
     <div>
        {movie ? <EditForm movie= {movie}/> : "Loading......" }
     </div>
  )
}

function EditForm({movie})  {
    const navigate = useNavigate();
    const movievalidationSchema = yup.object({
        name:yup.string().required(),
        poster:yup.string().required().min(10).url(),
        trailer:yup.string().required().min(10).url(),
        rating:yup.number().required().min(0).max(10),
        summary:yup.string().required().min(20),

    });
    const formik= useFormik({
        initialValues:{
            name:movie.name,
            poster:movie.poster,
            trailer:movie.trailer,
            rating:movie.rating,
            summary:movie.summary,
        },
        validationSchema:movievalidationSchema,
        onSubmit:(values)=>{
            AddMovie(values)
        }
    });
    const AddMovie = (values) => {

        fetch(`https://65f16b82034bdbecc7627070.mockapi.io/movie/${movie.id}`,{
            method:"PUT",
            body: JSON.stringify(values),
            headers:{"Content-Type" : "application/json"},
        }) .then(()=> navigate("/portal/MovieList"));
    }
    return(
        <div>
             <form className='addForm' onSubmit={formik.handleSubmit}>
        <h1>AddMovie</h1>
        <TextField id="outlined-basic" label="name" variant="outlined" value={formik.values.name} onChange={formik.handleChange} name="name" onBlur={formik.handleBlur} error={formik.touched.name && formik.errors.name} helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
        />
        <TextField id="outlined-basic" label="poster" variant="outlined" 
        value={formik.values.poster} onChange={formik.handleChange} name="poster" 
        onBlur={formik.handleBlur} error={formik.touched.poster && formik.errors.poster} helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : null}
        />
        <TextField id="outlined-basic" label="trailer" variant="outlined" value={formik.values.trailer} onChange={formik.handleChange} name="trailer" onBlur={formik.handleBlur} error={formik.touched.trailer && formik.errors.trailer} helperText={formik.touched.trailer&& formik.errors.trailer ? formik.errors.trailer : null}
        />
        <TextField id="outlined-basic" label="rating" variant="outlined" value={formik.values.rating} onChange={formik.handleChange} name="rating" onBlur={formik.handleBlur} error={formik.touched.rating && formik.errors.rating} helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : null}
        />
        <TextField id="outlined-basic" label="summary" variant="outlined" value={formik.values.summary} onChange={formik.handleChange} name="summary" onBlur={formik.handleBlur} error={formik.touched.summary && formik.errors.summary} helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : null}
        />
        <Button variant="outlined" type='submit' >Click</Button>
    </form>
        </div>
    )
}
