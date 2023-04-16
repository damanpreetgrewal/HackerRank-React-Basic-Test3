import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MoviesForm from "./components/MoviesForm";
import MoviesList from "./components/MoviesList";

function App() {
  // const data=movieData();
  const [state, setState] = useState([]);

  return (
    <div className="App">
      <Header />
      <div
        style={{
          margin: "2rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <MoviesForm setState={setState} state={state} />
        <MoviesList state={state} setState={setState} />
      </div>
    </div>
  );
}

export default App;
