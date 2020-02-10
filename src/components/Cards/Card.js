import React, { Component } from "react";

export class Card extends Component {
  state = { 
    flip: true
  };

  flipCard = e => {
    var newFlip = this.state.flip === false ? true : false;
    this.setState({
      flip: newFlip
    });
    return console.log("clicked");
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.deleteCard(this.props.question);
  }

  render() {
    const { flip } = this.state;

    return (
      <div style={{
        margin: "auto",
        textAlign: "center",
        verticalAlign: "middle",
        lineHeight: "150px",
        maxWidth: "300px",
      }}>
        <div style={{
          boxShadow: "0px,4px,8px,0px,black",
          maxWidth: "300px",
          margin: "auto",
          textAlign: "center",
          verticalAlign: "middle",
          lineHeight: "150px",
          backgroundColor: 'grey',
          color: 'white'
        }}>
          {flip ? this.props.question : this.props.answer}
        </div>
        <button style={{margin:"auto", position: "relative"}}
        onClick={this.flipCard}>Flip!</button>
        <input style={{margin: "auto", position: "relative"}} type="submit" value="delete!" />
      </div>
    );
  }
}

export default Card;
