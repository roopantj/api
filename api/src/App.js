import './App.css';
import React from 'react';
import AddMovie from './AddMovie';
import {  useState } from 'react';

const App = () =>  {
    
   const [movies, setMovies] = useState([])
   const [Loader,setLoader] =useState(false)
   const [error,setError] = useState(null)
      
   const  fetchDataHandler = async () =>{
          try{
              setLoader(true) 
              const response = await fetch('https://basic-api-741bb-default-rtdb.firebaseio.com/movies.json')
              if(!response.ok)
                throw new Error(`Something went wrong! Status Code :${response.status}`)
              const data = await response.json()
              const loadedMovies = []
              for(const key in data){
                 loadedMovies.push(data[key])
              }
              //console.log(loadedMovies)
              setMovies(loadedMovies)
          }
          catch(error){
            setError(error.message)
          }
          setLoader(false)
    }
   const addMovieHandler= async (movieData)=>{
        const response = await fetch('https://basic-api-741bb-default-rtdb.firebaseio.com/movies.json',{
          method:'POST',
          body: JSON.stringify(movieData),
          headers: {
            'Content-Type' : 'application/JSON'
          } 
        })  
        if(response.ok){
         console.warn("Data added successfully")
          
        }
   } 

  let content = <p>No movies. Hit Get Movies </p>
  if(error)
    content=<h3>{error}</h3> 
  if(Loader)
    content=<h3>Loading ...</h3>
  if(movies.length>0)
    content=movies.map((movie=><h3 key={movie.name}>Name:{movie.name} Year:{movie.year}</h3>))  

  return (
   
    <div className="App">
       <AddMovie addMovieHandler={addMovieHandler}/>
       <br/>
       <h3>Movies list</h3>
       <button onClick={fetchDataHandler}>Get Movies</button>
       {content}
    </div>
  );
}

export default App;
