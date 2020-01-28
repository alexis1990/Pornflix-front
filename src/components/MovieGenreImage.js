import React from 'react'

export default function MovieGenreImage(props) {
   let netflixUrl = false;

   if (props.url === "/searchByKeyWord/clara%20morgane") {
      netflixUrl = true;
   }

   return (
      <div onClick={props.movieDetailsModal}
         className={"movieShowcase__container--movie" + (netflixUrl ? "__netflix" : "")}>
         <img src={props.posterUrl} className="movieShowcase__container--movie-image" />
      </div>
   );
}