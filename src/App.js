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
    title : "Matrix",
    poster : "https://images-na.ssl-images-amazon.com/images/I/A1aHRPvn5JL._RI_.jpg"
  },
  {
    title : "Infitiny War",
    poster : "https://images.amcnetworks.com/ifc.com/wp-content/uploads/2010/07/07202010_expendables1.jpg"
  },
  {
    title : "Iron Man",
    poster : "https://images-na.ssl-images-amazon.com/images/I/515wjJQt2nL._SY445_.jpg"
  },
  {
    title : "Expandable",
    poster : "https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL._SY445_.jpg"
  }
]

class App extends Component {

  state = {
    movies: [
      {
        title : "Matrix",
        poster : "https://images-na.ssl-images-amazon.com/images/I/A1aHRPvn5JL._RI_.jpg"
      },
      {
        title : "Infitiny War",
        poster : "https://images.amcnetworks.com/ifc.com/wp-content/uploads/2010/07/07202010_expendables1.jpg"
      },
      {
        title : "Iron Man",
        poster : "https://images-na.ssl-images-amazon.com/images/I/515wjJQt2nL._SY445_.jpg"
      },
      {
        title : "Expandable",
        poster : "https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL._SY445_.jpg"
      }
    ]
  }

  componentWillMount(){
    console.log('will mount');
  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title : "kung fu panda",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Kungfupanda.jpg/220px-Kungfupanda.jpg"
          },
        ]
      })
    }, 3000);
  }

  render() {
    console.log('did render');
    return (
      <div className="App">
        {/* <Movie title={movieList[0].title} poster={movieList[0].poster}></Movie>
        <Movie title={movieList[1].title} poster={movieList[1].poster}></Movie>
        <Movie title={movieList[2].title} poster={movieList[2].poster}></Movie>
        <Movie title={movieList[3].title} poster={movieList[3].poster}></Movie> */}
        {
          this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}></Movie>
        })
        }
      </div>
    );
  }
}

export default App;
