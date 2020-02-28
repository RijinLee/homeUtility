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

  async handleChange() {
    await axios.put(`/hue/lights/${this.props.index + 1}/state`, {
      on: !this.state.on
    });
    this.setState({ on: !this.state.on });
  }

  render() {
    // console.log("this is props: ", this.props);
    const { light } = this.props;
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
