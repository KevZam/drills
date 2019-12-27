import React from "react";
import TheDate from "./statePractice/TheDate";
import Counter from "./statePractice/Counter";

class App extends React.Component {
  render() {
    return (
      <div> <Counter step={5} /> </div>
    )
  }
}

export default App;
