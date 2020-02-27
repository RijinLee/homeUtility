import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/lights">Your Lights</Link>
        <Link to="#">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
