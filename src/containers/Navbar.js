import React, { Component } from 'react';
import NavigationItem from '../components/NavigationItem'
import SearchLogo from '../static/images/search-icon.svg';
import NetflixLogo from '../static/images/Netflix_Logo_RGB.png';
import { Link } from 'react-router-dom';

class navigation extends Component {
  state = {
    scrolling: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  /** changes the scrolling state depending on the Y-position */
  handleScroll = (event) => {
    if (window.scrollY === 0) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY > 50) {
      this.setState({ scrolling: true });
    }
  }


  render() {
    const { scrolling } = this.state;
    const { showMovies } = this.props;

    return (
      <nav className={"navigation " + (scrolling ? "black" : "")} >
        <ul className="navigation__container">
          <NavigationItem link="/" exact><img className="navigation__container--logo" src={NetflixLogo} alt="" /></NavigationItem>
        
          
          <Link className="button button-small" to="/test">
          <div className="navigation__container-link pseudo-link">Home</div> </Link>
        

          <div className="navigation__container--left">
            <SearchLogo className="logo" />

            <input
              onChange={showMovies}
              className="navigation__container--left__input"
              type="text"
              placeholder="Title, genres, people" />

          </div>

         

     
      

        </ul>
      </nav>
    )
  }
}

export default navigation; 