class App {
  constructor(props) {
    super(props);
    this.state = {
      location: { coords: { lat: 0, long: 0 } },
      temperature: 0,
      windSpeed: 0,
      precipitation: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Today's weather</h1>
        <ul>
          <li>location: {this.state.location}</li>
          <li>temperature: {this.state.temperature}</li>
          <li>wind speed: {this.state.windSpeed}</li>
          <li>precipitation amount: {this.state.precipitation}</li>
        </ul>
      </div>
    );
  }
}

export default App;
