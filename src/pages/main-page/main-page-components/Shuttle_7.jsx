import BlackWrapper from "./components/BlackWrapper";
import Button from "../../../components/subComponents/Button";
import Heading from "../../main-page/main-page-components/components/Heading";
import classes from "./Shuttle_7.module.css";
import car from "../../../assets/Pictures/car/car.jpg";
import lights from "../../../assets/Pictures/car/lights_on.png";
import car_start from "../../../assets/sound/car_start.mp3";
import "./Shuttle_7.css";
import { useState, useEffect } from "react";

const carStart = new Audio(car_start);

export default function Shuttle_7({ title, titleText, p, btnText, marginTop }) {
  const [blackCover, setBlackCover] = useState(false);
  const [headLights, setHeadLights] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleNavigate = () => {
    setTimeout(() => {
      setSelected(false);
      if (navigator.userAgent.indexOf("Chrome") != -1) {
        window.open("https://wa.me/905331564347", "_blank");
      } else {
        window.location.href = "https://wa.me/905331564347";
      }
    }, 4000);
  };

  return (
    <BlackWrapper>
      <Heading
        marginTop={marginTop}
        onMouseEnter={() => setBlackCover(true)}
        onMouseLeave={() => setBlackCover(false)}
        title={title}
        text={titleText}
      />
      <p
        className={classes.p}
        onMouseLeave={() => setBlackCover(false)}
        onMouseEnter={() => setBlackCover(true)}
      >
        {p}
      </p>
      <section className={classes.container}>
        <Button
          action={() => {
            carStart.volume = 0.3;
            carStart.play();
            handleNavigate();
            setSelected(true);
          }}
          text={btnText}
          position={"absolute"}
          top={"80vh"}
          left={"calc(50% - 90px)"}
          mouseEnter={() => {
            setHeadLights(true);
            setBlackCover(true);
          }}
          mouseLeave={() => setHeadLights(false)}
          zIndex={"90"}
          color="#fff"
          backgroundImage="linear-gradient(180deg, #7B0000,#AF0000,#7B0000)"
          width={"180px"}
          height={"40px"}
          fontSize="16px"
        />
      </section>
      <section
        className={`${classes.imgContainer} ${
          blackCover ? "black-cover" : "head-lights-out"
        }`}
      >
        <img className={classes.img} src={car} alt="car" loading="lazy" />

        <div className={`${classes.blackCover}`}></div>
        <img
          className={`${classes.img} ${`${classes.lights} ${
            headLights ? "head-lights" : ""
          }`} ${selected ? "head-lights" : ""} `}
          src={lights}
          alt="head-light"
          loading="lazy"
        />
        {/* <img
          className={`${classes.img} ${
            signal === "right" ? "lights-on" : classes.lights
          }`}
          src={signalRight}
          alt=""
        />
        <img
          className={`${classes.img} ${
            signal === "left" ? "lights-on" : classes.lights
          }`}
          src={signalLeft}
          alt=""
        /> */}
        <div
          className={classes.movementBoxs}
          onMouseEnter={() => setBlackCover(true)}
          onMouseLeave={() => setBlackCover(false)}
        >
          {/* <div
            className={classes.movementBox}
            onMouseEnter={() => setSignal("left")}
            onMouseLeave={() => setSignal(null)}
          >
            {" "}
          </div>
          <div
            className={classes.movementBox}
            onMouseEnter={() => setSignal("right")}
            onMouseLeave={() => setSignal(null)}
          ></div> */}
        </div>
      </section>
    </BlackWrapper>
  );
}
