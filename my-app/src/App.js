import React, { useState } from 'react';
import Movie from './components/Movie';

import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import Users from './pages/Users';
import Home from './pages/Home';
import Movies from './pages/Movies';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';



function App() {
  // movies도 state 상태가 아니면 깊은복사해야함
  // const [movies, setMovies] = useState([]);


  // useEffect(() => {
  //   console.log('render')
  // })

  // const removeMovie = (id) => {
  //   setMovies(movies.filter(movie => {
  //     return movie.id !== id;
  //   }))
  // }

  // map에는 unique key를 주어야 함
  // 반복문에는 key가 필요, component에 넣어주면 됨됨
  // const renderMovies = movies.length ? movies.map(movie => {
  //   return (
  //     <Movie 
  //       movie={movie} 
  //       key={movie.id}
  //       removeMovie={removeMovie}
  //       />
  //   )
  // }) : "추가된 영화가 없습니다.";



  // const addMovie = (movie) => {
  //   setMovies([
  //     ...movies,
  //     movie  
  //   ]);
  // };


  // Route에 element로 상속할 때 쓰는 방법 
  // function MoviesRouter() {
  //   return (
  //     <>
  //       <h1>Movie List</h1>
  //       <MovieForm addMovie={addMovie} />
  //       {renderMovies}
  //     </>
  //   )
  // }

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* v6부터는 switch 사라짐
        Route는 Routes로 묶어줘야하고
        element 안에 html 상속시켜야함 */}
        {/* <Switch></Switch> */} 
        <div className='container'>
          <Routes>
            <Route path="/movies" element={
              // element 상속
              // <MoviesRouter />
              <Movies />
            }>
              {/* <h1>Movie List</h1>
              <MovieForm addMovie={addMovie} />
              {renderMovies} */}
            </Route>  
            <Route path="/users" element={
              <Users />
            }>
            </Route>
            <Route path="/" element={
              <Home />
            } exact>
            </Route>
          </Routes>
        </div>
      </div>          
    </Router>
  );
}

export default App;
