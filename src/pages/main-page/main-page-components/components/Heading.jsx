import classes from "./Heading.module.css";

export default function Heading({
  title,
  text,
  onMouseEnter,
  onMouseLeave,
  marginTop,
}) {
  return (
    <div
      className={classes.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h3 style={{ marginTop: marginTop }}> {title} </h3>
      <h2> {text} </h2>
    </div>
  );
}
