import React from "react";
import Content from "./Content"
// !  This is Function Component
// export default function Section() {
//   return (
//     <div>
//     <h1>This is a Section</h1>
//     <Content/>
//     </div>
//   )
// }


// !  This is Class Component
export default class Section extends React.Component {
  // shouldComponentUpdate(){
  //   return false;
  // }
  render(){
    // console.log("Section Render");
    return (
      <div>
      <h1>This is a Section</h1>
      <Content/>
      </div>
    )
  }
}
