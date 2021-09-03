import './addmovies.css';
import React from 'react';

const AddMovie = (props)=>{
    const movieNameRef = React.createRef()
    const movieYearRef = React.createRef()
    
    const addMovie = () =>{
        const movieData = {
            name: movieNameRef.current.value,
            year: movieYearRef.current.value
        }
        props.addMovieHandler(movieData)
    }
    return(
        <div className="add-movie">
            <h3>Enter Movie name</h3>
            <p>Movie Name</p>
            <input type="text" ref={movieNameRef}/>
            <p>Year</p>
            <input type="text" ref={movieYearRef}/>
            <br/>
            <button onClick={addMovie}>Add data </button>
        </div>
    )
}

export default AddMovie;