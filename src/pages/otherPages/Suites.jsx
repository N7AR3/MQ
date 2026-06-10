import classes from "./Suites.module.css";
import BlackWrapper from "../main-page/main-page-components/components/BlackWrapper";
import Heading from "../main-page/main-page-components/components/Heading";

import standard_main from "../../assets/Pictures/rooms/Standard/standard_main.jpg";
import deluxe_main from "../../assets/Pictures/rooms/Deluxe/deluxe_main.jpg";
import suite_main from "../../assets/Pictures/rooms/Suite/suite_main.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const rooms = {
  tr: {
    headTitle: "SUITLER",
    titles: [
      { name: "STANDART ODA", img: standard_main },
      { name: "DELUX ODA", img: deluxe_main },
      { name: "SUIT ODA", img: suite_main },
    ],
    text: "Her oda kategorisinde konfor ve lüks sizi bekliyor. Rahatlık ve uygun fiyat için standart odalarımızı, daha fazla alan ve zarafet için deluxe odalarımızı veya geniş yaşam alanları ve özel ayrıcalıklarla en üst düzeyde keyif için süitlerimizi seçebilirsiniz. Hangi seçimi yaparsanız yapın, her oda sizin konaklamanız boyunca konfor ve zarafetin unutulmaz bir karışımını sunmak üzere tasarlanmıştır.",
  },
  en: {
    headTitle: "SUITES",
    titles: [
      { name: "STANDARD ROOM", img: standard_main },
      { name: "DELUXE ROOM", img: deluxe_main },
      { name: "SUITE ROOM", img: suite_main },
    ],
    text: "Welcome to our hotel, where comfort and luxury await in every room category. Choose from our standard rooms for cozy affordability, deluxe rooms for added space and elegance, or suites for the ultimate indulgence with expansive living areas and exclusive perks. No matter your choice, each room is designed to provide a memorable blend of comfort and sophistication during your stay.",
  },
};
const Suites = ({ l }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <BlackWrapper margintop={"150px"}>
      <Heading marginTop={"30px"} text={rooms[l].headTitle} />
      <div className={classes.container}>
        <p> {rooms[l].text} </p>
        <section className={classes.rooms}>
          {rooms[l].titles.map((title, i) => (
            <Link key={i} to={title.name.toLowerCase().split(" ").join("-")}>
              {" "}
              <div className={classes.room}>
                <img src={title.img} alt={title} />
                <div className={classes.cover}>
                  <h3> {title.name} </h3>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </BlackWrapper>
  );
};

export default Suites;
