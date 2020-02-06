import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div>
        <form action="" className="addCard">
          <input type="text" name="question" />
          <input type="text" name="answer" />
          <input type="submit" value="Create Card!" />
        </form>
      </div>
    );
  }
}

export default Form;
