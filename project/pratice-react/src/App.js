import React from "react";
import ClickCounter from "./components/ContextAPI/ClickCounter";
import Counter from "./components/ContextAPI/Counter";
import Section from "./components/ContextAPI/Section";
import ThemeContext from "./components/ContextAPI/themeContext";

// ! Before Using Context API

// export default class App extends React.Component {
//   state={
//     theme: 'dark'
//   };
//   render(){
//     const {theme} = this.state
//     return (
//       <div>
//         <h1>React Context API</h1>
//         <Counter>
//           {(count, incrementCount) => (
//             <ClickCounter count={count} incrementCount={incrementCount} />
//           )}
//         </Counter>

//         <Section theme={theme}/>

//       </div>
//     );
//   }

// }

// ! After Using Context API

export default class App extends React.Component {
  state = {
    theme: "light",
    switchTheme: () => {
      this.setState(({ theme }) => {
        if (theme === "dark") {
          return {
            theme: "light",
          };
        }
        return {
          theme: "dark",
        };
      });
    },
  };

  
  render() {
    return (
      <div>
        <h1>React Context API</h1>
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>

        <ThemeContext.Provider value={this.state}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
