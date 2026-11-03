import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className ="w-48">
      <img alt="movie" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
