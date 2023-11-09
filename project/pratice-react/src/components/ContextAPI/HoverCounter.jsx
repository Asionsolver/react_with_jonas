export default function HoverCounter({ count, incrementCount, theme }) {
  const style = theme === "dark" ? {backgroundColor: "#000", color:"#fff", padding:"15px 20px", borderRadius:"5px"} : null;
  return (
    <div>
      <h2 onMouseOver={incrementCount} style={style}>Hovered {count} times</h2>
    </div>
  );
}
