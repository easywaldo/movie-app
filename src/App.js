import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  "Matrix",
  "InfinityWar",
  "Iron Man",
  "Expandable"
]

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/A1aHRPvn5JL._RI_.jpg"
  , "https://images.amcnetworks.com/ifc.com/wp-content/uploads/2010/07/07202010_expendables1.jpg"
  , "https://images-na.ssl-images-amazon.com/images/I/515wjJQt2nL._SY445_.jpg"
  , "https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL._SY445_.jpg"
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movies[0]} poster={movieImages[0]}></Movie>
        <Movie title={movies[1]} poster={movieImages[1]}></Movie>
        <Movie title={movies[2]} poster={movieImages[2]}></Movie>
        <Movie title={movies[3]} poster={movieImages[3]}></Movie>
      </div>
    );
  }
}

export default App;
