import React from 'react';
import "./App.css";

const Movie = (props) => {
  return (
    <div>
      <img 
        alt=""
        src={props.poster}
      />
      <p>{props.title}</p>
      <p>{props.releaseDate}</p>
      {props.selectionBtn}
    </div>
  );
}

export default Movie;