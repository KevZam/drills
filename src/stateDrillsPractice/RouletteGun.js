import React from "react";

class RouletteGun extends React.Component {
  state = {
    chamber: null,
    spinningTheChamber: false,
    word: ""
  };

  handleEvent = () => {
    let newWord = "";
    this.setState({
      spinningTheChamber: true,
      word: "spinning the chamber and pulling the trigger!..."
    });
    let timeout = setTimeout(() => {
      const randNum = Math.ceil(Math.random() * 8);
      if (randNum === this.props.bulletInChamber) {
        newWord = "BANG!!!";
      } else {
        newWord = "You're safe...";
      }

      this.setState({
        chamber: randNum,
        spinningTheChamber: false,
        word: newWord
      });
    }, 2000);
  };

  updateWorded() {}
  render() {
    return (
      <div>
        <p>{this.state.word}</p>
        <button onClick={this.handleEvent}>Pull the trigger!</button>
      </div>
    );
  }
  static defaultProps = {
    bulletInChamber: 8
  };
}

export default RouletteGun;
