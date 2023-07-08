import React from 'react';
import Movie from './components/Movie';

function App() {
  const movies = [
    {title: 'scott coder1', year: 2001},
    {title: 'scott coder2', year: 2002},
    {title: 'scott coder3', year: 2003},
    {title: 'scott coder4', year: 2004},
  ];


  // map에는 unique key를 주어야 함
  // 반복문에는 key가 필요, component에 넣어주면 됨됨
  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title}/>
    )
  })

  return (
    <div className="App">
      <h1>Movie List</h1>
      {renderMovies}
    </div>
  );
}

export default App;
