import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import ContactInfoBox from "./subComponents/ContactInfoBox";
import location from "../assets/logoes/icons/Location.png";
import phone from "../assets/logoes/icons/Phone.png";
import email from "../assets/logoes/icons/Mail.png";
import whatsapp from "../assets/logoes/icons/Whatsapp.png";
import facebook from "../assets/logoes/icons/Facebook.png";
import instagram from "../assets/logoes/icons/Instagram.png";

const Footer = ({ text }) => {
  return (
    <>
      <div className={classes.container}>
        {" "}
        <section className={classes.footer}>
          <div className={classes.box}>
            <div className={classes.left}>
              <ContactInfoBox
                icon={location}
                texts={[
                  "Karaburun Mah. Sahil Cad.",
                  "No:46/1 Arnavutköy / İstanbul",
                ]}
              />
              <ContactInfoBox
                icon={phone}
                texts={["0212 762 20 47", "0533 156 43 47"]}
              />
            </div>{" "}
          </div>
          <div className={classes.box}>
            <div className={classes.left}>
              <ContactInfoBox
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
                <Link
                  to="https://www.instagram.com/mqhotelsuites/"
                  target="_blank"
                >
                  {" "}
                  <div className={classes.imgContainer}>
                    <img src={instagram} alt="" />
                  </div>{" "}
                </Link>
              </section>
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5820.6822730054355!2d28.69185491999591!3d41.33886365717624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a0038b23e635f1%3A0x4bb7d0d0b3c72e13!2sMQ%20Hotel%20Suites!5e0!3m2!1sen!2str!4v1679579746124!5m2!1sen!2str"
                className={classes.googleMap}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.copyright}>{text}</div>
    </>
  );
};

export default Footer;
