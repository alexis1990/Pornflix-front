import React, { useState, Fragment, useEffect } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import instance from '../axios-movies'
import { getMovieRows } from '../getMovie';
import MovieGenre from '../components/MovieGenre';

// import { render } from 'node-sass';

function TopRated() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await instance(
        `/searchByKeyWord/`,
      );
      setVideos(result.data.videos);
    };
    fetchData();
  }, [])

  console.log('resssssssss', videos)
  return (
    <Fragment>
      <h1 className="movieShowcase__heading">MOVIES</h1>
      <div className="movieShowcase__container">
        {videos.map((video) =>
          <div>
            {console.log('VIDEOOOO', video)}
            <div className={"movieShowcase__container--movie__netflix"}>
              {/* <p className="movieShowcase__container--movie__title">{video.video.title}</p> */}
              <iframe src={video.video.embed_url} frameborder="0" allowfullscreen className="movieShowcase__container--movie-image" />
            </div>
          </div>
        )}
      </div>
      {/* <div className="movieShowcase__movie">
        {/* {videos.map((video) => <div>
          <div className={"movieShowcase__movie--card"}>
            <p className="movieShowcase__container--movie__title">{video.video.title}</p>
            <iframe src={video.video.embed_url} className="movieShowcase__container--movie-image" />
          </div>
        </div>)} */}
      {/* </div> */}
    </Fragment >
  )
}

const mapStateToProps = (state) => {
  return { topRated: state.topRated }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTopRated }, dispatch)
}

export default TopRated;