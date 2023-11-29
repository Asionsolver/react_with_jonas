import React, { Component } from "react";

export default class MyComponentClass extends Component {
  state = {
    count: 0,
    date: new Date(),
  };

  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
    this.interval = setInterval(this.tick, 1000);
  }
  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  addClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  tick = () => {
    console.log('Clock Ticking')
    this.setState({
      date: new Date(),
    });
  };
  render() {
    const { date } = this.state;
    return (
      <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>
          <button onClick={this.addClick} type="button">
            Click
          </button>
        </p>
      </div>
    );
  }
}
