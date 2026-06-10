import classes from "./BlackWrapper.module.css";

export default function BlackRapper({ children, overFlow }) {
  return (
    <div style={{ overflow: overFlow }} className={classes.container}>
      {children}
    </div>
  );
}
