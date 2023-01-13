import React, { useState } from "react";
import img from './Logo.png'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '09d98d9d0amsh8d7dd38128f2069p1f6072jsn176e42db2a8f',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

function Search(){


    const [movies,setMovies]=useState([]);
    const search = evt => {
    if (evt.key === "Enter") {
      fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options)
      .then(response => response.json())
      .then(response =>{
      console.log(response);
      setMovies(response.results);
  
    });
      
}}
      

return(

  <div className="auth-form-containe">
          
          <input 
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setMovies(e.target.value)}
          value={movies}
          onKeyPress={search}
        
        />    
        <div className='movie-container'>
         <div className="movie">
    <div className="side left"></div>
        <div className="side botin">
        <div className="mov">Name</div>


        </div>
        <div className="side main">
        <img className="im" src={img}/>


    </div>
    </div>
    </div>
    

</div>


)
}
export default Search;