import Header from "../../components/Header";
import classes from "./ContactUs.module.css";
import linksContext from "../../data/Links";
import location from "../../assets/logoes/icons/Location.png";
import phone from "../../assets/logoes/icons/Phone.png";
import email from "../../assets/logoes/icons/Mail.png";
import whatsapp from "../../assets/logoes/icons/Whatsapp.png";
import facebook from "../../assets/logoes/icons/Facebook.png";
import instagram from "../../assets/logoes/icons/Instagram.png";
import ShadowWrapper from "../../pages/main-page/main-page-components/components/ShadowWrapper";
import ContactInfoBox from "../../components/subComponents/ContactInfoBox";
import hero from "../../assets/Pictures/hotel/enterance_3.jpg";
import { Link } from "react-router-dom";

const ContactUs = ({ lan }) => {
  const links = linksContext[lan.toUpperCase()];
  return (
    <ShadowWrapper img={hero}>
      <Header links={links} logoLink={lan === "tr" ? "/" : `/${lan}`} />
      <section className={classes.container}>
        <div className={classes.left}>
          <ContactInfoBox
            fontSize={"14px"}
            width={"270px"}
            icon={location}
            texts={[
              "Karaburun Mah. Sahil Cad.",
              "No:46/1 Arnavutköy / İstanbul",
            ]}
          />
          <ContactInfoBox
            fontSize={"14px"}
            width={"270px"}
            icon={phone}
            texts={["0212 762 20 47", "0533 156 43 47"]}
          />
          <ContactInfoBox
            fontSize={"12px"}
            width={"270px"}
            icon={email}
            texts={[
              "reception@mqhotelsuites.com",
              "reservation@mqhotelsuites.com",
            ]}
          />
          <section className={classes.social}>
            <Link to="https://wa.me/905331564347" target="_blank">
              {" "}
              <div className={classes.imgContainer}>
                <img src={whatsapp} alt="" />
              </div>{" "}
            </Link>
            <Link
              to="https://www.facebook.com/MQ-HOTEL-SUITS-102824858897809"
              target="_blank"
            >
              {" "}
              <div className={classes.imgContainer}>
                <img src={facebook} alt="" />
              </div>{" "}
            </Link>
            <Link to="https://www.instagram.com/mqhotelsuites/" target="_blank">
              {" "}
              <div className={classes.imgContainer}>
                <img src={instagram} alt="" />
              </div>{" "}
            </Link>
          </section>
        </div>
        <div className={classes.right}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5820.6822730054355!2d28.69185491999591!3d41.33886365717624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a0038b23e635f1%3A0x4bb7d0d0b3c72e13!2sMQ%20Hotel%20Suites!5e0!3m2!1sen!2str!4v1679579746124!5m2!1sen!2str"
            className={classes.googleMap}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </ShadowWrapper>
  );
};

export default ContactUs;
