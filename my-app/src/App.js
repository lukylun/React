import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';

import MovieForm from './components/MovieForm';

function App() {
  // movies도 state 상태가 아니면 깊은복사해야함
  const [movies, setMovies] = useState([]);


  // useEffect(() => {
  //   console.log('render')
  // })

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }))
  }

  // map에는 unique key를 주어야 함
  // 반복문에는 key가 필요, component에 넣어주면 됨됨
  const renderMovies = movies.length ? movies.map(movie => {
    return (
      <Movie 
        movie={movie} 
        key={movie.id}
        removeMovie={removeMovie}
        />
    )
  }) : "추가된 영화가 없습니다.";



  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie  
    ]);
  };

  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}

export default App;
