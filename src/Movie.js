import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        //console.log(this.props);
        return(
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster}></MoviePoster>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        console.log(this.props);
        return(
            <img alt="" src={this.props.poster}></img>
        );
    }
}

export default Movie;