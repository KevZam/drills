import React from "react";

class RouletteGun extends React.Component {
  state = {
    chamber: null,
    spinningTheChamber: false,
    word: ""
  };

  handleEvent = () => {
    this.setState({ spinningTheChamber: true });
    this.interval = setInterval(() => {
      const randNum = Math.round(Math.random() * 7) + 1;
      this.setState({ chamber: randNum, spinningTheChamber: false });
    }, 2000);
  };

  updateWorded() {}
  render() {
    console.log("chamber value is " + this.state.chamber);
    console.log("bulletInChamber value is " + this.props.bulletInChamber);
    console.log("word is " + this.state.word);
    if (this.state.spinningTheChamber === true) {
      console.log(" spinning is true");
      this.state.word = "spinning the chamber and pulling the trigger!...";
    } else if (this.state.chamber === this.state.bulletInChamber) {
      this.state.word = "BANG!!!!";
    }

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
