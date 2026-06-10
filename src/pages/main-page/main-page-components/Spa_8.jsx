import { useNavigate } from "react-router-dom";
import Button from "../../../components/subComponents/Button";
import Heading from "./components/Heading";
import ShadowWrapper from "./components/ShadowWrapper";
import spa_main from "../../../assets/Pictures/spa/spa_main.jpg";
import classes from "./Spa_8.module.css";

export default function Spa_8({ title, headingText, text, link, btnText }) {
  const navigate = useNavigate();
  return (
    <ShadowWrapper img={spa_main}>
      {" "}
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
          action={() => navigate(`/${link}/spa`)}
        />
      </div>{" "}
    </ShadowWrapper>
  );
}
