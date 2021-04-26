import React from "react";

const Header = () => {
  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: "silver",
        display:"flex", 
        justifyContent:"space-around",
        alignItems:"center"
      }}
    >
      <h1
        style={{
          // textAlign: "center",
          fontWeight: "lighter",
          letterSpacing: "2px",
        }}
      >
        Image Gallery
      </h1>
      <h2 className="developer">Developed By: <button className="glow-on-hover">Mian Shakir</button></h2>
    </div>
  );
};

export default Header;
