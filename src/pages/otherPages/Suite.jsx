import { useParams } from "react-router-dom";
import classes from "./Suite.module.css";
import { useEffect } from "react";
import ShadowWrapper from "../main-page/main-page-components/components/ShadowWrapper";
import BlackWrapper from "../main-page/main-page-components/components/BlackWrapper";
import Heading from "../main-page/main-page-components/components/Heading";
import rooms from "../../data/Rooms";
import standard_1 from "../../assets/Pictures/rooms/Standard/standard_1.jpg";
import standard_2 from "../../assets/Pictures/rooms/Standard/standard_2.jpg";
import standard_3 from "../../assets/Pictures/rooms/Standard/standard_3.jpg";
import standard_4 from "../../assets/Pictures/rooms/Standard/standard_4.jpg";
import standard_5 from "../../assets/Pictures/rooms/Standard/standard_5.jpg";
import standard_6 from "../../assets/Pictures/rooms/Standard/standard_6.jpg";
import deluxe_1 from "../../assets/Pictures/rooms/Deluxe/deluxe_1.jpg";
import deluxe_2 from "../../assets/Pictures/rooms/Deluxe/deluxe_2.jpg";
import deluxe_3 from "../../assets/Pictures/rooms/Deluxe/deluxe_3.jpg";
import deluxe_4 from "../../assets/Pictures/rooms/Deluxe/deluxe_4.jpg";
import deluxe_5 from "../../assets/Pictures/rooms/Deluxe/deluxe_6.jpg";
import suite_1 from "../../assets/Pictures/rooms/Suite/suite_1.jpg";
import suite_2 from "../../assets/Pictures/rooms/Suite/suite_2.jpg";
import suite_3 from "../../assets/Pictures/rooms/Suite/suite_3.jpg";
import suite_4 from "../../assets/Pictures/rooms/Suite/suite_4.jpg";
import suite_5 from "../../assets/Pictures/rooms/Suite/suite_5.jpg";
import suite_6 from "../../assets/Pictures/rooms/Suite/suite_6.jpg";
import suite_7 from "../../assets/Pictures/rooms/Suite/suite_7.jpg";
import standard from "../../assets/Pictures/rooms/Standard/standard_main.jpg";
import deluxe from "../../assets/Pictures/rooms/Deluxe/deluxe_main.jpg";
import suite from "../../assets/Pictures/rooms/Suite/suite_main.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const roomMainPic = {
  "standart-oda": standard,
  "standard-room": standard,
  "delux-oda": deluxe,
  "deluxe-room": deluxe,
  "suit-oda": suite,
  "suite-room": suite,
};

const Suite = () => {
  const id = useParams().id;

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <ShadowWrapper img={roomMainPic[id]}>
        <div className={classes.container}>
          <Heading text={id.toUpperCase().split("-").join(" ")} />
          <p>{rooms[id]}</p>
        </div>
      </ShadowWrapper>
      <BlackWrapper>
        <Swiper
          style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
          }}
          loop="true"
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Autoplay]}
        >
          {id === "standart-oda" || id === "standard-room" ? (
            <>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={standard_1}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={standard_2}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={standard_3}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={standard_4}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={standard_5}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={standard_6}></ShadowWrapper>
                </div>
              </SwiperSlide>
            </>
          ) : id === "delux-oda" || id === "deluxe-room" ? (
            <>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={deluxe_1}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={deluxe_2}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={deluxe_3}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={deluxe_4}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={deluxe_5}></ShadowWrapper>
                </div>
              </SwiperSlide>
            </>
          ) : id === "suit-oda" || id === "suite-room" ? (
            <>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={suite_1}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={suite_2}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={suite_3}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={suite_4}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={suite_5}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={suite_6}></ShadowWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <div className={classes.slideBox}>
                  <ShadowWrapper img={suite_7}></ShadowWrapper>
                </div>
              </SwiperSlide>
            </>
          ) : (
            ""
          )}
        </Swiper>
      </BlackWrapper>
    </>
  );
};

export default Suite;
