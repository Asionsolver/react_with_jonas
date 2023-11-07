import React from "react";

export default class Bracket extends React.Component {
    addBracket = (text, emoji)=>`[ ${text} ]`;
  render() {
    
    return this.props.children({addBracket: this.addBracket});
  }
}
