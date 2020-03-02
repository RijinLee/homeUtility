import React from "react";
import Switch from "react-switch";
import axios from "axios";
import ReactSlider from "react-slider";

class SingleLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: this.props.light.state.on,
      brightness: this.props.light.state.bri
    };
    this.handlePowerChange = this.handlePowerChange.bind(this);
    this.handleBrightnessChange = this.handleBrightnessChange.bind(this);
  }

  async handlePowerChange() {
    await axios.put(`/hue/lights/${this.props.index + 1}/state`, {
      on: !this.state.on
    });
    this.setState({ on: !this.state.on });
  }

  async handleBrightnessChange(event) {
    // event.preventDefault();
    // event.persist();
    console.log(event);
    await axios.put(`/hue/lights/${this.props.index + 1}/state`, {
      bri: event
    });
    this.setState({ brightness: event });
  }

  render() {
    const { light } = this.props;
    return (
      <div>
        <h2>{light.name}</h2>
        <label>
          {/* <input type="checkbox" /> */}
          <Switch onChange={this.handlePowerChange} checked={this.state.on} />
        </label>

        {/* <div>
          <input
            type="range"
            defaultValue={this.state.brightness}
            min={1}
            max={254}
            onChangeCapture={event => {
              this.handleBrightnessChange(event);
            }}
          />
        </div> */}

        <div>
          <ReactSlider
            onAfterChange={event => {
              this.handleBrightnessChange(event);
            }}
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={this.state.brightness}
            min={1}
            max={254}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
        </div>
      </div>
    );
  }
}

export default SingleLight;
