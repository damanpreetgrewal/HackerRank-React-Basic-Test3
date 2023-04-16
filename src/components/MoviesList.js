import React, { useRef, useState } from "react";

function MoviesList({ state, setState }) {
  // console.log(state);

  const [filterState, setFilterState] = useState(state);
  const style = {
    display: "flex",
    justifyContent: "space-around",
  };
  const movieRef = useRef();
  //search Movie function
  let filterdMovie = [];
  function searchMovie() {
    filterdMovie = state.filter((item) =>
      item.name.startsWith(`${movieRef.current.value}`)
    );
    console.log(filterdMovie);

    setFilterState([...filterdMovie]);
    console.log("filterState", filterState);
    if (movieRef.current.value === "") {
      setState(state);
    }
  }
  return (
    <div style={{ width: "220px" }}>
      <input
        type="text"
        placeholder="Search Movie"
        ref={movieRef}
        onChange={searchMovie}
      />
      {movieRef.current ? (
        <ul>
          {state.length === 0 ? (
            <li>No Movie Yet</li>
          ) : movieRef.current.value.length > 0 ? (
            <ul>
              {filterState.map((item, index) => (
                <li key={index} style={style}>
                  {item.name}
                  <span style={{ marginLeft: "auto" }}>{item.rate}</span>
                </li>
              ))}
            </ul>
          ) : (
            state.map((item, index) => (
              <li key={index} style={style}>
                {item.name}
                <span style={{ marginLeft: "auto" }}>{item.rate}</span>
              </li>
            ))
          )}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default MoviesList;
