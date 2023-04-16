import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MoviesForm from './components/MoviesForm';
import MoviesList from './components/MoviesList';

const App = () => {
  const [state, setState] = useState([]);

  const onMovieAdd = movie => {
    setState(prevState => {
      return [...prevState, movie];
    });
  };
  return (
    <div className='App'>
      <Header />
      <div
        style={{
          margin: '2rem',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <MoviesForm setMovie={onMovieAdd} state={state} />
        <MoviesList state={state} setState={setState} />
      </div>
    </div>
  );
};

export default App;
