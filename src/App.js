import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from './weather.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GitLab Microservices Weather Demo</h2>
        </div>
        <Weather />
    </div>
    );
  }
}

export default (App);
