import classes from "./VirtualTour_3.module.css";
import BlackWrapper from "./components/BlackWrapper";
import Heading from "./components/Heading";

const VirtualTour_3 = ({ vTtitle, vTtext, vTParagraph }) => {
  return (
    <BlackWrapper>
      {" "}
      <Heading title={vTtitle} text={vTtext} />
      <div className={classes.container}>
        <div className={classes.left}>
          <p>{vTParagraph}</p>
        </div>
        <div className={classes.right}>
          <div className={classes.circle}>
            <h3>360°</h3>
          </div>
        </div>
      </div>
    </BlackWrapper>
  );
};

export default VirtualTour_3;
