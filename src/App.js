import React from 'react';
import './App.css';
import MoviesList from './MoviesList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const API_KEY = "b240914dadb43ef6b429ad8d536ff913";
    const BASE_URL = "https://api.themoviedb.org/3/";
    const SELECTION = `trending/`;
    const MEDIA_TYPE = `all/`;
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

  render() {
    console.log(this.state.movies);
    return (
      <div className="App">
        <MoviesList data={this.state.movies}/>
      </div>
    );
  }
}

export default App;
