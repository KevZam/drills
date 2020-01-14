import React, { Component } from "react";
import Content from "./Content";
import "./Nav.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <Content className="Nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/workouts">Workouts</Link>
      </Content>
    );
  }
}
