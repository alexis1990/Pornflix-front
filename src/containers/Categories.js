import React, { useState, Fragment, useEffect, Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { getMovieRows } from '../getMovie';
import { fetchNetflixOriginals } from '../store/actions/index';
import instance from '../axios-movies'
// import { render } from 'node-sass';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await instance(
        `/categories`,
      );
      setCategories(result.data.categories);
    };
    fetchData();
  }, [categories])
  
  return (
    <Fragment>
      <h1 className="movieShowcase__heading">CATEGORIES</h1>
      <div className="movieShowcase__container">
        {categories.map((categorie) => <div>
          <div className={"movieShowcase__container--movie__netflix"}>
            <p className="movieShowcase__container--movie__title">{categorie.category}</p>
            {/* <iframe src="" className="movieShowcase__container--movie-image" /> */}
          </div>
        </div>)}
      </div>
    </Fragment >
  )



}


// class NetflixOriginals extends Component {

//   componentWillMount() {
//     this.props.fetchNetflixOriginals();
//   }

//   render() {
//     let movies
//     // Call getMoviesRows function only when we get the data back 
//     // from the API through redux 
//     if (this.props.movies.data) {
//       const url = '/searchByKeyWord/clara%20morgane';
//       movies = getMovieRows(this.props.movies.data, url);
//       console.log(movies)
//     }

//     return (
//       <>
//         <h1 className="movieShowcase__heading">NETFLIX ORIGINALS</h1>
//         <div className="movieShowcase__container">
//           {movies}
//         </div>
//       </>
//     )
//   }
// }


const mapStateToProps = (state) => {
  return { movies: state.netflixOriginals }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchNetflixOriginals }, dispatch)
}

export default Categories;
