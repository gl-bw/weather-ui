import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    loading: false,
    input: "Type something...",
    result: ""
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleClick = async e => {
    this.setState({
      loading: true
    });

    const response = await fetch("/api/reverse/" + this.state.input);
    const result = await response.json();

    this.setState({
      result: result,
      loading: false
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GitLab Microservices Demo</h2>
          <div>
            <input
              type="text"
              placeholder={this.state.input}
              onChange={this.handleChange}
            />
            <button onClick={this.handleClick} disabled={this.state.loading}>
              {this.state.loading ? "Loading..." : "Call API"}
            </button>
          </div>
        </div>
        <h1 className="app-intro">
         {this.state.result}
        </h1>
      </div>
    );
  }
}

export default App;
