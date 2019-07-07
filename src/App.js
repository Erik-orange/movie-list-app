import React from 'react';
import MoviesList from './MoviesList'
import MoviesQueue from './MoviesQueue'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      queueMovies: []
    };

    this.addToQueue = this.addToQueue.bind(this);
    this.removeFromQueue = this.removeFromQueue.bind(this);
  }

  componentDidMount() {
    const API_KEY = "b240914dadb43ef6b429ad8d536ff913";
    const BASE_URL = "https://api.themoviedb.org/3/";
    const SELECTION = `trending/`;
    const MEDIA_TYPE = `movie/`;
    const TIME_WINDOW = `week`;
    const API_QUERY = `?api_key=${API_KEY}`;
    const URL = `${BASE_URL}${SELECTION}${MEDIA_TYPE}${TIME_WINDOW}${API_QUERY}`;

    fetch(URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movies: responseData.results
        });
      })
      .catch(error => {
        console.log('Error fetching data...', error);
      });
  }

  addToQueue(movie) {
    this.state.queueMovies.push(movie);
    this.setState({
      queueMovies: this.state.queueMovies
    });
  }

  removeFromQueue(movieID) {
    const filteredMovies = this.state.queueMovies.filter(movie => movie.id !== movieID);
    this.setState({
      queueMovies: filteredMovies
    });
  }
  render() {
    console.log(this.state.queueMovies);
    return (
      <div className="App">
        <MoviesList
          data={this.state.movies}
          addToQueue={this.addToQueue}
        />
        <MoviesQueue
          data={this.state.queueMovies}
          removeFromQueue={this.removeFromQueue}
        />
      </div>
    );
  }
}

export default App;
