import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Brightness4 } from '@mui/icons-material';


export default function Topbar({mode, setMode}) {
    const navigate = useNavigate()
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button
          style= {{marginLeft: "60%"}}
          startIcon={mode==="light"? <Brightness4/> : <Brightness4/>}
          color="inherit"
          onClick={() => setMode(mode==="light"?"dark" : "light")}/>
        <Button color="inherit" onClick={() => navigate("/portal/movielist")}>Movie </Button>
        <Button color="inherit" onClick={() => navigate("/portal/AddMovie")}>AddMovie </Button>
        <Button color="inherit" onClick={()=>navigate("/")}>Login </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}