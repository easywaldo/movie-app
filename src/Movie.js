import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

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


function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} /> )}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis=' ---more---'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}
function MoviePoster({poster, alt}) {
    return (
        <img alt={alt} src={poster} title={alt} className="Movie__Poster"></img>
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;