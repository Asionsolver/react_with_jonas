import ClickCounter from "./components/RenderProps/ClickCounter";
import HoverCounter from "./components/RenderProps/HoverCounter";
import User from "./components/RenderProps/User";
import Counter from "./components/RenderProps/Counter";

export default function App() {
  return (
    <div>
      <h1>React Render Props</h1>
      {/* <ClickCounter/> */}
      {/* <HoverCounter/> */}
      {/* Render Prop that define render Logic */}
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
      <User render={(inLoggedIn) => (inLoggedIn ? "Ashis" : "Guest")} />
    </div>
  );
}
