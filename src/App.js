import logo from './logo.svg';
import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar';
import { getMatches } from "./api/Api";
import { Fragment, useEffect, useState } from 'react';
import MyCard from './components/MyCard';

function App() {
  const [matches,setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);



  return (
    <div className="App">
      <Navbar></Navbar>
      <Typography variant="h3">Welcome to my app</Typography>
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8" >
          {matches.map((match)=>(
            <Fragment key={match.unique_id}>
            {match.type == "Twenty20" ? (<MyCard key={match.unique_id} match={match} />) : ("")}
            </Fragment>
          ))} 
        </Grid>
      </Grid> 
      
    </div>
  );
}

export default App;
