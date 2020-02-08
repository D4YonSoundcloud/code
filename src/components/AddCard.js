import React, { Component } from "react";

export class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addCard(this.state.question, this.state.answer);
    this.setState({
      question: "",
      answer: ""
    });
  };

  render() {
    const { question, answer } = this.state;

    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          style={{
            padding: "10px",
            margin: "auto",
            maxWidth: "300px",
            display: "flex",
            flexDirection: "column"
          }}
          className="addCard"
        >
          <label>
            Question:
            <input
              type="text"
              name="question"
              value={question}
              onChange={e => this.setState({ question: e.target.value })}
            />
          </label>
          <label>
            Answer:
            <input
              type="text"
              name="answer"
              value={answer}
              onChange={e => this.setState({ answer: e.target.value })}
            />
          </label>

          <input style={{margin: "auto", width: "50px"}} type="submit" value="Create Card!" />
        </form>
      </div>
    );
  }
}

export default AddCard;
