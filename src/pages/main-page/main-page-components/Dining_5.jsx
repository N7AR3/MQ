import { useNavigate } from "react-router-dom";
import Button from "../../../components/subComponents/Button";
import classes from "./Dining_5.module.css";
import Heading from "./components/Heading";
import ShadowWrapper from "./components/ShadowWrapper";
import restaurant_main from "../../../assets/Pictures/restaurant/restaurant_main.jpg";

const Dining_5 = ({ title, headingText, text, btnLink, btnText }) => {
  const navigate = useNavigate();
  return (
    <ShadowWrapper img={restaurant_main}>
      <>
        <Heading title={title} text={headingText} />

        <div className={classes.container}>
          <p> {text} </p>
          <Button
            text={btnText}
            position={"absolute"}
            color="#fff"
            backgroundImage="linear-gradient(180deg, #7B0000,#AF0000,#7B0000)"
            width={"120px"}
            height={"40px"}
            fontSize="16px"
            top="80vh"
            left="calc(50% - 60px)"
            action={() => navigate(btnLink)}
          />
        </div>
      </>
    </ShadowWrapper>
  );
};

export default Dining_5;
