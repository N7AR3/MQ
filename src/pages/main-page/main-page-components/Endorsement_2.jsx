import classes from "./Endorsement_2.module.css";
import BlackWrapper from "./components/BlackWrapper";
import enterance_2 from "../../../assets/Pictures/hotel/enterance_2.jpg";

export default function Endorsement_2({ heading, p }) {
  return (
    <BlackWrapper>
      <div className={classes.container}>
        <div className={classes.img}>
          <img
            src={enterance_2}
            alt="MQ Hotel Suites Enterence"
            loading="lazy"
          />
        </div>
        <h2 className={classes.h2}> {heading} </h2>
        <p className={classes.p}> {p}</p>
      </div>
    </BlackWrapper>
  );
}
