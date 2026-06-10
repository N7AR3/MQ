import classes from "./ShadowWrapper.module.css";

export default function ShadowWrapper({ children, img }) {
  return (
    <section className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={img} alt="dining" loading="lazy" />
      </div>
      <div className={classes.upperShadow}></div>
      <div className={classes.div}>{children}</div>
      <div className={classes.lowerShadow}></div>
    </section>
  );
}
