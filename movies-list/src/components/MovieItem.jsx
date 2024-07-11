const MovieItem = ({ movie, toggleWatched, deleteMovie }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
      <div>
        <h3 className="text-lg font-bold">{movie.Title}</h3>
        <p className="text-gray-500">{movie.Year}</p>
        <p className={movie.watched ? "text-green-500" : "text-red-500"}>
          {movie.watched ? "Watched" : "Not Watched"}
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => toggleWatched(movie.imdbID)}
          className="text-blue-600 hover:text-blue-800 mr-4 transition-colors duration-200"
        >
          {movie.watched ? "Unmark" : "Watched"}
        </button>
        <button
          onClick={() => deleteMovie(movie.imdbID)}
          className="text-red-600 hover:text-red-800 transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default MovieItem;
