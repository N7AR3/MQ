import { useEffect, useState } from "react";
import LanSelect from "./LanSelect";
import img from "../assets/logoes/up.png";
import classes from "./MobileNav.module.css";
import { Link } from "react-router-dom";

const MobileNav = ({ mobileNav, lan }) => {
  const [subMenu, setSubMenu] = useState(false);

  const style = subMenu ? { transform: subMenu && "rotate(0deg)" } : {};

  useEffect(() => {
    subMenu && document.getElementById("l").scrollIntoView();
  }, [subMenu]);
  if (lan === "en") {
    return (
      <div className={mobileNav ? classes.containerOpen : classes.container}>
        <div className={classes.navMimik}></div>
        <div>
          <ul className={classes.links}>
            <li>
              {" "}
              <Link to="/en/en/suites"> SUITES </Link>{" "}
            </li>
            <li>
              <Link to="/en/dining"> DINING </Link>
            </li>
            <li>
              <Link to="/en/en/shuttle-service"> SHUTTLE SERVICE </Link>
            </li>
            <li>
              {" "}
              <Link to="/en/spa"> SPA & WELLNESS </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/en/en/career"> CAREER </Link>{" "}
            </li>
            <li>
              <div onClick={() => setSubMenu((prev) => !prev)}>
                <p className={classes.btnOwner}>
                  ABOUT US
                  <span style={style} className={classes.btn}>
                    {" "}
                    <img src={img} alt="" />{" "}
                  </span>
                </p>
              </div>
              <ul className={subMenu ? classes.subMenu : classes.subMenuClose}>
                <li>
                  {" "}
                  <Link to="/en/en/sustainable-tourism-report">
                    {" "}
                    SUSTAINABILITY REPORT{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/en/en/sustainable-management">
                    {" "}
                    SUSTAINABLE MANAGEMENT SYSTEM{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/en/en/survey"> SUSTAINABILITY SURVEY </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/en/en/satisfaction-survey"> SATISFACTION SURVEY</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/en/en/policies"> OUR POLICIES </Link>{" "}
                </li>
                <li id="l">
                  {" "}
                  <Link to="/en/en/contact-us"> CONTACT US </Link>{" "}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={classes.footerMimik}></div>
        <div className={classes.bottom}>
          {/* <div className={classes.bottomBtns}>
            {" "}
            <span> Take a Tour </span>
          </div> */}
          <div className={classes.lan}>
            <LanSelect listDirection="up" />
          </div>
        </div>
      </div>
    );
  } else if (lan === "tr") {
    return (
      <div className={mobileNav ? classes.containerOpen : classes.container}>
        <div className={classes.navMimik}></div>
        <div>
          <ul className={classes.links}>
            <li>
              {" "}
              <Link to="/tr/suitler"> SUITLER </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/tr/restoran"> RESTORAN </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/tr/transfer"> SHUTTLE SERVİS </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/tr/spa"> SPA & WELLNESS </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/tr/kariyer"> KARİYER </Link>{" "}
            </li>
            <li>
              <div onClick={() => setSubMenu((prev) => !prev)}>
                <p className={classes.btnOwner}>
                  HAKKIMIZDA
                  <span style={style} className={classes.btn}>
                    {" "}
                    <img src={img} alt="" />{" "}
                  </span>
                </p>
              </div>
              <ul className={subMenu ? classes.subMenu : classes.subMenuClose}>
                <li>
                  {" "}
                  <Link to="/tr/surdurebilirlik-raporu">
                    {" "}
                    SÜRDÜREBİLİRLİK RAPORU{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/tr/surdurebilir-yonetim-sistemi">
                    {" "}
                    SÜRDÜREBİLİR YÖNETİM SİSTEMİ{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/tr/anket"> SÜRDÜREBİLİRLİK ANKETi </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/tr/memnuniyet-anketi"> MÜŞTERİ MEMNUNİYETİ ANKETİ </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/tr/politikalarimiz"> POLİTİKALARIMIZ </Link>{" "}
                </li>
                <li id="l">
                  {" "}
                  <Link to="/tr/iletisim"> İLETİŞİM </Link>{" "}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={classes.footerMimik}></div>
        <div className={classes.bottom}>
          {/* <div className={classes.bottomBtns}>
            {" "}
            <span> "Bir Tur At"</span>
          </div> */}
          <div className={classes.lan}>
            <LanSelect listDirection="up" />
          </div>
        </div>
      </div>
    );
  }
};

export default MobileNav;
