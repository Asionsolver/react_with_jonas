export default function HoverCounter({ count, incrementCount }) {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    </div>
  );
}
