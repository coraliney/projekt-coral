import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home" >
      <div className="headerContainer">
        <h1> Hitchhike? </h1>
        <p> START HERE!</p>
        <Link to="/search">
          <button> SEARCH NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;