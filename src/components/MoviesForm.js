import React, { useRef } from 'react';

const MoviesForm = ({ setMovie, state }) => {
  const nameRef = useRef();
  const rateRef = useRef();

  const onSubmit = () => {
    setMovie({ name: nameRef.current.value, rating: rateRef.current.value });
    nameRef.current.value = '';
    rateRef.current.value = '';
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '220px',
  };
  return (
    <div style={formStyle}>
      <label htmlFor='name'>Name</label>
      <input type='text' ref={nameRef} id='name' />
      <label htmlFor='rate'>Rating</label>
      <input type='number' id='rate' ref={rateRef} />
      <button type='submit' onClick={onSubmit}>
        Add
      </button>
    </div>
  );
};

export default MoviesForm;
