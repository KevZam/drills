import React, { Component } from "react";
import { directive } from "@babel/types";

class TheDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ dateTime: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.state);
    return <div>{this.state.dateTime.toLocaleString()}</div>;
  }
}

export default TheDate;
