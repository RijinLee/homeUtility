import React from "react";
import axios from "axios";
import SingleLight from "./singleLight";

class Lights extends React.Component {
  constructor() {
    super();
    this.state = {
      lights: {},
      groups: {}
    };
  }
  async componentDidMount() {
    let lights = await axios.get("/hue/lights");
    let groups = await axios.get("/hue/groups");
    this.setState({ lights: lights.data, groups: groups.data });
  }
  render() {
    console.log("this is the state: ", this.state);

    return (
      <div>
        <div>
          <h1>HUE GROUPS</h1>
          {Object.values(this.state.groups).map((group, index) => (
            <div key={index}>
              <SingleLight light={group} index={index} />
            </div>
          ))}
        </div>
        <div>
          <h1>HUE LIGHTS</h1>
          {Object.values(this.state.lights).map((light, index) => (
            <div key={index}>
              <SingleLight light={light} index={index} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Lights;
