import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ""};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ""});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Enter Something"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        { this.props.error.message }
        <button>Submit</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather, error: state.error};
}

export default connect(mapStateToProps, { fetchWeather })(SearchBar);
