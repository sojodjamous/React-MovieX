import React from "react";
import {useEffect,useState} from 'react';

import Movies from "./Movies";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '09d98d9d0amsh8d7dd38128f2069p1f6072jsn176e42db2a8f',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

function M(){
    const [movies,setMovies]=useState([]);
    // const [searchterm,setsearchterm]=useState('');
      useEffect( () => {
        fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options)
        .then(response => response.json())
        .then(response =>{
        console.log(response);
        setMovies(response.results);
    
      });
        
         });
    
         return(
            <>
            
            <div className='movie-container'>
     {
      movies.length > 0 && movies.map((movie )=>

        <Movies key= {movie.id} {...movie} />
      )
     }</div>
            </>
         )
}
export default M ;