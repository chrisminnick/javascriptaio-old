import React, { useState, useEffect } from 'react';
import './App.css';

function Obstacle({ obstaclePosition }) {
  return <div className="obstacle" style={obstaclePosition}></div>;
}

function Map({ numberOfObstacles, children }) {
  const [obstacles, setObstacles] = useState([]);
  useEffect(() => {
    const map = generateMap(numberOfObstacles);
    setObstacles(map);
  }, []);
  const generateRandomPosition = () => {
    const x = Math.floor(Math.random() * 100) + 'vw';
    const y = Math.floor(Math.random() * 100) + 'vh';
    return { left: x, top: y };
  };
  const obstaclePositions = Array(numberOfObstacles)
    .fill()
    .map(() => {
      const x = Math.floor(Math.random() * 100) + 'vw';
      const y = Math.floor(Math.random() * 100) + 'vh';
      return { left: x, top: y };
    });
  const generateMap = (numberOfObstacles) => {
    const obstacles = [];
    for (let i = 0; i < numberOfObstacles; i++) {
      obstacles[i] = (
        <Obstacle obstaclePosition={obstaclePositions[i]} key={i} />
      );
    }
    return obstacles;
  };
  return (
    <div className="map">
      {obstacles}
      {children}
    </div>
  );
}

function Ball({ position }) {
  return (
    <div
      id="ball"
      style={{
        left: position.x + 'vh',
        top: position.y + 'vh',
      }}
    >
      (*)
    </div>
  );
}

export default function App() {
  useEffect(() => {
    document.addEventListener('keydown', moveBall);
    return () => {
      document.removeEventListener('keydown', moveBall);
    };
  }, []);
  const numberOfObstacles = 100;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const moveBall = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        setPosition((prev) => {
          return { left: prev.x, top: prev.y - 1 };
        });
        break;
      case 'ArrowDown':
        setPosition((prev) => {
          return { left: prev.x, top: prev.y + 1 };
        });
        break;
      case 'ArrowLeft':
        setPosition((prev) => {
          return { left: prev.x - 1, top: prev.y };
        });
        break;
      case 'ArrowRight':
        setPosition((prev) => {
          return { left: prev.x + 1, top: prev.y };
        });
        break;
    }
  };
  return (
    <Map numberOfObstacles={numberOfObstacles}>
      <Ball position={position} />
    </Map>
  );
}
