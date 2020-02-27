import React from "react";

class SingleLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      brightness: 0
    };
  }

  render() {
    return (
      <div>
        <h2>{this.props.name.name}</h2>

        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}

export default SingleLight;
