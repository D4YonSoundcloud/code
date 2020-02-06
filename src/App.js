import React, { Component } from "react";
import CardQ from "./components/Cards/CardQ";
import CardA from "./components/Cards/CardA";
import Form from "./components/Form";
import "./index.css";

class App extends Component {
  state = {
    q: "question",
    a: "answer",
    flip: true
  };

  flipCard = e => {
    var newFlip = this.state.flip === true ? false : true;
    this.setState({
      flip: newFlip
    });
    return console.log("clicked");
  };

  render() {
    const { q, a, flip } = this.state;
    return (
      <div className="App">
        <Form></Form>
        {flip ? <CardQ text={q}></CardQ> : <CardA text={a}></CardA>}
        <button onClick={this.flipCard}>Flip!</button>
      </div>
    );
  }
}

export default App;
