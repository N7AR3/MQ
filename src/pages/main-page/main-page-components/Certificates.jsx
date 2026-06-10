import classes from "./Certificates.module.css";
import Heading from "./components/Heading";

const Certificates = ({ certificates }) => {
  return (
    <section className={classes.container}>
      <Heading marginTop={"-20px"} title={"CERTIFICATES"} />
      <div className={classes.main}>
        {certificates.map((certificate, i) => (
          <div key={i} className={classes.box}>
            <div className={classes.imgContainer}>
              <img
                className={classes.img}
                src={certificate.src}
                alt={certificate.title}
                loading="lazy"
              />
            </div>{" "}
            <p>{certificate.title} </p>{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
