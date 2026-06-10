import { useContext, useEffect, useState } from "react";
import TR from "../assets/logoes/tr.png";
import EN from "../assets/logoes/en.png";
import RU from "../assets/logoes/ru.png";
import classes from "./LanSelect.module.css";
import languageContext from "../contexts/languageContext";
import { Link } from "react-router-dom";

const LanSelect = ({ listDirection }) => {
  const [lanSelect, setLanSelect] = useState(false);
  const { lan, setLan } = useContext(languageContext);

  const style = lanSelect ? { transform: "rotate(0deg)", top: "3px" } : {};

  const listStyle =
    lanSelect && listDirection === "down"
      ? classes.lanListDown
      : lanSelect && listDirection === "up"
      ? classes.lanListUp
      : classes.lanListDownHidden;

  useEffect(() => setLanSelect(false), [lan]);
  return (
    <div
      className={classes.lanSelect}
      onClick={() => setLanSelect((prev) => !prev)}
    >
      <img
        src={lan === "tr" ? TR : lan === "en" ? EN : lan === "ru" ? RU : TR}
        alt=""
      />
      <span className={classes.lanSpan} style={style}>
        ^
      </span>
      <div className={`${classes.lanList} ${listStyle}`}>
        <ul>
          {lan !== "tr" && (
            <Link to="/">
              <li
                onClick={() => {
                  setLan("tr");
                }}
              >
                {" "}
                <img src={TR} alt="" />{" "}
              </li>
            </Link>
          )}
          {lan !== "en" && (
            <Link to="/en">
              <li
                onClick={() => {
                  setLan("en");
                }}
              >
                {" "}
                <img src={EN} alt="" />{" "}
              </li>
            </Link>
          )}
          {/* {lan !== "ru" && (
            <Link to="/ru">
              <li
                onClick={() => {
                  setLan("ru");
                }}
              >
                {" "}
                <img src={RU} alt="" />{" "}
              </li>
            </Link>
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default LanSelect;
