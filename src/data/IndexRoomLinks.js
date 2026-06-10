import standard_main from "../assets/Pictures/rooms/Standard/standard_main.jpg";
import deluxe_main from "../assets/Pictures/rooms/Deluxe/deluxe_main.jpg";
import suite_main from "../assets/Pictures/rooms/Suite/suite_main.jpg";

const indexRoomLinks = {
  tr: [
    [
      {
        name: "STANDART ODA",
        link: "/tr/suitler/standart-oda",
        src: standard_main,
      },
      { name: "DELUX ODA", link: "/tr/suitler/delux-oda", src: deluxe_main },
      { name: "SUIT ODA", link: "/tr/suitler/suit-oda", src: suite_main },
    ],
    "Daha Fazla Göster",
  ],
  en: [
    [
      {
        name: "STANDARD ROOM",
        link: "/en/en/suites/standard-room",
        src: standard_main,
      },
      {
        name: "DELUXE ROOM",
        link: "/en/en/suites/deluxe-room",
        src: deluxe_main,
      },
      { name: "SUITE ROOM", link: "/en/en/suites/suite-room", src: suite_main },
    ],
    "Learn More",
  ],
};

export default indexRoomLinks;
