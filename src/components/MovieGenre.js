import React, { useState } from 'react'

import Modal from '../components/UI/Modal';
import MovieDetails from '../components/Movie/MovieDetails';

function MovieGenre({movie}) {
   const [state, setState] = useState({
      toggleModal: false
   })

   function handleToggleModal () {
      setState({toggleModal: true})
   }

   function closeModal () {
      setState({toggleModal: false})
   }

   return (
      <Modal show={state.toggleModal} movie={movie} modalClosed={closeModal}>
         <MovieDetails movie={movie} />
      </Modal>
   )

   // render() {
   //    let netflixUrl = false;
   //    // if (this.props.url === "/searchByKeyWord/clara%20morgane") {
   //    //    netflixUrl = true;
   //    // }

   //    return (
   //       <>

   //          {/* <Modal show={this.state.toggleModal} movie={this.props.movie} modalClosed={this.closeModal}>
   //             <MovieDetails movie={this.props.movie} />
   //          </Modal> */}
   //       </>
   //    )
   // }
}

export default MovieGenre;
