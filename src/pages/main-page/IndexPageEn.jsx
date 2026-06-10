import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UnderLineHelper from "../../components/subComponents/UnderLineHelper";
import classes from "./IndexPageEn.module.css";
import Certificates from "./main-page-components/Certificates";
import Amenities_6 from "./main-page-components/Amenities_6";
import Dining_5 from "./main-page-components/Dining_5";
import Endorsement_2 from "./main-page-components/Endorsement_2";
import Hero from "./main-page-components/Hero";
import Shuttle_7 from "./main-page-components/Shuttle_7";
import Spa_8 from "./main-page-components/Spa_8";
import Suites_4 from "./main-page-components/Suites_4";
import VirtualTour_3 from "./main-page-components/VirtualTour_3";
import { useEffect, useState } from "react";

const IndexPageEn = ({ rooms, certificates }) => {
  const [underLine, setUnderLine] = useState(null);

  useEffect(() => window.scrollTo(0, 0), []);

  // Main navigation menu items
  const links = [
    { name: "SUITES", selectable: true, id: "suites" },
    { name: "DINING", selectable: true, id: "dining" },
    { name: "SHUTTLE SERVICE", selectable: true, id: "shuttle" },
    { name: "SPA & WELLNESS", selectable: true, id: "spa" },
    { name: "CAREER", link: "/en/en/career", id: "" },
    {
      name: "ABOUT US",
      children: [
        {
          name: "SUSTAINABILITY REPORT",
          link: "/en/en/sustainable-tourism-report",
        },
        {
          name: "SUSTAINABLE MANAGEMENT SYSTEM",
          link: "/en/en/sustainable-management",
        },
        {
          name: "SUSTAINABILITY SURVEY",
          link: "/en/en/survey",
        },
        {
          name: 'SATISFACTION SURVEY',
          link: '/en/en/satisfaction-survey'
        },
        { name: "OUR POLICIES", link: "/en/en/policies" },
        { name: "CONTACT US", link: "/en/en/contact-us" },
      ],
    },
  ];

  const amenities = [
    {
      title: "TERRACE SWIMMING POOL",
      text: "Chemical-free black sea water...",
    },
    {
      title: "TURKISH BATH",
      text: "Reward Yourself...",
    },
    {
      title: "LOBBY",
      text: "A peaceful waiting place...",
    },
    {
      title: "CAFE & RESTAURANT",
      text: "Where Peace and Modernism meet...",
    },
  ];

  // endorsment_2 paragraph
  const p =
    " After a journey in touch with nature, MQ Hotel Suites provides the accommodation opportunity you deserve. Our hotel, which is only 20 minutes away from the airport and has a pool on its terrace, with the peace of nature along the way, is the most exclusive and elite hotel in its vicinity. It will be indispensable for you with its proper service and quality and spacious rooms. Our hotel, which is in a quiet and peaceful location, away from the noise of Istanbul, is waiting for you, our valued customers, ready to serve …";

  return (
    <>
      <Header links={links} logoLink="/en" underLine={underLine} main={true}/>{" "}
      <div id="home">
        {" "}
        <Hero
          heroText_h1={"MQ HOTEL SUITES"}
          heroText_h3={
            "THE COMFORT YOU DREAM OF, AWAY FROM THE NOISE OF ISTANBUL!"
          }
        />{" "}
      </div>
      <Endorsement_2 heading="MQ HOTEL SUITES" p={p} />
      <UnderLineHelper id={"suites"} setUnderLine={setUnderLine}>
        <Suites_4
          title={"SUITES"}
          text={"AN UNFORGETABLE STAY"}
          rooms={rooms}
        />
      </UnderLineHelper>{" "}
      <UnderLineHelper id={"dining"} setUnderLine={setUnderLine}>
        <Dining_5
          title={"DINING"}
          headingText={"RESTAURANT & BAR"}
          text={
            "Serving in the best balance where traditional and modern cuisines are blended together, accompanied by the magnificent view of the Black Sea, it provides an unforgettable dining experience with our always fresh products, with the aim of perfect service and hospitality. "
          }
          btnLink={"/en/dining"}
          btnText={"DISCOVER"}
        />
      </UnderLineHelper>
      <Amenities_6
        title={"WHERE MEMORIES ARE MADE"}
        text={"AN UNFORGETTABLE EXPERIENCE"}
        amenities={amenities}
      />
      <UnderLineHelper id={"shuttle"} setUnderLine={setUnderLine}>
        <Shuttle_7
          title={"AIRPORT SHUTTLE "}
          titleText={" AT MQ, COMFORT BEGINS WITH THE JOURNEY! "}
          p={
            "We care about the comfort of our valued guests even before they arrive at the hotel. For professional hospitality and safe transportation, you can already plan your transportation or return with our hotel's transfer vehicle."
          }
          btnText={"BOOK A TRANSFER"}
        />
      </UnderLineHelper>
      <UnderLineHelper id={"spa"} setUnderLine={setUnderLine}>
        <Spa_8
          title={"SPA & WELLNESS"}
          headingText="MASSAGE & STEAM ROOM"
          text={
            "After the intense pace of modern life; After a journey in touch with nature,as you take the opportunity to be our guest , it's time to give both your body and mind a break and reward yourself !  "
          }
          link={"en"}
          btnText={"DISCOVER"}
        />
      </UnderLineHelper>
      <Certificates certificates={certificates} />
      {/* <VirtualTour_3
        vTtitle={"360° TOUR"}
        vTtext={"DISCOVER MQ FROM INSIDE"}
        vTParagraph={
          "We are aware first impressions are everything, which is why MQ Hotel Suites is excited to announce the arrival of its innovative 360º Virtual Tour! We invite you to experience in detail every corner, scenery and opportunity that the hotel has to offer."
        }
      /> */}
      <Footer text={" © 2024 All rights Reserved. MQ Hotel Suites "} />
    </>
  );
};

export default IndexPageEn;
