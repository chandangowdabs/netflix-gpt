import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTittle from './VideoTittle'
import {useSelector} from 'react-redux'

const MainContainer1 = () => {

 const movies = useSelector((store) => store.movies?.nowPlayingMovies)
 
 if(!movies) return;
 const mainMovie = movies[0]
 console.log(mainMovie)

 const {original_title , overview, id} = mainMovie

  return (
    <div>
      <VideoTittle title = {original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer1