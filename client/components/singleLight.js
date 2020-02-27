import React from "react";
import Switch from "react-switch";
import axios from "axios";

class SingleLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: this.props.light.state.on
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // somethings wrong with this function ....need to figure out why its not working!!!!!
  // somethings wrong with this function ....need to figure out why its not working!!!!!
  // somethings wrong with this function ....need to figure out why its not working!!!!!
  async handleChange() {
    await axios.put(`/hue/lights/${this.props.index + 1}/state`, {
      on: !this.state.on
    });
    this.setState({ on: !this.state.on });
  }

  render() {
    const { light } = this.props;
    console.log("this is props: ", this.props);
    return (
      <div>
        <h2>{light.name}</h2>
        <label>
          {/* <input type="checkbox" /> */}
          <Switch onChange={this.handleChange} checked={this.state.on} />
        </label>
      </div>
    );
  }
}

export default SingleLight;
