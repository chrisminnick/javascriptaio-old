import React from 'react';

class VolumeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { volume: 0 };
  }
  render() {
    const changeVolume = (e) => {
      this.setState(e.target.value);
    };
    return (
      <>
        <p>Turn the volume up!</p>
        <input type="range" min="0" max="11" onChange={changeVolume} />
      </>
    );
  }
}

export default VolumeSlider;
