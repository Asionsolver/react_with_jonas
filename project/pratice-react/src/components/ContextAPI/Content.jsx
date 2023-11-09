import React, { useContext } from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "./themeContext";
import themeContext from "./themeContext";

// !  This is Function Component Before Using useContext hook
// export default function Content() {
//   return (
//     <div>
//         <h1>This is a Content</h1>
//         <Counter>
//             {(count, incrementCount) => (
//                <ThemeContext.Consumer>
//                 {({theme,switchTheme})=>(
//                   <HoverCounter count={count} incrementCount={incrementCount} theme={theme}
//                   switchTheme = {switchTheme}
//                   />
//                 )}
//                </ThemeContext.Consumer>
//             )}
//         </Counter>
//     </div>
//   )
// }

// !  This is Function Component after Using useContext hook
export default function Content() {
  const context = useContext(themeContext);
  const { theme, switchTheme } = context;
  // console.log(context)
  // console.log("Content Rendered");
  return (
    <div>
      <h1>This is a Content</h1>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  );
}

// !  This is Class Component
// export default class Content extends React.Component {
// componentDidMount(){
//   console.log(this.context)
// }
//   render() {
//     const{theme, switchTheme} = this.context;
//     return (
//       <div>
//         <h1>This is a Content</h1>
//         <Counter>
//           {(count, incrementCount) => (
//             <HoverCounter
//               count={count}
//               incrementCount={incrementCount}
//               theme={theme}
//               switchTheme={switchTheme}
//             />
//           )}
//         </Counter>
//       </div>
//     );
//   }
// }

// Content.contextType = ThemeContext;
