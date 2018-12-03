import React, { Component } from "react";
import "./App.css";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


class Weather extends Component {
    state = {
        loading: false,
        input: "Enter Address",
        result: "",
        pretext: "",
        errorText: ""
    };

    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleClick = async e => {
        this.setState({
            loading: true,
            result: "",
            pretext: "",
            errorText: ""
        });

        // get the cords for this location from google maps.
        const response = await fetch("/api/geo/" + this.state.input);
        //let result = null;
        try {
            const geo = await response.json();
            let lat = geo.lat;
            let lng = geo.lng;

            // get the weather fron Dark Sky from the cords returned from google maps.
            const weather = await fetch("api/weather/" + lat + '/' + lng);
            const result = await weather.json();
            this.setState({
                result: Math.round(result.currently.temperature) + '℉',
                pretext: "Temperature:"
            });

        } catch (e) {
            console.log('failed to retrieve info');
            this.setState({
                errorText: "Error retrieving weather info from the API"
            })
        } finally {
            this.setState({
                loading: false,
            });
        }
    };

    render() {
        return (
            <div className="Weather">
        <div className="Weather-body">
        <form>
            <Input
              type="text"
              className="stateInput"
              placeholder={this.state.input}
              onChange={this.handleChange}
            />
            <Button variant="contained" type="submit" color="primary" onClick={this.handleClick} disabled={this.state.loading}>
              {this.state.loading ? "Getting Weather..." : "Get Weather"}
            </Button>
        </form>
        </div>
        <div className="Weather-footer">
        <h1 className="app-intro">
         <span className="errorText">{this.state.errorText}</span>
         <span className="intro">{this.state.pretext}</span>
         <span className="results">{this.state.result}</span>
        </h1>
      </div>
    </div>
        );
    }
}

export default (Weather);