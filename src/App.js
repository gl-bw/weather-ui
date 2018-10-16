import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


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
        </div>
        <div className="App-body">
            <Input
              type="text"
              className="stateInput"
              placeholder={this.state.input}
              onChange={this.handleChange}
            />
            <Button variant="contained" color="primary" onClick={this.handleClick} disabled={this.state.loading}>
              {this.state.loading ? "Loading..." : "Call API"}
            </Button>
        </div>
        <div className="App-footer">
        <h1 className="app-intro">
         {this.state.result}
        </h1>
      </div>
    </div>
    );
  }
}

export default (App);
