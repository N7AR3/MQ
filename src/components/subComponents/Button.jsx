import classes from "./Button.module.css";

const Button = ({
  padding = 0,
  margin = 0,
  height,
  width,
  color = "#000",
  backgroundImage = "#fff",
  position,
  left,
  right,
  top,
  bottom,
  text,
  fontSize = "16px",
  mouseEnter,
  mouseLeave,
  zIndex,
  action = () => console.log("action not assigned"),
}) => {
  return (
    <button
      className={classes.btn}
      onClick={action}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      style={{
        zIndex,
        padding,
        height,
        width,
        color,
        backgroundImage,
        fontSize,
        top,
        bottom,
        border: "none",
        margin,
        position,
        left,
        right,
      }}
    >
      {" "}
      {text}{" "}
    </button>
  );
};

export default Button;
