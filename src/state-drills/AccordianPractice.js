import React, { Component } from "react";

export default class AccordianPractice extends Component {
  state = {
    currentIndex: 0
  };

  renderContent(index) {
    this.setState({ currentIndex: index });
  }
  renderButtons() {
    return this.props.sections.map((section, index) => (
      <li>
        <button onClick={() => this.renderContent(index)}>
          {section.title}
        </button>
      </li>
    ));
  }

  renderParagraph() {
    const currentSection = this.props.sections[this.state.currentIndex].content;
    return <p>{currentSection}</p>;
  }
  render() {
    return (
      <ul>
        {this.renderButtons()}
        {this.renderParagraph()}
      </ul>
    );
  }
}
