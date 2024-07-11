import MovieItem from "./MovieItem";

const MovieList = ({ movies, toggleWatched, deleteMovie }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem
          key={movie.imdbID}
          movie={movie}
          toggleWatched={toggleWatched}
          deleteMovie={deleteMovie}
        />
      ))}
    </div>
  );
};
export default MovieList;
