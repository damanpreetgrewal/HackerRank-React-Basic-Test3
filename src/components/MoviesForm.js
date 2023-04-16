import React, { useRef } from "react";

function MoviesForm({setState,state}) {
  const nameRef = useRef();
  const rateRef = useRef();
 
  /**function add Movie in Arr */
  function addItem() {
    state.push({
      name: nameRef.current.value,
      rate: rateRef.current.value,
    });
  setState([...state]); 
  nameRef.current.value='';
  rateRef.current.value='';
  }
  /**Style for form**/
  const form = {
    display: "flex",
    flexDirection: "column",
    width: "220px",
  };
  return (
    <div style={form}>
      <label htmlFor="name">Name</label>
      <input type="text" ref={nameRef} id="name" />
      <label htmlFor="rate">Rating</label>
      <input type="number" id="rate" ref={rateRef} />
      <button onClick={addItem}>Add</button>
     
    </div>
  );
}

export default MoviesForm;
