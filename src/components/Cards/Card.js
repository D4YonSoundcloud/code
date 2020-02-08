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

  render() {
    const { flip } = this.state;

    return (
      <div style={{
        display:"flex",
        flexDirection: "column"
      }}>
        <div style={{
          boxShadow: "0px,4px,8px,0px,rgba(0, 0, 0, 0.2)",
          maxWidth: "300px",
          margin: "auto",
          textAlign: "center",
          verticalAlign: "middle",
          lineHeight: "150px",
          height: "150px"
        }}>
          {flip ? this.props.question : this.props.answer}
        </div>
        <button style={{margin:"auto", position: "relative"}}
        onClick={this.flipCard}>Flip!</button>
      </div>
    );
  }
}

export default Card;
