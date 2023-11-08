// ! Before using HOC Concept

// import React, { Component } from "react";

// export default class ClickCounter extends Component {
//   state = {
//     count: 0,
//   };

//   incrementCount = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <button type="button" onClick={this.incrementCount}>Clicked {count} times</button>
//       </div>
//     );
//   }
// }

// ! After using HOC Concept

import withCounter from "./withCounter";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
