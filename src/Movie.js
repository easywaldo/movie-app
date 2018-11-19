import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <h1>Hello this is a movie</h1>
                <MoviePoster></MoviePoster>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img alt="" src="https://i.kinja-img.com/gawker-media/image/upload/s--JW1AWB8T--/c_fill,fl_progressive,g_center,h_264,q_80,w_470/spy5tadlmeeptys0gwks.jpg">
            </img>
        );
    }
}

export default Movie;