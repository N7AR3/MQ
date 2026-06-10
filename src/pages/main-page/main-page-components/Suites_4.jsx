import classes from "./Suites_4.module.css";
import BlackWrapper from "./components/BlackWrapper";
import Heading from "./components/Heading";
import { useEffect, useState } from "react";

// Swiper imports
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Suites_4 = ({ title, text, rooms }) => {
  let [navigationBtns, setNavigationBtns] = useState(true);

  useEffect(() => {
    window.innerWidth < 800 && setNavigationBtns(false);
  }, []);

  // useEffect(() => console.log(rooms));
  return (
    <BlackWrapper>
      {" "}
      <Heading title={title} text={text} />
      <div className={classes.container}>
        {" "}
        <Swiper
          effect="coverflow"
          loop="true"
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          spaceBetween={10}
          navigation={navigationBtns}
          modules={[Navigation, EffectCoverflow, Autoplay]}
        >
          {rooms[0].map((slide, i) => (
            <SwiperSlide key={i}>
              {" "}
              <div className={classes.swiperBox}>
                {" "}
                <img src={slide.src} alt={slide.name} loading="lazy" />
                <div className={classes.cover}>
                  {" "}
                  <div className={classes.cover}>
                    <div className={classes.textBox}>
                      <h3> {slide.name} </h3>
                      <Link to={slide.link}> {rooms[1]} </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>{" "}
      </div>{" "}
    </BlackWrapper>
  );
};

export default Suites_4;
