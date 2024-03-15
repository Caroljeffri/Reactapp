import React from 'react'
import { useState } from 'react';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';

export default function Counter() {
    let [like,setLike] = useState(0);
    let [dislike,setDislike] = useState(0);
    const incrementLike =() => setLike(like+1);
    const incrementDislike =() => setDislike(dislike+1);

  return (
    <div>
        <IconButton ariel-labrl="Like " color="primary" onClick={incrementLike}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
        </IconButton>
       
        <IconButton ariel-labrl="DisLike " color="primary" onClick={incrementDislike}>
        <Badge badgeContent={dislike} color="error">
         👎
        </Badge>
        </IconButton>
       
        
    </div>
  )
}