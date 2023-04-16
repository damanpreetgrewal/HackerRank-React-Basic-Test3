import React from "react";

function Header() {
  const style = {
    width: "100%",
    backgroundColor: "#808080",
    color: "white",
    padding:'1rem'
   
  };
  return (
    <div style={style}>
      <h2 style={{margin:'auto',width:'fit-content'}}>Favourite Movies</h2>
    </div>
  );
}

export default Header;
