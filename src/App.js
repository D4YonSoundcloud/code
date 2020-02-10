import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import "./style.css";
import AddCard from "./components/AddCard";

class App extends Component {
  state = {
    cards: [
      {
        question: "example: question",
        answer: "example: answer"
      }
    ]
  };

  //addCard
  addCard = (question, answer) => {
    const newCard = {
      question,
      answer
    };
    this.setState({
      cards: [...this.state.cards, newCard]
    });
  };

  deleteCard = question => {
    this.setState({
      cards: [...this.state.cards.filter(card => card.question !== question)]
    });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="App">
        <AddCard addCard={this.addCard}></AddCard>
        <Cards deleteCard={this.deleteCard} cards={cards}></Cards>
      </div>
    );
  }
}

export default App;
