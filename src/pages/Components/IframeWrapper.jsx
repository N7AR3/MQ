import { Link, useLocation } from "react-router-dom";
import classes from "./IframeWrapper.module.css";
import MobileNav from "../../components/MobileNav";
import { useEffect, useState } from "react";
import Header from "../../components/Header";

// wraps around none origin pages to add navigation (spa, dining and reservation)

const IframeWrapper = ({ links, homeBtn, ifrmaeSrc, lan, booking }) => {
  const [mobileNav, setMobileNav] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => setMobileNav(false), [pathname]);
  const to = homeBtn === "HOME" ? "/en" : homeBtn === "ANA SAYFA" ? "/" : "/";
  const bookBtn =
    homeBtn === "HOME"
      ? "BOOK NOW"
      : homeBtn === "ANA SAYFA"
      ? "REZERVASYON YAP"
      : "REZERVASYON YAP";
  const bookTo =
    homeBtn === "HOME"
      ? "/en/booking"
      : homeBtn === "ANA SAYFA"
      ? "/tr/rezervasyon"
      : "/ru";
  return (
    <div className={classes.container}>
      <MobileNav mobileNav={mobileNav} lan={lan} />
      <Header links={links} logoLink={to} booking={booking} />

      {/* <nav className={classes.nav}>
        <div
          onClick={() => setMobileNav((prev) => !prev)}
          className={
            mobileNav ? classes.mobileNavBtn : classes.mobileNavBtnClose
          }
        >
          <span> </span>
        </div>
        <ul className={classes.links}>
          <li>
            {" "}
            <Link to={to}> {homeBtn} </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={bookTo}> {bookBtn} </Link>{" "}
          </li>
          {links.map((link, i) => (
            <li
              key={i}
              className={` ${link.children ? classes.aboutUs : {}} `}
              id={link.name}
            >
              {link.link ? (
                <Link to={link.link}> {link.name} </Link>
              ) : (
                link.name
              )}
              {link.children && (
                <div className={classes.aboutUsList}>
                  <ul>
                    {" "}
                    {link.children.map((child, i) => (
                      <li key={i}>
                        {" "}
                        {child.link ? (
                          <Link className={classes.childLink} to={child.link}>
                            {" "}
                            {child.name}{" "}
                          </Link>
                        ) : (
                          child.name
                        )}{" "}
                      </li>
                    ))}{" "}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav> */}
      <iframe className={classes.iframe} src={ifrmaeSrc}></iframe>
    </div>
  );
};

export default IframeWrapper;
