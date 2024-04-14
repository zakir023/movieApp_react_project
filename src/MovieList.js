import React from "react";
import MovieCard from "./Moviecard";

function MovieList(props) {

  // destructuring the state
  // const { title, plot, poster, price, rating, stars, fav, isIncart } = this.state.movies;
  const { movies, addStars, decStars, toggleFav, toggleCart } = props;
  return (
    <>

      {movies.map((movie) => <MovieCard movies={movie}
        addStars={addStars}
        decStars={decStars}
        toggleFav={toggleFav}
        toggleCart={toggleCart}
        key={movie.id} />)}


    </>

  )
}


export default MovieList;