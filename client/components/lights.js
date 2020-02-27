import React from "react";
import axios from "axios";
import SingleLight from "./singleLight";

class Lights extends React.Component {
  constructor() {
    super();
    this.state = { lights: {} };
  }
  async componentDidMount() {
    const { data } = await axios.get("/hue/lights");
    // console.log("this is data: ", data);
    this.setState({ lights: data });
  }
  render() {
    return (
      <div>
        <h1>HUE LIGHTS</h1>

        {Object.values(this.state.lights).map((light, index) => (
          <div key={index}>
            <SingleLight name={light} />
          </div>
        ))}
      </div>
    );
  }
}

export default Lights;
