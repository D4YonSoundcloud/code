import React, { Component } from "react";
import Card from "./Card";

export class Cards extends Component {

  render() {

    return (
      <div>
        {this.props.cards.map((card) => (
            <Card key={card.question} question={card.question} answer={card.answer}></Card>
        ))}
      </div>
    );
  }
}

export default Cards;
