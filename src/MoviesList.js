import React from 'react';
import Movie from './Movie';
import "./App.css";

const MoviesList = (props) => {

  return (
    <div>
      <h1>Available Movies</h1>
      <ul>
        {props.data.map(movie => (                                    
          <li key={movie.id}>
            <Movie
              id={movie.id}
              poster={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
              title={movie.original_title}
              releaseDate={movie.release_date}
              selectionBtn={(
                <button onClick={() => props.addToQueue(movie)}>Add To Queue</button>
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};                                      

export default MoviesList;
