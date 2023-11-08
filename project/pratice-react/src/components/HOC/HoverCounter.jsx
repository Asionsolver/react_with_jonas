// ! Before using HOC Concept

// import React, { Component } from "react";

// export default class HoverCounter extends Component {
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
//         <h2  onMouseOver={this.incrementCount}>Hovered {count} times</h2>
//       </div>
//     );
//   }
// }

// ! After using HOC Concept

import withCounter from "./withCounter";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    </div>
  );
};

export default withCounter(HoverCounter);
