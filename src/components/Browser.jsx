import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import MainContainer from './MainContainer1';
import SecondaryContainer from './SecondaryContainer';

const Browser = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header/>  
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browser