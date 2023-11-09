export default function HoverCounter({
  count,
  incrementCount,
  theme,
  switchTheme,
}) {
  const style =
    theme === "dark"
      ? {
          backgroundColor: "#000",
          color: "#fff",
          padding: "15px 20px",
          borderRadius: "5px",
        }
      : null;
  const button =
    theme === "light"
      ? {
          backgroundColor: "#fff",
          color: "#000",
          padding: "15px 20px",
          borderRadius: "5px",
        }
      : {
          backgroundColor: "#000",
          color: "#fff",
          padding: "15px 20px",
          borderRadius: "5px",
        };

  // console.log("Hover Counter Rendered");
  return (
    <div>
      <h2 onMouseOver={incrementCount} style={style}>
        Hovered {count} times
      </h2>
      <button onClick={switchTheme} type="button" style={button}>
        Change Theme
      </button>
    </div>
  );
}
