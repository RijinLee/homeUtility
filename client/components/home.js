import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="homepage">
      <div id="hero-bg">
        <div id="hero">
          <div>
            <div id="hero-text">
              <h1>THIS IS MY HOME COMPONENT</h1>
              <p>
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsum
              </p>
              <p>
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsum
              </p>
            </div>
            <div id="hero-img" />
          </div>
        </div>
      </div>
      <div></div>
      <div id="footer">
        <span>HomeUtility © {new Date().getFullYear()}</span>
        <span>
          <a href="#">Terms&nbsp;&nbsp;</a>
          <a href="#">&nbsp;&nbsp;Privacy</a>
        </span>
      </div>
    </div>
  );
};

export default Home;
