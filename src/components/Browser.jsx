import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer1';
import SecondaryContainer from './SecondaryContainer';

const Browser = () => {
  
  useNowPlayingMovies();

  return (
    <div>
      <Header/>  
      <MainContainer />
      {/* <SecondaryContainer /> */}
    </div>
  )
}

export default Browser