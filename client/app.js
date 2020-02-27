import React from "react";
import Routes from "./routes";
import { Navbar } from "./components";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes />
    </React.Fragment>
  );
};

export default App;
