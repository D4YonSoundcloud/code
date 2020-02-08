import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import "./style.css";
import AddCard from "./components/AddCard";

class App extends Component {
  state = {
    cards: [
      {
        question: "question",
        answer: "answer"
      }
    ]
  };

  //addCard
  addCard = (question,answer) => {
    const newCard = {
      question,
      answer
    };
    this.setState({
      cards: [...this.state.cards, newCard]
    });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="App">
        <AddCard addCard={this.addCard}></AddCard>
        <Cards cards={cards}></Cards>
      </div>
    );
  }
}

export default App;
