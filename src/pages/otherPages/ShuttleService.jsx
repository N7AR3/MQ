import { useEffect } from "react";
import Shuttle_7 from "../main-page/main-page-components/Shuttle_7";

const ShuttleService = ({ lan }) => {
  useEffect(() => window.scrollTo(0, 0));
  if (lan === "tr") {
    return (
      <Shuttle_7
        marginTop={"50px"}
        titleText={" MQ'DA KONFOR YOLCULUKTA DA BAŞLAR! "}
        p={
          "Siz değerli misafirlerimizin konforunu otele gelmeden önce de önemsiyoruz. Profesyonel misafirperverlik ve güvenli ulaşımınız için otelimize ait transfer aracımız ile ulaşımınızı veya dönüşünüzü şimdiden planlayabilirsiniz."
        }
        btnText={"REZERVASYON YAP"}
      />
    );
  } else if (lan === "en") {
    return (
      <Shuttle_7
        marginTop={"50px"}
        titleText={" AT MQ, COMFORT BEGINS WITH THE JOURNEY! "}
        p={
          "We care about the comfort of our valued guests even before they arrive at the hotel. For professional hospitality and safe transportation, you can already plan your transportation or return with our hotel's transfer vehicle."
        }
        btnText={"BOOK A TRANSFER"}
      />
    );
  }
};

export default ShuttleService;
