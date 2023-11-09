import ClickCounter from "./ClickCounter";
// import User from "./components/RenderProps/User";
import HoverCounter from "./HoverCounter";
import Counter from "./Counter";

export default function App() {
  return (
    <div>
      <h1>React Render Props</h1>
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />

      {/* <User render={(isLoggedIn)=>isLoggedIn ? "Ashis" : "Guest"}/> */}
    </div>
  );
}
