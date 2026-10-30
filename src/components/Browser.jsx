import React from 'react'
import Header from './Header'
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';

const Browser = () => {
 
  const getNowPlayingMovies = async () => {
    // Implement the logic to fetch now playing movies
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json);
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header/>  
    </div>
  )
}

export default Browser