import MovieGenre from './components/MovieGenre';
import React from 'react';

export function getMovieRows(movies, url) {
  const movieRow = movies.map((movie) => {
    let movieImageUrl =  movie.embed_url;
    if (url === "/searchByKeyWord/clara%20morgane") {
      movieImageUrl = movie.embed_url;
      console.log(movieImageUrl);
    }

    if (movie.poster_path && movie.backdrop_path !== null) {
      const movieComponent = <MovieGenre
        key={movie.video_id}
        url={url}
        posterUrl={movieImageUrl}
        movie={movie} />

      return movieComponent;
     
    }
  });

  return movieRow
  
}
