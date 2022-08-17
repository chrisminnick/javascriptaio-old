import React from 'react';

class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.setVisibility = this.setVisibility.bind(this);
  }
  setVisibility() {
    this.setState({ visible: !visible });
  }
  render() {
    return (
      <div>
        {visible ? this.props.children : ''}
        <button onClick={this.setVisibility}>Show/Hide</button>
      </div>
    );
  }
}

export default ToggleVisibility;
