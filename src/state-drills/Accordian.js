import React, { Component } from "react";

export default class Accordian extends Component {
  static defaultProps = { sections: [] };
  state = {
    currentTabIndex: 0
  };

  handleButtonClick(index) {
    this.setState({ currentTabIndex: index });
  }
  renderButtons() {
    return this.props.sections.map((section, index) => (
      <li key={index}>
        <button onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
      </li>
    ));
  }
  renderContent() {
    const currentSection = this.props.sections[this.state.currentTabIndex];
    return <p> {currentSection.content}</p>;
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderButtons()}
          {this.renderContent()}
        </ul>
      </div>
    );
  }
}
