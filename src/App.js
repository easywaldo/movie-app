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

const movieList = [
  {
    id : 1,
    title : "Matrix",
    poster : "https://images-na.ssl-images-amazon.com/images/I/A1aHRPvn5JL._RI_.jpg"
  },
  {
    id : 2,
    title : "Infitiny War",
    poster : "https://images.amcnetworks.com/ifc.com/wp-content/uploads/2010/07/07202010_expendables1.jpg"
  },
  {
    id : 3,
    title : "Iron Man",
    poster : "https://images-na.ssl-images-amazon.com/images/I/515wjJQt2nL._SY445_.jpg"
  },
  {
    id : 4,
    title : "Expandable",
    poster : "https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL._SY445_.jpg"
  }
]

class App extends Component {

  state = {
    greeting: "Hello"
  }

  componentWillMount(){
    console.log('will mount');
  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        greeting: "Hello again"
      })
    },5000);
  }

  render() {
    console.log('did render');
    return (
      <div className="App">
        {this.state.greeting}
        {/* <Movie title={movieList[0].title} poster={movieList[0].poster}></Movie>
        <Movie title={movieList[1].title} poster={movieList[1].poster}></Movie>
        <Movie title={movieList[2].title} poster={movieList[2].poster}></Movie>
        <Movie title={movieList[3].title} poster={movieList[3].poster}></Movie> */}
        {
          movieList.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}></Movie>
        })
        }
      </div>
    );
  }
}

export default App;
