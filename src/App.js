import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      distance: 0
    }

    this.run = this.run.bind(this);
    this.addListener = this.addListener.bind(this);
    this.removeListener = this.removeListener.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.run)
  }

  run() {
    this.setState({
      position: this.state.position - 250,
      distance: this.state.distance + 1
    })
  }

  removeListener() {
    document.removeEventListener("keypress", this.run)
  }

  addListener() {
    document.addEventListener("keypress", this.run)
  }

  render() {

    let formattedDistance;

    if(this.state.distance > 1000) {
      formattedDistance = `${this.state.distance / 1000}km`
    } else {
      formattedDistance = `${this.state.distance}m`
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Tony Runs Around the World</h2>
          <div id="trex" className="" style={{backgroundPositionX: this.state.position + "px"}}></div>
        </div>
        <div className="saveGame">
          <div className="container">
            <p>Help Tony run around the world by pressing keys. When you're done running, make sure to save your contribution!</p>
          </div>
          <form
            onFocus={this.removeListener}
            onBlur={this.addListener}
            id="save"
          >
          <p>
            <label>Your Name </label>
            <input type="text" placeholder="Nickname or initials" />
            <span> </span>
            <button type="submit">Save</button>
          </p>
          </form>
        </div>
        <div className="contributions">
          <h2>Current Run</h2>
          <p id="distance">{formattedDistance}</p>
        </div>
        <div className="contributions">
          <h2>Recent Contributions</h2>
        </div>
      </div>
    );
  }
}

export default App;
