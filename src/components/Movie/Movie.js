import React from 'react';

const Movie = (props) => (
   <div className="movie">
      <div onClick={props.movieDetails} className="movie__column-poster">
              {/* <p className="movieShowcase__container--movie__title">{video.video.title}</p> */}
              <div className={"movieShowcase__container--movie__netflix"}>
              <iframe src={props.movieImage} frameborder="0" allowfullscreen className="movieShowcase__container--movie-image" />
            </div>
      </div>
   </div>
);

export default Movie; 