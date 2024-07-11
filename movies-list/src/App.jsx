import { useState } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = async (title) => {
    const apiKey = "7c4198b8";
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies([...movies, { ...data, watched: false }]);
      } else {
        console.error("Movie not found: ", data.Error);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const toggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.imdbID === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.imdbID !== id));
  };
  return (
    <div className="min-h-screen bg-gray-200 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Movie List</h1>
      <MovieForm addMovie={addMovie} />
      <MovieList
        movies={movies}
        toggleWatched={toggleWatched}
        deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default App;
