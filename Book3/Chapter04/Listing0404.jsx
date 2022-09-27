import React from 'react';

class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }
  setVisibility() {
    this.setState({ visible: !visible });
  }
  render() {
    return (
      <div>
        {visible ? this.props.children : ''}
        <button onClick={this.setVisibility.bind(this)}>Show/Hide</button>
      </div>
    );
  }
}

export default ToggleVisibility;
