import { createContext, useReducer } from 'react';
import './App.css';
import ComponentB from './components/useReducer/example/example_04/ComponentA';

export const counterContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;

    default:
      return state;
  }
};



function App() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
        <div>Count : {count}</div>
        <counterContext.Provider value={{countDispatch: dispatch}}>
        <ComponentB />
        </counterContext.Provider>
        </div>
    );
}
 
export default App;