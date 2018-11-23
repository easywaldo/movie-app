import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component{
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         //console.log(this.props);
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <MoviePoster poster={this.props.poster}></MoviePoster>
//             </div>
//         );
//     }
// }

// class MoviePoster extends Component{

//     static propTypes = {
//         poster : PropTypes.string.isRequired
//     }

//     render(){
//         console.log(this.props);
//         return(
//             <img alt="Movie Poster" src={this.props.poster}></img>
//         );
//     }
// }
function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}
function MoviePoster({poster}) {
    return (
        <img alt="Movie Poster" src={poster}></img>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;