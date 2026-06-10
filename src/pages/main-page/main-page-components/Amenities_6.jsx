import { useState } from "react";
import classes from "./Amenities_6.module.css";
import BlackWrapper from "./components/BlackWrapper";
import Heading from "./components/Heading";
import swimming_pool from "../../../assets/Pictures/hotel/swimming_pool.jpg";
import spa from "../../../assets/Pictures/hotel/spa.jpg";
import lobi from "../../../assets/Pictures/hotel/lobi.jpg";
import live_music from "../../../assets/Pictures/hotel/live_music.jpg";

const rooms = [swimming_pool, spa, lobi, live_music];

export default function Amenities_6({ title, text, amenities }) {
  const [selected, setSelected] = useState(0);
  return (
    <BlackWrapper>
      {" "}
      <Heading title={title} text={text} />
      <div className={classes.container}>
        <section className={classes.box}>
          <div className={classes.imgContainer}>
            <img src={rooms[selected]} alt="rooms" loading="lazy" />
          </div>
          <div className={classes.selectors}>
            {amenities.map((amenity, i) => (
              <div
                key={i}
                onClick={() => setSelected(i)}
                className={` ${classes.textBox} ${
                  selected === i ? classes.selected : classes.selector
                } ${selected === i ? classes.border : ""}`}
              >
                <h3> {amenity.title} </h3>
                <p>{amenity.text}</p>
                <div
                  className={
                    selected === i
                      ? classes.imgContainerMobile
                      : classes.imgContainerMobileClose
                  }
                >
                  <img src={rooms[selected]} alt="rooms" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>{" "}
    </BlackWrapper>
  );
}
