import { useState } from 'react';
function Flashlight() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <Lightbulb glowing={isOn} />
      <button onClick={() => setLight(!isOn)}>Change State</button>
      <button onClick={() => setLight('off')}>Turn off</button>
    </div>
  );
}

export default Flashlight;

function Lightbulb(props) {
  return (
    <div>
      <div
        className="bulb"
        style={{
          width: '100',
          height: '100',
          backgroundColor: props.glowing ? 'yellow' : 'black',
        }}
      />
    </div>
  );
}
