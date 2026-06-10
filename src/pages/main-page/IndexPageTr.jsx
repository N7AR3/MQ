import { useEffect, useState } from "react";
import Header from "../../components/Header";
import classes from "./IndexPageEn.module.css";
import Amenities_6 from "./main-page-components/Amenities_6";
import Dining_5 from "./main-page-components/Dining_5";
import Endorsement_2 from "./main-page-components/Endorsement_2";
import Hero from "./main-page-components/Hero";
import Shuttle_7 from "./main-page-components/Shuttle_7";
import Spa_8 from "./main-page-components/Spa_8";
import Suites_4 from "./main-page-components/Suites_4";
import VirtualTour_3 from "./main-page-components/VirtualTour_3";
import UnderLineHelper from "../../components/subComponents/UnderLineHelper";
import Footer from "../../components/Footer";
import Certificates from "./main-page-components/Certificates";


const IndexPageTr = ({ lan, rooms, certificates }) => {
  const [underLine, setUnderLine] = useState(null);

  useEffect(() => window.scrollTo(0, 0), []);

  const links = [
    { name: "SUITLER", selectable: true, id: "suitler" },
    { name: "RESTORAN", selectable: true, id: "restoran" },
    { name: "SHUTTLE SERVIS", selectable: true, id: "shuttle" },
    { name: "SPA & WELLNESS", selectable: true, id: "spa" },
    { name: "KARİYER", link: "/tr/kariyer", id: "" },
    {
      name: "HAKKIMIZDA",
      children: [
        {
          name: " SÜRDÜREBİLİRLİK RAPORU",
          link: "/tr/surdurebilirlik-raporu",
        },
        {
          name: " SÜRDÜREBİLİR YÖNETİM SİSTEMİ",
          link: "/tr/surdurebilir-yonetim-sistemi",
        },
        {
          name: "SÜRDÜREBİLİRLİK ANKETİ",
          link: "/tr/anket",
        },
        {
          name : "MÜŞTERİ MEMNUNİYETİ ANKETİ",
          link : "/tr/memnuniyet-anketi"
        },
        { name: "POLİTİKALARIMIZ", link: "/tr/politikalarimiz" },
        { name: "İLETİŞİM", link: "/tr/iletisim" },
      ],
    },
  ];

  const amenities = [
    {
      title: "TERAS HAVUZ",
      text: "Kimyasalsiz karadeniz suyu ...",
    },
    {
      title: "TÜRK HAMAMI",
      text: "Kendinizi Ödüllendirin ...",
    },
    {
      title: "LOBİ",
      text: "Huzurlu bir bekleme yeri ...",
    },
    {
      title: "CAFE & RESTAURANT",
      text: "Huzur ve Modernin birleştiği yerde ...",
    },
  ];

  // endorsment_2 paragraph
  const p =
    " Doğa ile iç içe, bir yolculuğun ardından, konaklama fırsatıyla Mq Hotel Suites tam size göre Havaalanına sadece 20 dakika mesafede olup, yol boyunca doğanın vermiş olduğu huzuru ile terasında havuz olan otelimiz, konumunun en seçkin ve en elit otelidir. Düzgün hizmet ve kaliteli,ferah odalarıyla, sizlerin vazgeçilmezi olacak. İstanbulun gürültüsünden uzak sessiz ve sakin bir konumda olan otelimiz, hizmete hazır şeklinde siz değerli müşterilerimizi  bekliyor…";

  return (
    <>
      <Header links={links} logoLink="/" underLine={underLine} main={true}  />{" "}
      <div id="home">
        {" "}
        <Hero
          heroText_h1={"MQ HOTEL SUITES"}
          heroText_h3={"İstanbulun gürültüsünden uzak, hayal ettiğiniz konfor!".toUpperCase()}
        />{" "}
      </div>
      <Endorsement_2 heading="MQ HOTEL SUITES" p={p} />
      <UnderLineHelper id={"suitler"} setUnderLine={setUnderLine}>
        <Suites_4
          title={"SUITLER"}
          text={"UNUTULMAZ BİR KONAKLAMA"}
          lan={lan}
          rooms={rooms}
        />
      </UnderLineHelper>{" "}
      <UnderLineHelper id={"restoran"} setUnderLine={setUnderLine}>
        <Dining_5
          title={"YİYECEK VE İÇECEK"}
          headingText={"RESTORAN & BAR"}
          text={
            "Karadenizin muhteşem manzarası eşliğinde geleneksel ve modern mutfak kültürün beraber harmanlandığı en güzel dengede servis veren, kusursuz hizmet ve misafirperverlik hedefiyle her zaman taze ürünlerimiz ile birlikte unutulmaz bir yemek deneyimine eşlik ediyor.  "
          }
          btnLink={"/tr/restoran"}
          btnText={"KEŞFET"}
        />
      </UnderLineHelper>
      <Amenities_6
        title={"HATIRALARIN YAPILDIĞI YER"}
        text={"UNUTULMAZ BİR DENEYİM"}
        amenities={amenities}
      />
      <UnderLineHelper id={"shuttle"} setUnderLine={setUnderLine}>
        <Shuttle_7
          title={"Pick-up Service (Transfer) "}
          titleText={" MQ'DA KONFOR YOLCULUKTA DA BAŞLAR! "}
          p={
            "Siz değerli misafirlerimizin konforunu otele gelmeden önce de önemsiyoruz. Profesyonel misafirperverlik ve güvenli ulaşımınız için otelimize ait transfer aracımız ile ulaşımınızı veya dönüşünüzü şimdiden planlayabilirsiniz."
          }
          btnText={"REZERVASYON YAP"}
        />
      </UnderLineHelper>
      <UnderLineHelper id={"spa"} setUnderLine={setUnderLine}>
        <Spa_8
          title={"SPA & WELLNESS"}
          headingText=" MASAJ VE BUHAR ODASI "
          text={
            "Modern yaşamın getirdiği yoğun temponun ardından; Doğa ile iç içe, bir yolculuğun sonrasında, konaklama fırsatıyla beraber hem vücudunuzun hem de zihninize bir mola verip kendinizi ödüllendirmenin vakti geldi!"
          }
          link={"tr"}
          btnText={"KEŞFET"}
        />
      </UnderLineHelper>
      <Certificates certificates={certificates} />
      {/* <VirtualTour_3
        vTtitle={"360° TUR"}
        vTtext={"MQ'yu İÇERİDEN KEŞFEDİN"}
        vTParagraph={
          "İlk izlenimin her şey demek olduğunun bilincindeyiz, bu nedenle MQ Hotel Suites yenilikçi 360° Sanal Turunun gelişini duyurmaktan heyecan duyuyor! Sizi otelin sunduğu her köşeyi, manzarayı ve fırsatı detaylı olarak deneyimlemeye davet ediyoruz."
        }
      /> */}
      <Footer text={" © 2024 Tüm Hakları Saklıdır. MQ Hotel Suites "} />
    </>
  );
};

export default IndexPageTr;
