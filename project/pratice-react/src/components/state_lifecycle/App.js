import React from "react";

// State is "data that changes"
// State is simple javascript object
// "Super" is a reference to the parent class constructor or base class constructor
export default class Clock extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { date: new Date() }; 
  //   }

  // Shortcut for the above constructor
  state = { date: new Date() };

  // Lifecycle methods
  // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
  // Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  // componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
  // Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString(this.props.locale)}.</h2>
      </div>
    );
  }
}


