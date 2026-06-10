import classes from "./NavMain.module.css";
import logo from "../assets/logoes/site_logo.png";
import Button from "./subComponents/Button";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function NavMain({
  main,
  booking,
  underLine,
  lan,
  onChangeMobileNav,
  mobileNav,
  links,
  logoLink,
}) {
  const [selectedLink, setSelectedLink] = useState(null);
  const navigate = useNavigate();

  // Main page navigation (page scrolling and main anv styling)

  useEffect(() => {
    document.getElementById(selectedLink)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [selectedLink]);

  useEffect(() => {
    setSelectedLink(null);
  }, [underLine]);

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <div
          onClick={() => onChangeMobileNav((prev) => !prev)}
          className={
            mobileNav ? classes.mobileNavBtn : classes.mobileNavBtnClose
          }
        >
          <span> </span>
        </div>
        <div className={classes.logo}>
          {main ? (
            <img
              src={logo}
              alt="logo"
              onClick={() => setSelectedLink("home")}
            />
          ) : (
            <Link to={logoLink}>
              {" "}
              <img src={logo} alt="logo" />{" "}
            </Link>
          )}
        </div>
        <ul className={classes.links}>
          {links.map((link, i) => (
            <li
              key={i}
              className={` ${link.children && classes.aboutUs} ${
                selectedLink === link.id && main && classes.selectedLink
              } ${
                link.id === underLine &&
                underLine !== undefined &&
                classes.selectedLink
              }`}
              id={link.name}
              onClick={() => setSelectedLink(link?.id)}
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
        {booking ? (
          ""
        ) : (
          <Button
            height={"40px"}
            width={lan === "tr" ? "150px" : lan === "en" ? "120px" : "150px"}
            text={
              lan === "tr"
                ? "REZERVASYON YAP"
                : lan === "en"
                ? "BOOK NOW"
                : lan === "ru"
                ? "Забронируйте сейчас"
                : "REZERVASYON YAP"
            }
            fontSize={"14px"}
            action={() =>
              lan === "en"
                ? navigate("/en/booking")
                : lan === "tr"
                ? navigate("/tr/rezervasyon")
                : ""
            }
            color="#fff"
            opacity="0.8"
            position="absolute"
            right="15px"
            backgroundImage="linear-gradient(180deg, #7B0000,#AF0000,#7B0000)"
          />
        )}
      </nav>
    </div>
  );
}
