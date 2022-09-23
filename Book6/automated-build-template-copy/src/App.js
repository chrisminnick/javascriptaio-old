import React from 'react';

function App() {
  return (
    <Map>
      <Ball />
    </Map>
  );
}

function Map({ children }) {
  return <div id="map">{children}</div>;
}

function Ball() {
  return <div id="ball"></div>;
}

export default App;
