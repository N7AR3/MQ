import classes from "./Hero.module.css";
import Video from "../../../assets/videos/hero.mp4";
import { useEffect } from "react";

const Hero = ({ heroText_h1, heroText_h3 }) => {
  useEffect(
    () =>
      // to remove play button for safari
      document.addEventListener("DOMContentLoaded", function () {
        const videoElement = document.getElementById("video");
        videoElement.controls = false;
        videoElement.addEventListener("play", function () {
          this.controls = false;
        });
        videoElement.addEventListener("pause", function () {
          this.controls = false;
        });
      }),
    []
  );
  return (
    <section className={classes.hero}>
      <section className={classes.videoContainer}>
        <div className={classes.videoBackground}>
          <video
            id="video"
            autoPlay={true}
            loop
            muted
            loading="lazy"
            controls={false}
          >
            <source src={Video} />
          </video>
        </div>
      </section>
      <div className={classes.lowerShadow}></div>
      <section className={classes.container}>
        <div className={classes.heroText}>
          <h1> {heroText_h1} </h1>
          <h3>{heroText_h3}</h3>
        </div>
      </section>
    </section>
  );
};

export default Hero;
