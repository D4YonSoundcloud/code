import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import "./index.css";

class App extends Component {
  state = {
    q: "question",
    a: "answer",
    cards: []
  };

  render() {
    const { q, a } = this.state;
    return (
      <div className="App">
        <Cards question={q} answer={a}></Cards>
      </div>
    );
  }
}

export default App;
