import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import AddMovie from './AddMovie';
import Regitser from './Regitser';
import Login from './Login';
import Topbar from './Topbar';
import Portal from './Portal';
import Home from './Home';
import NotFound from './NotFound';
import Movies from './Movies';
import MovieList from './MovieList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Paper from '@mui/material/Paper'
import MovieDetail from './MovieDetail';
import EditMovie from './EditMovie';


function App() {
 const [mode, setMode]=useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <Paper style={{minHeight:"100vh",borderRadius:"0%"}} elevation={9}>
     <Routes>
      <Route path="/Register" element={<Regitser/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/portal" element={<Portal mode={mode} setMode={setMode}/>}>
        <Route path="addmovie" element={<AddMovie/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="movielist" element={<MovieList />}/>
        <Route path='movie' element={<Movies/>}/>
        <Route path='view/:id' element={<MovieDetail/>}/>
        <Route path='edit/:id' element={<EditMovie/>}/>
       
      </Route>
      <Route path="*" element={<NotFound/>}/>
      
     </Routes>
     </Paper>
     </ThemeProvider>
    </div>
  );
}


export default App;
