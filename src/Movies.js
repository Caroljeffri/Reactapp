import React from 'react'
import Counter from './Counter';
import RISEN from "./RISEN.jpeg"
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Card, CardActions, CardContent } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import MovieList from './MovieList';
import { Navigate, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';



export default function Movies({movieTake,getMovies}) {

  const [show,setShow] = useState(true);
  const navigate = useNavigate();
  const deleteMovie=(id) => {
   fetch(`https://65f16b82034bdbecc7627070.mockapi.io/movie/${id}`,{
    method:"DELETE"
   })
   .then(()=>getMovies())
   .then(()=>alert("This movie is being deleted now..."))
  };
  return (
    <Card className='movie-container'>

       <img className='movie-poster' src={movieTake.poster}/>
      <CardContent>
       <div className='movie-spec'> 
        <h2 className='movie-name'>{movieTake.name}
          <IconButton color="primary" aria-label="Toggle-Description"  onClick={()=> setShow(!show)}>
            {show ? <ExpandLessIcon fontSize="large"/> : <ExpandMoreIcon fontSize="large"/>}
          </IconButton>
          <IconButton color='primary' arial-label="Movie-Info" onClick={() => navigate(`/portal/view/${movieTake.id}`)}>
            <InfoIcon fontSize='medium'/>
          </IconButton>
        </h2>
        <h3 className='movie-rating'>⭐{movieTake.rating}</h3>
       </div>
       </CardContent>
       {show ? <p className="movie-summary">{movieTake.summary}</p> : null}
      
      <CardActions>
      <Counter/> 
      <IconButton sx={{marginLeft:"auto"}}
      aria-label='editMovie'
      onClick={()=> navigate(`/portal/edit/${movieTake.id}`)}>
        <EditIcon color ="secondary"/>

      </IconButton>

      <DeleteSweepIcon sx={{marginLeft:"auto"}}
      aria-label='deleteMovie'
      onClick={()=>deleteMovie(movieTake.id)}>
      
        <DeleteSweepIcon color ="secondary"/>
      </DeleteSweepIcon>
      </CardActions>
    </Card>
  )
}