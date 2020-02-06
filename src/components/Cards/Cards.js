import React, { Component } from "react";
import CardQ from "./CardQ";
import CardA from "./CardA";
import AddCard from "../AddCard";

export class Cards extends Component {
  state = {
    q: "question",
    a: "answer",
    flip: true
  };

  flipCard = e => {
    var newFlip = this.state.flip === false ? true : false;
    this.setState({
      flip: newFlip
    });
    return console.log("clicked");
  };

  render() {
    const { flip } = this.state;
    return (
      <div>
        <AddCard></AddCard>
        {flip ? (
          <CardQ question={this.props.question}></CardQ>
        ) : (
          <CardA answer={this.props.answer}></CardA>
        )}
        <button onClick={this.flipCard}>Flip!</button>
      </div>
    );
  }
}

export default Cards;
