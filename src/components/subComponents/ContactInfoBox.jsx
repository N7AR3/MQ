import classes from "./ContactInfoBox.module.css";

const ContactInfoBox = ({ icon, texts, fontSize, width }) => {
  const style = {
    fontSize,
    width,
  };
  return (
    <div className={classes.container} style={style}>
      {" "}
      <div className={classes.left}>
        <img src={icon} alt="contact info" />
      </div>
      <div className={classes.right}>
        <ul>
          {texts?.map((text, i) => (
            <li key={i}> {text} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfoBox;
