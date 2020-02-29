import React from "react";
import Switch from "react-switch";
import axios from "axios";

class SingleGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: this.props.group.state.all_on
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange() {
    await axios.put(`/hue/groups/${this.props.index + 1}/action`, {
      on: !this.state.on
    });
    this.setState({ on: !this.state.on });
  }

  render() {
    // console.log("this is props: ", this.props);
    const { group } = this.props;
    return (
      <div>
        <h2>{group.name}</h2>
        <label>
          <Switch onChange={this.handleChange} checked={this.state.on} />
        </label>
      </div>
    );
  }
}

export default SingleGroup;
