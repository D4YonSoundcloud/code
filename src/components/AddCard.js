import React, { Component } from "react";

export class AddCard extends Component {

  state = {
    question: "",
    answer: ""
  }

  render() {
    const { question, answer } = this.state

    return (
      <div>
        <form action="" className="addCard">
          <label>
              Question:
            <input type="text" name="question" value={question} onChange={(e) => this.setState({question: e.target.value})}/>
          </label>
          <label>
              Answer:
            <input type="text" name="answer" value={answer} onChange={(e) => this.setState({answer: e.target.value})}/>
          </label>

          <input type="submit" value="Create Card!" />
        </form>
      </div>
    );
  }
}

export default AddCard;
