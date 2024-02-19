import React from "react";

function Home(props) {
  const { userName, userColor, userCity } = props
  return (
    <div id="home">
      <h1 style={{ color: userColor }}>{userName} is a Web Developer from {userCity}</h1>
    </div>
  );
}

export default Home;
