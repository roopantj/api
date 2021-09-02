import './App.css';
import {  useState } from 'react';

const App = () =>  {
    
   const [movies, setMovies] = useState([])
   const [Loader,setLoader] =useState(false)
   const [error,setError] = useState(null)
   
   const  fetchDataHandler = async () =>{
     if(movies.length===0){
          try{
              setLoader(true) 
              const response = await fetch('https://swapi.dev/api/film')
              if(!response.ok)
                throw new Error(`Something went wrong! Status Code :${response.status}`)
              const data = await response.json()
              setMovies(data.results)
          }
          catch(error){
            setError(error.message)
          }
          setLoader(false)
     }
   }
   
  let content = <p>No movies. Hit Get Movies </p>
  if(error)
    content=<h3>{error}</h3> 
  if(Loader)
    content=<h3>Loading ...</h3>
  if(movies.length>0)
    content=movies.map((movie=><h3>{movie.title}</h3>))  

  return (
   
    <div className="App">
      <h3>Movies list</h3>
       <button onClick={fetchDataHandler}>Get Movies</button>
       {content}
    </div>
  );
}

export default App;
