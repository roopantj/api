import './App.css';
import {  useState } from 'react';

const App = () =>  {
    
   const [movies, setMovies] = useState([])
   const [Loader,setLoader] =useState(false)
   const fetchDataHanlder = () =>{
    setLoader(true) 
     fetch('https://swapi.dev/api/films').then(response => response.json()).then(data=>{
     setMovies(data.results)
     setLoader(false)
     console.log(movies)
    })
   
  }

  return (
    <div className="App">
      <h3>Movies list</h3>
       <button onClick={fetchDataHanlder}>Get data</button>
        {
          movies && movies.map(movie=><h3>{movie.title}</h3>)}
          {
          Loader && <h1>Loading...</h1> 
        }
    </div>
  );
}

export default App;
